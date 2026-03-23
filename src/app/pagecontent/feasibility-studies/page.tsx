'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import styles from './feasibility.module.css';

const whyPoints = [
  {
    num: '01',
    title: 'Risk Identification & Mitigation',
    body: 'Proactively identifies geological obstacles, land acquisition issues, and regulatory hurdles before capital is committed — enabling clients to develop robust mitigation strategies and realistic contingency budgets.',
  },
  {
    num: '02',
    title: 'Optimal Project Scoping & Sizing',
    body: 'Precisely determines the necessary scale, capacity, and technical specifications — preventing costly over-engineering and inadequate under-scoping, ensuring the asset perfectly matches projected demand over its entire lifecycle.',
  },
  {
    num: '03',
    title: 'Securing Financial Approval',
    body: 'Traffic projections, cost estimates, NPV and IRR analyses — all essential for securing project financing, bank approvals, and government sanctions. A well-prepared study builds credibility with investors and stakeholders.',
  },
];

const dimensions = [
  {
    code: 'TE',
    title: 'Technical Feasibility',
    sub: 'Topographic · Geotechnical · Engineering',
    body: 'Assessment of technological requirements, material availability, optimal alignment choices, geotechnical investigations, and sub-soil conditions ensuring seamless infrastructure integration.',
    color: 'blue',
  },
  {
    code: 'TD',
    title: 'Traffic & Demand Analysis',
    sub: '20–30 Year Horizon Forecasting',
    body: 'Advanced models project future traffic volumes, patterns, and commodity flows. Analysis dictates road width, lane count, and tolling strategy to meet future capacity demands.',
    color: 'orange',
  },
  {
    code: 'EV',
    title: 'Economic Viability',
    sub: 'EIRR · Societal Benefits',
    body: 'Calculates the Economic Internal Rate of Return by analyzing reduced travel time, decreased fuel consumption, lower accident costs, and increased regional economic activity.',
    color: 'blue',
  },
  {
    code: 'FM',
    title: 'Financial Modeling',
    sub: 'CAPEX · OPEX · FIRR · EPC / HAM / BOT',
    body: 'Detailed construction cost estimates, revenue forecasting, toll projections, and structuring recommendations determining the Financial Internal Rate of Return and project bankability.',
    color: 'orange',
  },
  {
    code: 'RC',
    title: 'Regulatory & Environmental',
    sub: 'MoRTH · NHAI · EIA Clearances',
    body: 'Preliminary environmental and social impact assessments, land acquisition mapping, and compliance pathway — embedding all regulatory requirements into the project DNA from the outset.',
    color: 'blue',
  },
];

