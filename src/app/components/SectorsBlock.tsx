'use client';
import Link from 'next/link';
import Image from 'next/image';
import useInView from './hooks/useInView';
import styles from '../styles/SectorsBlock.module.css';

const sectorsData = [
  {
    title: 'Highways & Bridges',
    imageSrc: '/sectors/sectors-bg-6.jpg',
    href: '/content/highways-bridges',
    desc: 'Strategic planning and precision engineering for robust, long-lasting connectivity.',
    number: '01',
    tag: 'Civil · Structural',
  },
  {
    title: 'Railways',
    imageSrc: '/sectors/sectors-bg-3.jpg',
    href: '/content/railways',
    desc: 'Modern rail infrastructure solutions from survey to seamless execution.',
    number: '02',
    tag: 'Rail · Survey',
  },
  {
    title: 'Urban Local Bodies',
    imageSrc: '/sectors/sectors-bg-2.jpg',
    href: '/content/urban-local',
    desc: 'Empowering cities with smart planning and sustainable urban management.',
    number: '03',
    tag: 'Urban · GIS',
  },
  {
    title: 'Smart Cities',
    imageSrc: '/sectors/sectors-bg-4.jpg',
    href: '/content/smart-cities',
    desc: 'Integrating technology for future-ready, intelligent urban ecosystems.',
    number: '04',
    tag: 'Tech · BIM',
  },
  {
    title: 'Water Resources',
    imageSrc: '/sectors/sectors-bg-5.jpg',
    href: '/content/WaterResourceDepartments',
    desc: 'Comprehensive water management, hydrology, and drainage design.',
    number: '05',
    tag: 'Hydro · Design',
  },
  {
    title: 'Industrial Development',
    imageSrc: '/sectors/sectors-bg-1.jpg',
    href: '/content/Industrial&Commercial',
    desc: 'Scalable structural designs for commercial and industrial hubs.',
    number: '06',
    tag: 'Industrial · MEP',
  },
];

const SectorsBlock = () => {
  const [ref, inView] = useInView({ threshold: 0.08 });

  return (
    <section id="services" ref={ref} className={styles.section}>

      {/* dot grid bg */}
      <div className={styles.dotGrid} />

      <div className={styles.container}>

        {/* ── HEADER ── */}
        <div className={`${styles.header} ${inView ? styles.headerVisible : ''}`}>
          <div className={styles.eyebrow}>
            <div className={styles.eyebrowLine} />
            <span className={styles.eyebrowText}>Specialization</span>
            <div className={styles.eyebrowLine} />
          </div>

          <h2 className={styles.heading}>
            Served <span>Sectors</span>
          </h2>

          <p className={styles.subheading}>
            Precision Engineering Across Global Infrastructure
          </p>
        </div>

        {/* ── MAIN GRID ── */}
        <div className={styles.grid}>

          {/* FEATURED CARD */}
          <Link
            href={sectorsData[0].href}
            className={`${styles.cardFeatured} ${inView ? styles.show : ''}`}
            style={{ transitionDelay: '0s' }}
          >
            <div className={styles.imageWrap}>
              <Image
                src={sectorsData[0].imageSrc}
                alt={sectorsData[0].title}
                fill
                className={styles.image}
                priority
              />
              <div className={styles.overlay} />
            </div>

            {/* corner tag */}
            <div className={styles.cornerTag}>
              <span>{sectorsData[0].tag}</span>
            </div>

            <div className={styles.content}>
              <span className={styles.cardNumber}>{sectorsData[0].number}</span>
              <h3 className={styles.cardTitle}>{sectorsData[0].title}</h3>
              <p className={styles.cardDesc}>{sectorsData[0].desc}</p>
              <span className={styles.btn}>
                <span>Explore Sector</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>

            {/* left bar */}
            <div className={styles.featuredBar} />
          </Link>

          {/* SUB GRID — 5 cards */}
          <div className={styles.subGrid}>
            {sectorsData.slice(1).map((sector, index) => (
              <Link
                key={index}
                href={sector.href}
                className={`${styles.card} ${inView ? styles.show : ''}`}
                style={{ transitionDelay: `${(index + 1) * 0.1}s` }}
              >
                <div className={styles.imageWrap}>
                  <Image
                    src={sector.imageSrc}
                    alt={sector.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.image}
                  />
                  <div className={styles.overlay} />
                </div>

                <div className={styles.content}>
                  <span className={styles.cardNumber}>{sector.number}</span>
                  <h3 className={styles.cardTitle}>{sector.title}</h3>
                  <p className={styles.cardDesc}>{sector.desc}</p>
                  <span className={styles.btn}>
                    <span>Explore</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>

                {/* top bar draw */}
                <div className={styles.cardTopBar} />
              </Link>
            ))}
          </div>

        </div>

        {/* ── BOTTOM BAR ── */}
        <div className={`${styles.bottomBar} ${inView ? styles.bottomBarVisible : ''}`}>
          <span className={styles.bottomCount}>06 Sectors</span>
          <div className={styles.bottomLine} />
          <span className={styles.bottomTag}>Infrastructure · Engineering · Excellence</span>
        </div>

      </div>
    </section>
  );
};

export default SectorsBlock;