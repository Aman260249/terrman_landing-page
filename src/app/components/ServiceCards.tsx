// components/ServiceCards.tsx (A new file for this component)
'use client';
import React from 'react';
import useInView from './hooks/useInView'; 
import styles from '../styles/OurApproach.module.css'; // Using the requested CSS file

// Sample data for the cards (adjust content as needed)
interface ServiceCard {
  title: string;
  subTitle: string;
  href: string; // Link destination
}

const services: ServiceCard[] = [
  { title: 'Highway Design & Surveys', subTitle: 'Precision planning for national corridors.', href: '/services/highway' },
  { title: 'Structural & Bridge Engineering', subTitle: 'Durable and aesthetic infrastructure solutions.', href: '/services/structural' },
  { title: 'Project Management Consulting', subTitle: 'Timely delivery with cost and quality control.', href: '/services/pmc' },
  { title: 'Urban Planning & Utilities', subTitle: 'Integrated city development and utility modeling.', href: '/services/urban' },
  // Add more items if needed for a larger grid
  { title: 'Geotechnical Investigations', subTitle: 'Ground assessment for reliable foundations.', href: '/services/geo' },
  { title: 'Advanced BIM Modeling', subTitle: '3D modeling for accurate collaboration.', href: '/services/bim' },
];

const ServiceCards: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1 }); 

  return (
    <section 
      ref={ref} 
      className={styles.serviceCardsSection} // New wrapper class for the section
    >
      <div className={styles.contentWrapper}>
        <h2 className={styles.serviceHeading}>OUR KEY SERVICES</h2>
        
        <div className={styles.cardsGrid}>
          {services.map((card, index) => (
            <a 
              key={index} 
              href={card.href} 
              className={`${styles.serviceCardBox} ${inView ? styles.animated : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }} 
            >
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardSubTitle}>{card.subTitle}</p>
              </div>
              
              {/* View Content Button (Always at the bottom center of the box) */}
              <div className={styles.cardViewButton}>
                VIEW CONTENT
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;