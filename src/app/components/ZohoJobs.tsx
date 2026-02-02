'use client';
import { useEffect } from 'react';

export default function ZohoJobs() {
  useEffect(() => {
    // 1. Create the script element
    const script = document.createElement('script');
    script.src = "https://js.zohostatic.com/recruit/embed_listing/v1/rec-embed.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // @ts-ignore
      if (window.rec_embed_js) {
        // @ts-ignore
        window.rec_embed_js.load({
          widget_id: "PASTE_YOUR_WIDGET_ID_HERE", // <-- Put your ID here
          page_name: "Careers",
          site_name: "Terraman Infratech",
          empty_job_msg: "No current openings. Check back soon!",
          sort_by: "created_time",
          reverse_sort: true
        });
      }
    };

    // Cleanup script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="rec_job_listing_div">
      {/* This text shows while Zoho is loading */}
      <p style={{ color: '#bdbdbd', textAlign: 'center' }}>Loading Job Board...</p>
    </div>
  );
}