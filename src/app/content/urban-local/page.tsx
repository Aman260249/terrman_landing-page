'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './urbanlocal.module.css';

const services = [
  { num: '01', title: 'Urban Roads',           desc: 'Comprehensive planning and design of arterial, sub-arterial, and collector road networks within city limits.' },
  { num: '02', title: 'Storm Water Drainage',  desc: 'Sustainable drainage master plans, flood mitigation, and channel design for climate-resilient cities.' },
  { num: '03', title: 'Solid Waste Management',desc: 'Facility planning, collection route optimization, and processing infrastructure for modern waste systems.' },
  { num: '04', title: 'Public Utilities',      desc: 'Water supply, sewerage, and underground utility network design integrated with urban master plans.' },
];

export default function UrbanLocalBodiesPage() {
  return (
    <main className={styles.page}>

      {/* ══ BAND 1 — NARROW EYEBROW STRIP ══ */}
      <div className={styles.topStrip}>
        <div className={styles.topStripInner}>
          <div className={styles.stripLeft}>
            <Link href="/" className={styles.stripLink}>Home</Link>
            <span className={styles.stripDiv}>/</span>
            <Link href="/#services" className={styles.stripLink}>Services</Link>
            <span className={styles.stripDiv}>/</span>
            <span className={styles.stripCurrent}>Urban Local Bodies</span>
          </div>
          <div className={styles.stripRight}>
            <span className={styles.stripDot} />
            Urban Infrastructure Division
          </div>
        </div>
      </div>

      {/* ══ BAND 2 — OVERSIZED TITLE BAND ══ */}
      <div className={styles.titleBand}>
        <div className={styles.titleBandInner}>
          <div className={styles.titleLeft}>
            <span className={styles.titleEyebrow}>Municipal Engineering</span>
            <h1 className={styles.mainTitle}>
              <span className={styles.titleLine1}>Urban</span>
              <span className={styles.titleLine2}>Local</span>
              <span className={styles.titleLine3}>Bodies.</span>
            </h1>
          </div>
          <div className={styles.titleRight}>
            <p className={styles.titleDesc}>
              Partnering with ULBs to enhance municipal infrastructure and improve urban living standards across India's rapidly growing cities.
            </p>
            <div className={styles.titleStats}>
              <div className={styles.tStat}>
                <span className={styles.tStatNum}>50+</span>
                <span className={styles.tStatLabel}>ULB Projects</span>
              </div>
              <div className={styles.tStatDiv} />
              <div className={styles.tStat}>
                <span className={styles.tStatNum}>12</span>
                <span className={styles.tStatLabel}>States Covered</span>
              </div>
              <div className={styles.tStatDiv} />
              <div className={styles.tStat}>
                <span className={styles.tStatNum}>100%</span>
                <span className={styles.tStatLabel}>Govt Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══ BAND 3 — ASYMMETRIC IMAGE + INTRO ══ */}
      <div className={styles.imageBand}>

        {/* BIG image — 60% width */}
        <div className={styles.bigImageWrap}>
          <Image
            src="/content-images/urban-bg.jpg"
            alt="Urban infrastructure"
            fill
            className={styles.bigImage}
            priority
          />
          <div className={styles.bigImageOverlay} />

          {/* overlaid pull quote on image */}
          <div className={styles.imageQuote}>
            <span className={styles.imageQuoteMark}>"</span>
            <p className={styles.imageQuoteText}>
              Resilient, scalable, and responsive to the pressures of modern cities.
            </p>
          </div>
        </div>

        {/* right info column — 40% */}
        <div className={styles.imageSideCol}>

          <div className={styles.sideTag}>
            <div className={styles.sideTagLine} />
            <span>Our Role</span>
          </div>

          <p className={styles.sideBody}>
            We actively partner with Urban Local Bodies to enhance municipal infrastructure. Our services focus on comprehensive planning for urban roads, storm water drainage systems, solid waste management facilities, and public utilities.
          </p>

          <p className={styles.sideBody}>
            We assist ULBs in conducting condition assessments, formulating master plans, and providing project management support for urban renewal and connectivity projects.
          </p>

          {/* compliance badges */}
          <div className={styles.badges}>
            {['Smart Cities', 'AMRUT 2.0', 'PMAY-U', 'JNNURM'].map((b, i) => (
              <span key={i} className={styles.badge}>{b}</span>
            ))}
          </div>

        </div>
      </div>

      {/* ══ BAND 4 — HORIZONTAL SERVICE ROWS ══ */}
      <div className={styles.servicesBand}>
        <div className={styles.servicesBandInner}>

          <div className={styles.servicesHeader}>
            <h2 className={styles.servicesHeading}>
              What We<br/><em>Deliver</em>
            </h2>
            <p className={styles.servicesSubhead}>
              Four core pillars of urban infrastructure consultancy.
            </p>
          </div>

          <div className={styles.serviceRows}>
            {services.map((s, i) => (
              <div key={i} className={styles.serviceRow}>
                <span className={styles.rowNum}>{s.num}</span>
                <div className={styles.rowDivider} />
                <div className={styles.rowContent}>
                  <h3 className={styles.rowTitle}>{s.title}</h3>
                  <p className={styles.rowDesc}>{s.desc}</p>
                </div>
                <div className={styles.rowArrow}>↗</div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ══ BAND 5 — FULL WIDTH BOTTOM CTA BAND ══ */}
      <div className={styles.ctaBand}>
        <div className={styles.ctaBandInner}>
          <div className={styles.ctaLeft}>
            <h2 className={styles.ctaHeading}>
              Building Better<br/>
              <span>Cities Together.</span>
            </h2>
          </div>
          <div className={styles.ctaRight}>
            <p className={styles.ctaDesc}>
              Our consultancy ensures compliance with local governance requirements and focuses on solutions that are resilient, scalable, and responsive to demographic and environmental pressures.
            </p>
            <Link href="/#contact" className={styles.ctaBtn}>
              <span>Partner With Us</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* ── BACK ── */}
      <div className={styles.backWrap}>
        <Link href="/#services" className={styles.backLink}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M15 8H1M7 2L1 8l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Back to Services</span>
        </Link>
      </div>

    </main>
  );
}