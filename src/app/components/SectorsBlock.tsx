// components/SectorsBlock.js
'use client';
import Link from 'next/link'; // For linking to other pages
import Image from 'next/image';
import useInView from './hooks/useInView'; 
import styles from '../styles/SectorsBlock.module.css';

const sectorsData = [
  { title: 'Highways & bridges', imageSrc: '/sectors/sectors-bg-6.jpg', href: '/content/highways-bridges' },
  { title: 'Railways', imageSrc: '/sectors/sectors-bg-3.jpg', href: '/content/railways' },
  { title: 'Urban local bodies', imageSrc: '/sectors/sectors-bg-2.jpg', href: '/content/urban-local' },
  { title: 'Smart cities', imageSrc: '/sectors/sectors-bg-4.jpg', href: '/content/smart-cities' },
  { title: 'Water resource departments', imageSrc: '/sectors/sectors-bg-5.jpg', href: '/content/WaterResourceDepartments' },
  { title: 'Industrial & commercial development', imageSrc: '/sectors/sectors-bg-1.jpg', href: '/content/Industrial&Commercial'},
];

const SectorsBlock = () => {
  const [ref, inView] = useInView({ threshold: 0.1 }); 

  return (
    <section 
    id="services"
      ref={ref} 
      className={styles.sectorsSection}
    >
      
      <div className={styles.headerContent}>
        <h2 className={styles.mainHeading}>SERVED SECTORS</h2>
        <p className={styles.subHeading}>Comprehensive Infrastructure Solutions</p>
      </div>
      
      {/* 3x2 Grid for the Sectors */}
      <div className={styles.sectorsGrid}>
        {sectorsData.map((sector, index) => (
          <Link 
            key={index} 
            href={sector.href} 
            passHref // Required when applying styles to the anchor inside Link
            // Apply the stagger animation and hover effects to the Link container
            className={`${styles.sectorCard} ${inView ? styles.animated : ''}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            
              <div className={styles.imageWrapper}>
                <Image
                  src={sector.imageSrc}
                  alt={sector.title}
                  layout="fill"
                  objectFit="cover"
                  className={styles.sectorImage}
                />
                {/* Dark Gradient Overlay */}
                <div className={styles.imageOverlay}></div>
              </div>

              <h3 className={styles.sectorTitle}>{sector.title}</h3>
            
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SectorsBlock;