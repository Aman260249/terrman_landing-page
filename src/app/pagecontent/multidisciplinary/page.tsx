'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import styles from './multidisciplinary.module.css';

const disciplines = [
  { code: 'CV', label: 'Civil Engineering',        color: 'a' },
  { code: 'ST', label: 'Structural Engineering',   color: 'b' },
  { code: 'TR', label: 'Transportation Planning',  color: 'a' },
  { code: 'GE', label: 'Geotechnical Studies',     color: 'b' },
  { code: 'EV', label: 'Environmental Assessment', color: 'a' },
  { code: 'EL', label: 'Electrical & ITS',         color: 'b' },
];

const whyPoints = [
  {
    icon: '◈',
    title: 'Holistic Problem Solving',
    body: 'Civil, Structural, Electrical, Environmental, Geotechnical, and Traffic Engineering — all considered concurrently. This prevents siloed decisions that create conflicts or rework later in the lifecycle.',
  },
  {
    icon: '◉',
    title: 'Enhanced Innovation',
    body: 'A Structural Engineer collaborates with a Materials Scientist for stronger composites, while a Geotechnical Expert informs cost-effective foundations. Integrated workflow leads to optimized designs and reduced material waste.',
  },
  {
    icon: '◎',
    title: 'Comprehensive Risk Mitigation',
    body: 'Specialists from all disciplines review simultaneously — design clashes, unforeseen ground conditions, and regulatory non-compliance are identified early. Collective oversight minimizes costly change orders.',
  },
];

