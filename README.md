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
