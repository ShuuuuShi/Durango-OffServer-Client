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

## บัญชี (Account Number) — เข้าเกมครั้งแรกเซิร์ฟออกให้เอง ไม่ต้องตั้งเอง
เข้าเกมครั้งแรก = เซิร์ฟสร้าง **บัญชี UUID ไม่ซ้ำกับใคร** ให้อัตโนมัติ ดูเลขบัญชีตัวเองได้ในเกมที่
**ตั้งค่า (Settings) ▸ Account ▸ Account Number**

**ย้ายเครื่อง:** เปิด `offserver.txt` บนเครื่องใหม่ เติมบรรทัด `account=<Account Number ของเรา>` แล้วเข้าเกม — ตัวละครเดิมโผล่มาเลย
⚠️ **ห้ามบอก Account Number ให้ใคร** — ใครถือเลขนี้เข้าบัญชีนี้ได้ (ผูก Discord ไว้ = แอดมินช่วยกู้ได้เมื่อโดนขโมย)

**กันลืม/กันโดนขโมย:** ผูก Discord ผ่านบอท (กด 🔗 ผูกบัญชีเกม → ได้โค้ด 6 ตัว) แล้วกรอกโค้ดในเกมที่ **ตั้งค่า ▸ Account ▸ Enter Coupon**

## มีปัญหา
- เปิดแล้วไม่ขึ้นอะไร → ดู `player.log` ในโฟลเดอร์เกม และ `%TEMP%\DurangoLauncher.log`
- เข้าโลกไม่ได้ / ค้างที่โหลด → เซิร์ฟอาจปิดอยู่ ดูสถานะมุมขวาบนของ launcher
- แจ้งบั๊กได้ที่ [Issues](../../issues)

## สถานะเซิร์ฟ (อัปเดต 20 ก.ย. 2026)

