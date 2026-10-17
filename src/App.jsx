import React, { useMemo, useState } from 'react'
import { serviceTiles, flowSteps, demoSummary, latestItems } from './data/demoData.js'

const Icon = ({ children }) => <span className="icon-badge" aria-hidden>{children}</span>

function TopBar({ onSearch }) {
  return (
    <header className="topbar">
      <div className="brand-wrap">
        <div className="brand-mark">R</div>
        <div>
          <div className="brand-title">RTAFNC Personnel Hub</div>
          <div className="brand-subtitle">วิทยาลัยพยาบาลทหารอากาศ</div>
        </div>
      </div>
      <div className="top-actions">
        <button className="round-button" onClick={onSearch} aria-label="ค้นหา">⌕</button>
        <button className="round-button" aria-label="เมนู">☰</button>
      </div>
    </header>
  )
}

function Hero({ onStart }) {
  return (
    <section className="hero-card">
      <div className="hero-copy">
        <div className="eyebrow">PERSONNEL SERVICES • ONE ENTRY POINT</div>
        <h1>กำลังพลพร้อม<br/>ข้อมูลครบ<br/>บริหารง่าย</h1>
        <p>Service Hub สำหรับทำเนียบกำลังพล ตำแหน่ง คำสั่ง สิทธิ การลา การศึกษา รายงาน และงานอนุมัติ โดยคงฐานข้อมูลทางการเป็น Source of Truth</p>
        <div className="hero-actions">
          <button className="primary-button" onClick={onStart}>เริ่มใช้งาน</button>
          <button className="ghost-button">ดู Flow ระบบ</button>
        </div>
      </div>
      <div className="hero-art" aria-hidden>
        <div className="art-circle art-circle-one"></div>
        <div className="art-circle art-circle-two"></div>
        <div className="hero-phone">
          <div className="phone-notch"></div>
          <div className="phone-title">Personnel Hub</div>
          <div className="phone-chip">Secure • RBAC</div>
          <div className="phone-grid">
            <span>👥</span><span>📄</span><span>🎓</span><span>📊</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function SearchPanel({ search, setSearch }) {
  return (
    <div className="search-panel" id="search-panel">
      <div className="search-label">ค้นหาบริการ</div>
      <div className="search-box">
        <span>⌕</span>
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="ชื่อบริการ เช่น คำสั่ง / ลา / ตำแหน่ง / รายงาน" />
        {search && <button onClick={() => setSearch('')}>×</button>}
      </div>
    </div>
  )
}

function ServiceGrid({ search }) {
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return serviceTiles
    return serviceTiles.filter((item) => `${item.title} ${item.subtitle}`.toLowerCase().includes(q))
  }, [search])

  return (
    <section>
      <div className="section-head">
        <div>
          <div className="section-kicker">MENU</div>
          <h2>บริการกำลังพล</h2>
        </div>
        <span className="section-meta">{filtered.length} บริการ</span>
      </div>
      <div className="service-grid">
        {filtered.map((item) => (
          <button className={`service-tile tone-${item.tone}`} key={item.id}>
            <Icon>{item.icon}</Icon>
            <div className="service-title">{item.title}</div>
            <div className="service-subtitle">{item.subtitle}</div>
            <div className="tile-arrow">↗</div>
          </button>
        ))}
      </div>
    </section>
  )
}

function SummarySection() {
  return (
    <section className="command-card">
      <div className="command-heading">
        <div>
          <div className="section-kicker light">OVERVIEW</div>
          <h2>{demoSummary.title}</h2>
        </div>
        <span className="status-pill">{demoSummary.asOf}</span>
      </div>
      <div className="summary-grid">
        {demoSummary.cards.map((card) => (
          <div className="summary-card" key={card.label}>
            <div className="summary-label">{card.label}</div>
            <div className="summary-value">{card.value}</div>
            <div className="summary-hint">{card.hint}</div>
          </div>
        ))}
      </div>
      <div className="privacy-note">ข้อมูลจริงจะไม่ถูกฝังในหน้าเว็บสาธารณะ ระบบต้องดึงผ่าน Secure API หลังการยืนยันตัวตนและตรวจ RBAC เท่านั้น</div>
    </section>
  )
}

function FlowSection() {
  return (
    <section id="flow" className="flow-section">
      <div className="section-head">
        <div>
          <div className="section-kicker">SYSTEM FLOW</div>
          <h2>Flow ตั้งแต่เข้าใช้งานจนจบงาน</h2>
        </div>
        <span className="section-meta">8 ขั้นตอน</span>
      </div>
      <div className="flow-list">
        {flowSteps.map((step, index) => (
          <div className="flow-row" key={step.no}>
            <div className="flow-number">{step.no}</div>
            <div className="flow-content">
              <div className="flow-title">{step.title}</div>
              <div className="flow-detail">{step.detail}</div>
            </div>
            {index < flowSteps.length - 1 && <div className="flow-line" />}
          </div>
        ))}
      </div>
    </section>
  )
}

function LatestSection() {
  return (
    <section className="latest-section">
      <div className="section-head">
        <div>
          <div className="section-kicker">QUICK UPDATE</div>
          <h2>สิ่งที่ต้องติดตาม</h2>
        </div>
      </div>
      <div className="latest-list">
        {latestItems.map((item) => (
          <div className="latest-item" key={item.title}>
            <div className="latest-type">{item.type}</div>
            <div className="latest-main">
              <div className="latest-title">{item.title}</div>
              <div className="latest-meta">{item.meta}</div>
            </div>
            <div className="latest-arrow">›</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="เมนูหลัก">
      <button className="active"><span>⌂</span><small>หน้าแรก</small></button>
      <button><span>▦</span><small>เมนู</small></button>
      <button><span>✓</span><small>งานของฉัน</small></button>
      <button><span>♙</span><small>โปรไฟล์</small></button>
    </nav>
  )
}

export default function App() {
  const [search, setSearch] = useState('')

  const scrollToSearch = () => {
    document.getElementById('search-panel')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    setTimeout(() => document.querySelector('#search-panel input')?.focus(), 350)
  }

  const scrollToFlow = () => document.getElementById('flow')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="app-shell">
      <TopBar onSearch={scrollToSearch} />
      <main>
        <Hero onStart={scrollToSearch} />
        <SearchPanel search={search} setSearch={setSearch} />
        <ServiceGrid search={search} />
        <SummarySection />
        <div onClick={scrollToFlow} role="button" tabIndex={0} className="flow-jump">ดู Workflow ทั้งระบบ <span>↓</span></div>
        <FlowSection />
        <LatestSection />
        <footer className="footer-card">
          <div className="footer-mark">RTAFNC</div>
          <div>
            <strong>Personnel Hub — Staging</strong>
            <div>UI shell สำหรับ GPT Site / Web / LIFF • Production write disabled</div>
          </div>
        </footer>
      </main>
      <BottomNav />
    </div>
  )
}
