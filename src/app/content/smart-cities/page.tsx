'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './smart-cities.module.css';

const techStack = [
  { label: 'Smart Mobility',    desc: 'Adaptive traffic signals, EV infrastructure, and connected transport corridors.' },
  { label: 'ICCC Integration',  desc: 'Integrated Command & Control Centers linking all city services in real-time.' },
  { label: 'Sensor Networks',   desc: 'IoT-based air quality, flood, and structural monitoring across the urban grid.' },
  { label: 'Data Platforms',    desc: 'City OS deployment translating live data into governance and public service insights.' },
  { label: 'Utility Networks',  desc: 'Smart water, electricity, and waste management infrastructure.' },
  { label: 'Energy Efficiency', desc: 'Solar microgrids, LED street lighting, and building energy management systems.' },
];

const metrics = [
  { value: '40%',  label: 'Energy Savings'     },
  { value: '3x',   label: 'Faster Response'    },
  { value: '25+',  label: 'Smart Projects'     },
  { value: '100%', label: 'Data-Driven Design' },
];

export default function SmartCitiesPage() {
  return (
    <main className={styles.page}>

      {/* ══ SECTION 1 — FULL SCREEN HERO ══ */}
      <section className={styles.hero}>

        {/* background image — full bleed */}
        <div className={styles.heroBg}>
          <Image
            src="/content-images/smart-cities.jpg"
            alt="Smart city"
            fill
            className={styles.heroBgImg}
            priority
          />
          {/* gradient tints */}
          <div className={styles.heroTint} />
        </div>

        {/* scan line texture */}
        <div className={styles.scanLines} />

        {/* top nav strip */}
        <div className={styles.heroNav}>
          <Link href="/" className={styles.heroNavLink}>Home</Link>
          <span className={styles.heroNavSep}>·</span>
          <Link href="/#services" className={styles.heroNavLink}>Services</Link>
          <span className={styles.heroNavSep}>·</span>
          <span className={styles.heroNavCurrent}>Smart Cities</span>
        </div>

        {/* center content */}
        <div className={styles.heroContent}>
          <div className={styles.heroPill}>
            <span className={styles.heroPillDot} />
            Smart Cities Initiative
          </div>

          {/* massive title — editorial style */}
          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleTop}>The</span>
            <span className={styles.heroTitleMid}>Future</span>
            <span className={styles.heroTitleBot}>City.</span>
          </h1>

          <p className={styles.heroQuote}>
            "Translating digital visions into tangible, operational urban assets."
          </p>
        </div>

        {/* bottom metrics bar */}
        <div className={styles.heroMetrics}>
          {metrics.map((m, i) => (
            <div key={i} className={styles.heroMetric}>
              <span className={styles.heroMetricVal}>{m.value}</span>
              <span className={styles.heroMetricLbl}>{m.label}</span>
            </div>
          ))}
        </div>

      </section>

      {/* ══ SECTION 2 — INTRO — white editorial ══ */}
      <section className={styles.introSection}>

        {/* big faded background word */}
        <div className={styles.introBgWord}>SMART</div>

        <div className={styles.introWrap}>

          {/* left — large pull quote */}
          <div className={styles.introLeft}>
            <p className={styles.pullQuote}>
              We are at the<br/>
              forefront of the<br/>
              <em>Smart Cities</em><br/>
              initiative.
            </p>
            <div className={styles.pullLine} />
          </div>

          {/* right — body text */}
          <div className={styles.introRight}>
            <div className={styles.introTag}>
              <span className={styles.tagDash}>—</span>
              <span>About This Service</span>
            </div>
            <p className={styles.introBody}>
              As consultants dedicated to innovation, we deliver integrated solutions that leverage technology to improve urban efficiency and governance. Our role involves detailed engineering for intelligent infrastructure components, including smart mobility solutions, utility networks, and integrated command and control centers (ICCCs).
            </p>
            <p className={styles.introBody}>
              We help clients define the optimal technological stack, prepare detailed implementation strategies, and manage the deployment of sensor networks and data platforms — turning digital blueprints into living urban systems.
            </p>
          </div>

        </div>
      </section>

      {/* ══ SECTION 3 — TECH STACK — dark grid ══ */}
      <section className={styles.techSection}>
        <div className={styles.techDotGrid} />

        <div className={styles.techWrap}>

          {/* header row */}
          <div className={styles.techHeader}>
            <div className={styles.techHeaderLeft}>
              <span className={styles.techNum}>06</span>
              <span className={styles.techNumLabel}>Solutions</span>
            </div>
            <h2 className={styles.techHeading}>
              What We<br/><span>Deploy</span>
            </h2>
          </div>

          {/* 3x2 grid */}
          <div className={styles.techGrid}>
            {techStack.map((t, i) => (
              <div key={i} className={styles.techCard}>
                <div className={styles.techCardTopBar} />
                <div className={styles.techCardLeft}>
                  <span className={styles.techCardIdx}>0{i + 1}</span>
                </div>
                <div className={styles.techCardRight}>
                  <h3 className={styles.techCardTitle}>{t.label}</h3>
                  <p className={styles.techCardDesc}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ SECTION 4 — SPLIT — image left, text right ══ */}
      <section className={styles.splitSection}>
        <div className={styles.splitLeft}>
          <Image
            src="/content-images/smart-cities.jpg"
            alt="Smart city control"
            fill
            className={styles.splitImg}
          />
          <div className={styles.splitImgOverlay} />

          {/* floating stat card */}
          <div className={styles.floatCard}>
            <span className={styles.floatCardNum}>2047</span>
            <span className={styles.floatCardLbl}>India's Smart Cities Vision</span>
          </div>
        </div>

        <div className={styles.splitRight}>
          <div className={styles.splitTag}>
            <span className={styles.tagDash}>—</span>
            <span>Our Approach</span>
          </div>

          <h2 className={styles.splitHeading}>
            Cities that<br/>
            <span>Think.</span>
          </h2>

          <p className={styles.splitBody}>
            Every smart city engagement begins with understanding the city's DNA — its density, movement patterns, utility loads, and governance structure. We then architect layered digital solutions that grow with the city.
          </p>

          <div className={styles.splitChecks}>
            {[
              'Phased implementation roadmap',
              'Vendor-neutral technology selection',
              'Real-time monitoring & analytics',
              'Citizen-first design philosophy',
            ].map((c, i) => (
              <div key={i} className={styles.splitCheck}>
                <div className={styles.checkBox}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>{c}</span>
              </div>
            ))}
          </div>

          <Link href="/#contact" className={styles.splitCta}>
            <span>Start Your Smart City Project</span>
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