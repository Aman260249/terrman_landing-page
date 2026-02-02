'use server'
import { prisma } from './prisma';
import { revalidatePath } from 'next/cache';

export async function createJob(formData: FormData) {
  const title = formData.get('title') as string;
  const qualifications = (formData.get('qualifications') as string).split(',');

  await prisma.job.create({
    data: {
      title,
      location: formData.get('location') as string,
      workType: formData.get('workType') as string,
      experience: formData.get('experience') as string,
      salary: formData.get('salary') as string,
      description: formData.get('description') as string,
      contactEmail: formData.get('contactEmail') as string,
      contactPhone: formData.get('contactPhone') as string,
      qualifications: qualifications.map(q => q.trim()), // Clean up spaces
    },
  });

  // This is the magic line that makes the data show up on the frontend immediately
  revalidatePath('/jobs'); 
}