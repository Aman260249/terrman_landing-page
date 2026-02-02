// 'use client';
// import { useEffect, useState } from 'react';
// import JobCard from './jobCard';
// import styles from '@/app/styles/Careers.module.css';

// export default function JobList() {
//   const [jobs, setJobs] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('/api/jobs')
//       .then(res => res.json())
//       .then(data => {
//         setJobs(data);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error("Fetch error:", err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <div className={styles.careersPage}><p>Loading jobs...</p></div>;
  
//   return (
//     <div className={styles.jobGrid}>
//       {jobs.map(job => (
//         <JobCard key={job.id} job={job} />
//       ))}
//     </div>
//   );
// } 


'use client';
import React, { useEffect } from 'react';
import styles from '@/app/styles/Careers.module.css';

export default function ZohoCareersPage() {
  useEffect(() => {
    // 1. This loads the Zoho Script
    const script = document.createElement('script');
    script.src = "https://js.zohostatic.com/recruit/embed_listing/v1/rec-embed.js";
    script.async = true;
    document.body.appendChild(script);

    // 2. This is the config your client gets from Zoho Setup
    script.onload = () => {
      // @ts-ignore
      rec_embed_js.load({
        widget_id: "YOUR_WIDGET_ID_HERE", // Get this from Zoho Admin
        page_name: "Careers",
        site_name: "Terraman Infratech",
        empty_job_msg: "No current openings.",
      });
    };
  }, []);

  return (
    <div className={styles.careersPage}>
      <h1 className={styles.mainHeading}>Join Our Team</h1>
      
      {/* This DIV is where Zoho will automatically inject the jobs */}
      <div id="rec_job_listing_div">
        <p style={{ color: '#666' }}>Loading jobs from Zoho...</p>
      </div>
    </div>
  );
}