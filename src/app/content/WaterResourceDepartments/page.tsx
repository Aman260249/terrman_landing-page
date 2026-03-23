'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './WaterResourceDepartments.module.css';

const expertise = [
  {
    code: 'WS',
    title: 'Water Supply Schemes',
    desc: 'Detailed design of potable water supply networks, pumping stations, treatment plants, and distribution systems for urban and rural communities.',
    highlight: 'Potable Water Security',
  },
  {
    code: 'IR',
    title: 'Irrigation Infrastructure',
    desc: 'Canal alignment, headworks, check dams, and drip/sprinkler system design supporting agricultural productivity and water-use efficiency.',
    highlight: 'Agricultural Productivity',
  },
  {
    code: 'HY',
    title: 'Hydrological Surveys',
    desc: 'Catchment analysis, rainfall-runoff modeling, flood frequency studies, and groundwater recharge assessments using advanced tools.',
    highlight: 'Flood Risk Modeling',
  },
  {
    code: 'WS',
    title: 'Watershed Development',
    desc: 'Integrated watershed management plans combining land use, soil conservation, and water harvesting for long-term sustainability.',
    highlight: 'Sustainable Conservation',
  },
];

const highlights = [
  { val: '200+', label: 'km of Canals Designed'      },
  { val: '40+',  label: 'Water Supply Projects'       },
  { val: '100%', label: 'EIA Compliant'               },
  { val: '8+',   label: 'Years Hydrology Experience'  },
];

const keyHighlights = [
  'Hydraulic Design & Modeling',
  'Dam Safety Assessments',
  'Environmental Impact Analysis',
  'Canal & Headwork Design',
  'Groundwater Studies',
  'Flood Plain Mapping',
  'Water Quality Analysis',
  'GIS-Based Watershed Maps',
];

export default function WaterResourceDepartmentsPage() {
  return (
    <main className={styles.page}>

      {/* ══ HERO — IMMERSIVE DARK IMAGE ══ */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/content-images/dam-bg.jpg"
            alt="Water resource infrastructure"
            fill
            className={styles.heroBgImg}
            priority
          />
          <div className={styles.heroGradient} />
        </div>

        {/* vertical grid lines — blueprint feel */}
        <div className={styles.blueprint} />

        <div className={styles.heroInner}>

          {/* top nav */}
          <div className={styles.heroNav}>
            <Link href="/" className={styles.navLink}>Home</Link>
            <span className={styles.navSep}>/</span>
            <Link href="/#services" className={styles.navLink}>Services</Link>
            <span className={styles.navSep}>/</span>
            <span className={styles.navActive}>Water Resources</span>
          </div>

          {/* center — left aligned */}
          <div className={styles.heroCenter}>

            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot} />
              Water Resource Departments
            </div>

            {/* heading — stacked word by word */}
            <h1 className={styles.heroHeading}>
              <span className={styles.heroWord1}>Water</span>
              <span className={styles.heroWord2}>Resource</span>
              <span className={styles.heroWord3}>Engineering.</span>
            </h1>

            {/* single highlighted stat line */}
            <div className={styles.heroHighlight}>
              <div className={styles.heroHighlightBar} />
              <span>
                Ensuring <strong>potable water security</strong> and <strong>agricultural sustainability</strong> through precision hydraulic engineering since 2016.
              </span>
            </div>

          </div>

          {/* bottom — 4 metric boxes */}
          <div className={styles.heroMetricsRow}>
            {highlights.map((h, i) => (
              <div key={i} className={styles.metricBox}>
                <span className={styles.metricVal}>{h.val}</span>
                <span className={styles.metricLabel}>{h.label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ INTRO — TWO COL WITH HIGHLIGHTED TEXT ══ */}
      <section className={styles.introSection}>
        <div className={styles.introInner}>

          {/* left — side label + highlight box */}
          <div className={styles.introLeft}>
            <div className={styles.sideLabel}>
              <div className={styles.sideLabelLine} />
              <span>Service Overview</span>
            </div>

            {/* highlighted stat card */}
            <div className={styles.statCard}>
              <span className={styles.statCardNum}>₹ Crores</span>
              <span className={styles.statCardSub}>in water infrastructure value delivered</span>
              <div className={styles.statCardBar} />
            </div>

            {/* highlighted quote block */}
            <div className={styles.quoteBlock}>
              <p className={styles.quoteText}>
                "Reliable hydraulic design and structural stability — crucial for agricultural productivity and potable water supply security."
              </p>
              <span className={styles.quoteAttr}>— Terraman Water Division</span>
            </div>
          </div>

          {/* right — body paragraphs with highlights */}
          <div className={styles.introRight}>

            <p className={styles.bodyPara}>
              Terraman provides essential engineering and consulting services to Water Resource Departments for effective water management and conservation projects. Our expertise includes detailed design and supervision for <mark className={styles.mark}>water supply schemes</mark>, irrigation infrastructure, canals, and watershed development projects.
            </p>

            <p className={styles.bodyPara}>
              We conduct <mark className={styles.mark}>hydrological surveys</mark>, feasibility analyses, and environmental impact assessments to ensure the sustainability and efficiency of water infrastructure. Our focus is on providing reliable <mark className={styles.mark}>hydraulic design</mark> and structural stability for water retention and conveyance systems — crucial for agricultural productivity and ensuring potable water supply security for communities.
            </p>

            {/* key highlights grid */}
            <div className={styles.keyGrid}>
              <div className={styles.keyGridLabel}>Key Deliverables</div>
              <div className={styles.keyList}>
                {keyHighlights.map((k, i) => (
                  <div key={i} className={styles.keyItem}>
                    <span className={styles.keyDot} />
                    <span>{k}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ EXPERTISE — REPORT CARDS ══ */}
      <section className={styles.expertiseSection}>
        <div className={styles.expertiseInner}>

          <div className={styles.expertiseHeader}>
            <div className={styles.expHeaderLeft}>
              <span className={styles.expTag}>Technical Expertise</span>
              <h2 className={styles.expHeading}>
                Our Core<br/><span>Capabilities</span>
              </h2>
            </div>
            <p className={styles.expSubtext}>
              Four integrated domains of water resource engineering delivered with precision.
            </p>
          </div>

          <div className={styles.expertiseCards}>
            {expertise.map((e, i) => (
              <div key={i} className={styles.expCard}>

                {/* code badge top left */}
                <div className={styles.expCode}>{e.code}</div>

                {/* highlight chip */}
                <div className={styles.expChip}>{e.highlight}</div>

                <h3 className={styles.expTitle}>{e.title}</h3>
                <p className={styles.expDesc}>{e.desc}</p>

                {/* bottom progress line */}
                <div className={styles.expProgress}>
                  <div className={styles.expProgressFill} />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ BOTTOM CTA — LIGHT ══ */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>

          <div className={styles.ctaContent}>
            <span className={styles.ctaEyebrow}>Get In Touch</span>
            <h2 className={styles.ctaHeading}>
              Have a Water<br/>
              <span>Resource Project?</span>
            </h2>
            <p className={styles.ctaDesc}>
              Our hydraulic engineers and hydrologists are ready to assess your project requirements and develop a comprehensive engineering strategy.
            </p>
            <Link href="/#contact" className={styles.ctaBtn}>
              <span>Start the Conversation</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          <div className={styles.ctaImageWrap}>
            <Image
              src="/content-images/dam-bg.jpg"
              alt="Water dam"
              fill
              className={styles.ctaImage}
            />
            <div className={styles.ctaImageOverlay} />
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