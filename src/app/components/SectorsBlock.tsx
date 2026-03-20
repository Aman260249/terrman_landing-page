'use client';
import Link from 'next/link';
import Image from "next/image";
import useInView from './hooks/useInView'; 
import styles from '../styles/SectorsBlock.module.css';

const sectorsData = [
  { 
    title: 'Highways & Bridges', 
    imageSrc: '/sectors/sectors-bg-6.jpg', 
    href: '/content/highways-bridges',
    desc: 'Strategic planning and precision engineering for robust connectivity.'
  },
  { 
    title: 'Railways', 
    imageSrc: '/sectors/sectors-bg-3.jpg', 
    href: '/content/railways',
    desc: 'Modern rail infrastructure solutions from survey to execution.'
  },
  { 
    title: 'Urban Local Bodies', 
    imageSrc: '/sectors/sectors-bg-2.jpg', 
    href: '/content/urban-local',
    desc: 'Empowering cities with smart planning and sustainable management.'
  },
  { 
    title: 'Smart Cities', 
    imageSrc: '/sectors/sectors-bg-4.jpg', 
    href: '/content/smart-cities',
    desc: 'Integrating technology for future-ready urban ecosystems.'
  },
  { 
    title: 'Water Resources', 
    imageSrc: '/sectors/sectors-bg-5.jpg', 
    href: '/content/WaterResourceDepartments',
    desc: 'Comprehensive water management and hydrological design.'
  },
  { 
    title: 'Industrial Development', 
    imageSrc: '/sectors/sectors-bg-1.jpg', 
    href: '/content/Industrial&Commercial',
    desc: 'Scalable structural designs for commercial and industrial hubs.'
  },
];

const SectorsBlock = () => {
  const [ref, inView] = useInView({ threshold: 0.1 }); 

  return (
    <section id="services" ref={ref} className={styles.sectorsSection}>
      <div className={styles.headerContent}>
        <span className={styles.topLabel}>Specialization</span>
        <h2 className={styles.mainHeading}>
          SERVED <span className={styles.outlineText}>SECTORS</span>
        </h2>
        <p className={styles.subHeading}>Precision Engineering Across Global Infrastructure</p>
      </div>
      
      <div className={styles.sectorsGrid}>
        {sectorsData.map((sector, index) => (
          <Link 
            key={index} 
            href={sector.href} 
            className={`${styles.sectorCard} ${inView ? styles.animated : ''}`}
            style={{ transitionDelay: `${index * 0.15}s` }}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={sector.imageSrc}
                alt={sector.title}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={styles.sectorImage}
              />
              <div className={styles.imageOverlay}></div>
            </div>   

            <div className={styles.cardContent}>
              <h3 className={styles.sectorTitle}>{sector.title}</h3>
              <p className={styles.sectorDesc}>{sector.desc}</p>
              <div className={styles.viewMore}>
                EXPLORE <span>→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SectorsBlock;