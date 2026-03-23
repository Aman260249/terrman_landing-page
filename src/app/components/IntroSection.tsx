'use client';
import { useEffect, useState, useRef } from 'react';
import useInView from './hooks/useInView';
import styles from '../styles/IntroSection.module.css';

/* ── COUNT HOOK ── */
const useCounter = (end: number, trigger: boolean, delay = 0) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const timeout = setTimeout(() => {
      let start = 0;
      const duration = 1800;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) { setCount(end); clearInterval(timer); }
        else setCount(Math.floor(start));
      }, 16);
      return () => clearInterval(timer);
    }, delay);
    return () => clearTimeout(timeout);
  }, [trigger, end, delay]);
  return count;
};

const statsData = [
  { end: 8,   suffix: '+',  label: 'Years of Excellence' },
  { end: 150, suffix: '+',  label: 'Projects Delivered'  },
  { end: 4,   suffix: '',   label: 'Core Sectors'         },
  { end: 100, suffix: '%',  label: 'Client Satisfaction'  },
  { end: 25,  suffix: '+',  label: 'Team Members'         },
];

/* ── ANIMATED WORD COMPONENT ── */
function RevealWords({ text, inView, baseDelay = 0 }: { text: string; inView: boolean; baseDelay?: number }) {
  const words = text.split(' ');
  return (
    <>
      {words.map((word, i) => (
        <span key={i} className={styles.wordWrap}>
          <span
            className={`${styles.word} ${inView ? styles.wordVisible : ''}`}
            style={{ transitionDelay: `${baseDelay + i * 0.06}s` }}
          >
            {word}
          </span>
          {i < words.length - 1 && ' '}
        </span>
      ))}
    </>
  );
}

/* ── TYPEWRITER COMPONENT ── */
function Typewriter({ text, inView, delay = 0 }: { text: string; inView: boolean; delay?: number }) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(t);
  }, [inView, delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const timer = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(timer);
    }, 28);
    return () => clearInterval(timer);
  }, [started, text]);

  return <>{displayed}<span className={styles.cursor}>|</span></>;
}

/* ── STATS ITEM ── */
function StatItem({ end, suffix, label, trigger, delay }: {
  end: number; suffix: string; label: string; trigger: boolean; delay: number;
}) {
  const count = useCounter(end, trigger, delay);
  return (
    <div
      className={`${styles.statCard} ${trigger ? styles.statCardVisible : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={styles.statTopBar} />
      <span className={styles.statNum}>
        {end === 4 ? String(count).padStart(2, '0') : count}{suffix}
      </span>
      <span className={styles.statLabel}>{label}</span>
      <div className={styles.statFill} />
    </div>
  );
}

export default function IntroSection() {
  const [topRef, topInView]     = useInView({ threshold: 0.15 });
  const [statsRef, statsInView] = useInView({ threshold: 0.3  });
  const [factsRef, factsInView] = useInView({ threshold: 0.4  });
  const [videoRef, videoInView] = useInView({ threshold: 0.2  });

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* ── TOP GRID ── */}
        <div ref={topRef} className={styles.topGrid}>

          {/* LEFT */}
          <div className={`${styles.leftCol} ${topInView ? styles.leftVisible : ''}`}>
            <div className={styles.eyebrow}>
              <div className={styles.eyebrowLine} />
              <span className={styles.eyebrowText}>Company Overview</span>
            </div>

            <h2 className={styles.mainHeading}>
              <span className={styles.headingLight}>Engineering</span>
              <span className={styles.headingBold}>
                Excel<span className={styles.headingAccent}>lence.</span>
              </span>
            </h2>

            <div className={styles.whoWrap}>
              <span className={styles.whoLabel}>Who We Are</span>
              <div className={styles.whoLine} />
            </div>

            <p className={styles.bodyText}>
              <RevealWords
                text="We fuse engineering excellence with cutting-edge technology to create precise surveys, smart designs, and top-tier project documentation."
                inView={topInView}
                baseDelay={0.3}
              />
            </p>
          </div>

          {/* CENTER DIVIDER */}
          <div className={`${styles.divider} ${topInView ? styles.dividerGrow : ''}`} />

          {/* RIGHT */}
          <div className={`${styles.rightCol} ${topInView ? styles.rightVisible : ''}`}>
            <div className={styles.whoWrap}>
              <span className={styles.whoLabel}>Our Expertise</span>
              <div className={styles.whoLine} />
            </div>

            <h3 className={styles.subHeading}>
              SMART <span>SOLUTIONS</span>
            </h3>

            <p className={styles.bodyText}>
              <RevealWords
                text="Terraman Infratech Consultants delivers smart, end-to-end engineering solutions across transportation, urban development, and water resources. Since 2016, we've helped turn ideas into efficient, cost-effective projects."
                inView={topInView}
                baseDelay={0.5}
              />
            </p>

            {/* tags row */}
            <div className={`${styles.tagRow} ${topInView ? styles.tagRowVisible : ''}`}>
              {['Transportation', 'Urban Dev', 'Water Resources', 'Since 2016'].map((t, i) => (
                <span key={i} className={styles.tag} style={{ transitionDelay: `${0.8 + i * 0.1}s` }}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── VIDEO ── */}
        <div ref={videoRef} className={`${styles.videoWrapper} ${videoInView ? styles.videoVisible : ''}`}>
          <video autoPlay muted loop playsInline className={styles.video}>
            <source src="https://res.cloudinary.com/datklzcrj/video/upload/v1774263592/15540599_3840_2160_24fps_frokkt.mp4" type="video/mp4" />
          </video>
          <div className={styles.videoOverlay} />
          {/* floating label on video */}
          <div className={`${styles.videoLabel} ${videoInView ? styles.videoLabelVisible : ''}`}>
            <span className={styles.videoLabelDot} />
            Terraman · Live Projects
          </div>
        </div>

        {/* ── STATS ── */}
        <div ref={statsRef} className={styles.statsGrid}>
          {statsData.map((s, i) => (
            <StatItem
              key={i}
              end={s.end}
              suffix={s.suffix}
              label={s.label}
              trigger={statsInView}
              delay={i * 120}
            />
          ))}
        </div>

        {/* ── FACTS / SINCE 2016 ── */}
        <div ref={factsRef} className={`${styles.facts} ${factsInView ? styles.factsVisible : ''}`}>

          {/* left — year block */}
          <div className={styles.factsLeft}>
            <span className={`${styles.sinceTxt} ${factsInView ? styles.sinceTxtVisible : ''}`}>Since</span>
            <div className={`${styles.yearBlock} ${factsInView ? styles.yearVisible : ''}`}>
              <span className={styles.year}>2016</span>
              <div className={styles.yearBar} />
            </div>
          </div>

          {/* center divider */}
          <div className={`${styles.factsDivider} ${factsInView ? styles.factsDividerGrow : ''}`} />

          {/* right — typewriter philosophy text */}
          <div className={styles.factsRight}>
            <p className={styles.philosophyText}>
              {factsInView
                ? <Typewriter
                    text="Terraman's philosophy is simple — design responsibly, deliver accurately, and build trust with every project."
                    inView={factsInView}
                    delay={0.4}
                  />
                : null
              }
            </p>

            {/* sliding highlight strip */}
            <div className={`${styles.highlightStrip} ${factsInView ? styles.highlightStripVisible : ''}`}>
              {['Design', 'Deliver', 'Trust'].map((w, i) => (
                <span
                  key={i}
                  className={`${styles.highlightWord} ${factsInView ? styles.highlightWordVisible : ''}`}
                  style={{ transitionDelay: `${1.2 + i * 0.2}s` }}
                >
                  {w}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}