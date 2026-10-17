export const serviceTiles = [
  { id: 'directory', title: 'ทำเนียบกำลังพล', subtitle: 'ค้นหาบุคลากร / หน่วย / ตำแหน่ง', icon: '👥', tone: 'blue' },
  { id: 'org', title: 'โครงสร้างหน่วย', subtitle: 'ผังบังคับบัญชา / ฝ่าย / แผนก', icon: '🧭', tone: 'mint' },
  { id: 'positions', title: 'ตำแหน่งและอัตรา', subtitle: 'อัตราอนุมัติ / ครอง / ว่าง', icon: '🪪', tone: 'amber' },
  { id: 'orders', title: 'คำสั่ง / เอกสาร', subtitle: 'ค้นหาและเปิดหลักฐานต้นทาง', icon: '📄', tone: 'sky' },
  { id: 'education', title: 'อบรม / การศึกษา', subtitle: 'วุฒิ / หลักสูตร / แผนพัฒนา', icon: '🎓', tone: 'green' },
  { id: 'leave', title: 'ลา / สิทธิ', subtitle: 'คำขอ / อนุมัติ / สถานะ', icon: '🗓️', tone: 'rose' },
  { id: 'welfare', title: 'สวัสดิการ', subtitle: 'สิทธิประโยชน์ / แบบฟอร์ม', icon: '💙', tone: 'violet' },
  { id: 'workflow', title: 'งานที่ต้องดำเนินการ', subtitle: 'Inbox / อนุมัติ / ติดตาม', icon: '✅', tone: 'lime' },
  { id: 'reports', title: 'รายงาน / สถิติ', subtitle: 'ภาพรวมกำลัง / ช่องว่าง / แนวโน้ม', icon: '📊', tone: 'teal' },
  { id: 'knowledge', title: 'Personnel Knowledge', subtitle: 'SOP / ระเบียบ / Wiki', icon: '📚', tone: 'cream' },
  { id: 'line', title: 'LINE OA / LIFF', subtitle: 'ทางเข้าหลักบนมือถือ', icon: '💬', tone: 'line' },
  { id: 'support', title: 'ติดต่อ HR', subtitle: 'แจ้งปัญหา / ขอแก้ข้อมูล', icon: '☎️', tone: 'sand' },
]

export const flowSteps = [
  { no: 1, title: 'ค้นหา / เลือกบริการ', detail: 'ผู้ใช้เริ่มจาก Search หรือ Service Tile' },
  { no: 2, title: 'ยืนยันตัวตน + RBAC', detail: 'ตรวจบัญชีและสิทธิ์ก่อนอ่านข้อมูลจริง' },
  { no: 3, title: 'อ่าน Personnel Master', detail: 'โหลดข้อมูลบุคคล ตำแหน่ง หน่วย และสถานะ' },
  { no: 4, title: 'ตรวจหลักฐาน', detail: 'ผูกคำสั่ง เอกสาร และแหล่งอ้างอิงต้นทาง' },
  { no: 5, title: 'ทำรายการ / คำขอ', detail: 'เช่น ลา แก้ข้อมูล ขอเอกสาร หรืออนุมัติ' },
  { no: 6, title: 'Workflow อนุมัติ', detail: 'ผู้บังคับบัญชา → HR → ผู้มีอำนาจตามประเภทงาน' },
  { no: 7, title: 'บันทึก Change Log', detail: 'เก็บผู้ดำเนินการ เวลา เหตุผล และเอกสารอ้างอิง' },
  { no: 8, title: 'อัปเดต Knowledge', detail: 'สรุปเป็น SOP/Wiki โดยไม่เขียนทับฐานทางการ' },
]

export const demoSummary = {
  title: 'Personnel Command Center',
  asOf: 'STAGING • DEMO DATA ONLY',
  cards: [
    { label: 'กำลังพลปัจจุบัน', value: '—', hint: 'โหลดจาก secure API หลัง sign-in' },
    { label: 'ตำแหน่งว่าง', value: '—', hint: 'คำนวณจาก Position Slot Master' },
    { label: 'งานรออนุมัติ', value: '0', hint: 'ตัวอย่าง UI ยังไม่เชื่อม production' },
  ],
}

export const latestItems = [
  { type: 'คำสั่ง', title: 'รายการคำสั่งล่าสุด', meta: 'แสดงเมื่อผู้ใช้มีสิทธิ์อ่าน' },
  { type: 'กำลังพล', title: 'การเปลี่ยนแปลงตำแหน่ง', meta: 'ต้องมี Source Authority ก่อนเปลี่ยน Current' },
  { type: 'ระบบ', title: 'Data Quality Queue', meta: 'รายการชื่อ/รูป/ตำแหน่งที่ต้องตรวจสอบ' },
]
