'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import styles from './about.module.css';

const values = [
  { code: '01', title: 'Precision',     desc: 'Every measurement, every calculation — engineered to millimeter accuracy.' },
  { code: '02', title: 'Integrity',     desc: 'Transparent communication and ethical work standards on every project.' },
  { code: '03', title: 'Innovation',    desc: 'LiDAR, BIM, GIS, and AI modeling integrated into every blueprint.' },
  { code: '04', title: 'Accountability',desc: 'On-time, on-budget delivery — a promise, not a goal.' },
];

const team = [
  { role: 'Civil Engineers',        count: '12+' },
  { role: 'Structural Specialists', count: '8+'  },
  { role: 'GIS Analysts',           count: '6+'  },
  { role: 'Project Managers',       count: '4+'  },
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

export default function AboutPage() {
  const [heroRef,   heroVis]   = useReveal(0.1);
  const [storyRef,  storyVis]  = useReveal(0.1);
  const [valRef,    valVis]    = useReveal(0.08);
  const [teamRef,   teamVis]   = useReveal(0.1);
  const [closingRef,closingVis]= useReveal(0.15);

  return (
    <main className={styles.page}>

      {/* ══ HERO — OVERSIZED EDITORIAL ══ */}
      <section className={styles.hero} ref={heroRef}>

        {/* background image full bleed */}
        <div className={styles.heroBg}>
          <Image
            src="/images/about-bg.jpg"
            alt="Terraman headquarters"
            fill className={styles.heroBgImg} priority
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroGridLines} />

        {/* breadcrumb */}
        <div className={styles.heroBread}>
          <Link href="/" className={styles.breadLink}>Home</Link>
          <span className={styles.breadSep}>/</span>
          <span className={styles.breadCurrent}>About Us</span>
        </div>

        {/* center split layout */}
        <div className={styles.heroSplit}>

          {/* left — tag + huge heading */}
          <div className={`${styles.heroLeft} ${heroVis ? styles.heroLeftIn : ''}`}>
            <div className={styles.heroPill}>
              <span className={styles.heroPillDot} />
              Est. 2015 · New Delhi, India
            </div>

            <h1 className={styles.heroHeading}>
              <span className={styles.hGhost}>The</span>
              <span className={styles.hBold}>Architects</span>
              <span className={styles.hAccent}>of Reliability.</span>
            </h1>
          </div>

          {/* right — intro text */}
          <div className={`${styles.heroRight} ${heroVis ? styles.heroRightIn : ''}`}>
            <p className={styles.heroIntro}>
              Terraman started as a small consultancy and has grown into a premier civil engineering firm — driven by <em>data, precision, and purpose</em>.
            </p>
            <div className={styles.heroMetrics}>
              {[
                { n: '2015', l: 'Founded'          },
                { n: '10+',  l: 'Years'             },
                { n: '150+', l: 'Projects'          },
                { n: '100%', l: 'Client Trust'      },
              ].map((m, i) => (
                <div key={i} className={styles.hMetric}>
                  <span className={styles.hMetricNum}>{m.n}</span>
                  <span className={styles.hMetricLabel}>{m.l}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* bottom scroll hint */}
        <div className={styles.scrollHint}>
          <div className={styles.scrollLine} />
          <span className={styles.scrollText}>Our Story</span>
        </div>

      </section>

      {/* ══ STORY SECTION — MAGAZINE GRID ══ */}
      <section className={styles.storySection} ref={storyRef}>
        <div className={styles.storyInner}>

          {/* top — large pull quote */}
          <div className={`${styles.storyTop} ${storyVis ? styles.storyTopIn : ''}`}>
            <div className={styles.storyLabel}>
              <div className={styles.storyLabelLine} />
              <span>Introduction</span>
            </div>
            <p className={styles.pullQuote}>
              We believe in the power of{' '}
              <em>data-driven construction</em>{' '}
              and precision-led decision making — building infrastructure that withstands the test of time.
            </p>
          </div>

          {/* bottom — 2 col text + image */}
          <div className={`${styles.storyGrid} ${storyVis ? styles.storyGridIn : ''}`}>

            <div className={styles.storyText}>
              <p className={styles.storyPara}>
                Terraman Infratech Consultants was founded with a singular vision: to bring engineering excellence and technological precision to India's rapidly growing infrastructure landscape. From our first project to our 150th, we have never compromised on quality, safety, or client commitment.
              </p>
              <p className={styles.storyPara}>
                Our mission is to build infrastructure that withstands the test of time while minimizing environmental impact. We integrate <mark className={styles.mark}>AI modeling</mark>, <mark className={styles.mark}>LiDAR surveys</mark>, and <mark className={styles.mark}>sustainable materials</mark> into every blueprint — ensuring performance, longevity, and accountability at scale.
              </p>
              <p className={styles.storyPara}>
                Today, Terraman operates across 12 states, serving national highway authorities, urban bodies, water departments, and industrial clients — all with the same commitment to technical precision and on-time delivery.
              </p>
            </div>

            <div className={styles.storyImageCol}>
              <div className={styles.storyImageWrap}>
                <Image
                  src="/images/about-bg.jpg"
                  alt="Terraman team"
                  fill className={styles.storyImage}
                />
                <div className={styles.storyImageOverlay} />
                <div className={styles.storyImageBadge}>
                  <span className={styles.storyBadgeDot} />
                  Active · New Delhi HQ
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ VALUES — DARK GRID ══ */}
      <section className={styles.valSection} ref={valRef}>
        <div className={styles.valInner}>

          <div className={styles.valHeader}>
            <div className={styles.valTag}>
              <div className={styles.valTagLine} />
              <span>Core Values</span>
            </div>
            <h2 className={styles.valHeading}>
              What We Stand<br/><span>For</span>
            </h2>
          </div>

          <div className={styles.valGrid}>
            {values.map((v, i) => (
              <div
                key={i}
                className={`${styles.valCard} ${valVis ? styles.valCardVisible : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className={styles.valCardBar} />
                <div className={styles.valCardHead}>
                  <span className={styles.valCode}>{v.code}</span>
                </div>
                <h3 className={styles.valTitle}>{v.title}</h3>
                <p className={styles.valDesc}>{v.desc}</p>
                <div className={styles.valDivider} />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ TEAM NUMBERS ══ */}
      <section className={styles.teamSection} ref={teamRef}>
        <div className={styles.teamInner}>

          <div className={styles.teamLeft}>
            <div className={styles.teamTag}>
              <div className={styles.teamTagLine} />
              <span>Our People</span>
            </div>
            <h2 className={styles.teamHeading}>
              50+ Experts.<br/>
              <span>One Mission.</span>
            </h2>
            <p className={styles.teamDesc}>
              A cohesive multi-disciplinary team — civil engineers, structural specialists, GIS analysts, and project managers — working as one integrated unit.
            </p>
          </div>

          <div className={styles.teamRight}>
            {team.map((t, i) => (
              <div
                key={i}
                className={`${styles.teamRow} ${teamVis ? styles.teamRowVisible : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <span className={styles.teamCount}>{t.count}</span>
                <div className={styles.teamRowLine} />
                <span className={styles.teamRole}>{t.role}</span>
                <div className={styles.teamRowProgress}>
                  <div className={styles.teamRowFill} />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ CLOSING CTA ══ */}
      <section className={styles.closingSection} ref={closingRef}>
        <div className={styles.closingBg}>
          <Image src="/images/about-bg.jpg" alt="Engineering" fill className={styles.closingBgImg} />
          <div className={styles.closingBgOverlay} />
        </div>
        <div className={`${styles.closingContent} ${closingVis ? styles.closingContentIn : ''}`}>
          <span className={styles.closingEye}>Get In Touch</span>
          <h2 className={styles.closingHeading}>
            Let's Build Something<br/>
            <span>Extraordinary.</span>
          </h2>
          <p className={styles.closingText}>
            From highways to smart cities — we bring precision, purpose, and partnership to every project.
          </p>
          <div className={styles.closingBtns}>
            <Link href="/#contact" className={styles.closingCtaPrimary}>
              <span>Start a Project</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="/#services" className={styles.closingCtaSecondary}>
              View Our Services
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}