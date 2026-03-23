'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import styles from './highway-project-supervision.module.css';

const coreComponents = [
  {
    num: '01',
    icon: '◈',
    title: 'Rigorous QC & QA',
    label: 'Zero-Tolerance for Defects',
    body: 'Continuous on-site testing of soil compaction, concrete strength, asphalt mix temperature, and pavement layer thickness. Full compliance with MoRTH Specifications and IRC standards — non-negotiable structural integrity at every stage.',
    tags: ['IRC Compliant', 'MoRTH Standards'],
  },
  {
    num: '02',
    icon: '◉',
    title: 'Contract & Time Management',
    label: 'CPM/PERT Monitoring',
    body: 'Meticulous monitoring of contractor progress against approved Work Programs. Advanced project management tools track physical and financial progress, detect delays early, and enforce corrective actions for timely delivery.',
    tags: ['On-Time Delivery', 'Progress Tracking'],
  },
  {
    num: '03',
    icon: '◎',
    title: 'Safety, Health & Environment',
    label: 'SHE Management',
    body: 'Enforcement of site safety plans, equipment audits, and EMP implementation — covering stormwater control, noise mitigation, and traffic diversions to protect workers, communities, and the environment.',
    tags: ['EMP Enforced', 'Worker Safety'],
  },
  {
    num: '04',
    icon: '◍',
    title: 'Design-Construction Interface',
    label: 'Change Management',
    body: 'Acting as the critical link between designers and contractors — resolving site challenges through design clarifications or Variation Orders. All changes reviewed for cost, time, and quality impacts to maintain scope and budget control.',
    tags: ['Variation Orders', 'Scope Control'],
  },
];

const reportingDocs = [
  {
    code: 'DPR',
    title: 'Daily Progress Reports',
    sub: 'Site Diaries',
    content: 'Daily activities, manpower deployment, machinery, material receipts, weather events, and utility clashes — granular real-time visibility into site productivity.',
    purpose: 'Immediate corrective action + contractor claim verification.',
  },
  {
    code: 'QIR',
    title: 'Quality Inspection Reports',
    sub: 'Material Testing Records',
    content: 'Concrete cube tests, compaction reports, bitumen quality checks, and steel reinforcement verification — proving compliance at every stage.',
    purpose: 'Technical proof for final certification under MoRTH & IRC.',
  },
  {
    code: 'MPR',
    title: 'Monthly Progress Reports',
    sub: 'Executive Summaries',
    content: 'Physical progress, financial certification, risk logs, and forward work plans in a single consolidated report for senior stakeholders.',
    purpose: 'Informed strategic and financial decision-making.',
  },
  {
    code: 'VO',
    title: 'Contractual Correspondence',
    sub: 'Variation Orders & EOT',
    content: 'All formal communications, Extension of Time requests, claims, and approved scope changes — fully documented and mutually agreed.',
    purpose: 'Legal clarity and protection against disputes.',
  },
];

