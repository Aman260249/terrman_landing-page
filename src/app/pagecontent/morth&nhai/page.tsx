'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import styles from './morth-nhai.module.css';

const credentials = [
  { code: 'IRC',   label: 'Indian Roads Congress',           desc: 'Full compliance with all IRC standards and specifications across every project phase.' },
  { code: 'EPC',   label: 'Engineering Procurement Construction', desc: 'Proven methodology for EPC model execution under NHAI guidelines.' },
  { code: 'HAM',   label: 'Hybrid Annuity Model',            desc: 'Deep structuring expertise for HAM project financing and compliance frameworks.' },
  { code: 'BOT',   label: 'Build Operate Transfer',          desc: 'End-to-end BOT project management from feasibility to revenue collection.' },
];

const advantages = [
  {
    num: '01',
    title: 'Deep Regulatory Acumen',
    sub: 'Expedited Clearances',
    body: 'Our specialized teams possess profound, up-to-date knowledge of the entire regulatory framework — IRC standards, environmental and forest clearances, and procedural requirements across EPC, HAM, and BOT models. We prepare flawless DPRs and accelerate critical approval phases.',
  },
  {
    num: '02',
    title: 'Integrated Project Management',
    sub: 'Technical Superiority',
    body: 'Holistic, data-driven methodologies encompassing feasibility studies, traffic volume projections, detailed engineering design, QA protocols, and construction supervision — integrating ITS for smart highway assets that go beyond compliance.',
  },
  {
    num: '03',
    title: 'Risk Mitigation',
    sub: 'Financial Optimization',
    body: 'Comprehensive risk assessment covering geological, financial, and construction risks — proactive identification of land acquisition issues, material volatility, and budget exposure. Our financial models maximize ROI with fiscal prudence.',
  },
];

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVis(true),
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, vis] as const;
}

