'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
// import styles from './detailedproject.module.css';
import styles from './detaiedproject.module.css'

const timelineItems = [
  {
    code: '01',
    title: 'High-Definition Engineering Design',
    label: 'Geometric Finalization',
    body: 'We produce detailed engineering drawings for the entire corridor — final geometric design, vertical profiles, cross-sections, and sight distance calculations. Pavement design is rigorously determined based on traffic data (IRC-37) and subgrade strength tests.',
    tag: 'IRC-37 Compliant',
  },
  {
    code: '02',
    title: 'Structural Integrity & Bridge Detailing',
    label: 'Bridges · Culverts · Flyovers',
    body: 'Comprehensive structural designs for bridges, culverts, flyovers, retaining walls, and underpasses — including foundation details, material specifications, seismic compliance, and hydrological analyses to safely manage peak flood discharge.',
    tag: 'Seismic Verified',
  },
  {
    code: '03',
    title: 'Bill of Quantities & Cost Estimation',
    label: 'BOQ · Abstract of Cost',
    body: 'Item-by-item quantification of all construction elements using current market rates, schedules of rates, and regional inflation forecasts. Produces the definitive BOQ that becomes the benchmark for tender evaluation and budget control.',
    tag: 'Budget Benchmark',
  },
  {
    code: '04',
    title: 'Land Acquisition & Utility Shifting',
    label: 'ROW Management',
    body: 'Detailed Property Identification drawings and coordinated relocation plans for utilities — water lines, power cables, gas pipelines, and telecom assets — minimizing disruption and ensuring seamless site handover.',
    tag: 'ROW Compliant',
  },
  {
    code: '05',
    title: 'Traffic Management & ITS Integration',
    label: 'Smart Highway Asset',
    body: 'Temporary traffic management schemes ensure safety during construction, while final designs integrate Intelligent Transportation Systems — FASTag, VMS, surveillance, and command centers — creating a smart, managed corridor.',
    tag: 'ITS Ready',
  },
  {
    code: '06',
    title: 'Construction Methodology & QA/QC',
    label: 'CPM/PERT · IRC Standards',
    body: 'The DPR defines construction methodology, work programs, and a comprehensive QA/QC framework — specifying material testing, acceptance criteria, and inspection protocols in full compliance with IRC standards.',
    tag: 'IRC QA/QC',
  },
  {
    code: '07',
    title: 'Environmental & Social Impact Mitigation',
    label: 'EMP · Afforestation',
    body: 'All mitigation measures — noise barriers, pollution control, compensatory afforestation, and Environmental Management Plans — are fully designed, costed, and embedded into execution documentation.',
    tag: 'EMP Integrated',
  },
];

