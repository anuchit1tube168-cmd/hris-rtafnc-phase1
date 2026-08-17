import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ถ้าชื่อ repo ไม่ใช่ hris-rtafnc-phase1 ให้แก้ base ให้ตรงชื่อ repo
export default defineConfig({
  plugins: [react()],
  base: '/hris-rtafnc-phase1/',
})
