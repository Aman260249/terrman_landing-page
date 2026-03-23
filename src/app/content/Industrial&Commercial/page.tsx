'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './IndustrialCommercial.module.css';

const highlights = [
  { num: '01', title: 'Structural Design',       desc: 'Advanced structural engineering for manufacturing workshops, corporate complexes, and logistics hubs.' },
  { num: '02', title: 'Foundation Engineering',  desc: 'Detailed geotechnical assessment and foundation design for heavy industrial and multi-story commercial loads.' },
  { num: '03', title: 'Utility & MEP Planning',  desc: 'Comprehensive HVAC, fire safety, electrical, and utility planning integrated into the project design.' },
  { num: '04', title: 'Turn-key PMC',             desc: 'End-to-end project management consultancy ensuring safety code compliance and on-time delivery.' },
];

const stats = [
  { num: '30+', label: 'Industrial Projects' },
  { num: '100%', label: 'Code Compliant'      },
  { num: '8+',  label: 'Years Experience'     },
  { num: '6',   label: 'Core Sectors'         },
];

const keyPoints = [
  'Manufacturing Workshops',
  'Corporate Complexes',
  'Commercial Business Parks',
  'Logistics & Warehousing',
  'Energy-Efficient Design',
  'Industrial Safety Codes',
];

export default function IndustrialCommercialPage() {
  return (
    <main className={styles.page}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/content-images/high_bg_343.jpg"
            alt="Industrial and commercial development"
            fill
            className={styles.heroBgImg}
            priority
          />
          <div className={styles.heroOverlayLeft} />
          <div className={styles.heroOverlayBottom} />
        </div>
        <div className={styles.heroGridLines} />

        <div className={styles.heroInner}>

          <div className={styles.breadcrumb}>
            <Link href="/" className={styles.breadLink}>Home</Link>
            <span className={styles.breadSep}>/</span>
            <Link href="/#services" className={styles.breadLink}>Services</Link>
            <span className={styles.breadSep}>/</span>
            <span className={styles.breadCurrent}>Industrial & Commercial</span>
          </div>

          <div className={styles.eyebrow}>
            <div className={styles.eyebrowDot} />
            <span className={styles.eyebrowText}>Industrial Infrastructure</span>
          </div>

          <h1 className={styles.heroHeading}>
            <span className={styles.headingOutline}>Industrial</span>
            <span className={styles.headingSolid}>&amp; Commercial.</span>
          </h1>

          <p className={styles.heroDesc}>
            Turn-key engineering and project management for large-scale manufacturing, corporate complexes, business parks, and logistics hubs — built for performance.
          </p>

          <div className={styles.heroStats}>
            {stats.map((s, i) => (
              <div key={i} className={styles.heroStat}>
                <span className={styles.heroStatNum}>{s.num}</span>
                <span className={styles.heroStatLabel}>{s.label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── INTRO ── */}
      <section className={styles.introSection}>
        <div className={styles.dotGrid} />
        <div className={styles.introInner}>

          <div className={styles.introLeft}>
            <div className={styles.sectionTag}>
              <div className={styles.tagLine} />
              <span>Overview</span>
            </div>
            <h2 className={styles.introHeading}>
              Engineered<br/>
              <span>for Industry.</span>
            </h2>
            <div className={styles.introAccentLine} />
          </div>

          <div className={styles.introRight}>
            <p className={styles.introPara}>
              We offer specialized detailed engineering and project management consultancy for large-scale Industrial and Commercial Development. This sector includes turn-key engineering for specialized manufacturing workshops, multi-story corporate complexes, commercial business parks, and logistics hubs.
            </p>
            <p className={styles.introPara}>
              Our services encompass <strong>structural design</strong>, foundation engineering, utility planning (HVAC, fire safety, electrical), and site planning to ensure optimal functional flow and swift project completion.
            </p>
          </div>

        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section className={styles.highlightsSection}>
        <div className={styles.highlightsInner}>
          <div className={styles.highlightsHeader}>
            <div className={styles.sectionTag}>
              <div className={styles.tagLine} />
              <span>What We Deliver</span>
            </div>
            <h2 className={styles.highlightsHeading}>
              Core <span>Capabilities</span>
            </h2>
          </div>

          <div className={styles.highlightsGrid}>
            {highlights.map((h, i) => (
              <div key={i} className={styles.hlCard}>
                <div className={styles.hlTopBar} />
                <span className={styles.hlNum}>{h.num}</span>
                <h3 className={styles.hlTitle}>{h.title}</h3>
                <p className={styles.hlDesc}>{h.desc}</p>
                <div className={styles.hlDivider} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DETAIL ── */}
      <section className={styles.detailSection}>
        <div className={styles.detailInner}>

          <div className={styles.detailImageWrap}>
            <Image
              src="/content-images/high_bg_343.jpg"
              alt="Industrial development"
              fill
              className={styles.detailImage}
            />
            <div className={styles.detailImageOverlay} />
            <div className={styles.detailImageBadge}>
              <span className={styles.badgeDot} />
              Industrial Zone · Turn-key Delivery
            </div>
          </div>

          <div className={styles.detailText}>
            <div className={styles.sectionTag}>
              <div className={styles.tagLine} />
              <span>Our Approach</span>
            </div>

            <h2 className={styles.detailHeading}>
              Built to<br/>
              <span>Perform.</span>
            </h2>

            <p className={styles.detailPara}>
              We emphasize designs that are compliant with industrial safety codes, energy-efficient, and engineered for the specific operational demands of the client's commercial or manufacturing processes.
            </p>

            <p className={styles.detailPara}>
              Every project is optimized for functional flow — from site layout and access roads to internal circulation, utility corridors, and emergency response planning.
            </p>

            <div className={styles.keyPoints}>
              {keyPoints.map((p, i) => (
                <div key={i} className={styles.keyPoint}>
                  <span className={styles.keyDot} />
                  <span>{p}</span>
                </div>
              ))}
            </div>

            <Link href="/#contact" className={styles.detailCta}>
              <span>Discuss Your Project</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

        </div>
      </section>

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