export default function FeasibilityStudiesPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <main className={styles.page}>

      {/* ══ SECTION 1 — OVERSIZED TITLE + IMAGE OVERLAP ══ */}
      <section className={styles.openingSection}>

        <div className={styles.openingTop}>
          {/* breadcrumb */}
          <div className={styles.breadcrumb}>
            <Link href="/" className={styles.breadLink}>Home</Link>
            <span className={styles.breadSep}>/</span>
            <Link href="/#services" className={styles.breadLink}>Services</Link>
            <span className={styles.breadSep}>/</span>
            <span className={styles.breadCurrent}>Feasibility Studies</span>
          </div>

          {/* overline */}
          <div className={styles.overline}>
            <span className={styles.overlineNum}>FS — 001</span>
            <div className={styles.overlineDash} />
            <span className={styles.overlineText}>Engineering Services</span>
          </div>

          {/* giant heading — 2 rows, offset layout */}
          <div className={styles.titleBlock}>
            <h1 className={styles.titleMain}>
              <span className={styles.titleRow1}>Feasibility</span>
              <span className={styles.titleRow2}>Studies.</span>
            </h1>
            <p className={styles.titleRight}>
              Laying the Groundwork for<br/>
              <strong>Successful Projects</strong>
            </p>
          </div>
        </div>

        {/* full-bleed image with text overlay */}
        <div className={styles.openingImage}>
          <Image
            src="/content-images/project-1-bg.jpg"
            alt="Feasibility Studies"
            fill
            className={styles.openingImg}
            priority
          />
          <div className={styles.openingImgOverlay} />

          {/* bottom overlay text strip */}
          <div className={styles.imgStrip}>
            <p className={styles.imgStripText}>
              The Feasibility Study is the <em>indispensable first step</em> in the lifecycle of any major infrastructure project — the critical foundation upon which all subsequent planning, design, and investment decisions are built.
            </p>
            <div className={styles.imgStripMeta}>
              <span>MoRTH Approved</span>
              <span className={styles.imgStripDot} />
              <span>NHAI Compliant</span>
              <span className={styles.imgStripDot} />
              <span>Since 2016</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 2 — WHY ACCORDION ══ */}
      <section className={styles.whySection}>
        <div className={styles.whyInner}>

          {/* left sticky label */}
          <div className={styles.whyLeft}>
            <div className={styles.whyTag}>
              <div className={styles.whyTagLine} />
              <span>Why It Matters</span>
            </div>
            <h2 className={styles.whyHeading}>
              Why a Rigorous<br/>
              Feasibility Study<br/>
              is <span>Non-Negotiable</span>
            </h2>
            <p className={styles.whySub}>
              Three pillars that protect your investment from day one.
            </p>
          </div>

          {/* right accordion */}
          <div className={styles.accordion}>
            {whyPoints.map((p, i) => (
              <div
                key={i}
                className={`${styles.accItem} ${openIdx === i ? styles.accOpen : ''}`}
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <div className={styles.accHeader}>
                  <div className={styles.accLeft}>
                    <span className={styles.accNum}>{p.num}</span>
                    <h3 className={styles.accTitle}>{p.title}</h3>
                  </div>
                  <div className={styles.accIcon}>
                    <span className={`${styles.accIconBar} ${styles.accIconBarH}`} />
                    <span className={`${styles.accIconBar} ${styles.accIconBarV} ${openIdx === i ? styles.accIconBarVHide : ''}`} />
                  </div>
                </div>
                <div className={styles.accBody}>
                  <p className={styles.accBodyText}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ SECTION 3 — FULL WIDTH IMAGE + STATEMENT ══ */}
      <section className={styles.approachBanner}>
        <div className={styles.approachBg}>
          <Image
            src="/content-images/project-bg-2.jpg"
            alt="Multi-dimensional approach"
            fill
            className={styles.approachBgImg}
          />
          <div className={styles.approachBgOverlay} />
        </div>
        <div className={styles.approachContent}>
          <span className={styles.approachLabel}>Our Methodology</span>
          <h2 className={styles.approachHeading}>
            A Multi-Dimensional<br/>
            <span>Approach to Feasibility</span>
          </h2>
          <p className={styles.approachDesc}>
            Our studies integrate <strong>technical, economic, financial, and environmental</strong> considerations into a single cohesive strategic document.
          </p>
        </div>
      </section>

      {/* ══ SECTION 4 — 5 DIMENSION CARDS GRID ══ */}
      <section className={styles.dimensionsSection} ref={ref}>
        <div className={styles.dimensionsInner}>

          <div className={styles.dimHeader}>
            <div className={styles.dimTag}>
              <div className={styles.dimTagLine} />
              <span>5 Dimensions</span>
            </div>
            <h2 className={styles.dimHeading}>
              What Our<br/><span>Analysis Covers</span>
            </h2>
          </div>

          {/* alternating 2-col grid */}
          <div className={styles.dimGrid}>
            {dimensions.map((d, i) => (
              <div
                key={i}
                className={`${styles.dimCard} ${d.color === 'orange' ? styles.dimCardDark : styles.dimCardLight} ${visible ? styles.dimCardVisible : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className={styles.dimCardTopBar} />

                <div className={styles.dimCardHead}>
                  <span className={styles.dimCode}>{d.code}</span>
                  <span className={styles.dimSub}>{d.sub}</span>
                </div>

                <h3 className={styles.dimTitle}>{d.title}</h3>
                <p className={styles.dimBody}>{d.body}</p>

                <div className={styles.dimCardFoot}>
                  <div className={styles.dimFootLine} />
                </div>
              </div>
            ))}

            {/* last card — CTA card */}
            <div className={`${styles.dimCard} ${styles.dimCardCta} ${visible ? styles.dimCardVisible : ''}`} style={{ transitionDelay: '0.5s' }}>
              <span className={styles.dimCtaNum}>05</span>
              <h3 className={styles.dimCtaText}>Ready to validate your project?</h3>
              <Link href="/#contact" className={styles.dimCtaBtn}>
                <span>Start Feasibility Study</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ══ SECTION 5 — IMAGE + CONCLUSION ══ */}
      <section className={styles.conclusionSection}>
        <div className={styles.conclusionImageWrap}>
          <Image
            src="/content-images/pro-4-bg.jpg"
            alt="Feasibility conclusion"
            fill
            className={styles.conclusionImg}
          />
          <div className={styles.conclusionImgOverlay} />
        </div>
        <div className={styles.conclusionTextWrap}>
          <blockquote className={styles.conclusionQuote}>
            "By engaging our expertise, clients receive a definitive, de-risked blueprint that validates their investment and provides a high-confidence path forward — transforming an initial idea into a strategically executable plan."
          </blockquote>
          <div className={styles.conclusionAttr}>
            <div className={styles.conclusionAttrLine} />
            <span>Terraman Infratech Consultants</span>
          </div>
        </div>
      </section>

      {/* ── BACK ── */}
      <div className={styles.backWrap}>
        <Link href="/services" className={styles.backLink}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M15 8H1M7 2L1 8l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Back to Services</span>
        </Link>
      </div>

    </main>
  );
}