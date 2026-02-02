// components/OurApproach.tsx
'use client';
import React from 'react';

import useInView from './hooks/useInView'; 
import styles from '../styles/OurApproach.module.css';

// Define the structure for a Core Value item
interface CoreValue {
  title: string;
  description: string;
}

const coreValues: CoreValue[] = [
  { 
    title: 'Advanced Engineering & Design', 
    description: 'Utilizing BIM and advanced software for detailed engineering, ensuring cost-effectiveness and structural integrity.' 
  },
  { 
    title: 'Detailed Scoping & Feasibility', 
    description: 'Comprehensive studies, traffic surveys, and risk analysis to establish a solid project base.' 
  },
  { 
    title: 'Supervision & QA/QC', 
    description: 'On-site supervision and rigorous quality assurance processes to meet MoRT&H/NHAI standards.' 
  },
  { 
    title: 'Handover & Documentation', 
    description: 'Complete, transparent documentation and client training for a smooth project closure.' 
  },
];

const OurApproach: React.FC = () => {
  // Hook for the scroll animation
  const [ref, inView] = useInView({ threshold: 0.1 }); 

  return (
    <section 
      ref={ref} 
      className={styles.approachSection}
    >
      
      <div className={styles.contentWrapper}>
        {/* 1. Main Heading (Extra Bold 96px) */}
        <h2 
          className={`${styles.mainHeading} ${inView ? styles.animatedText : ''}`}
        >
          OUR APPROACH
        </h2>
        
        {/* 2. Descriptive Paragraph (Light 20px) */}
        <p 
          className={`${styles.description} ${inView ? styles.animatedText : ''}`}
          style={{ transitionDelay: '0.2s' }}
        >
          Terraman follows solution -oriented approach focused on understanding actual site
          conditions, using accurate survey data and developing designs that are practical, durable, and
          cost-effective. every Project Is Handled With Detailed technical review, internal QA checks,
          and a multidisciplinary coordination process.
        </p>
        
        {/* 3. Core Values Header */}
        <h3 className={styles.coreValuesHeader}>CORE VALUES</h3>
        
        {/* 4. Core Values Grid */}
        <div className={styles.valuesGrid}>
          {coreValues.map((item, index) => (
            <div 
              key={index} 
              className={`${styles.valueBox} ${inView ? styles.animated : ''}`}
              // Ensure smooth, staggered animation from the bottom
              style={{ transitionDelay: `${0.3 + index * 0.1}s` }} 
            >
              <h4 className={styles.boxTitle}>{item.title}</h4>
              <p className={styles.boxDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApproach;