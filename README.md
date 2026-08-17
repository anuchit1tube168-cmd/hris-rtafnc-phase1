# HRIS RTAFNC OneForAll — Phase 1

Prototype หน้า Login + Admin Dashboard  
**วิทยาลัยพยาบาลทหารอากาศ**

## Tech Stack (ฟรีทั้งหมด)

- Vite + React 18
- Tailwind CSS (Dark Theme)
- React Router
- Deploy: Vercel หรือ GitHub Pages

## Design System

- พื้นหลัง: `#0B0F19` / `#0F172A`
- การ์ด: `#1E293B`
- Accent: gradient `#7C3AED` → `#3B82F6`
- มุมโค้ง: 12px (card) / 8px (input)

## เริ่มต้นใช้งาน

```bash
# ติดตั้ง
npm install

# รัน dev server
npm run dev

# build สำหรับ production
npm run build
```

เปิดเบราว์เซอร์ที่ `http://localhost:5173`

## Mock Login

กรอก Username + Password อะไรก็ได้ → เข้าสู่ระบบ

**ทดสอบ First-login:** ใช้รหัสผ่าน `123456` หรือ `default` จะบังคับเปลี่ยนรหัสผ่านครั้งแรก  
(ยังเป็น mock auth ใน Phase 1)

## โครงสร้าง

```
src/
├── pages/
│   ├── Login.jsx
│   └── Dashboard.jsx
├── components/
│   ├── Sidebar.jsx
│   └── KpiCard.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Deploy ฟรี

### Vercel (แนะนำ)
1. Push โค้ดขึ้น GitHub
2. เข้า vercel.com → Import repo
3. Deploy

### GitHub Pages
1. แก้ `vite.config.js` base เป็นชื่อ repo
2. ใช้ action หรือ `npm run build` แล้ว push โฟลเดอร์ `dist`

## เอกสารอ้างอิง

ดูใน Google Drive โฟลเดอร์  
`HRIS RTAFNC OneForAll / 06-Phase1-Core-Foundation`

## Deploy ด้วย GitHub Pages (เร็วขึ้น)

1. ตั้ง `base` ใน `vite.config.js` ให้ตรงชื่อ repo
2. Push ขึ้น `main` → Actions จะ build + deploy อัตโนมัติ
3. Settings → Pages → Source = **GitHub Actions**

**เร่งความเร็ว:** รัน `npm install` บนเครื่องครั้งหนึ่ง แล้ว commit `package-lock.json`  
รอบถัดไป Actions จะใช้ cache ติดตั้ง dependencies เร็วขึ้นมาก
