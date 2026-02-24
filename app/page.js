"use client";
import { useState } from "react";
import Image from "next/image";

/* ─── DATA ────────────────────────────── */
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/regular-tests", label: "Test Series" },
  { href: "/scholarships", label: "Scholarships" },
  { href: "/campus", label: "Campus" },
  { href: "/admissions", label: "Admissions" },
];

const courses = [
  { icon: "🏥", name: "NEET – UG", desc: "Biology, Physics & Chemistry with NCERT-based notes, weekly tests and dedicated doubt sessions.", badge: "XI · XII · Dropper" },
  { icon: "⚛️", name: "JEE Mains", desc: "Conceptual mastery with daily practice sheets, OMR tests and detailed rank analysis.", badge: "XI · XII · Dropper" },
  { icon: "🚀", name: "JEE Advanced", desc: "Advanced problem solving, topic-wise assignments and full-length mocks on IIT-JEE pattern.", badge: "XII · Dropper" },
  { icon: "📚", name: "Foundation", desc: "Strong Maths & Science base for Classes 6–10 with Olympiad prep and board support.", badge: "Class VI – X" },
];

const achievers = [
  { img: "/2739179f-d57e-4f6f-af29-e2ae1832c9b3.jpg", name: "Darsheel Gupta", score: "99.92%ile", exam: "JEE Mains 2026" },
  { img: "/8ec962ff-56d5-4b32-bf5b-b93c5046f6d4.jpg", name: "Saurav Akarniya", score: "99.50%ile", exam: "JEE Mains 2026" },
  { img: "/5970b1e5-c6e5-4f14-82d5-2b1472b35ee0.jpg", name: "Prince Choudhary", score: "98.93%ile", exam: "JEE Mains 2026" },
  { img: "/5a9d545f-4659-4b5a-9bfb-e36fb21b8118.jpg", name: "Gajender Singh", score: "98.66%ile", exam: "JEE Mains 2026" },
  { img: "/1f0735f2-b8be-4e49-a823-bdb129b1b624.jpg", name: "Charit Kulhari", score: "98.00%ile", exam: "JEE Mains 2026" },
];

const whyPoints = [
  { icon: "🎓", title: "Experienced Core Faculty", desc: "Full-time dedicated faculty for NEET and JEE with a strong track record of results." },
  { icon: "📋", title: "Planned Study Schedule", desc: "Weekly planners, clear targets and regular assessments for every batch." },
  { icon: "💬", title: "Personal Mentorship", desc: "Individual doubt support, guidance and motivation for serious aspirants." },
  { icon: "📝", title: "Exam Pattern Based Tests", desc: "OMR-based tests, detailed reports and rank analysis as per the latest pattern." },
];

const msatPoints = [
  "Up to 90% Scholarship on Course Fees",
  "For IIT-JEE (Mains & Advanced) and NEET",
  "Test Date: 08 March 2026",
  "Venue: Grand Sikar Road, Harmara, Jaipur",
];

