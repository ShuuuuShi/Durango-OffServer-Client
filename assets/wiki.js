// Durango OffServer wiki — ธีม · เมนูมือถือ · จำภาษา · ค้นหาฝั่ง browser (ไม่มี dependency)
(function () {
  "use strict";
  var body = document.body;
  var root = body.getAttribute("data-root") || "./";
  var lang = body.getAttribute("data-lang") || "th";
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }

  // ----- ธีม -----
  var themeBtn = document.querySelector(".theme-btn");
  if (themeBtn) themeBtn.addEventListener("click", function () {
    var cur = document.documentElement.getAttribute("data-theme");
    if (!cur) cur = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    var next = cur === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    store("wiki-theme", next);
  });

  // ----- ภาษา: จำตัวที่เลือก -----
  store("wiki-lang", lang);
  document.querySelectorAll("a.lang[data-lang]").forEach(function (a) {
    a.addEventListener("click", function () { store("wiki-lang", a.getAttribute("data-lang")); });
  });

  // ----- เมนูมือถือ -----
  var menuBtn = document.querySelector(".menu-btn");
  function setNav(open) {
    body.classList.toggle("nav-open", open);
    if (menuBtn) menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  }
  if (menuBtn) menuBtn.addEventListener("click", function () { setNav(!body.classList.contains("nav-open")); });
  document.addEventListener("click", function (e) {
    if (body.classList.contains("nav-open") && !e.target.closest(".sidebar") && !e.target.closest(".menu-btn")) setNav(false);
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setNav(false); });

  // ----- ค้นหา -----
  var input = document.getElementById("search-input");
  var list = document.getElementById("search-results");
  if (!input || !list) return;
  var index = null, loading = null, active = -1;

  function load() {
    if (index || loading) return loading;
    loading = fetch(root + "assets/search-" + lang + ".json")
      .then(function (r) { return r.json(); })
      .then(function (j) { index = j; return j; })
      .catch(function () { index = []; });
    return loading;
  }
  function norm(s) { return String(s || "").toLowerCase(); }
  function escHtml(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function mark(text, terms) {
    var out = escHtml(text);
    terms.forEach(function (t) {
      if (!t) return;
      var re = new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
      out = out.replace(re, function (m) { return "<mark>" + m + "</mark>"; });
    });
    return out;
  }
  function snippet(text, term) {
    var i = norm(text).indexOf(term);
    if (i < 0) return text.slice(0, 110);
    var s = Math.max(0, i - 40);
    return (s > 0 ? "…" : "") + text.slice(s, s + 120) + (s + 120 < text.length ? "…" : "");
  }
  function search(q) {
    var terms = norm(q).split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    var res = [];
    index.forEach(function (p) {
      var pageText = norm(p.t + " " + p.d + " " + p.c);
      p.sec.forEach(function (s) {
        var hay = norm(s.h + " " + s.x);
        var all = pageText + " " + hay;
        if (!terms.every(function (t) { return all.indexOf(t) >= 0; })) return;
        var score = 0;
        terms.forEach(function (t) {
          if (norm(p.t).indexOf(t) >= 0) score += 12;
          if (norm(s.h).indexOf(t) >= 0) score += 6;
          if (norm(p.d).indexOf(t) >= 0) score += 3;
          if (norm(s.x).indexOf(t) >= 0) score += 1;
        });
        if (!s.h) score += 2; // ส่วนต้นหน้า
        res.push({ p: p, s: s, score: score, terms: terms });
      });
    });
    res.sort(function (a, b) { return b.score - a.score; });
    // ไม่เกิน 2 ผลต่อหน้า
    var seen = {}, out = [];
    res.forEach(function (r) {
      seen[r.p.s] = (seen[r.p.s] || 0) + 1;
      if (seen[r.p.s] <= 2 && out.length < 12) out.push(r);
    });
    return out;
  }
  function render(q) {
    var rs = search(q);
    active = -1;
    if (!rs.length) {
      list.innerHTML = '<li class="r-none">' + escHtml(input.getAttribute("data-none")) + "</li>";
    } else {
      list.innerHTML = rs.map(function (r) {
        var href = root + lang + "/" + r.p.s + ".html" + (r.s.i ? "#" + encodeURIComponent(r.s.i) : "");
        var where = r.p.c + (r.s.h ? " › " + r.s.h : "");
        var text = r.s.x || r.p.d;
        return '<li><a href="' + href + '"><span class="r-title">' + mark(r.p.t, r.terms) + "</span> " +
          '<span class="r-where">' + mark(where, r.terms) + "</span>" +
          '<span class="r-snip">' + mark(snippet(text, r.terms[0]), r.terms) + "</span></a></li>";
      }).join("");
    }
    list.hidden = false;
  }
  var timer;
  input.addEventListener("focus", load);
  input.addEventListener("input", function () {
    clearTimeout(timer);
    var q = input.value.trim();
    if (!q) { list.hidden = true; return; }
    timer = setTimeout(function () { load().then(function () { render(q); }); }, 80);
  });
  input.addEventListener("keydown", function (e) {
    var items = list.querySelectorAll("a");
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      if (!items.length) return;
      e.preventDefault();
      active = (active + (e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length;
      items.forEach(function (a, k) { a.classList.toggle("active", k === active); });
      items[active].scrollIntoView({ block: "nearest" });
    } else if (e.key === "Enter") {
      var a = items[active >= 0 ? active : 0];
      if (a) { e.preventDefault(); location.href = a.href; }
    } else if (e.key === "Escape") {
      list.hidden = true; input.blur();
    }
  });
  document.addEventListener("click", function (e) { if (!e.target.closest(".search")) list.hidden = true; });
  document.addEventListener("keydown", function (e) {
    if (e.key === "/" && document.activeElement !== input && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) {
      e.preventDefault(); input.focus();
    }
  });
})();