const processSteps = [
  {
    num: '01',
    title: 'Integrated Planning & Feasibility',
    sub: 'Joint Conceptual Design Phase',
    body: 'All specialists contribute domain knowledge from day one — defining project scope, conducting feasibility studies, and selecting optimal technology and execution models including BIM integration for 3D modeling.',
  },
  {
    num: '02',
    title: 'Concurrent Engineering',
    sub: 'Overlapping Parallel Workflows',
    body: 'While the Civil Engineer designs alignment, the Environmental Specialist simultaneously assesses impact, and the Electrical Engineer plans utility integration. This compresses the design schedule dramatically.',
  },
  {
    num: '03',
    title: 'Cross-Disciplinary Reviews',
    sub: 'CDR Quality Gates',
    body: 'All design packages undergo mandatory cross-disciplinary review sessions. Structural reviews Mechanical loads, Traffic validates Civil capacity — formal quality gates ensure technical coherence before reaching the site.',
  },
  {
    num: '04',
    title: 'Agile Communication & Technology',
    sub: 'Cloud BIM · Single Source of Truth',
    body: 'Advanced shared technology platforms — cloud-based BIM systems and project management software — ensure real-time communication and decision-making regardless of geographical location.',
  },
  {
    num: '05',
    title: 'Field Integration & Support',
    sub: 'Continuous Construction Presence',
    body: 'The integrated design team maintains continuous presence during construction. Specialists collectively troubleshoot site challenges, ensuring design modifications are reviewed across all disciplines — maintaining technical integrity.',
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

export default function MultidisciplinaryPage() {
  const [heroRef,    heroVis]    = useReveal(0.1);
  const [discRef,    discVis]    = useReveal(0.08);
  const [whyRef,     whyVis]     = useReveal(0.08);
  const [processRef, processVis] = useReveal(0.06);
  const [closingRef, closingVis] = useReveal(0.15);

  return (
    <main className={styles.page}>

      {/* ══ HERO — FULL SCREEN DARK CENTERED ══ */}
      <section className={styles.hero} ref={heroRef}>
        <div className={styles.heroBg}>
          <Image
            src="/content-images/multi-bg.jpg"
            alt="Multi-disciplinary team"
            fill className={styles.heroBgImg} priority
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroGrain} />

        {/* top breadcrumb */}
        <div className={styles.heroBread}>
          <Link href="/" className={styles.breadLink}>Home</Link>
          <span className={styles.breadSep}>/</span>
          <Link href="/#services" className={styles.breadLink}>Services</Link>
          <span className={styles.breadSep}>/</span>
          <span className={styles.breadCurrent}>Multi-Disciplinary Team</span>
        </div>

        {/* center content */}
        <div className={styles.heroCenter}>
          <div className={`${styles.heroPill} ${heroVis ? styles.heroPillIn : ''}`}>
            <span className={styles.heroPillDot} />
            Integrated Engineering Excellence
          </div>

          <h1 className={`${styles.heroHeading} ${heroVis ? styles.heroHeadingIn : ''}`}>
            <span className={styles.hGhost}>The Power</span>
            <span className={styles.hSolid}>of Integration.</span>
          </h1>

          <p className={`${styles.heroSub} ${heroVis ? styles.heroSubIn : ''}`}>
            Our Multi-Disciplinary Engineering Team — the cutting edge of<br/>
            collaborative problem-solving and holistic project delivery.
          </p>
        </div>

        {/* bottom discipline ticker */}
        <div className={`${styles.heroTicker} ${heroVis ? styles.heroTickerIn : ''}`}>
          {disciplines.map((d, i) => (
            <div key={i} className={styles.tickerItem}>
              <span className={styles.tickerCode}>{d.code}</span>
              <span className={styles.tickerLabel}>{d.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══ INTRO — WIDE PULL STATEMENT ══ */}
      <section className={styles.introSection}>
        <div className={styles.introInner}>
          <div className={styles.introLabel}>
            <div className={styles.introLabelLine} />
            <span>Our Philosophy</span>
          </div>
          <p className={styles.introStatement}>
            In the face of increasingly complex modern infrastructure challenges, a traditional <em>siloed approach</em> is no longer sufficient. Our team is not merely a collection of experts — it is a <em>cohesive, integrated unit</em> where diverse specializations converge to provide innovative, robust, and cost-effective solutions for every project phase.
          </p>
        </div>
      </section>

      {/* ══ DISCIPLINE TILES ══ */}
      <section className={styles.discSection} ref={discRef}>
        <div className={styles.discInner}>

          <div className={styles.discHeader}>
            <div className={styles.discTag}>
              <div className={styles.discTagLine} />
              <span>6 Disciplines</span>
            </div>
            <h2 className={styles.discHeading}>
              Every Domain,<br/><span>One Team.</span>
            </h2>
          </div>

          <div className={styles.discGrid}>
            {disciplines.map((d, i) => (
              <div
                key={i}
                className={`${styles.discTile} ${d.color === 'b' ? styles.discTileDark : styles.discTileLight} ${discVis ? styles.discTileVisible : ''}`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className={styles.discTileBar} />
                <span className={styles.discCode}>{d.code}</span>
                <span className={styles.discLabel}>{d.label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ WHY — 3 COL LIGHT ══ */}
      <section className={styles.whySection} ref={whyRef}>
        <div className={styles.whyInner}>

          <div className={styles.whyHeader}>
            <div className={styles.whyTag}>
              <div className={styles.whyTagLine} />
              <span>Why It Works</span>
            </div>
            <h2 className={styles.whyHeading}>
              Why Multi-Disciplinary<br/><span>is Essential</span>
            </h2>
          </div>

          <div className={styles.whyImage}>
            <Image
              src="/content-images/multi-bg-3.jpg"
              alt="Team collaboration"
              fill className={styles.whyImg}
            />
            <div className={styles.whyImgOverlay} />
          </div>

          <div className={styles.whyCards}>
            {whyPoints.map((w, i) => (
              <div
                key={i}
                className={`${styles.whyCard} ${whyVis ? styles.whyCardVisible : ''}`}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className={styles.whyCardBar} />
                <span className={styles.whyIcon}>{w.icon}</span>
                <h3 className={styles.whyTitle}>{w.title}</h3>
                <p className={styles.whyBody}>{w.body}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ PROCESS FLOW — NUMBERED STEPS ══ */}
      <section className={styles.processSection} ref={processRef}>
        <div className={styles.processInner}>

          {/* left sticky */}
          <div className={styles.processLeft}>
            <div className={styles.processTag}>
              <div className={styles.processTagLine} />
              <span>How We Work</span>
            </div>
            <h2 className={styles.processHeading}>
              The Discipline<br/>
              of <span>Flow</span>
            </h2>
            <p className={styles.processSub}>
              Five integrated phases that compress timelines and deliver technical coherence.
            </p>

            {/* image below heading */}
            <div className={styles.processImageWrap}>
              <Image
                src="/content-images/multi-bg-4.jpg"
                alt="Engineering process"
                fill className={styles.processImage}
              />
              <div className={styles.processImageOverlay} />
              <div className={styles.processImageBadge}>
                <span className={styles.piBadgeNum}>5</span>
                <span className={styles.piBadgeLabel}>Integrated Phases</span>
              </div>
            </div>
          </div>

          {/* right steps */}
          <div className={styles.processSteps}>
            {processSteps.map((s, i) => (
              <div
                key={i}
                className={`${styles.processStep} ${processVis ? styles.processStepVisible : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* connector line */}
                {i < processSteps.length - 1 && <div className={styles.stepConnector} />}

                <div className={styles.stepLeft}>
                  <div className={styles.stepDot}>
                    <div className={styles.stepDotInner} />
                  </div>
                  <span className={styles.stepNum}>{s.num}</span>
                </div>

                <div className={styles.stepRight}>
                  <div className={styles.stepHead}>
                    <h3 className={styles.stepTitle}>{s.title}</h3>
                    <span className={styles.stepSub}>{s.sub}</span>
                  </div>
                  <p className={styles.stepBody}>{s.body}</p>
                  <div className={styles.stepProgress}>
                    <div className={styles.stepProgressFill} />
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ CLOSING CTA ══ */}
      <section className={styles.closingSection} ref={closingRef}>
        <div className={`${styles.closingInner} ${closingVis ? styles.closingInnerIn : ''}`}>

          <div className={styles.closingLeft}>
            <span className={styles.closingEyebrow}>The Result</span>
            <h2 className={styles.closingHeading}>
              A Unified System.<br/>
              <span>Future-Ready Infrastructure.</span>
            </h2>
            <p className={styles.closingText}>
              Our Multi-Disciplinary Engineering Team operates as a unified system — delivering resilient, efficient, and future-ready infrastructure solutions that meet both regulatory and performance expectations.
            </p>
            <Link href="/#contact" className={styles.closingCta}>
              <span>Work With Our Team</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          <div className={styles.closingRight}>
            <div className={styles.closingImageWrap}>
              <Image
                src="/content-images/multi-bg.jpg"
                alt="Team engineering"
                fill className={styles.closingImage}
              />
              <div className={styles.closingImageOverlay} />
            </div>
            {/* stat overlay */}
            <div className={styles.closingStat}>
              <span className={styles.closingStatNum}>6</span>
              <span className={styles.closingStatLabel}>Core Disciplines<br/>One Team</span>
            </div>
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