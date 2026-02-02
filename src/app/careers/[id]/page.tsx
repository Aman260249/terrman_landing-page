// import { prisma } from '@/lib/prisma';
// import { notFound } from 'next/navigation';
// import styles from '@/app/styles/jobdetail.module.css';
// import Link from 'next/link';

// export default async function JobDetailsPage({ params }: { params: Promise<{ id: string }> }) {
//   const { id } = await params;
//   const job = await prisma.job.findUnique({ where: { id } });

//   if (!job) notFound();

//   return (
//     <div className={styles.careersContainer}>
//       <div className={styles.detailWrapper}>
//         <Link href="/careers" className={styles.backLink}>
//           ← Back to Jobs
//         </Link>

//         <div className={styles.mainCard}>
//           <h1 className={styles.title}>{job.title}</h1>
          
//           <div className={styles.infoBar}>
//             <div className={styles.infoItem}>📍 {job.location}</div>
//             <div className={styles.infoItem}>💼 {job.workType}</div>
//             <div className={styles.infoItem}>⏳ {job.experience}</div>
//             <div className={`${styles.infoItem} ${styles.salary}`}>💰 {job.salary}</div>
//           </div>

//           <div className={styles.descriptionSection}>
//             <h2 className={styles.sectionTitle}>Job Description</h2>
//             <p className={styles.descText}>{job.description}</p>
//           </div>

//           <div className={styles.contactBox}>
//             <h2 className={styles.sectionTitle}>Interested in this position?</h2>
//             <div className={styles.contactInfo}>
//               <p><strong>Email:</strong> {job.contactEmail}</p>
//               <p><strong>Phone:</strong> {job.contactPhone}</p>
//             </div>
            
//             <a href={`mailto:${job.contactEmail}`} className={styles.applyBtn}>
//               Apply via Email
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }