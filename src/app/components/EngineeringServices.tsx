// components/EngineeringServices.tsx
'use client';
import React from 'react';
import useInView from './hooks/useInView'; 
import styles from '../styles/EngineeringServices.module.css';

interface ServiceCard {
  title: string;
  subTitle: string;
  href: string;
}

const services: ServiceCard[] = [
  { 
    title: 'Feasibility Studies', 
    subTitle: 'De-Risking Investment: Technical, Financial, and Traffic Viability Analysis.',
    href: './pagecontent/feasibility-studies'
  },
  { 
    title: 'Detailed Project Reports (DPR)', 
    subTitle: 'The Execution Blueprint: Flawless Design, Costing, and Regulatory Compliance.',
    href: './pagecontent/detaiedproject'
  },
  { 
    title: 'Highway Project Supervision', 
    subTitle: 'On-Site Vigilance: Guaranteeing Quality, Safety, and Perfect Time Delivery.',
    href: './pagecontent/highway-project-supervision'
  },
];

const EngineeringServices: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1 }); 

  return (
    <section 
      ref={ref} 
      className={styles.servicesSection}
    >
      <div className={styles.sectionBackground} /> {/* Background Image + Gradient */}
      
      <div className={styles.contentWrapper}>
        
        {/* Main Heading */}
        <h2 
          className={`${styles.mainHeading} ${inView ? styles.animatedText : ''}`}
        >
          Our Engineering Services
        </h2>
        
        {/* Cards Grid */}
        <div className={styles.cardsGrid}>
          {services.map((card, index) => (
            <a 
              key={index} 
              href={card.href}
              className={`${styles.cardBox} ${inView ? styles.animated : ''}`}
              style={{ transitionDelay: `${index * 0.15}s` }} 
            >
              
              {/* Card Title */}
              <h3 className={styles.cardTitle}>{card.title}</h3>
              
              {/* Card Subtitle */}
              <p className={styles.cardSubTitle}>{card.subTitle}</p>
              
              {/* View Content Button */}
              <button className={styles.viewContentBtn}>
                VIEW CONTENT
              </button>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringServices;