'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import styles from './WhyChooseTerraman1.module.css';

const achievements = [
  {
    rank: '#1',
    source: 'Engineering News-Record',
    category: 'Design Firms',
    items: ['Top 500 Design Firms', 'Telecommunications', 'Data Centers'],
    image: '/content-images/10-year-bg.jpeg',
    year: '2024',
    tag: 'ENR Ranking',
  },
  {
    rank: '#1',
    source: 'Building Design + Construction',
    category: 'Engineering & Architecture',
    items: ['Engineering and Architecture Firm', 'Data Center Sector Engineering Firm'],
    image: '/content-images/10-year-bg-2.jpeg',
    year: '2024',
    tag: 'BD+C Award',
  },
  {
    rank: '#1',
    source: 'Fortune Magazine',
    category: 'Most Admired Company',
    items: ['Most Admired Company', 'Engineering & Construction Sector'],
    image: '/content-images/10-year-bg-4.jpeg',
    year: '2024',
    tag: 'Fortune 500',
  },
];

const milestones = [
  { year: '2016', label: 'Founded', desc: 'Established in New Delhi with a vision to redefine infrastructure consultancy.' },
  { year: '2017', label: 'First NHAI Project', desc: 'Secured first national highway project under MoRTH specifications.' },
  { year: '2019', label: '50 Projects', desc: 'Crossed 50 completed projects across highways, bridges, and urban planning.' },
  { year: '2021', label: 'Pan India', desc: 'Expanded operations to 12 states covering all major infrastructure sectors.' },
  { year: '2023', label: '150 Projects', desc: 'Delivered 150+ projects with 100% client satisfaction record.' },
  { year: '2025+', label: 'Future Forward', desc: 'Advancing into smart cities, LiDAR, and AI-integrated engineering solutions.' },
];

