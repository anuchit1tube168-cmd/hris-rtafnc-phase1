# RTAFNC Personnel Hub — Service Flow (Staging)

> เป้าหมาย: ใช้หน้า Service Hub แบบ tile/mosaic เป็นประตูเดียวของงานกำลังพลบน Web / GPT Site / LINE LIFF โดยไม่ฝังข้อมูลกำลังพลจริงไว้ใน public frontend

## 1. Entry Flow

1. ผู้ใช้เปิด RTAFNC Personnel Hub
2. เลือกบริการจาก Service Tile หรือค้นหาจากช่อง Search
3. ระบบตรวจ session และ role
4. frontend เรียก Secure HRIS API
5. API ตรวจ RBAC ก่อนคืนข้อมูล
6. ผู้ใช้ดู/ทำรายการตามสิทธิ์
7. รายการที่เป็นการเปลี่ยนข้อมูลต้องเข้า Workflow
8. เมื่ออนุมัติแล้วจึงเขียนกลับฐานทางการ พร้อม Change Log

## 2. Main Service Groups

- Personnel Directory — ทำเนียบกำลังพล
- Organization — ผังบังคับบัญชา / ฝ่าย / แผนก
- Position & Manpower — อัตราอนุมัติ / ครอง / ว่าง
- Orders & Evidence — คำสั่งและหลักฐานต้นทาง
- Leave & Rights — การลา / สิทธิ
- Education & Capability — วุฒิ / หลักสูตร / การพัฒนา
- Welfare — สวัสดิการ
- Workflow Inbox — งานรออนุมัติ / งานของฉัน
- Reports — ภาพรวม / ช่องว่าง / แนวโน้ม
- Personnel Knowledge — SOP / ระเบียบ / Wiki
- LINE OA / LIFF — mobile entry point
- HR Support — แจ้งปัญหา / ขอแก้ข้อมูล

## 3. Data Flow

```text
User / LINE LIFF / GPT Site
        ↓
Session + Identity Verify
        ↓
RBAC / Policy Guard
        ↓
Secure HRIS API
        ↓
Personnel Master / Position Slot / Orders / Capability / Workflow
        ↓
Read View → User
        ↓
Create Request (optional)
        ↓
Supervisor / HR / Authority Approval
        ↓
Write Transaction
        ↓
Change Log + Evidence Link + Audit
        ↓
Knowledge Update (derived only; never replaces official source)
```

## 4. Frontend API Contract

กำหนด `VITE_HRIS_API_BASE` ตอน deploy โดยไม่ใส่ token หรือ secret ลง repository

Expected endpoints:

- `GET /v1/personnel/summary`
- `GET /v1/personnel/search?q=`
- `GET /v1/personnel/:personnelId`
- `GET /v1/org/command-chain`
- `GET /v1/positions/summary`
- `GET /v1/orders/latest`
- `GET /v1/workflow/my-tasks`

ตัวอย่าง summary response:

```json
{
  "asOf": "2026-10-17T12:00:00+07:00",
  "currentPersonnel": 0,
  "vacancies": 0,
  "pendingTasks": 0
}
```

> ตัวเลขด้านบนเป็น schema example เท่านั้น ไม่ใช่ข้อมูลจริง

## 5. Data Protection Rules

- Public frontend ห้ามมีรายชื่อ เลขข้าราชการ เลขประจำตัว เอกสารคำสั่งภายใน หรือ URL เอกสารที่เปิดตรงได้
- ข้อมูลจริงต้องโหลดหลัง sign-in เท่านั้น
- API ต้อง enforce RBAC ฝั่ง server; ห้ามพึ่งการซ่อนเมนูใน frontend
- คำสั่ง/เอกสารต้นทางเป็น source authority; AI/Wiki เป็น derived reference
- ทุก write ต้องมี actor, timestamp, reason, source/evidence และ before/after
- Staging branch นี้ไม่เขียน production

## 6. Deployment Path

```text
feature/service-hub-staging
        ↓ build/test/security scan
Preview / GPT Site prototype
        ↓ UAT
Secure API + Identity integration
        ↓
LINE LIFF integration
        ↓
Production release after explicit approval
```

## 7. Acceptance Checklist

- [ ] Mobile 360px ใช้งานได้
- [ ] Service tiles เปิดแต่ละโมดูลได้
- [ ] Search ใช้งานได้
- [ ] RBAC test ผ่านทุก role
- [ ] PII scan ไม่พบข้อมูลจริงใน bundle
- [ ] API ไม่คืนข้อมูลเกินสิทธิ์
- [ ] Audit log ครบสำหรับ write operations
- [ ] เอกสารต้นทางเปิดได้เฉพาะผู้มีสิทธิ์
- [ ] LINE LIFF verify server-side
- [ ] UAT ก่อน merge production
