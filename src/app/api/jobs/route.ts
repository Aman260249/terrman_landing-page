// // import { prisma } from '@/lib/prisma';
// // import JobCard from '@/app/careers/components/jobCard';

// // export default async function JobsPage() {
// //   // This is the "Backend to Frontend" connection
// //   const jobs = await prisma.job.findMany({
// //     orderBy: { createdAt: 'desc' },
// //   });

// //   return (
// //     <div className="max-w-6xl mx-auto p-10">
// //       <h1 className="text-3xl font-bold mb-6">Available Positions</h1>
// //       <div className="grid gap-4">
// //         {jobs.length === 0 ? (
// //           <p>No jobs posted yet.</p>
// //         ) : (
// //           jobs.map((job) => <JobCard key={job.id} job={job} />)
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// export const revalidate = 0; // This forces the page to fetch new data on every visit

// import { NextResponse } from 'next/server';
// import { prisma } from '@/lib/prisma';

// export async function GET() {
//   try {
//     const jobs = await prisma.job.findMany({
//       orderBy: { createdAt: 'desc' },
//     });
//     return NextResponse.json(jobs);
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { error: 'Failed to fetch jobs' },
//       { status: 500 }
//     );
//   }
// }
