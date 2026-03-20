'use client';
import React from 'react';
import Link from 'next/link';
import useInView from './hooks/useInView'; 
import styles from '../styles/ServiceCards.module.css';

interface ServiceCard {
  id: string;
  title: string;
  subTitle: string;
  href: string;
}

const services: ServiceCard[] = [
  { id: '01', title: 'Highway Design & Surveys', subTitle: 'Precision planning for national corridors and expressway networks.', href: '/services/highway' },
  { id: '02', title: 'Structural & Bridge Engineering', subTitle: 'Durable and aesthetic infrastructure solutions for modern needs.', href: '/services/structural' },
  { id: '03', title: 'Project Management Consulting', subTitle: 'Timely delivery with cost and quality control from start to finish.', href: '/services/pmc' },
  { id: '04', title: 'Urban Planning & Utilities', subTitle: 'Integrated city development and utility modeling for future cities.', href: '/services/urban' },
  { id: '05', title: 'Geotechnical Investigations', subTitle: 'Detailed ground assessment for reliable and safe foundations.', href: '/services/geo' },
  { id: '06', title: 'Advanced BIM Modeling', subTitle: 'High-fidelity 3D modeling for accurate multi-team collaboration.', href: '/services/bim' },
];

const ServiceCards: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1 }); 

  return (
    <section ref={ref} className={styles.serviceSection}>
      <div className={styles.container}>
        
        {/* Header Section with Different Typography */}
        <div className={styles.sectionHeader}>
          <div className={styles.titleLine}></div>
          <h2 className={`${styles.mainTitle} ${inView ? styles.revealText : ''}`}>
            CORE <span className={styles.outlined}>SERVICES</span>
          </h2>
          <p className={styles.sectionDesc}>Engineering the future with precision and innovation.</p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`${styles.serviceBox} ${inView ? styles.animated : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={styles.boxTag}>{service.id}</div>
              
              <div className={styles.boxContent}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <div className={styles.hoverLine}></div>
                <p className={styles.cardDesc}>{service.subTitle}</p>
              </div>

              {/* Functional Link Button */}
              <Link href={service.href} className={styles.actionBtn}>
                <span className={styles.btnText}>LEARN MORE</span>
                <div className={styles.btnCircle}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </div>
              </Link>

              {/* Background Decorative Pattern */}
              <div className={styles.patternBg}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;