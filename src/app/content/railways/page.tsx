'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './railways.module.css';

const highlights = [
  { num: '01', title: 'Yard & Siding Design',      desc: 'Detailed engineering for railway sidings, yard layouts, and associated track infrastructure projects.' },
  { num: '02', title: 'Topographical Surveys',      desc: 'Precision alignment surveys and earthwork formation design for new and upgraded rail corridors.' },
  { num: '03', title: 'Structural Engineering',     desc: 'Specialized design of overpasses, underpasses, ROBs, RUBs, and all ancillary rail structures.' },
  { num: '04', title: 'Capacity & Safety Analysis', desc: 'Signaling integration, track stability assessment, and speed improvement planning for modern rail networks.' },
];

const stats = [
  { num: '20+', label: 'Rail Projects'      },
  { num: '100%', label: 'Safety Compliance' },
  { num: '8+',  label: 'Years Active'       },
  { num: 'Pan', label: 'India Presence'     },
];

const keyPoints = [
  'Railway Siding Design',
  'Track Alignment Surveys',
  'ROB / RUB Structures',
  'Earthwork & Formation',
  'Signaling Coordination',
  'Speed Improvement Studies',
];

export default function RailwaysPage() {
  return (
    <main className={styles.page}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/content-images/rail-bg.jpg"
            alt="Railway infrastructure"
            fill
            className={styles.heroBgImg}
            priority
          />
          <div className={styles.heroOverlayLeft} />
          <div className={styles.heroOverlayBottom} />
        </div>
        <div className={styles.heroGridLines} />

        <div className={styles.heroInner}>

          {/* breadcrumb */}
          <div className={styles.breadcrumb}>
            <Link href="/" className={styles.breadLink}>Home</Link>
            <span className={styles.breadSep}>/</span>
            <Link href="/#services" className={styles.breadLink}>Services</Link>
            <span className={styles.breadSep}>/</span>
            <span className={styles.breadCurrent}>Railways</span>
          </div>

          <div className={styles.eyebrow}>
            <div className={styles.eyebrowDot} />
            <span className={styles.eyebrowText}>Rail Infrastructure</span>
          </div>

          <h1 className={styles.heroHeading}>
            <span className={styles.headingOutline}>Modern</span>
            <span className={styles.headingSolid}>Railways.</span>
          </h1>

          <p className={styles.heroDesc}>
            Specialized rail consultancy for sidings, yard layouts, structural engineering, and capacity optimization — aligned with India's national railway expansion goals.
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
              Built for<br/>
              <span>Speed &amp; Scale.</span>
            </h2>
            <div className={styles.introAccentLine} />
          </div>

          <div className={styles.introRight}>
            <p className={styles.introPara}>
              Terraman possesses specialized capabilities within the rapidly modernizing Railways sector, contributing to the development of efficient and reliable rail infrastructure. We offer consultancy services focused on detailed engineering for railway sidings, yard layouts, and associated infrastructure projects.
            </p>
            <p className={styles.introPara}>
              Our scope includes topographical and alignment surveys, design of earthwork and formations, and specialized structural design for overpasses, underpasses, and ancillary structures — all calibrated to meet <strong>Indian Railways</strong> standards and specifications.
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

      {/* ── DETAIL — image + text ── */}
      <section className={styles.detailSection}>
        <div className={styles.detailInner}>

          <div className={styles.detailImageWrap}>
            <Image
              src="/content-images/rail-bg.jpg"
              alt="Railway engineering"
              fill
              className={styles.detailImage}
            />
            <div className={styles.detailImageOverlay} />
            <div className={styles.detailImageBadge}>
              <span className={styles.badgeDot} />
              Rail Modernisation · Active Projects
            </div>
          </div>

          <div className={styles.detailText}>
            <div className={styles.sectionTag}>
              <div className={styles.tagLine} />
              <span>Our Approach</span>
            </div>

            <h2 className={styles.detailHeading}>
              On Track.<br/>
              <span>On Time.</span>
            </h2>

            <p className={styles.detailPara}>
              By integrating our knowledge of signaling requirements and track stability, we deliver optimized engineering solutions that support increased line capacity, operational safety, and speed improvements — aligning with national expansion goals and technological advancements in the Indian railway network.
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