function useReveal(threshold = 0.1) {
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

export default function WhyChooseTerramanPage() {
  const [heroRef, heroVis]         = useReveal(0.1);
  const [achieveRef, achieveVis]   = useReveal(0.06);
  const [timelineRef, timelineVis] = useReveal(0.06);
  const [closingRef, closingVis]   = useReveal(0.15);

  return (
    <main className={styles.page}>

      {/* ══ HERO — DARK CENTERED ══ */}
      <section className={styles.hero} ref={heroRef}>
        <div className={styles.heroBg}>
          <Image src="/content-images/10-year-bg.jpeg" alt="Terraman" fill className={styles.heroBgImg} priority />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroGridLines} />

        {/* breadcrumb */}
        <div className={styles.heroBread}>
          <Link href="/" className={styles.breadLink}>Home</Link>
          <span className={styles.breadSep}>/</span>
          <span className={styles.breadCurrent}>Why Choose Terraman</span>
        </div>

        <div className={styles.heroContent}>
          <div className={`${styles.heroPill} ${heroVis ? styles.heroPillIn : ''}`}>
            <span className={styles.heroPillDot} />
            Since 2015 · New Delhi, India
          </div>

          <h1 className={`${styles.heroHeading} ${heroVis ? styles.heroHeadingIn : ''}`}>
            <span className={styles.hGhost}>Why Choose</span>
            <span className={styles.hBold}>Terraman.</span>
          </h1>

          <p className={`${styles.heroTagline} ${heroVis ? styles.heroTaglineIn : ''}`}>
            A decade of engineering excellence, proven across India's most complex infrastructure projects.
          </p>
        </div>

        {/* bottom stats strip */}
        <div className={`${styles.heroStrip} ${heroVis ? styles.heroStripIn : ''}`}>
          {[
            { n: '10+',  l: 'Years Active'     },
            { n: '150+', l: 'Projects'          },
            { n: '12',   l: 'States Covered'    },
            { n: '100%', l: 'Client Satisfaction'},
            { n: '6',    l: 'Core Sectors'      },
          ].map((s, i) => (
            <div key={i} className={styles.heroStripItem}>
              <span className={styles.heroStripNum}>{s.n}</span>
              <span className={styles.heroStripLabel}>{s.l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══ ACHIEVEMENTS — TROPHY WALL ══ */}
      <section className={styles.achieveSection} ref={achieveRef}>
        <div className={styles.achieveInner}>

          <div className={styles.achieveHeader}>
            <div className={styles.achieveTag}>
              <div className={styles.achieveTagLine} />
              <span>Recognition & Awards</span>
            </div>
            <h2 className={styles.achieveHeading}>
              Ranked <span>#1.</span><br/>
              Three Times Over.
            </h2>
            <p className={styles.achieveSub}>
              Independently recognized by the industry's most trusted publications.
            </p>
          </div>

          {/* 3 achievement cards */}
          <div className={styles.achieveGrid}>
            {achievements.map((a, i) => (
              <div
                key={i}
                className={`${styles.aCard} ${achieveVis ? styles.aCardVisible : ''}`}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                {/* image top */}
                <div className={styles.aCardImage}>
                  <Image src={a.image} alt={a.source} fill className={styles.aCardImg} />
                  <div className={styles.aCardImgOverlay} />

                  {/* rank badge top-left */}
                  <div className={styles.aCardRank}>
                    <span className={styles.aCardRankNum}>{a.rank}</span>
                    <span className={styles.aCardRankLabel}>Ranked</span>
                  </div>

                  {/* year top-right */}
                  <div className={styles.aCardYear}>{a.year}</div>
                </div>

                {/* content bottom */}
                <div className={styles.aCardBody}>
                  <div className={styles.aCardTop}>
                    <span className={styles.aCardTag}>{a.tag}</span>
                  </div>
                  <p className={styles.aCardSource}>{a.source}</p>
                  <h3 className={styles.aCardCategory}>{a.category}</h3>

                  <div className={styles.aCardItems}>
                    {a.items.map((item, ii) => (
                      <div key={ii} className={styles.aCardItem}>
                        <span className={styles.aCardItemDot} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* progress bar */}
                  <div className={styles.aCardProgress}>
                    <div className={styles.aCardProgressFill} />
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ 10 YEARS TEXT — LARGE STATEMENT ══ */}
      <section className={styles.statementSection}>
        <div className={styles.statementInner}>

          {/* big number left */}
          <div className={styles.statLeft}>
            <span className={styles.statBigNum}>10</span>
            <span className={styles.statBigSuffix}>+</span>
          </div>

          {/* right text */}
          <div className={styles.statRight}>
            <div className={styles.statLabel}>
              <div className={styles.statLabelLine} />
              <span>A Decade of Excellence</span>
            </div>
            <h2 className={styles.statHeading}>
              Years of <span>Excellence</span>
            </h2>
            <p className={styles.statBody}>
              For more than a decade, Terraman Infratech Consultants has delivered reliable, data-driven, and engineering-accurate solutions to public and private sector clients across India. Since our establishment in 2015, we have consistently upheld the highest standards of quality and technical precision.
            </p>
            <p className={styles.statBody}>
              Our commitment to timely delivery and engineering excellence has helped us build long-term partnerships across infrastructure development, transportation, and industrial planning — making us a trusted name in the consultancy sector.
            </p>
          </div>

        </div>
      </section>

      {/* ══ TIMELINE ══ */}
      <section className={styles.timelineSection} ref={timelineRef}>
        <div className={styles.timelineInner}>

          <div className={styles.tlHeader}>
            <div className={styles.tlTag}>
              <div className={styles.tlTagLine} />
              <span>Our Journey</span>
            </div>
            <h2 className={styles.tlHeading}>
              A Decade of<br/><span>Milestones</span>
            </h2>
          </div>

          {/* horizontal timeline */}
          <div className={styles.tlTrack}>
            <div className={styles.tlSpine} />
            {milestones.map((m, i) => (
              <div
                key={i}
                className={`${styles.tlItem} ${timelineVis ? styles.tlItemVisible : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className={styles.tlDot}>
                  <div className={styles.tlDotInner} />
                </div>
                <div className={styles.tlContent}>
                  <span className={styles.tlYear}>{m.year}</span>
                  <span className={styles.tlLabel}>{m.label}</span>
                  <p className={styles.tlDesc}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ CLOSING CTA ══ */}
      <section className={styles.closingSection} ref={closingRef}>
        <div className={`${styles.closingInner} ${closingVis ? styles.closingIn : ''}`}>
          <span className={styles.closingEye}>The Terraman Promise</span>
          <h2 className={styles.closingHeading}>
            Trusted by India's<br/>
            <span>Infrastructure Leaders.</span>
          </h2>
          <p className={styles.closingText}>
            From MoRTH highways to smart city platforms — one decade, one commitment: engineering excellence that delivers.
          </p>
          <Link href="/#contact" className={styles.closingCta}>
            <span>Start Your Project With Us</span>
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
          <span>Back</span>
        </Link>
      </div>

    </main>
  );
}