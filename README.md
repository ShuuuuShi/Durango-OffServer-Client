🇹🇭 [ไทย](#durangoreborn--ตัวเกมสำหรับผู้เล่น) · 🇬🇧 [English](#durangoreborn--game-client-english) · 🇮🇩 [Bahasa Indonesia](#durangoreborn--client-game-bahasa-indonesia)

# Durango:Reborn — ตัวเกมสำหรับผู้เล่น

repo นี้มีแต่ **[Releases](../../releases)** — ตัวเกม Durango: Wild Lands ที่ปรับให้ต่อเซิร์ฟ Durango OffServer

| เครื่อง | เวอร์ชันล่าสุด | ไฟล์ |
|---|---|---|
| **Android** | 3.0.1 | `DurangoReborn.apk` ใน [release ล่าสุด](../../releases/latest) |
| **PC (Windows)** | 3.0.0 | `Durango-OffServer-Client-v3.0.0.zip` ใน [release v3.0.0](../../releases/tag/v3.0.0) + `DurangoLauncher.exe` |

ลิงก์โหลด APK ตรง (ชี้ release ล่าสุดเสมอ): `https://github.com/ShuuuuShi/Durango-OffServer-Client/releases/latest/download/DurangoReborn.apk`

## Android — เริ่มเล่น
1. โหลด `DurangoReborn.apk` จาก [release ล่าสุด](../../releases/latest)
2. เปิดไฟล์ → อนุญาต «ติดตั้งแอปจากแหล่งที่ไม่รู้จัก» ถ้าเครื่องถาม → ติดตั้ง
3. เปิดแอป **Durango:Reborn** → เลือกเซิร์ฟที่หน้า Title → แตะหน้าจอ
4. ครั้งแรกเกมโหลดข้อมูลจากเซิร์ฟ (รอสักครู่) แล้วสร้างตัวละครได้เลย

- ต้องการ Android 8.0 ขึ้นไป · ไฟล์ ~222 MB
- เล่น: ลากนิ้วเพื่อเดิน · **แตะพื้นเพื่อเดินไปจุดนั้น** · แตะสัตว์/ของเพื่อโต้ตอบ
- อัปเดต: โหลด APK ใหม่แล้วติดตั้งทับ — บัญชีและตัวละครอยู่ครบ (อย่าถอนแอปถ้าไม่จำเป็น)
- ทดสอบแล้วบน **MuMu Player (Android 15)** · มือถือจริงยังทดสอบน้อย เจออะไรแจ้งใน [Issues](../../issues)

## PC — เริ่มเล่น
1. โหลด `Durango-OffServer-Client-v3.0.0.zip` จาก [release v3.0.0](../../releases/tag/v3.0.0)
2. แตก zip ไว้ที่ไหนก็ได้ (ไม่ต้องอยู่ใน Program Files)
3. เปิด `DurangoLauncher.exe` → รอเช็คเวอร์ชัน → กด **เล่น**

Windows SmartScreen เตือน → *More info* → *Run anyway* (ไฟล์ไม่ได้เซ็นชื่อ)
launcher เช็คเวอร์ชันกับเซิร์ฟทุกครั้งที่เปิด — มีเวอร์ชันใหม่จะขึ้นปุ่ม **อัปเดต** ให้เอง · `offserver.txt` ข้าง `DurangoV2.exe` คือไฟล์ตั้งค่าเซิร์ฟ (`gateway=`)

## เซิร์ฟ
รายชื่อเซิร์ฟที่เกมดึงไปแสดงอยู่ใน [`servers.json`](servers.json) — ตอนนี้: **[CBT] Thailand Community** และ **[CBT] Supporter**

## บัญชีและการย้ายเครื่อง
เข้าเกมครั้งแรก เซิร์ฟสร้างบัญชีให้อัตโนมัติ และผูกไว้กับเครื่องนั้น (ไม่มีรหัสผ่าน) · หลังผูก Discord ขอดูเลขบัญชีเต็มได้จากบอทในดิส (`/myaccount` ตอบทาง DM)

**ผูก Discord ไว้กันหาย** — **ตั้งค่า ▸ บัญชี ▸ Link Discord** → ล็อกอิน Discord ในเบราว์เซอร์ → กลับเข้าเกม · ผูกแล้วใช้ย้ายเครื่องได้ และแอดมินช่วยกู้ได้ถ้ามีปัญหา · ทางเดิมยังใช้ได้: กด 🔗 ในดิสได้โค้ด 6 ตัว แล้วกรอกที่ **ตั้งค่า ▸ บัญชี ▸ ใส่คูปอง**

**ย้ายไปเครื่องใหม่**
- ผูก Discord ไว้แล้ว: เครื่องใหม่กด **Link Discord** ด้วย Discord เดิม → เกมถามว่าจะย้ายบัญชีมาเครื่องนี้ไหม → ยืนยัน
- ปุ่ม **ย้ายเครื่อง** (Android 3.0.1): เครื่องเดิมกดแล้วได้รหัส 9 หลัก → เครื่องใหม่กรอกที่ **ใส่คูปอง** · ⚠️ **ยังใช้ไม่ได้จนกว่าเซิร์ฟจะอัปเดต** — ตอนนี้กดแล้วขึ้น «เซิร์ฟนี้ยังไม่รองรับ»
- PC: เติม `account=<เลขบัญชี>` ใน `offserver.txt` ของเครื่องใหม่

⚠️ **ห้ามบอกเลขบัญชี รหัสย้ายเครื่อง หรือคีย์ย้ายเครื่องให้ใคร** — ใครได้ไปเข้าบัญชีเราได้

## มีปัญหา
- เข้าไม่ได้ / ค้างหน้าโหลด → เซิร์ฟอาจปิดอยู่ ดูจุดสถานะมุมล่างหน้า Title (เขียว = ออนไลน์)
- PC: ดู `player.log` ในโฟลเดอร์เกม และ `%TEMP%\DurangoLauncher.log`
- แจ้งบั๊กที่ [Issues](../../issues) หรือห้องในดิส

---

# Durango:Reborn — Game Client (English)

This repo only holds **[Releases](../../releases)** — Durango: Wild Lands, patched to connect to the Durango OffServer.

| Device | Latest | File |
|---|---|---|
| **Android** | 3.0.1 | `DurangoReborn.apk` in the [latest release](../../releases/latest) |
| **PC (Windows)** | 3.0.0 | `Durango-OffServer-Client-v3.0.0.zip` in [release v3.0.0](../../releases/tag/v3.0.0) + `DurangoLauncher.exe` |

Direct APK link (always the latest release): `https://github.com/ShuuuuShi/Durango-OffServer-Client/releases/latest/download/DurangoReborn.apk`

## Android
1. Download `DurangoReborn.apk` from the [latest release](../../releases/latest)
2. Open it, allow "install unknown apps" if asked, install
3. Open **Durango:Reborn**, pick a server on the title screen, tap the screen
4. The first start downloads game data from the server, then you can create a character

Android 8.0 or newer · about 222 MB · drag to move, **tap the ground to walk there**, tap animals/objects to interact · update by installing the new APK over the old one (your account stays) · tested on **MuMu Player (Android 15)**; real phones are less tested — please report problems in [Issues](../../issues).

## PC
Download `Durango-OffServer-Client-v3.0.0.zip` from [release v3.0.0](../../releases/tag/v3.0.0), extract it anywhere, run `DurangoLauncher.exe` and press **Play**. The launcher checks for updates every time. SmartScreen warning → *More info* → *Run anyway* (unsigned files).

## Servers
The in-game server list comes from [`servers.json`](servers.json): **[CBT] Thailand Community** and **[CBT] Supporter**.

## Account and moving to a new device
Your account is created on first login and tied to that device (no password). After linking Discord, the bot's `/myaccount` command DMs you the full account number.
- **Link Discord** (Settings ▸ Account ▸ Link Discord) protects the account and lets you move it: on the new device press Link Discord with the same Discord account and confirm the move. The old way still works: 🔗 in Discord gives a 6-character code for **Settings ▸ Account ▸ Enter Coupon**.
- **Move Device** button (Android 3.0.1): the old device shows a 9-digit code, the new device enters it in **Enter Coupon** — ⚠️ **not available until the servers are updated** (it currently says the server doesn't support it).
- PC: add `account=<account number>` to `offserver.txt` on the new PC.

⚠️ Never share your account number, move code or transfer key.

---

# Durango:Reborn — Client Game (Bahasa Indonesia)

Repo ini hanya berisi **[Releases](../../releases)** — Durango: Wild Lands yang disesuaikan untuk server Durango OffServer.

| Perangkat | Versi terbaru | File |
|---|---|---|
| **Android** | 3.0.1 | `DurangoReborn.apk` di [rilis terbaru](../../releases/latest) |
| **PC (Windows)** | 3.0.0 | `Durango-OffServer-Client-v3.0.0.zip` di [rilis v3.0.0](../../releases/tag/v3.0.0) + `DurangoLauncher.exe` |

Link APK langsung (selalu rilis terbaru): `https://github.com/ShuuuuShi/Durango-OffServer-Client/releases/latest/download/DurangoReborn.apk`

**Android:** unduh `DurangoReborn.apk`, izinkan "instal aplikasi tidak dikenal", instal, buka **Durango:Reborn**, pilih server, ketuk layar. Android 8.0+ · ±222 MB · seret untuk berjalan, **ketuk tanah untuk berjalan ke sana** · perbarui dengan menginstal APK baru di atas yang lama (akun tetap). Diuji di **MuMu Player (Android 15)**.

**PC:** unduh `Durango-OffServer-Client-v3.0.0.zip` dari [rilis v3.0.0](../../releases/tag/v3.0.0), ekstrak, jalankan `DurangoLauncher.exe`, tekan **Main**.

**Akun:** dibuat otomatis saat pertama masuk dan terikat ke perangkat. Tautkan Discord di **Pengaturan ▸ Akun ▸ Link Discord** agar bisa pindah perangkat. Tombol **Pindah Perangkat** (kode 9 digit) ⚠️ **belum bisa dipakai sampai server diperbarui**. Jangan bagikan nomor akun atau kode pindah.
