'use client';
import React from 'react';
import Link from 'next/link';
import useInView from './hooks/useInView';
import styles from '../styles/WhyChooseUsSection.module.css';

interface FeatureCard {
  id: string;
  title: string;
  subTitle: string;
  href: string;
}

const features: FeatureCard[] = [
  {
    id: "01",
    title: '10+ Years of Excellence',
    subTitle: 'Decade of Proven Expertise: Delivering High-Quality Engineering Solutions Consistently.',
    href: '/pagecontent/feasibility-studies', // Updated Path
  },
  {
    id: "02",
    title: 'MoRT&H NHAI Approved',
    subTitle: 'Authority Certified: Expertise in National Highway Standards and Approvals.',
    href: '/pagecontent/morth&nhai', // Updated Path (avoid special chars in URLs)
  },
  {
    id: "03",
    title: 'Multi-disciplinary Team',
    subTitle: 'Integrated Expertise: Seamless Collaboration for Holistic Project Solutions.',
    href: '/pagecontent/multidisciplinary',
  },
];

const WhyChooseUsSection: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className={styles.chooseUsSection}>
      <div className={styles.sectionBackground} />
      
      <div className={styles.contentWrapper}>
        <div className={styles.headerBox}>
          <h2 className={`${styles.mainHeading} ${inView ? styles.animatedText : ''}`}>
            WHY CHOOSE <span className={styles.highlight}>TERRAMAN</span>
          </h2>
          <p className={styles.subHeader}>Built on precision, fueled by experience.</p>
        </div>

        <div className={styles.cardsGrid}>
          {features.map((card, index) => (
            <div
              key={index}
              className={`${styles.cardBox} ${inView ? styles.animated : ''}`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.cardNumber}>{card.id}</span>
                <div className={styles.topLine}></div>
              </div>
              
              <div className={styles.cardInfo}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardSubTitle}>{card.subTitle}</p>
              </div>

              {/* Functional Link Button */}
              <Link href={card.href} className={styles.viewContentBtn}>
                <span className={styles.btnText}>EXPLORE MORE</span>
                <div className={styles.btnIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </div>
              </Link>
              
              {/* Decorative Glow Elements */}
              <div className={styles.cardGlow}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;