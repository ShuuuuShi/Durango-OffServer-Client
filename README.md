🇹🇭 [ไทย](#durango-offserver--ตัวเกมสำหรับผู้เล่น) · 🇬🇧 [English](#durango-offserver--game-client-english) · 🇮🇩 [Bahasa Indonesia](#durango-offserver--client-game-bahasa-indonesia)

# Durango OffServer — ตัวเกมสำหรับผู้เล่น

repo นี้มีแต่ **[Releases](../../releases/latest)** — ตัวเกม Durango: Wild Lands (PC) ที่ปรับให้ต่อเซิร์ฟ Durango OffServer + launcher

## เริ่มเล่น
1. โหลด `Durango-OffServer-Client-v<เวอร์ชัน>.zip` จาก [release ล่าสุด](../../releases/latest)
2. แตก zip ไว้ที่ไหนก็ได้ (ไม่ต้องอยู่ใน Program Files)
3. เปิด `DurangoLauncher.exe` → รอเช็คเวอร์ชัน → กด **เล่น**
4. ครั้งแรกสร้างตัวละครในเกมได้เลย

Windows SmartScreen เตือน → *More info* → *Run anyway* (ไฟล์ไม่ได้เซ็นชื่อ)

## อัปเดต
launcher เช็คเวอร์ชันกับเซิร์ฟทุกครั้งที่เปิด — มีเวอร์ชันใหม่จะขึ้นปุ่ม **อัปเดต** กดแล้วรอ (โหลดเฉพาะไฟล์ที่เปลี่ยน) ไม่ต้องโหลด zip ใหม่เอง

- `DurangoLauncher.exe` เดี่ยว ๆ ใน release = สำหรับคนที่มีเกมแล้วแต่ launcher เปิดไม่ขึ้น — วางทับข้าง `DurangoV2.exe`
- `*-update-from-<เวอร์ชัน>.zip` = แพตช์ที่ launcher โหลดเอง (แตกทับโฟลเดอร์เกมเองก็ได้)

## offserver.txt
ไฟล์ตั้งค่าข้าง `DurangoV2.exe` ที่เกมอ่าน — `gateway=` คือเซิร์ฟ · ลบไฟล์ = กลับไปเล่น offline คนเดียว
ตัวละครผูกกับเครื่อง — ถ้าจะย้ายเครื่องให้เติมบรรทัด `account=<คำเดียวกันทั้งสองเครื่อง>` ก่อนเข้าเกมครั้งแรก

## มีปัญหา
- เปิดแล้วไม่ขึ้นอะไร → ดู `player.log` ในโฟลเดอร์เกม และ `%TEMP%\DurangoLauncher.log`
- เข้าโลกไม่ได้ / ค้างที่โหลด → เซิร์ฟอาจปิดอยู่ ดูสถานะมุมขวาบนของ launcher
- แจ้งบั๊กได้ที่ [Issues](../../issues)

## สถานะเซิร์ฟ (อัปเดต 14 ก.ย. 2026)

![server progress](https://img.shields.io/badge/server%20progress-83%2F96%20(86%25)-yellowgreen)
![client](https://img.shields.io/badge/client-v2.3-blue)
![multiplayer](https://img.shields.io/badge/social%20%2F%20clan%20%2F%20market-not%20yet-lightgrey)
![launcher](https://img.shields.io/badge/launcher-1.0-blue)

`█████████░` **86%** — ทำแล้ว 83 จาก 96 รายการ (นับจากรายการงานฝั่งเซิร์ฟ) · เล่นคนเดียวได้ครบเกือบทั้งเกม · **ระบบหลายคน (เพื่อน/ปาร์ตี้/แคลน/ตลาด) ยังไม่มี**

สัญลักษณ์: ✅ ทำแล้ว + เทสแล้ว · 🟡 ทำแล้ว **แต่ยังไม่ได้เทสกับตัวเกมจริง** (เทสด้วยบอทเท่านั้น) · ⬜ ยังไม่ทำ

| ระบบ | ความคืบหน้า | สถานะ |
|---|---|---|
| เข้าเกม / สร้าง-ลบตัวละคร / โหลดโลก | `█████████░` 6/7 | ✅ เข้าโลก เดิน เห็นคนอื่น · 🟡 **ย้ายเกาะ** (ทำแล้ว ยังไม่ได้เทสกับตัวเกม) |
| กระเป๋า / ไอเทม / สวมใส่ | `██████████` 8/8 | ✅ |
| คราฟต์ / สกิล / อาชีพ / วิจัย | `██████████` 5/5 | ✅ |
| ต่อสู้ / ล่าสัตว์ / สัตว์โจมตี | `█████████░` 8/9 | ✅ · ⬜ คลิปสัตว์วิ่ง (ใช้คลิปเดินเร่งแทน) |
| เอาตัวรอด (หิว/เหนื่อย/อุณหภูมิ/ตาย/ฟื้น/พัก) | `██████████` 7/7 | ✅ |
| แผนที่ / เดินทาง / ท่าเรือ / วาร์ป | `████████░░` 8/10 | ✅ · ⬜ `VisitEstate` / `RequestEpicWarp` · ⬜ landmark บนแผนที่เกาะอื่น |
| สิ่งปลูกสร้าง / แคมป์ / กระดาน | `█████████░` 14/15 | ✅ สร้าง-รื้อ-ใช้ safehouse · ⬜ **ประกาศ/ขยาย/ใบอนุญาตที่ดิน** |
| ฟาร์ม | `██████████` 4/4 | ✅ |
| สัตว์เลี้ยง (จับ/เลี้ยง/งาน/ขี่) | `█████████░` 6/7 | ✅ · ⬜ ปล่อยเลี้ยง (`GrazePets`) |
| เควส / ไกด์ / ภารกิจองค์กร / เมล | `█████████░` 9/10 | ✅ · ⬜ `GuideProgress` / `TutorialEvent` |
| สังคม: เพื่อน / ปาร์ตี้ / แคลน / ตลาด / วิทยุ / ดนตรี / PvP | `█░░░░░░░░░` 1/7 | ⬜ **ยังไม่มี** (มีแค่แชทกับเมล) |
| แอดมิน / สำรองข้อมูล / hot reload ตาราง | `██████████` 5/5 | ✅ |

### ⚠️ ยังไม่ได้เทส — ใช้แล้วเจออะไรแจ้งใน [Issues](../../issues)
- 🟡 **ฟีเจอร์รอบ 13 ก.ย. ทั้งหมด** (เควส/ภารกิจองค์กร/สัตว์เลี้ยง/ฟาร์ม/สิ่งปลูกสร้าง/เมล) เทสผ่านบอทเท่านั้น ยังไม่ได้เล่นด้วยตัวเกมจริงครบทุกเมนู
- 🟡 **ปุ่ม "อัปเดต" ใน launcher** — โค้ดแตกไฟล์เทสกับ zip จำลองบนเครื่องแล้ว แต่**ยังไม่เคยโหลดของจริงจาก GitHub ผ่าน launcher** (ยังไม่มีเวอร์ชันถัดไปให้เทส) · แพตช์ `-update-from-*` ยังไม่เคยสร้างจริง
- 🟡 **launcher อัปเดตตัวเอง** (สลับ `.exe` ขณะรันอยู่) เทสด้วยไฟล์จำลอง ไม่ใช่ตัว launcher จริง
- 🟡 **ติดตั้งบนเครื่องอื่น** — ชุดนี้เทสบนเครื่อง dev เครื่องเดียว ยังไม่ได้ลองแตก zip เล่นบนเครื่องผู้เล่นจริง (SmartScreen · เข้าเซิร์ฟผ่านเน็ตนอก)
- 🟡 **ย้ายเกาะด้วยตัวเกมจริง** (ท่าเรือ → เกาะที่สอง วาดครบไหม)
- ⬜ `min_version` บังคับอัปเดต — ยังไม่เคยเปิดใช้

### บั๊กที่รู้แล้ว
- ตัวเกม (Kllox build) log `UITitleWidget_PC.OnEnable IndexOutOfRangeException` ตอนหน้าสร้างตัวละคร — เป็นเรื่องฝั่ง client ยังเข้าเกมได้ปกติ
- ตัวละครผูกกับเครื่อง — ล้าง Windows ใหม่ = ตัวละครหาย ถ้าไม่ได้ตั้ง `account=` ใน `offserver.txt` ไว้ก่อน

---

# Durango OffServer — Game Client (English)

This repo only holds **[Releases](../../releases/latest)** — the Durango: Wild Lands PC client patched to connect to the Durango OffServer, plus the launcher.

## Getting started
1. Download `Durango-OffServer-Client-v<version>.zip` from the [latest release](../../releases/latest)
2. Extract it anywhere (not inside Program Files)
3. Run `DurangoLauncher.exe` → wait for the version check → press **Play**
4. Create your character in-game on first launch

Windows SmartScreen warning → *More info* → *Run anyway* (the files are not code-signed)

## Updating
The launcher checks the server version every time it opens — when a new version exists an **Update** button appears; press it and wait (only changed files are downloaded). No need to re-download the full zip.

- Standalone `DurangoLauncher.exe` in the release = for people who already have the game but the launcher won't open — drop it next to `DurangoV2.exe`
- `*-update-from-<version>.zip` = the patch the launcher downloads itself (you can also extract it over the game folder manually)

## offserver.txt
Config file next to `DurangoV2.exe` that the game reads — `gateway=` is the server · delete the file = back to single-player offline.
Your character is tied to this PC — to move to another PC add the line `account=<same word on both PCs>` before entering the game for the first time.

## Problems
- Nothing shows up after launching → check `player.log` in the game folder and `%TEMP%\DurangoLauncher.log`
- Can't enter the world / stuck loading → the server may be down; see the status in the launcher's top-right corner
- Report bugs in [Issues](../../issues)

## Server status (updated 14 Sep 2026)

![server progress](https://img.shields.io/badge/server%20progress-83%2F96%20(86%25)-yellowgreen)
![client](https://img.shields.io/badge/client-v2.3-blue)
![multiplayer](https://img.shields.io/badge/social%20%2F%20clan%20%2F%20market-not%20yet-lightgrey)
![launcher](https://img.shields.io/badge/launcher-1.0-blue)

`█████████░` **86%** — 83 of 96 items done (counted from the server-side task list) · almost the whole solo game works · **multiplayer systems (friends / party / clan / market) do not exist yet**

Legend: ✅ done + tested · 🟡 done **but NOT tested with the real game client** (bot-tested only) · ⬜ not done

| System | Progress | Status |
|---|---|---|
| Login / create-delete character / world load | `█████████░` 6/7 | ✅ enter world, walk, see other players · 🟡 **island travel** (done, not tested with the real client) |
| Inventory / items / equipment | `██████████` 8/8 | ✅ |
| Crafting / skills / jobs / research | `██████████` 5/5 | ✅ |
| Combat / hunting / animal attacks | `█████████░` 8/9 | ✅ · ⬜ real animal run clip (sped-up walk clip used instead) |
| Survival (hunger / fatigue / temperature / death / revive / rest) | `██████████` 7/7 | ✅ |
| Map / travel / port / warp | `████████░░` 8/10 | ✅ · ⬜ `VisitEstate` / `RequestEpicWarp` · ⬜ landmarks on other islands' maps |
| Buildings / camp / pinboard | `█████████░` 14/15 | ✅ build-dismantle-use safehouse · ⬜ **declare / expand / license estate** |
| Farming | `██████████` 4/4 | ✅ |
| Pets (tame / raise / jobs / ride) | `█████████░` 6/7 | ✅ · ⬜ grazing (`GrazePets`) |
| Quests / guide / faction missions / mail | `█████████░` 9/10 | ✅ · ⬜ `GuideProgress` / `TutorialEvent` |
| Social: friends / party / clan / market / radio / music / PvP | `█░░░░░░░░░` 1/7 | ⬜ **not available** (only chat and mail) |
| Admin / backups / hot-reload tables | `██████████` 5/5 | ✅ |

### ⚠️ NOT tested — if something breaks, report it in [Issues](../../issues)
- 🟡 **All features from the 13 Sep round** (quests / faction missions / pets / farming / buildings / mail) were tested with bots only, not played through every menu with the real client
- 🟡 **The launcher's "Update" button** — the extraction code was tested against mock zips locally, but **it has never downloaded a real release from GitHub through the launcher** (no next version exists yet to test with) · `-update-from-*` patches have never been built for real
- 🟡 **Launcher self-update** (swapping its own `.exe` while running) tested with mock files, not the real launcher
- 🟡 **Install on another machine** — this build was tested on the dev PC only; never extracted and played on a real player's PC (SmartScreen · connecting over the public internet)
- 🟡 **Island travel with the real client** (port → second island renders fully?)
- ⬜ `min_version` forced update — never enabled

### Known bugs
- The client (Kllox build) logs `UITitleWidget_PC.OnEnable IndexOutOfRangeException` on the character creation screen — client-side, the game still works
- Character is tied to the machine — reinstalling Windows loses it unless `account=` was set in `offserver.txt` beforehand

---

# Durango OffServer — Client Game (Bahasa Indonesia)

Repo ini hanya berisi **[Releases](../../releases/latest)** — client PC Durango: Wild Lands yang sudah di-patch untuk terhubung ke server Durango OffServer, beserta launcher-nya.

## Cara mulai
1. Unduh `Durango-OffServer-Client-v<versi>.zip` dari [rilis terbaru](../../releases/latest)
2. Ekstrak di mana saja (jangan di dalam Program Files)
3. Jalankan `DurangoLauncher.exe` → tunggu pengecekan versi → tekan **Play**
4. Buat karakter di dalam game saat pertama kali masuk

Peringatan Windows SmartScreen → *More info* → *Run anyway* (file tidak ditandatangani secara digital)

## Update
Launcher mengecek versi server setiap kali dibuka — kalau ada versi baru akan muncul tombol **Update**; tekan dan tunggu (hanya file yang berubah yang diunduh). Tidak perlu mengunduh ulang zip lengkap.

- `DurangoLauncher.exe` tersendiri di rilis = untuk yang sudah punya game tapi launcher-nya tidak bisa dibuka — letakkan di sebelah `DurangoV2.exe`
- `*-update-from-<versi>.zip` = patch yang diunduh launcher sendiri (bisa juga diekstrak manual menimpa folder game)

## offserver.txt
File konfigurasi di sebelah `DurangoV2.exe` yang dibaca game — `gateway=` adalah server · hapus file ini = kembali main offline sendirian.
Karakter terikat ke PC ini — untuk pindah PC tambahkan baris `account=<kata yang sama di kedua PC>` sebelum masuk game pertama kali.

## Ada masalah
- Tidak muncul apa-apa setelah dijalankan → cek `player.log` di folder game dan `%TEMP%\DurangoLauncher.log`
- Tidak bisa masuk dunia / stuck loading → server mungkin sedang mati; lihat status di pojok kanan atas launcher
- Laporkan bug di [Issues](../../issues)

## Status server (diperbarui 14 Sep 2026)

![server progress](https://img.shields.io/badge/server%20progress-83%2F96%20(86%25)-yellowgreen)
![client](https://img.shields.io/badge/client-v2.3-blue)
![multiplayer](https://img.shields.io/badge/social%20%2F%20clan%20%2F%20market-not%20yet-lightgrey)
![launcher](https://img.shields.io/badge/launcher-1.0-blue)

`█████████░` **86%** — 83 dari 96 item selesai (dihitung dari daftar tugas sisi server) · hampir seluruh mode solo bisa dimainkan · **sistem multiplayer (teman / party / clan / pasar) belum ada**

Keterangan: ✅ selesai + sudah dites · 🟡 selesai **tapi BELUM dites dengan client game asli** (baru dites dengan bot) · ⬜ belum dibuat

| Sistem | Progres | Status |
|---|---|---|
| Login / buat-hapus karakter / muat dunia | `█████████░` 6/7 | ✅ masuk dunia, jalan, lihat pemain lain · 🟡 **pindah pulau** (selesai, belum dites dengan client asli) |
| Inventaris / item / perlengkapan | `██████████` 8/8 | ✅ |
| Crafting / skill / pekerjaan / riset | `██████████` 5/5 | ✅ |
| Pertarungan / berburu / serangan hewan | `█████████░` 8/9 | ✅ · ⬜ animasi lari hewan asli (pakai animasi jalan dipercepat) |
| Bertahan hidup (lapar / lelah / suhu / mati / hidup lagi / istirahat) | `██████████` 7/7 | ✅ |
| Peta / perjalanan / pelabuhan / warp | `████████░░` 8/10 | ✅ · ⬜ `VisitEstate` / `RequestEpicWarp` · ⬜ landmark di peta pulau lain |
| Bangunan / kamp / papan pengumuman | `█████████░` 14/15 | ✅ bangun-bongkar-pakai safehouse · ⬜ **klaim / perluas / lisensi lahan** |
| Bertani | `██████████` 4/4 | ✅ |
| Hewan peliharaan (jinakkan / rawat / tugas / tunggangi) | `█████████░` 6/7 | ✅ · ⬜ menggembalakan (`GrazePets`) |
| Quest / panduan / misi faksi / surat | `█████████░` 9/10 | ✅ · ⬜ `GuideProgress` / `TutorialEvent` |
| Sosial: teman / party / clan / pasar / radio / musik / PvP | `█░░░░░░░░░` 1/7 | ⬜ **belum tersedia** (baru chat dan surat) |
| Admin / backup / hot-reload tabel | `██████████` 5/5 | ✅ |

### ⚠️ BELUM dites — kalau ada yang rusak, laporkan di [Issues](../../issues)
- 🟡 **Semua fitur dari putaran 13 Sep** (quest / misi faksi / hewan peliharaan / bertani / bangunan / surat) baru dites dengan bot, belum dimainkan lewat semua menu dengan client asli
- 🟡 **Tombol "Update" di launcher** — kode ekstraksi sudah dites dengan zip tiruan secara lokal, tapi **belum pernah mengunduh rilis asli dari GitHub lewat launcher** (belum ada versi berikutnya untuk dites) · patch `-update-from-*` belum pernah dibuat sungguhan
- 🟡 **Launcher memperbarui dirinya sendiri** (mengganti `.exe` saat berjalan) dites dengan file tiruan, bukan launcher asli
- 🟡 **Instal di komputer lain** — build ini baru dites di PC developer; belum pernah diekstrak dan dimainkan di PC pemain sungguhan (SmartScreen · koneksi lewat internet publik)
- 🟡 **Pindah pulau dengan client asli** (pelabuhan → pulau kedua tergambar lengkap?)
- ⬜ `min_version` paksa update — belum pernah diaktifkan

### Bug yang sudah diketahui
- Client (build Kllox) mencatat `UITitleWidget_PC.OnEnable IndexOutOfRangeException` di layar pembuatan karakter — masalah sisi client, game tetap jalan
- Karakter terikat ke mesin — instal ulang Windows = karakter hilang kecuali `account=` sudah diatur di `offserver.txt` sebelumnya