![server progress](https://img.shields.io/badge/server%20progress-97%2F106%20(92%25)-brightgreen)
![client](https://img.shields.io/badge/client-v2.7-blue)
![multiplayer](https://img.shields.io/badge/social%20%2F%20clan%20%2F%20market-ready%20(bot--tested)-yellowgreen)
![discord](https://img.shields.io/badge/discord%20link-live-5865F2)

`█████████░` **92%** — ทำแล้ว 97 จาก 106 รายการ (นับจากรายการงานฝั่งเซิร์ฟ) · เล่นได้ครบเกือบทั้งเกมรวม**ระบบหลายคน** (เพื่อน/ปาร์ตี้/แคลน/ตลาด/คอนเสิร์ต) · **ของใหม่รอบ 19–20 ก.ย. ส่วนใหญ่ยังเทสด้วยบอทเท่านั้น — เจออะไรแจ้งได้เลย**

สัญลักษณ์: ✅ ทำแล้ว + เทสแล้ว · 🟡 ทำแล้ว **แต่ยังไม่ได้เทสกับตัวเกมจริง** (เทสด้วยบอทเท่านั้น) · ⬜ ยังไม่ทำ

| ระบบ | ความคืบหน้า | สถานะ |
|---|---|---|
| เข้าเกม / สร้าง-ลบตัวละคร / โหลดโลก | `██████████` 7/7 | ✅ เข้าโลก เดิน เห็นคนอื่น · ย้ายเกาะ · 3 ตัวละคร/บัญชี · คิวรอเข้าตอนคนเต็ม |
| กระเป๋า / ไอเทม / สวมใส่ | `██████████` 8/8 | ✅ + ความทนทาน/ขนาด/แท็กแฝง/ค่าห่อของตามต้นฉบับ |
| คราฟต์ / สกิล / อาชีพ / ดัดแปลง | `████████░░` 5/6 | ✅ คราฟต์/สกิล/บันไดความชำนาญ · 🟡 **ดัดแปลงอุปกรณ์ + สนับสนุนเทคนิค** · 🟡 แต้มสกิลตามเลเวลของสิ่งที่ทำ · ⬜ กฎแปรรูป (ตัด/หลอม/ฟอก/ตาก) ตามต้นฉบับยังไม่ครบ |
| ต่อสู้ / ล่าสัตว์ / สัตว์โจมตี | `█████████░` 9/10 | ✅ ล่า/แล่/สัตว์ไล่ · 🟡 **สูตรดาเมจ-เกราะ-ท่าโจมตีเป็นพื้นที่-ตัวใหญ่ไม่สะดุด ตามต้นฉบับ (สมดุลเปลี่ยน: สัตว์ใหญ่แกร่งขึ้น)** · 🟡 ส่วนร่างกายสัตว์/บาดเจ็บ · ⬜ คลิปสัตว์วิ่ง |
| เอาตัวรอด (หิว/เหนื่อย/อุณหภูมิ/ตาย/ฟื้น/พัก) | `██████████` 7/7 | ✅ + ของตกเป็นห่อตอนตาย · CPR |
| แผนที่ / เดินทาง / ท่าเรือ / วาร์ป | `████████░░` 9/11 | ✅ · 🟡 **รอยแยก/ตัวเร่งวาร์ป (wave defence)** · 🟡 ขนส่งสินค้า/ยานพาหนะ · ⬜ `VisitEstate`/`RequestEpicWarp` · ⬜ landmark บนแผนที่เกาะอื่น |
| สิ่งปลูกสร้าง / ที่ดิน / แคมป์ | `█████████░` 16/18 | ✅ สร้าง-รื้อ-ใช้ · **ที่ดินส่วนตัว/แคลน** · ผุเมื่อทิ้ง (กองไฟ 1 วัน · นอกที่ดิน 3 วัน) · ป้าย/กล่องล็อก/Sanctum · 🟡 เซ็ตเฟอร์นิเจอร์+mood+ฝากทำ · 🟡 หุ่นโชว์/เครื่องต่อย · ⬜ บ่อน้ำ/กับดักปลา · ⬜ กับดักสัตว์ |
| ฟาร์ม | `██████████` 4/4 | ✅ + 🟡 ปุ๋ยเร่ง · ระบบนิเวศ (ล่าแล้วฝูงบาง/ฟื้น · ฤดูกาล · พืชแพร่) |
| สัตว์เลี้ยง (จับ/เลี้ยง/งาน/ขี่/สกิล) | `█████████░` 7/8 | ✅ · 🟡 **สกิลติดตัว 37 สกิล** · ⬜ ปล่อยเลี้ยง (`GrazePets`) |
| เควส / ภารกิจองค์กร / เมล / อีเวนต์ | `█████████░` 12/13 | ✅ เควสเรื่อง/ภารกิจ/เมล · 🟡 **รายสัปดาห์ 64 + ต้านอากาศ 36 (รีเซ็ตจันทร์ 05:00)** · 🟡 เช็คชื่อ + แจกแบบแปลนอีเวนต์ · 🟡 เสบียงองค์กร 11 ขั้น/57 คำขอ · ⬜ `GuideProgress`/`TutorialEvent` |
| สังคม: เพื่อน / ปาร์ตี้ / แคลน / ตลาด / วิทยุ / ดนตรี / PvP | `████████░░` 6/7 | 🟡 **เพื่อน · ปาร์ตี้ · แคลน (ยศ/คลัง/แชท/ที่ดิน/กองทุน/พันธมิตร/วิจัย) · ตลาด · วิทยุ · ดนตรี→คอนเสิร์ต** ทำครบแล้ว รอเทสจริง · ⬜ PvP (ไม่มีแผน) |
| แอดมิน / Discord / สำรองข้อมูล | `██████████` 7/7 | ✅ **ผูกบัญชี Discord ผ่านเมนู 쿠폰 (ปุ่ม «ใส่คูปอง» ใน v2.7)** · บอท ticket สำหรับ Supporter · จดหมายอัปเดตอัตโนมัติ · สำรองเซฟ · hot reload ตาราง |

### ⚠️ ยังไม่ได้เทสกับตัวเกมจริง — ใช้แล้วเจออะไรแจ้งใน [Issues](../../issues)
- 🟡 **ฟีเจอร์รอบ 19–20 ก.ย. ทั้งหมด** (แคลน · รายสัปดาห์ · ร้าน/ขนส่ง · ดัดแปลง · เสบียง · สกิลสัตว์เลี้ยง · รอยแยก · เครื่องต่อย · **สมดุลต่อสู้ใหม่**) เทสผ่านบอทเท่านั้น
- 🟡 **ปุ่ม "อัปเดต" ใน launcher** โหลดแพตช์จาก GitHub ได้แล้วตั้งแต่ v2.4 → v2.7 แต่ launcher **อัปเดตตัวเอง** ยังเทสด้วยไฟล์จำลอง
- ⬜ `min_version` บังคับอัปเดต — ยังไม่เคยเปิดใช้ (ตอนนี้ต่ำสุด 2.5)

### บั๊กที่รู้แล้ว
- บัญชีผูกกับ Account Number (UUID ที่เซิร์ฟออกให้ ดูที่ ตั้งค่า ▸ Account) — ล้าง Windows = เปิด `offserver.txt` เติม `account=<Account Number ของเรา>` เข้าใหม่ก็ได้ตัวละครคืน · ไม่ตั้งไว้ก่อนล้าง = ต้องให้แอดมินกู้ (ผูก Discord ไว้ช่วยได้เร็ว)
- หลอดสัตว์เลี้ยงไม่ฟื้นเอง — ให้อาหาร/ชุบชีวิต (ตามต้นฉบับ)

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

## Account (Account Number) — the server issues it on your first login, you never invent one
First time in the game = the server automatically creates a **unique account UUID** for you. See it in-game under
**Settings ▸ Account ▸ Account Number**

**Moving PCs:** on the new PC open `offserver.txt`, add the line `account=<your Account Number>`, then start the game — your characters are right there.
⚠️ **Never share your Account Number** — whoever has it can enter your account (linking Discord lets admins help recover it).

**Keep it safe:** link Discord via the bot (🔗 button → you get a 6-character code), then enter the code in-game at **Settings ▸ Account ▸ Enter Coupon**

## Problems
- Nothing shows up after launching → check `player.log` in the game folder and `%TEMP%\DurangoLauncher.log`
- Can't enter the world / stuck loading → the server may be down; see the status in the launcher's top-right corner
- Report bugs in [Issues](../../issues)

## Server status (updated 20 Sep 2026)

![server progress](https://img.shields.io/badge/server%20progress-97%2F106%20(92%25)-brightgreen)
![client](https://img.shields.io/badge/client-v2.7-blue)
![multiplayer](https://img.shields.io/badge/social%20%2F%20clan%20%2F%20market-ready%20(bot--tested)-yellowgreen)
![discord](https://img.shields.io/badge/discord%20link-live-5865F2)

`█████████░` **92%** — 97 of 106 server-side items done · nearly the whole game is playable, **including multiplayer** (friends / party / clan / market / concerts) · **most of the 19–20 Sep additions are bot-tested only — please report anything odd**

Legend: ✅ done + tested · 🟡 done **but not yet tested with the real client** (bot-tested only) · ⬜ not yet

| System | Progress | Status |
|---|---|---|
| Login / create-delete character / world load | `██████████` 7/7 | ✅ enter world, walk, see others · island travel · 3 characters per account · admission queue when full |
| Inventory / items / equipment | `██████████` 8/8 | ✅ + durability / size / latent tags / packing cost as in the original |
| Crafting / skills / jobs / modification | `████████░░` 5/6 | ✅ craft / skills / mastery ladder · 🟡 **equipment modification + tech support** · 🟡 skill exp scales with the level of what you do · ⬜ processing rules (trim / smelt / tan / dry) not fully ported |
| Combat / hunting / animal attacks | `█████████░` 9/10 | ✅ hunt / butcher / animals chase · 🟡 **original damage-armor formula, area attack shapes, big animals do not flinch (balance changed: big animals are tougher)** · 🟡 animal body parts / injuries · ⬜ animal run clips |
| Survival (hunger / fatigue / temperature / death / revive / rest) | `██████████` 7/7 | ✅ + drop bundle on death · CPR |
| Map / travel / harbor / warp | `████████░░` 9/11 | ✅ · 🟡 **rift / warp accelerator (wave defence)** · 🟡 cargo / vehicles · ⬜ `VisitEstate` / `RequestEpicWarp` · ⬜ landmarks on maps of other islands |
| Buildings / land / camp | `█████████░` 16/18 | ✅ build-demolish-use · **personal / clan land** · decay when abandoned (bonfire 1 day · outside land 3 days) · signs / lockbox / sanctum · 🟡 furniture sets + mood + entrust · 🟡 mannequin / punch machine · ⬜ wells / fish traps · ⬜ animal traps |
| Farming | `██████████` 4/4 | ✅ + 🟡 crop booster · ecosystem (herds thin out and recover · seasons · plants spread) |
| Pets (tame / raise / work / ride / skills) | `█████████░` 7/8 | ✅ · 🟡 **37 pet active skills** · ⬜ grazing (`GrazePets`) |
| Quests / faction missions / mail / events | `█████████░` 12/13 | ✅ story quests / missions / mail · 🟡 **weekly 64 + weather resistance 36 (reset Monday 05:00)** · 🟡 attendance + event blueprints · 🟡 faction supply 11 tiers / 57 requests · ⬜ `GuideProgress` / `TutorialEvent` |
| Social: friends / party / clan / market / radio / music / PvP | `████████░░` 6/7 | 🟡 **friends · party · clan (ranks / storage / chat / land / fund / allies / research) · market · radio · music → concerts** all implemented, awaiting real-client testing · ⬜ PvP (not planned) |
| Admin / Discord / backups | `██████████` 7/7 | ✅ **link your Discord via the coupon menu (new "Enter coupon" button in v2.7)** · ticket bot for Supporters · automatic update mails · save backups · hot-reload tables |

### ⚠️ Not yet tested with the real client — report anything in [Issues](../../issues)
- 🟡 **everything from the 19–20 Sep rounds** (clan · weekly · shop / cargo · modification · supply · pet skills · rift · punch machine · **new combat balance**) was tested with bots only
- 🟡 the launcher **Update** button has fetched real patches from GitHub since v2.4 → v2.7, but launcher **self-update** is still tested with dummy files only
- ⬜ `min_version` forced update — never enabled (currently 2.5)

### Known issues
- Accounts are bound to the Account Number (UUID issued by the server — see Settings ▸ Account) — after a fresh Windows install add `account=<your Account Number>` to `offserver.txt` and your characters return · without it saved beforehand, an admin must recover them (linking Discord makes this quick)
- Pet HP does not regenerate on its own — feed / revive (as in the original)

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

## Akun (Account Number) — server yang membuatkan saat login pertama, tidak perlu mengarang sendiri
Masuk game pertama kali = server otomatis membuat **akun UUID unik** untukmu. Lihat nomormu di dalam game di
**Pengaturan (Settings) ▸ Account ▸ Account Number**

**Pindah PC:** di PC baru buka `offserver.txt`, tambahkan baris `account=<Account Number milikmu>`, lalu masuk game — karakter lamamu langsung muncul.
⚠️ **Jangan beritahu Account Number ke siapa pun** — siapa pun yang memegang nomor ini bisa masuk akunmu (kalau sudah link Discord, admin bisa bantu pulihkan).

**Amankan akun:** link Discord lewat bot (tombol 🔗 → kamu dapat kode 6 karakter), lalu masukkan kodenya di dalam game di **Pengaturan ▸ Account ▸ Enter Coupon**

## Ada masalah
- Tidak muncul apa-apa setelah dijalankan → cek `player.log` di folder game dan `%TEMP%\DurangoLauncher.log`
- Tidak bisa masuk dunia / stuck loading → server mungkin sedang mati; lihat status di pojok kanan atas launcher
- Laporkan bug di [Issues](../../issues)

## Status server (diperbarui 20 Sep 2026)

![server progress](https://img.shields.io/badge/server%20progress-97%2F106%20(92%25)-brightgreen)
![client](https://img.shields.io/badge/client-v2.7-blue)
![multiplayer](https://img.shields.io/badge/social%20%2F%20clan%20%2F%20market-ready%20(bot--tested)-yellowgreen)
![discord](https://img.shields.io/badge/discord%20link-live-5865F2)

`█████████░` **92%** — 97 dari 106 item sisi server selesai · hampir seluruh game bisa dimainkan **termasuk multiplayer** (teman / party / clan / pasar / konser) · **sebagian besar tambahan 19–20 Sep baru diuji dengan bot — laporkan jika ada yang aneh**

Keterangan: ✅ selesai + diuji · 🟡 selesai **tapi belum diuji dengan client asli** (hanya bot) · ⬜ belum

| Sistem | Progres | Status |
|---|---|---|
| Masuk / buat-hapus karakter / muat dunia | `██████████` 7/7 | ✅ masuk dunia, jalan, lihat pemain lain · pindah pulau · 3 karakter per akun · antrean masuk saat penuh |
| Inventaris / item / perlengkapan | `██████████` 8/8 | ✅ + ketahanan / ukuran / tag tersembunyi / biaya bungkus seperti aslinya |
| Crafting / skill / profesi / modifikasi | `████████░░` 5/6 | ✅ craft / skill / tangga keahlian · 🟡 **modifikasi perlengkapan + tech support** · 🟡 exp skill sesuai level hal yang dilakukan · ⬜ aturan pengolahan (potong / lebur / samak / jemur) belum lengkap |
| Pertarungan / berburu / serangan hewan | `█████████░` 9/10 | ✅ berburu / jagal / hewan mengejar · 🟡 **rumus damage-armor asli, bentuk serangan area, hewan besar tidak goyah (keseimbangan berubah: hewan besar lebih kuat)** · 🟡 bagian tubuh hewan / cedera · ⬜ klip hewan berlari |
| Bertahan hidup (lapar / lelah / suhu / mati / bangkit / istirahat) | `██████████` 7/7 | ✅ + barang jatuh jadi bungkusan saat mati · CPR |
| Peta / perjalanan / pelabuhan / warp | `████████░░` 9/11 | ✅ · 🟡 **retakan / akselerator warp (wave defence)** · 🟡 kargo / kendaraan · ⬜ `VisitEstate` / `RequestEpicWarp` · ⬜ landmark di peta pulau lain |
| Bangunan / tanah / kamp | `█████████░` 16/18 | ✅ bangun-bongkar-pakai · **tanah pribadi / clan** · lapuk jika ditinggal (api unggun 1 hari · luar tanah 3 hari) · papan / kotak kunci / sanctum · 🟡 set furnitur + mood + titip buat · 🟡 manekin / mesin pukul · ⬜ sumur / perangkap ikan · ⬜ perangkap hewan |
| Pertanian | `██████████` 4/4 | ✅ + 🟡 pupuk pemacu · ekosistem (kawanan menipis lalu pulih · musim · tanaman menyebar) |
| Hewan peliharaan (tangkap / rawat / kerja / tunggang / skill) | `█████████░` 7/8 | ✅ · 🟡 **37 skill aktif peliharaan** · ⬜ lepas merumput (`GrazePets`) |
| Quest / misi faksi / surat / event | `█████████░` 12/13 | ✅ quest cerita / misi / surat · 🟡 **mingguan 64 + tahan cuaca 36 (reset Senin 05:00)** · 🟡 absensi + blueprint event · 🟡 suplai faksi 11 tingkat / 57 permintaan · ⬜ `GuideProgress` / `TutorialEvent` |
| Sosial: teman / party / clan / pasar / radio / musik / PvP | `████████░░` 6/7 | 🟡 **teman · party · clan (pangkat / gudang / chat / tanah / dana / sekutu / riset) · pasar · radio · musik → konser** semua sudah ada, menunggu uji client asli · ⬜ PvP (tidak direncanakan) |
| Admin / Discord / cadangan | `██████████` 7/7 | ✅ **tautkan Discord lewat menu kupon (tombol "Masukkan kupon" baru di v2.7)** · bot tiket untuk Supporter · surat update otomatis · cadangan save · hot-reload tabel |

### ⚠️ Belum diuji dengan client asli — laporkan di [Issues](../../issues)
- 🟡 **semua fitur putaran 19–20 Sep** (clan · mingguan · toko / kargo · modifikasi · suplai · skill peliharaan · retakan · mesin pukul · **keseimbangan tarung baru**) hanya diuji dengan bot
- 🟡 tombol **Update** di launcher sudah mengunduh patch asli dari GitHub sejak v2.4 → v2.7, tapi **update mandiri** launcher masih diuji dengan file tiruan
- ⬜ `min_version` paksa update — belum pernah diaktifkan (sekarang 2.5)

### Bug yang diketahui
- Akun terikat ke Account Number (UUID yang diberikan server — lihat Pengaturan ▸ Account) — setelah instal ulang Windows tambahkan `account=<Account Number milikmu>` di `offserver.txt` dan karaktermu kembali · tanpa itu sebelumnya, admin harus memulihkan (link Discord mempercepat)
- HP peliharaan tidak pulih sendiri — beri makan / hidupkan (seperti aslinya)
