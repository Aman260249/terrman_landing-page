This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.






# Terraman Infratech - Official Website
**Developer Handover Document**

This is a high-performance, secure website built using the **Next.js 14 App Router**, **Prisma ORM**, and **Supabase (PostgreSQL)**.

---

## 🚀 1. Tech Stack
- **Frontend:** Next.js (React), CSS Modules
- **Database:** PostgreSQL (Hosted on Supabase)
- **Email Service:** Resend (Ready for integration)
- **Job Portal:** Zoho Recruit Integration
- **Security:** Zod Validation & Honeypot Bot Protection

---

## 🛠 2. Environment Variables
To make the site work in production (Vercel), the following keys must be set in the Dashboard:

| Key | Description |
| :--- | :--- |
| `DATABASE_URL` | Supabase Connection String (Transaction mode) |
| `DIRECT_URL` | Supabase Direct Connection String (Session mode) |
| `RESEND_API_KEY` | API Key for email notifications |
| `NEXT_PUBLIC_ZOHO_WIDGET_ID` | The ID from Zoho Job Board Hub |

---

## 🔒 3. Security Features implemented
1. **Data Integrity:** Used **Zod Schema Validation** to prevent malicious code injection via forms.
2. **Bot Defense:** Implemented a **Honeypot field** to trap automated spam bots.
3. **Database Security:** Enabled **Row Level Security (RLS)** in Supabase to protect inquiry data.
4. **SSL Encryption:** Secured via Vercel's automatic HTTPS (SSL) certification.

---

## 📁 4. How to Manage Data

### Managing Inquiries
1. Log in to [Supabase](https://supabase.com).
2. Go to **Table Editor** > `Inquiry` table.
3. You can view all "Get in Touch" messages here or export them to Excel.

### Managing Careers (Jobs)
1. Log in to [Zoho Recruit](https://recruit.zoho.com).
2. Add or Edit jobs in the **Job Openings** module.
3. Ensure the job status is set to **"Published on Career Site"** to appear on the website.

---

## 📈 5. Maintenance Tips
- **Domain Renewal:** Ensure the domain (e.g., terraman.in) is renewed annually via the provider (GoDaddy/Namecheap).
- **Database Limits:** The free tier of Supabase allows up to 500MB of data, which is enough for thousands of inquiries.
- **Emails:** Check the Resend dashboard monthly to monitor inquiry delivery.

--- 


📝 Setup Instructions
Clone the Repo: git clone <repo-url>

Install Dependencies: npm install

Environment Setup: .env file mein DATABASE_URL aur RESEND_API_KEY add karein.

Database Sync: npx prisma db push

Run Project: npm run dev

**Developed with ❤️ for Codelabbro**