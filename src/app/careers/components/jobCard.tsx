// 'use client';
// import Link from 'next/link';
// import styles from '@/app/styles/Careers.module.css'; // Import the CSS

// export default function JobCard({ job }: any) {
//   return (
//     <div className={styles.jobCard}>
//       <div className={styles.cardContent}>
//         <h3 className={styles.jobTitle}>{job.title}</h3>
//         <p className={styles.jobMeta}>{job.location}</p>
//         <p className={styles.jobMetaSmall}>
//           {job.workType} · {job.experience}
//         </p>
//         {/* If your DB has salary, you can show it here */}
//         {job.salary && <p className={styles.jobMetaSmall}>{job.salary}</p>}
//       </div>
      
//       <Link href={`/careers/${job.id}`} className={styles.viewBtn} style={{ textAlign: 'center', textDecoration: 'none' }}>
//         View Details
//       </Link>
//     </div>
//   );
// }