/* ─── APP ─────────────────────────────── */
export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      {/* ── TOPBAR ─────────────────────────────────────────── */}
      <div className="topbar">
        <div className="container">
          <div className="topbar-inner">
            <span className="topbar-pill">Admissions Open 2026-27</span>
            <div className="topbar-right">
              <a href="tel:+919460144707">📞 9460144707</a>
              <a href="tel:+919351976060">📞 9351976060</a>
              <a href="mailto:mehtacollegeadmission@gmail.com">✉ Email Us</a>
            </div>
          </div>
        </div>
      </div>

      {/* ── NAVBAR ─────────────────────────────────────────── */}
      <nav className="navbar" role="navigation" aria-label="Main Navigation">
        <div className="nav-inner">
          <a href="/" className="nav-brand" aria-label="Mehta Career Institute">
            <Image src="/789e4a4f-e137-47d6-891f-4e35bd6411d1.jpg" alt="MCI Logo" width={52} height={52} priority />
            <div className="nav-brand-text">
              <strong>Mehta Career Institute</strong>
              <span>A Unit of Mehta Group of Schools & Colleges</span>
            </div>
          </a>

          <ul className="nav-links" role="menubar">
            {navLinks.map(l => (
              <li key={l.href} role="none">
                <a href={l.href} className={l.href === "/" ? "active" : ""} role="menuitem">{l.label}</a>
              </li>
            ))}
          </ul>

          <div className="nav-end">
            <a href="/admissions" className="btn btn-gold" id="nav-enquiry-btn">Enquire Now</a>
          </div>

          <button className="hamburger" id="hamburger-btn" aria-label="Open menu" onClick={() => setDrawerOpen(true)}>
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* ── MOBILE DRAWER ──────────────────────────────────── */}
      <div className={`drawer-overlay${drawerOpen ? " open" : ""}`} onClick={() => setDrawerOpen(false)}>
        <div className={`drawer${drawerOpen ? " open" : ""}`} onClick={e => e.stopPropagation()}>
          <div className="drawer-head">
            <strong>MCI Jaipur</strong>
            <button className="drawer-close" onClick={() => setDrawerOpen(false)} aria-label="Close">✕</button>
          </div>
          {navLinks.map(l => <a key={l.href} href={l.href} onClick={() => setDrawerOpen(false)}>{l.label}</a>)}
          <div className="drawer-cta">
            <a href="/admissions" className="btn btn-gold" style={{ width: "100%", justifyContent: "center" }}>Enquire Now</a>
          </div>
        </div>
      </div>

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="hero" id="hero" aria-label="Mehta Career Institute Hero">
        <div className="hero-inner">
          {/* Left: Text Content */}
          <div className="hero-left">
            <div className="hero-tag">
              <span className="dot" />
              IIT-JEE · NEET · Foundation
            </div>
            <h1 className="hero-title">
              Your Dream Rank <br />
              Starts Here at <em>MCI Jaipur</em>
            </h1>
            <p className="hero-desc">
              Expert classroom coaching for JEE Mains, JEE Advanced, NEET-UG and Foundation from Class 6–12 at Grand Sikar Road, Harmara, Jaipur.
            </p>
            <div className="hero-actions">
              <a href="/admissions" className="btn btn-gold" id="hero-enquire-btn">Enquire Now →</a>
              <a href="/courses" className="btn btn-outline-w">View Courses</a>
            </div>
            <div className="hero-pills">
              <span className="hero-pill"><span className="hero-pill-dot" />Regular Test Series</span>
              <span className="hero-pill"><span className="hero-pill-dot" />Expert Faculty</span>
              <span className="hero-pill"><span className="hero-pill-dot" />Doubt Sessions</span>
            </div>
          </div>

          {/* Right: MCI Banner (desktop only) */}
          <div className="hero-right">
            <div className="hero-banner-wrap">
              <Image
                src="/5fd9aa0b-fa66-483a-959a-e6a01aded1f1.jpg"
                alt="Mehta Career Institute – IIT-JEE NEET Foundation Jaipur"
                width={560}
                height={400}
                style={{ width: "100%", height: "auto" }}
                priority
              />
            </div>
          </div>
        </div>

        {/* Mobile-only banner */}
        <div className="hero-mobile-banner">
          <Image
            src="/5fd9aa0b-fa66-483a-959a-e6a01aded1f1.jpg"
            alt="Mehta Career Institute – IIT-JEE NEET Foundation Jaipur"
            width={600}
            height={420}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </section>

      {/* ── STATS STRIP ────────────────────────────────────── */}
      <div className="stats-strip" aria-label="Key Statistics">
        <div className="container">
          <div className="stats-row">
            {[
              { n: "500", em: "+", l: "Students Enrolled" },
              { n: "99", em: ".92%", l: "Top JEE Percentile" },
              { n: "10", em: "+", l: "Years of Excellence" },
              { n: "4", em: "+", l: "Courses Offered" },
            ].map(s => (
              <div className="stat-item" key={s.l}>
                <div className="stat-n">{s.n}<em>{s.em}</em></div>
                <div className="stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FEATURES ───────────────────────────────────────── */}
      <section className="section" id="features" aria-label="Key Features">
        <div className="container">
          <div className="section-header">
            <span className="tag">What Sets Us Apart</span>
            <h2 className="h2">Built for <em>Serious Aspirants</em></h2>
            <p className="lead">Four pillars that drive every MCI student towards success in JEE and NEET.</p>
          </div>
          <div className="features-row">
            {[
              { n: "01", icon: "📝", title: "Regular Tests", desc: "Weekly OMR test series matching the exact pattern of JEE and NEET examinations." },
              { n: "02", icon: "👨‍🏫", title: "Expert Faculty", desc: "Experienced full-time faculty specialised in Physics, Chemistry, Biology and Maths." },
              { n: "03", icon: "💡", title: "Doubt Sessions", desc: "Dedicated daily and weekly doubt clearing so no concept is left unclear." },
              { n: "04", icon: "🏆", title: "Real Results", desc: "Proven selections in JEE Mains 2026 with multiple 99+ percentile scorers." },
            ].map(f => (
              <div className="feat-card" key={f.n}>
                <div className="feat-n">{f.n}</div>
                <div className="feat-icon">{f.icon}</div>
                <div className="feat-title">{f.title}</div>
                <div className="feat-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSES ────────────────────────────────────────── */}
      <section className="section courses-section" id="courses" aria-label="Courses Offered">
        <div className="container">
          <div className="section-header">
            <span className="tag">Our Programs</span>
            <h2 className="h2">Courses at <em>MCI Jaipur</em></h2>
            <p className="lead">Structured classroom programs for every stage — from Foundation to Dropper.</p>
          </div>
          <div className="courses-grid">
            {courses.map(c => (
              <div className="course-card" key={c.name}>
                <div className="course-icon">{c.icon}</div>
                <div className="course-name">{c.name}</div>
                <div className="course-desc">{c.desc}</div>
                <span className="course-badge">{c.badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STAR ACHIEVERS ─────────────────────────────────── */}
      <section className="section achievers-section" id="results" aria-label="Star Achievers">
        <div className="container">
          <div className="section-header">
            <span className="tag">JEE Mains 2026</span>
            <h2 className="h2">Our <em>Star Achievers</em></h2>
            <p className="lead">Students who cracked JEE Mains 2026 alongside Class XII — pure hard work & guidance.</p>
          </div>
          <div className="achievers-grid">
            {achievers.map(a => (
              <div className="ach-card" key={a.name}>
                <Image className="ach-img" src={a.img} alt={`${a.name} – ${a.score}`} width={300} height={400}
                  style={{ width: "100%", height: "250px", objectFit: "cover", objectPosition: "top center" }} />
                <div className="ach-info">
                  <div className="ach-name">{a.name}</div>
                  <div className="ach-score">{a.score}</div>
                  <span className="ach-exam">{a.exam}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="group-banner">
            <Image src="/93ac4c6f-e82a-41db-93ac-39d80953e993.jpg" alt="All JEE Mains 2026 Achievers – Mehta Career Institute"
              width={1200} height={700} style={{ width: "100%", height: "auto" }} />
          </div>
        </div>
      </section>

      {/* ── BANNERS ────────────────────────────────────────── */}
      <section className="section banners-section" id="banners" aria-label="Achievement Banners">
        <div className="container">
          <div className="section-header">
            <span className="tag">Champions of MCI</span>
            <h2 className="h2">JEE Mains 2026 — <em>Top Scores</em></h2>
          </div>
          <div className="banners-grid">
            {[
              { src: "/2739179f-d57e-4f6f-af29-e2ae1832c9b3.jpg", alt: "Darsheel Gupta 99.92 percentile JEE Mains 2026" },
              { src: "/8ec962ff-56d5-4b32-bf5b-b93c5046f6d4.jpg", alt: "Saurav Akarniya 99.50 percentile JEE Mains 2026" },
              { src: "/5970b1e5-c6e5-4f14-82d5-2b1472b35ee0.jpg", alt: "Prince Choudhary 98.93 percentile JEE Mains 2026" },
              { src: "/1f0735f2-b8be-4e49-a823-bdb129b1b624.jpg", alt: "Charit Kulhari 98.00 percentile JEE Mains 2026" },
            ].map(b => (
              <div className="banner-item" key={b.alt}>
                <Image src={b.src} alt={b.alt} width={400} height={530} style={{ width: "100%", height: "auto" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ──────────────────────────────────── */}
      <section className="section" id="why-us" aria-label="Why Choose Mehta Career Institute">
        <div className="container">
          <div className="why-grid">
            <div className="why-visual">
              <Image src="/5fd9aa0b-fa66-483a-959a-e6a01aded1f1.jpg" alt="Mehta Career Institute – IIT-JEE NEET Jaipur"
                width={640} height={520} style={{ width: "100%", height: "auto" }} />
              <div className="why-badge">🏅 Admissions Open 2026-27</div>
            </div>
            <div>
              <span className="tag">Why Choose Us</span>
              <h2 className="h2">Focused on Your <em>Success</em></h2>
              <p className="lead">Result-driven teaching, disciplined environment and personal mentorship — all under one roof.</p>
              <div className="why-items">
                {whyPoints.map(w => (
                  <div className="why-item" key={w.title}>
                    <div className="why-icon">{w.icon}</div>
                    <div className="why-text">
                      <h5>{w.title}</h5>
                      <p>{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── M-SAT SCHOLARSHIP ──────────────────────────────── */}
      <section className="section msat-section" id="scholarship" aria-label="M-SAT Scholarship Test">
        <div className="container">
          <div className="msat-grid">
            <div className="msat-content">
              <span className="tag">Scholarship Opportunity</span>
              <h2 className="h2">M-SAT 2026 — <em>Scholarship Test</em></h2>
              <p className="lead">Earn up to 90% scholarship on course fees through Mehta Scholarship Admission Test.</p>
              <ul className="msat-list">
                {msatPoints.map(p => <li className="msat-li" key={p}>{p}</li>)}
              </ul>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="/scholarships" className="btn btn-gold" id="msat-btn">Register for M-SAT</a>
                <a href="tel:+919460144707" className="btn btn-ghost" style={{ color: "var(--gold)", borderColor: "rgba(251,169,40,0.4)" }}>
                  📞 Call Now
                </a>
              </div>
            </div>
            <div className="msat-visual">
              <Image src="/ff547a2f-d952-4129-8970-35af43b26abf.jpg" alt="M-SAT 2026 Scholarship Test Mehta Career Institute"
                width={520} height={700} style={{ width: "100%", height: "auto" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── CAMPUS ─────────────────────────────────────────── */}


      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="cta-section" id="enquiry" aria-label="Contact and Enquiry">
        <div className="container">
          <span className="tag" style={{ background: "rgba(251,169,40,0.12)", borderColor: "rgba(251,169,40,0.25)" }}>
            Start Your Journey
          </span>
          <h2 className="h2">Ready to Crack <em>JEE or NEET?</em></h2>
          <p className="lead">
            Join Mehta Career Institute — Jaipur&apos;s trusted name for IIT-JEE, NEET and Foundation coaching.
          </p>
          <div className="cta-btns">
            <a href="/admissions" className="btn btn-gold" id="cta-btn">Enquire for Admission</a>
            <a href="/courses" className="btn btn-outline-w">View All Courses</a>
          </div>
          <div className="cta-contacts">
            <a href="tel:+919460144707" className="cta-ct">📞 +91-9460144707</a>
            <a href="tel:+919351976060" className="cta-ct">📞 +91-9351976060</a>
            <a href="mailto:mehtacollegeadmission@gmail.com" className="cta-ct">✉ mehtacollegeadmission@gmail.com</a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────── */}
      <footer className="footer" aria-label="Footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="f-brand-logo">
                <Image src="/789e4a4f-e137-47d6-891f-4e35bd6411d1.jpg" alt="MCI Logo" width={48} height={48}
                  style={{ borderRadius: "50%", objectFit: "cover" }} />
                <div>
                  <strong>Mehta Career Institute</strong><br />
                  <span style={{ fontSize: 10, color: "var(--gold)", letterSpacing: 1, textTransform: "uppercase" }}>
                    IIT-JEE · NEET · Foundation
                  </span>
                </div>
              </div>
              <p className="f-about">
                A Unit of Mehta Group of Schools & Colleges. Building India&apos;s future doctors and engineers from Jaipur with disciplined, result-oriented coaching.
              </p>
              <div className="f-socials">
                {["📘", "📸", "▶", "🔗"].map((ic, i) => (
                  <a key={i} href="#" className="f-social" aria-label={`Social ${i + 1}`}>{ic}</a>
                ))}
              </div>
            </div>
            <div className="f-col">
              <h4>Quick Links</h4>
              <ul className="f-links">
                {navLinks.map(l => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
              </ul>
            </div>
            <div className="f-col">
              <h4>Courses</h4>
              <ul className="f-links">
                {courses.map(c => <li key={c.name}><a href="/courses">{c.name}</a></li>)}
                <li><a href="/scholarships">M-SAT Scholarship</a></li>
              </ul>
            </div>
            <div className="f-col">
              <h4>Contact</h4>
              <div className="f-contact-item"><em>📍</em> Grand Sikar Road, Harmara, Jaipur, Rajasthan</div>
              <div className="f-contact-item">
                <em>📞</em>
                <div>
                  <a href="tel:+919460144707" style={{ color: "rgba(255,255,255,0.5)" }}>+91-9460144707</a><br />
                  <a href="tel:+919351976060" style={{ color: "rgba(255,255,255,0.5)" }}>+91-9351976060</a>
                </div>
              </div>
              <div className="f-contact-item">
                <em>✉</em>
                <a href="mailto:mehtacollegeadmission@gmail.com" style={{ color: "rgba(255,255,255,0.5)", wordBreak: "break-all" }}>
                  mehtacollegeadmission@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="f-bottom">
            <span>© 2026 Mehta Career Institute. All rights reserved.</span>
            <span>Jaipur, Rajasthan, India</span>
          </div>
        </div>
      </footer>
    </>
  );
}