export default function MorthNhaiPage() {
  const [heroRef, heroVis]       = useReveal(0.1);
  const [credRef, credVis]       = useReveal(0.08);
  const [advRef,  advVis]        = useReveal(0.08);
  const [closingRef, closingVis] = useReveal(0.15);

  return (
    <main className={styles.page}>

      {/* ══ HERO — DIAGONAL SPLIT ══ */}
      <section className={styles.hero} ref={heroRef}>

        {/* left dark panel */}
        <div className={styles.heroLeft}>
          <div className={styles.heroLeftBg} />
          <div className={styles.heroGridLines} />

          <div className={styles.heroLeftInner}>
            {/* breadcrumb */}
            <div className={styles.breadcrumb}>
              <Link href="/" className={styles.breadLink}>Home</Link>
              <span className={styles.breadSep}>/</span>
              <Link href="/#services" className={styles.breadLink}>Services</Link>
              <span className={styles.breadSep}>/</span>
              <span className={styles.breadCurrent}>MoRTH & NHAI</span>
            </div>

            {/* authority stamp */}
            <div className={`${styles.authStamp} ${heroVis ? styles.authStampIn : ''}`}>
              <div className={styles.stampRing}>
                <div className={styles.stampInner}>
                  <span className={styles.stampText}>GOI</span>
                  <span className={styles.stampSub}>Approved</span>
                </div>
              </div>
              <div className={styles.stampLabels}>
                <span className={styles.stampLabel1}>MoRTH Certified</span>
                <span className={styles.stampLabel2}>NHAI Approved</span>
              </div>
            </div>

            {/* heading */}
            <h1 className={`${styles.heroHeading} ${heroVis ? styles.heroHeadingIn : ''}`}>
              <span className={styles.hTop}>MoRTH &</span>
              <span className={styles.hMid}>NHAI</span>
              <span className={styles.hBot}>Projects.</span>
            </h1>

            <p className={`${styles.heroClaim} ${heroVis ? styles.heroClaimIn : ''}`}>
              Strategic expertise for India's national highway infrastructure.
            </p>
          </div>
        </div>

        {/* right image panel */}
        <div className={styles.heroRight}>
          <Image
            src="/content-images/morth-bg-2.jpg"
            alt="MoRTH NHAI highway"
            fill className={styles.heroImg} priority
          />
          <div className={styles.heroImgOverlay} />

          {/* vertical text label */}
          <div className={styles.heroVerticalLabel}>
            National Highway Infrastructure
          </div>
        </div>

      </section>

      {/* ══ INTRO STATEMENT BAND ══ */}
      <section className={styles.statementBand}>
        <div className={styles.statementInner}>
          <div className={styles.statementLeft}>
            <div className={styles.stLabel}>
              <div className={styles.stLabelLine} />
              <span>Why Choose Terraman</span>
            </div>
            <p className={styles.statementNum}>8+</p>
            <p className={styles.statementNumLabel}>Years of MoRTH/NHAI compliance</p>
          </div>
          <div className={styles.statementRight}>
            <p className={styles.statementText}>
              Choosing Terraman is a <em>strategic decision</em> that guarantees the optimal management and delivery of complex, high-stakes national projects — moving beyond mere compliance to achieve <em>benchmark excellence</em> and sustainable value creation.
            </p>
            <div className={styles.statementTags}>
              {['IRC Standards', 'EPC · HAM · BOT', 'DPR Preparation', 'Traffic Surveys', 'NHAI Clearances'].map((t, i) => (
                <span key={i} className={styles.stTag}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CREDENTIAL CODES ══ */}
      <section className={styles.credSection} ref={credRef}>
        <div className={styles.credInner}>

          <div className={styles.credHeader}>
            <div className={styles.credTag}>
              <div className={styles.credTagLine} />
              <span>Our Credentials</span>
            </div>
            <h2 className={styles.credHeading}>
              Standards We<br/><span>Master</span>
            </h2>
          </div>

          {/* horizontal code cards */}
          <div className={styles.credGrid}>
            {credentials.map((c, i) => (
              <div
                key={i}
                className={`${styles.credCard} ${credVis ? styles.credCardVisible : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className={styles.credCardBar} />
                <span className={styles.credCode}>{c.code}</span>
                <div className={styles.credDivider} />
                <span className={styles.credLabel}>{c.label}</span>
                <p className={styles.credDesc}>{c.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ FULL IMAGE + QUOTE ══ */}
      <section className={styles.imageBand}>
        <Image
          src="/content-images/morth-bg-1.jpg"
          alt="Highway engineering"
          fill className={styles.imageBandImg}
        />
        <div className={styles.imageBandOverlay} />
        <div className={styles.imageBandContent}>
          <blockquote className={styles.imageBandQuote}>
            "Not just consultants — we are performance enablers dedicated to transforming governmental mandates into successful, on-time, high-quality infrastructure assets."
          </blockquote>
          <div className={styles.imageBandAttr}>
            <div className={styles.imageBandLine} />
            <span>Terraman Infratech Consultants</span>
          </div>
        </div>
      </section>

      {/* ══ ADVANTAGES — NUMBERED ROWS ══ */}
      <section className={styles.advSection} ref={advRef}>
        <div className={styles.advInner}>

          <div className={styles.advHeader}>
            <div className={styles.advTag}>
              <div className={styles.advTagLine} />
              <span>Strategic Partnership</span>
            </div>
            <h2 className={styles.advHeading}>
              Why We Are<br/><span>Your Best Choice</span>
            </h2>
          </div>

          {/* left image sticky + right rows */}
          <div className={styles.advLayout}>

            <div className={styles.advImageWrap}>
              <Image
                src="/content-images/morth-bg-2.jpg"
                alt="Highway planning"
                fill className={styles.advImage}
              />
              <div className={styles.advImageOverlay} />

              {/* floating stat */}
              <div className={styles.advStat}>
                <span className={styles.advStatNum}>100%</span>
                <span className={styles.advStatLabel}>Regulatory Compliance</span>
              </div>
            </div>

            <div className={styles.advRows}>
              {advantages.map((a, i) => (
                <div
                  key={i}
                  className={`${styles.advRow} ${advVis ? styles.advRowVisible : ''}`}
                  style={{ transitionDelay: `${i * 0.12}s` }}
                >
                  <div className={styles.advRowLeft}>
                    <span className={styles.advNum}>{a.num}</span>
                    <div className={styles.advNumLine} />
                  </div>
                  <div className={styles.advRowRight}>
                    <div className={styles.advRowHead}>
                      <h3 className={styles.advTitle}>{a.title}</h3>
                      <span className={styles.advSub}>{a.sub}</span>
                    </div>
                    <p className={styles.advBody}>{a.body}</p>
                  </div>
                  <div className={styles.advRowBorder} />
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ══ CLOSING STATEMENT ══ */}
      <section className={styles.closingSection} ref={closingRef}>
        <div className={`${styles.closingInner} ${closingVis ? styles.closingInnerIn : ''}`}>
          <span className={styles.closingEyebrow}>The Terraman Commitment</span>
          <h2 className={styles.closingHeading}>
            National Economic<br/>
            <span>Resilience &amp; Connectivity.</span>
          </h2>
          <p className={styles.closingText}>
            Terraman's deliverables are not only technically accurate but also ready for approval, implementation, and tender processes — ensuring public or private capital is deployed with the utmost fiscal prudence and accountability.
          </p>
          <Link href="/#contact" className={styles.closingCta}>
            <span>Partner on Your MoRTH/NHAI Project</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
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