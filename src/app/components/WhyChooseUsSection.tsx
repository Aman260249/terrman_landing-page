'use client';

import React from 'react';
import Link from 'next/link';
import useInView from './hooks/useInView';
import styles from '../styles/WhyChooseUsSection.module.css';

interface FeatureCard {
  title: string;
  subTitle: string;
  href: string;
}

const features: FeatureCard[] = [
  {
    title: '10+ Years of Excellence',
    subTitle:
      'Decade of Proven Expertise: Delivering High-Quality Engineering Solutions Consistently.',
    href: './pagecontent/feasibility-studies',
  },
  {
    title: 'MoRT&H NHAI Approved Work',
    subTitle:
      'Authority Certified: Expertise in National Highway Standards and Approvals.',
    href: './pagecontent/morth&nhai',
  },
  {
    title: 'Multi-disciplinary Engineering Team',
    subTitle:
      'Integrated Expertise: Seamless Collaboration for Holistic Project Solutions.',
    href: './pagecontent/multidisciplinary',
  },
];

const WhyChooseUsSection: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className={styles.chooseUsSection}>
      {/* Background */}
      <div className={styles.sectionBackground} />

      <div className={styles.contentWrapper}>
        {/* Main Heading */}
        <h2
          className={`${styles.mainHeading} ${
            inView ? styles.animatedText : ''
          }`}
        >
          Why Choose Terraman
        </h2>

        {/* Cards */}
        <div className={styles.cardsGrid}>
          {features.map((card, index) => (
            <div
              key={index}
              className={`${styles.cardBox} ${
                inView ? styles.animated : ''
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardSubTitle}>{card.subTitle}</p>

              {/* VIEW CONTENT BUTTON */}
              <Link href={card.href} className={styles.viewContentBtn}>
                VIEW CONTENT
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
