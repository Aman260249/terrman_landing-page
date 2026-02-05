import styles from '@/app/styles/jobdetail.module.css';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Temporary sample data to match your UI
const sampleJobs = [
  { 
    id: '1', 
    title: 'Frontend Developer', 
    location: 'Remote', 
    workType: 'Full-time', 
    experience: '2+ Years', 
    salary: '₹10L - ₹15L',
    description: 'We are looking for a React expert to join our team.',
    contactEmail: 'careers@codelab.com',
    contactPhone: '+91 9876543210'
  },
  { 
    id: '2', 
    title: 'Backend Engineer', 
    location: 'Mumbai', 
    workType: 'Hybrid', 
    experience: '3+ Years', 
    salary: '₹12L - ₹18L',
    description: 'Help us build robust APIs using Node.js and Prisma.',
    contactEmail: 'careers@codelab.com',
    contactPhone: '+91 9876543210'
  },
];

export default async function JobDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // Database ki jagah sample array mein dhoondo
  const job = sampleJobs.find(j => j.id === id);

  if (!job) notFound();

  return (
    <div className={styles.careersContainer}>
      <div className={styles.detailWrapper}>
        <Link href="/careers" className={styles.backLink}>
          ← Back to Jobs
        </Link>

        <div className={styles.mainCard}>
          <h1 className={styles.title}>{job.title}</h1>
          
          <div className={styles.infoBar}>
            <div className={styles.infoItem}>📍 {job.location}</div>
            <div className={styles.infoItem}>💼 {job.workType}</div>
            <div className={styles.infoItem}>⏳ {job.experience}</div>
            <div className={`${styles.infoItem} ${styles.salary}`}>💰 {job.salary}</div>
          </div>

          <div className={styles.descriptionSection}>
            <h2 className={styles.sectionTitle}>Job Description</h2>
            <p className={styles.descText}>{job.description}</p>
          </div>

          <div className={styles.contactBox}>
            <h2 className={styles.sectionTitle}>Interested in this position?</h2>
            <div className={styles.contactInfo}>
              <p><strong>Email:</strong> {job.contactEmail}</p>
              <p><strong>Phone:</strong> {job.contactPhone}</p>
            </div>
            
            <a href={`mailto:${job.contactEmail}`} className={styles.applyBtn}>
              Apply via Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}