export default function DetailedProjectPage() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <main className={styles.page}>

      {/* ══ HERO — DARK EDITORIAL ══ */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image src="/content-images/dpr-bg.jpg" alt="DPR" fill className={styles.heroBgImg} priority />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroNoise} />

        <div className={styles.heroInner}>

          {/* breadcrumb */}
          <div className={styles.breadcrumb}>
            <Link href="/" className={styles.breadLink}>Home</Link>
            <span className={styles.breadSep}>/</span>
            <Link href="/#services" className={styles.breadLink}>Services</Link>
            <span className={styles.breadSep}>/</span>
            <span className={styles.breadCurrent}>Detailed Project Report</span>
          </div>

          {/* doc number badge */}
          <div className={styles.docBadge}>
            <span className={styles.docBadgeCode}>DOC — ENG/DPR/001</span>
            <span className={styles.docBadgeDivider} />
            <span className={styles.docBadgeStatus}>MoRTH · NHAI Approved</span>
          </div>

          {/* heading — stacked */}
          <h1 className={styles.heroHeading}>
            <span className={styles.hLine1}>Detailed</span>
            <span className={styles.hLine2}>Project</span>
            <span className={styles.hLine3}>Report.</span>
          </h1>

          <p className={styles.heroSub}>
            The Blueprint for Execution Excellence
          </p>

        </div>

        {/* right — large image block with overlay text */}
        <div className={styles.heroRight}>
          <Image src="/content-images/dpr-bg-2.jpg" alt="DPR engineering" fill className={styles.heroRightImg} />
          <div className={styles.heroRightOverlay} />
          <div className={styles.heroRightText}>
            <span className={styles.heroRightNum}>7</span>
            <span className={styles.heroRightLabel}>Core DPR Components</span>
          </div>
        </div>

      </section>

      {/* ══ INTRO — FULL WIDTH STATEMENT ══ */}
      <section className={styles.statementSection}>
        <div className={styles.statementInner}>
          <div className={styles.statementTag}>
            <div className={styles.stTagLine} />
            <span>What is a DPR?</span>
          </div>
          <p className={styles.statementText}>
            The DPR is the most critical technical and financial document — providing <em>granular detail</em> necessary for securing final government sanctions, floating tenders, and commencing physical construction. Our commitment is to deliver DPRs that are{' '}
            <strong>technically flawless</strong>, legally robust, and financially accurate — significantly{' '}
            <strong>de-risking execution</strong> for projects under MoRTH and NHAI approval.
          </p>
          <div className={styles.statementMeta}>
            {[
              { v: 'Flawless', l: 'Technical Accuracy'   },
              { v: 'Robust',   l: 'Legal Compliance'      },
              { v: 'Accurate', l: 'Financial Certainty'   },
              { v: 'De-risk',  l: 'Execution Confidence'  },
            ].map((m, i) => (
              <div key={i} className={styles.stMeta}>
                <span className={styles.stMetaVal}>{m.v}</span>
                <span className={styles.stMetaLabel}>{m.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ IMAGE + SIGNIFICANCE ══ */}
      <section className={styles.significanceSection}>
        <div className={styles.sigInner}>

          <div className={styles.sigLeft}>
            <div className={styles.sigTag}>
              <div className={styles.sTagLine} />
              <span>Why It Matters</span>
            </div>
            <h2 className={styles.sigHeading}>
              The Significance of a<br/><span>Precision-Engineered</span><br/>DPR
            </h2>

            <div className={styles.sigPoints}>
              {[
                { t: 'Governing Document',    d: 'Exact specs, drawings, BOQ, and cost estimates — the basis of all tender documents.' },
                { t: 'Final Sanction',        d: 'Incorporates environmental clearances, land acquisition plans, and IRC standard compliance.' },
                { t: 'Cost Control',          d: 'Detailed capital breakdown establishes baseline budget, protecting clients from overruns.' },
              ].map((p, i) => (
                <div key={i} className={styles.sigPoint}>
                  <div className={styles.sigPointNum}>{String(i+1).padStart(2,'0')}</div>
                  <div>
                    <span className={styles.sigPointTitle}>{p.t}</span>
                    <p className={styles.sigPointDesc}>{p.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.sigRight}>
            <div className={styles.sigImageWrap}>
              <Image src="/content-images/dpr-bg-2.jpg" alt="DPR significance" fill className={styles.sigImage} />
              <div className={styles.sigImageOverlay} />
            </div>
          </div>

        </div>
      </section>

      {/* ══ TIMELINE — UNIQUE LAYOUT ══ */}
      <section className={styles.timelineSection} ref={ref}>
        <div className={styles.timelineInner}>

          <div className={styles.timelineHeader}>
            <div className={styles.tlTag}>
              <div className={styles.tlTagLine} />
              <span>DPR Components</span>
            </div>
            <h2 className={styles.tlHeading}>
              What Our DPR<br/><span>Contains</span>
            </h2>
          </div>

          {/* vertical timeline */}
          <div className={styles.timeline}>
            <div className={styles.timelineSpine} />
            {timelineItems.map((item, i) => (
              <div
                key={i}
                className={`${styles.tlItem} ${visible ? styles.tlItemVisible : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* spine dot */}
                <div className={styles.tlDot}>
                  <div className={styles.tlDotInner} />
                </div>

                {/* card */}
                <div className={styles.tlCard}>
                  <div className={styles.tlCardTopBar} />

                  <div className={styles.tlCardHead}>
                    <div className={styles.tlCardLeft}>
                      <span className={styles.tlCode}>{item.code}</span>
                      <span className={styles.tlLabel}>{item.label}</span>
                    </div>
                    <span className={styles.tlTag2}>{item.tag}</span>
                  </div>

                  <h3 className={styles.tlTitle}>{item.title}</h3>
                  <p className={styles.tlBody}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ FINAL IMAGE + CONCLUSION ══ */}
      <section className={styles.conclusionSection}>
        <div className={styles.conclusionInner}>

          <div className={styles.conclusionImageWrap}>
            <Image src="/content-images/dpr-bg.jpg" alt="DPR conclusion" fill className={styles.conclusionImage} />
            <div className={styles.conclusionOverlay} />
            <div className={styles.conclusionOverlayText}>
              <span className={styles.cotNum}>100%</span>
              <span className={styles.cotLabel}>Execution Confidence</span>
            </div>
          </div>

          <div className={styles.conclusionText}>
            <p className={styles.conclusionPara}>
              By delivering a comprehensive and highly accurate DPR, we equip our clients with the authoritative document needed to move confidently into the construction phase — minimizing execution risks and guaranteeing compliance with the stringent requirements of national highway development agencies.
            </p>
            <Link href="/#contact" className={styles.conclusionCta}>
              <span>Request a DPR Consultation</span>
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