function useInViewHook(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

export default function HighwayProjectSupervisionPage() {
  const [heroRef, heroInView]         = useInViewHook(0.1);
  const [coreRef, coreInView]         = useInViewHook(0.08);
  const [reportRef, reportInView]     = useInViewHook(0.08);
  const [conclusionRef, conclusionInView] = useInViewHook(0.15);

  return (
    <main className={styles.page}>

      {/* ══ HERO — FULL SCREEN DARK ══ */}
      <section className={styles.hero} ref={heroRef}>
        <div className={styles.heroBg}>
          <Image
            src="/content-images/high-bg22.jpg"
            alt="Highway supervision"
            fill className={styles.heroBgImg} priority
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroGrid} />

        {/* breadcrumb */}
        <div className={styles.heroBreadcrumb}>
          <Link href="/" className={styles.breadLink}>Home</Link>
          <span className={styles.breadSep}>/</span>
          <Link href="/#services" className={styles.breadLink}>Services</Link>
          <span className={styles.breadSep}>/</span>
          <span className={styles.breadCurrent}>Highway Supervision</span>
        </div>

        <div className={styles.heroContent}>
          {/* eyebrow */}
          <div className={`${styles.heroBadge} ${heroInView ? styles.heroBadgeIn : ''}`}>
            <span className={styles.heroBadgeDot} />
            <span>Construction Phase Services</span>
            <span className={styles.heroBadgeSep} />
            <span>MoRTH · NHAI</span>
          </div>

          {/* heading — large centered */}
          <h1 className={`${styles.heroHeading} ${heroInView ? styles.heroHeadingIn : ''}`}>
            <span className={styles.hWord1}>Highway</span>
            <span className={styles.hWord2}>Project</span>
            <span className={styles.hWord3}>Supervision.</span>
          </h1>

          {/* tagline */}
          <p className={`${styles.heroTagline} ${heroInView ? styles.heroTaglineIn : ''}`}>
            Ensuring Quality, Compliance, and On-Time Delivery
          </p>
        </div>

        {/* scroll hint */}
        <div className={styles.scrollHint}>
          <div className={styles.scrollLine} />
          <span className={styles.scrollText}>Scroll to explore</span>
        </div>
      </section>

      {/* ══ INTRO — WIDE STATEMENT ══ */}
      <section className={styles.introSection}>
        <div className={styles.introInner}>
          <div className={styles.introLabel}>
            <div className={styles.introLabelLine} />
            <span>What We Do</span>
          </div>
          <p className={styles.introStatement}>
            Our expert supervision team acts as the client's <em>vigilant eyes and ears on the ground</em> — managing all aspects of construction to ensure unwavering adherence to quality standards, strict regulatory compliance, and meticulous schedule management.
          </p>
          <div className={styles.introBadges}>
            {['Structural Integrity', 'Zero-Tolerance QA', 'Schedule Control', 'MoRTH Compliance', 'EMP Enforced'].map((b, i) => (
              <span key={i} className={styles.introBadge}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CORE COMPONENTS — STAGGERED CARDS ══ */}
      <section className={styles.coreSection} ref={coreRef}>
        <div className={styles.coreInner}>

          <div className={styles.coreHeader}>
            <div className={styles.coreTag}>
              <div className={styles.coreTagLine} />
              <span>Core Components</span>
            </div>
            <h2 className={styles.coreHeading}>
              Effective Supervision<br/><span>is Multi-Faceted</span>
            </h2>
          </div>

          {/* cards in staggered 2-col layout */}
          <div className={styles.coreGrid}>
            {coreComponents.map((c, i) => (
              <div
                key={i}
                className={`${styles.coreCard} ${i % 2 !== 0 ? styles.coreCardOffset : ''} ${coreInView ? styles.coreCardVisible : ''}`}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className={styles.coreCardTopBar} />
                <div className={styles.coreCardHead}>
                  <span className={styles.coreIcon}>{c.icon}</span>
                  <span className={styles.coreNum}>{c.num}</span>
                </div>
                <span className={styles.coreLabel}>{c.label}</span>
                <h3 className={styles.coreTitle}>{c.title}</h3>
                <p className={styles.coreBody}>{c.body}</p>
                <div className={styles.coreTags}>
                  {c.tags.map((t, ti) => (
                    <span key={ti} className={styles.coreTag2}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ FULL IMAGE BREAK ══ */}
      <section className={styles.imageBreak}>
        <div className={styles.imageBreakWrap}>
          <Image
            src="/content-images/high-bg-333.jpg"
            alt="On-site supervision"
            fill className={styles.imageBreakImg}
          />
          <div className={styles.imageBreakOverlay} />
          <div className={styles.imageBreakText}>
            <span className={styles.imageBreakQuote}>
              "Built right — on budget, on time, to the highest standards of engineering excellence."
            </span>
          </div>
        </div>
      </section>

      {/* ══ REPORTING SECTION — TABLE LAYOUT ══ */}
      <section className={styles.reportSection} ref={reportRef}>
        <div className={styles.reportInner}>

          <div className={styles.reportHeader}>
            <div className={styles.reportTag}>
              <div className={styles.reportTagLine} />
              <span>Documentation & Reporting</span>
            </div>
            <h2 className={styles.reportHeading}>
              Transparency &amp;<br/><span>Control</span>
            </h2>
            <p className={styles.reportSub}>
              A cornerstone of our supervision service — comprehensive, accurate, and timely documentation providing clients and MoRTH/NHAI with a clear, auditable trail of all project activities.
            </p>
          </div>

          {/* report doc cards */}
          <div className={styles.reportGrid}>
            {reportingDocs.map((doc, i) => (
              <div
                key={i}
                className={`${styles.reportCard} ${reportInView ? styles.reportCardVisible : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className={styles.reportCardBar} />

                {/* code stamp */}
                <div className={styles.reportStamp}>
                  <span className={styles.reportCode}>{doc.code}</span>
                </div>

                <h3 className={styles.reportTitle}>{doc.title}</h3>
                <span className={styles.reportSub2}>{doc.sub}</span>

                <div className={styles.reportDivider} />

                <div className={styles.reportContentBlock}>
                  <span className={styles.reportBlockLabel}>Content</span>
                  <p className={styles.reportBlockText}>{doc.content}</p>
                </div>

                <div className={styles.reportContentBlock}>
                  <span className={styles.reportBlockLabel}>Purpose</span>
                  <p className={`${styles.reportBlockText} ${styles.reportPurpose}`}>{doc.purpose}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ FINAL LARGE IMAGE + CONCLUSION ══ */}
      <section className={styles.conclusionSection} ref={conclusionRef}>

        <div className={styles.conclusionImageWrap}>
          <Image
            src="/content-images/high_bg-232.jpg"
            alt="Highway completion"
            fill className={styles.conclusionImg}
          />
          <div className={styles.conclusionImgOverlay} />
        </div>

        <div className={`${styles.conclusionContent} ${conclusionInView ? styles.conclusionContentIn : ''}`}>
          <div className={styles.conclusionInner}>
            <span className={styles.conclusionLabel}>The Result</span>
            <h2 className={styles.conclusionHeading}>
              Absolute Control.<br/>
              <span>Zero Compromise.</span>
            </h2>
            <p className={styles.conclusionText}>
              Through disciplined documentation and expert on-site presence, every aspect of the project is documented, auditable, and transparent — guaranteeing the client absolute control over the quality and trajectory of their high-value highway investment.
            </p>
            <Link href="/#contact" className={styles.conclusionCta}>
              <span>Engage Our Supervision Team</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
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