// src/app/careers/page.tsx
import ZohoJobs from '../components/ZohoJobs';
import styles from '@/app/styles/Careers.module.css';

export default function CareersPage() {
  return (
    <div className={styles.careersPage}>
      <div className={styles.headerRow}>
        <div>
          <h1>Careers</h1>
          <p>Join Terraman Infratech and build the future.</p>
        </div>
      </div>

      <div className={styles.jobGridContainer}>
        {/* We use the Zoho component instead of the old PostgreSQL JobList */}
        <ZohoJobs />
      </div>
    </div>
  );
}