'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './HighwaysBridges.module.css';

const highlights = [
  { num: '01', title: 'Feasibility Studies',    desc: 'Technical, traffic, and financial viability assessments for new corridors and expressways.' },
  { num: '02', title: 'Detailed Project Reports', desc: 'Complete DPR preparation meeting MoRTH and NHAI standards with full design packages.' },
  { num: '03', title: 'Structural Analysis',     desc: 'Advanced FEA-based design for bridges, flyovers, and complex interchange structures.' },
  { num: '04', title: 'Construction Supervision', desc: 'On-site PMC ensuring quality, safety, and on-time delivery at every project milestone.' },
];

const stats = [
  { num: '50+',  label: 'Highway Projects'  },
  { num: '30+',  label: 'Bridge Structures' },
  { num: '8+',   label: 'Years Experience'  },
  { num: '100%', label: 'MoRTH Compliant'   },
];

export default function HighwaysBridgesPage() {
  return (
    <main className={styles.page}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/content-images/high-bg.jpg"
            alt="Highway infrastructure"
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
            <span className={styles.breadCurrent}>Highways & Bridges</span>
          </div>

          {/* eyebrow */}
          <div className={styles.eyebrow}>
            <div className={styles.eyebrowDot} />
            <span className={styles.eyebrowText}>Transportation Infrastructure</span>
          </div>

          {/* heading */}
          <h1 className={styles.heroHeading}>
            <span className={styles.headingOutline}>Highways</span>
            <span className={styles.headingSolid}>&amp; Bridges</span>
          </h1>

          {/* hero desc */}
          <p className={styles.heroDesc}>
            End-to-end consulting for national highways, expressways, and complex bridge structures — from feasibility to final handover.
          </p>

          {/* stats row */}
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

      {/* ── INTRO SECTION ── */}
      <section className={styles.introSection}>
        <div className={styles.dotGrid} />
        <div className={styles.introInner}>

          <div className={styles.introLeft}>
            <div className={styles.sectionTag}>
              <div className={styles.tagLine} />
              <span>Overview</span>
            </div>
            <h2 className={styles.introHeading}>
              Precision at<br/>
              <span>Every Scale.</span>
            </h2>
            <div className={styles.introAccentLine} />
          </div>

          <div className={styles.introRight}>
            <p className={styles.introPara}>
              Our core expertise is deeply rooted in the transportation sector, where we provide end-to-end consulting services for Highways and Bridges. Terraman specializes in the preparation of detailed Feasibility Studies and exhaustive Detailed Project Reports (DPRs) for major national and state highways, flyovers, and complex bridge structures.
            </p>
            <p className={styles.introPara}>
              Utilizing advanced traffic modeling and structural analysis software, we ensure optimal alignment design, robust pavement specifications, and structural longevity that meet the stringent standards of authorities like <strong>MoRTH</strong> and <strong>NHAI</strong>.
            </p>
          </div>

        </div>
      </section>

      {/* ── HIGHLIGHTS GRID ── */}
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
                <div className={styles.hlTop}>
                  <span className={styles.hlNum}>{h.num}</span>
                </div>
                <h3 className={styles.hlTitle}>{h.title}</h3>
                <p className={styles.hlDesc}>{h.desc}</p>
                <div className={styles.hlDivider} />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── DETAIL SECTION — image + text ── */}
      <section className={styles.detailSection}>
        <div className={styles.detailInner}>

          <div className={styles.detailImageWrap}>
            <Image
              src="/content-images/high-bg.jpg"
              alt="Highway engineering"
              fill
              className={styles.detailImage}
            />
            <div className={styles.detailImageOverlay} />
            <div className={styles.detailImageBadge}>
              <span className={styles.badgeDot} />
              Active Project · NH-48 Corridor
            </div>
          </div>

          <div className={styles.detailText}>
            <div className={styles.sectionTag}>
              <div className={styles.tagLine} />
              <span>Our Approach</span>
            </div>

            <h2 className={styles.detailHeading}>
              Built for the<br/>
              <span>Long Road.</span>
            </h2>

            <p className={styles.detailPara}>
              Our team is proficient in all phases — including pre-construction surveys, engineering design, and providing rigorous construction supervision and project management consultancy (PMC). Every project is delivered on time, within budget, and to the highest standards of safety and quality.
            </p>

            <p className={styles.detailPara}>
              We work closely with government bodies, contractors, and local authorities to ensure seamless execution — from soil investigation to structural certification.
            </p>

            {/* key points */}
            <div className={styles.keyPoints}>
              {[
                'MoRTH & NHAI Standards',
                'Traffic Impact Analysis',
                'Pavement Design',
                'Bridge Load Calculations',
                'Environmental Clearances',
                'As-Built Documentation',
              ].map((p, i) => (
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

      {/* ── BACK LINK ── */}
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