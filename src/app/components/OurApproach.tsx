'use client';
import React from 'react';
import useInView from './hooks/useInView'; 
import styles from '../styles/OurApproach.module.css';

const coreValues = [
  { num: '01', title: 'Advanced Engineering', description: 'Utilizing BIM and advanced software for detailed engineering, ensuring cost-effectiveness and structural integrity.' },
  { num: '02', title: 'Detailed Scoping', description: 'Comprehensive studies, traffic surveys, and risk analysis to establish a solid project base.' },
  { num: '03', title: 'Supervision & QA/QC', description: 'On-site supervision and rigorous quality assurance processes to meet MoRT&H/NHAI standards.' },
  { num: '04', title: 'Handover & Docs', description: 'Complete, transparent documentation and client training for a smooth project closure.' },
];

const OurApproach: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1 }); 

  return (
    <section ref={ref} className={`${styles.approachSection} ${inView ? styles.show : ''}`}>
      <div className={styles.container}>
        
        {/* LEFT SIDE: Fixed Content */}
        <div className={styles.stickySide}>
          <span className={styles.label}>Our Methodology</span>
          <h2 className={styles.mainHeading}>OUR<br/><span className={styles.gold}>APPROACH</span></h2>
          <p className={styles.introText}>
            Every project is sharpened through rigorous review, strict quality checks, and seamless collaboration.
          </p>
          <div className={styles.accentLine}></div>
        </div>

        {/* RIGHT SIDE: Overlapping Steps */}
        <div className={styles.stepsSide}>
          {coreValues.map((item, index) => (
            <div key={index} className={styles.stepCard}>
              <span className={styles.bgNumber}>{item.num}</span>
              <div className={styles.stepContent}>
                <h4 className={styles.stepTitle}>{item.title}</h4>
                <p className={styles.stepDesc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurApproach;