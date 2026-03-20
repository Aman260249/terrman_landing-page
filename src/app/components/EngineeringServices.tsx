'use client';
import React from 'react';
import Link from 'next/link';
import useInView from './hooks/useInView'; 
import styles from '../styles/EngineeringServices.module.css';

const services = [
  { 
    id: '01',
    title: 'Feasibility Studies', 
    desc: 'Technical, Financial, and Traffic Viability Analysis to de-risk investments.',
    href: './pagecontent/feasibility-studies'
  },
  { 
    id: '02',
    title: 'Detailed Project Reports', 
    desc: 'Flawless Design, Costing, and Regulatory Compliance: The Execution Blueprint.',
    href: './pagecontent/detailedproject'
  },
  { 
    id: '03',
    title: 'Highway Supervision', 
    desc: 'On-Site Vigilance: Guaranteeing Quality, Safety, and Perfect Time Delivery.',
    href: './pagecontent/highway-project-supervision'
  },
];

const EngineeringServices: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1 }); 

  return (
    <section ref={ref} className={styles.engSection}>
      <div className={styles.blueprintGrid} />
      
      <div className={styles.flexWrapper}>
        {/* SIDE HEADER: Ye baaki sections se alag dikhega */}
        <div className={`${styles.sideHeader} ${inView ? styles.reveal : ''}`}>
          <span className={styles.tag}>EXPERTISE</span>
          <h2 className={styles.verticalTitle}>
            OUR <span className={styles.boldText}>SERVICES</span>
          </h2>
        </div>

        {/* CARDS AREA */}
        <div className={styles.servicesList}>
          {services.map((item, index) => (
            <div key={index} className={styles.serviceRow}>
              <div className={styles.rowNumber}>{item.id}</div>
              
              <div className={styles.rowContent}>
                <h3 className={styles.rowTitle}>{item.title}</h3>
                <p className={styles.rowDesc}>{item.desc}</p>
              </div>

              <Link href={item.href} className={styles.arrowLink}>
                <div className={styles.circleBtn}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M7 17L17 7M17 7H7M17 7V17"/>
                    </svg>
                </div>
              </Link>

              <div className={styles.rowLine}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringServices;