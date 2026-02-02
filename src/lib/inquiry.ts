'use server';
import { prisma } from '@/lib/prisma';
import { InquirySchema } from '@/lib/schemas';


export async function submitInquiry(formData: FormData) {
  // 1. Extract data
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    service: formData.get('service'),
    message: formData.get('message'),
  };

  // 2. Validate with Zod
  const validatedFields = InquirySchema.safeParse(rawData);

  // 3. If validation fails, stop immediately
  if (!validatedFields.success) {
    console.error("Validation Error:", validatedFields.error.flatten());
    return { 
      success: false, 
      errors: validatedFields.error.flatten().fieldErrors 
    };
  }

  try {
    // 4. Save to Database (using validated data)
    await prisma.inquiry.create({
      data: validatedFields.data,
    });

    return { success: true };
  } catch (error) {
    console.error("Database Error:", error);
    return { success: false };
  }
}

// export async function submitInquiry(formData: FormData) {
//   try {
//     const data = {
//       name: formData.get('name') as string,
//       email: formData.get('email') as string,
//       phone: formData.get('phone') as string,
//       service: formData.get('service') as string,
//       message: formData.get('message') as string,
//     };

//     // Save to your Prisma table
//     await prisma.inquiry.create({
//       data: data,
//     });

//     return { success: true };
//   } catch (error) {
//     console.error("Submission Error:", error);
//     return { success: false };
//   }
// } 




// 'use server';
// import { prisma } from '@/lib/prisma';
// import { Resend } from 'resend';

// // You will get this key from Resend dashboard later
// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function submitInquiry(formData: FormData) {
//   const name = formData.get('name') as string;
//   const email = formData.get('email') as string;
//   const phone = formData.get('phone') as string;
//   const service = formData.get('service') as string;
//   const message = formData.get('message') as string;

//   try {
//     // STEP 1: Save to your PostgreSQL Database
//     const newInquiry = await prisma.inquiry.create({
//       data: { name, email, phone, service, message },
//     });

//     // STEP 2: Send Email Notification to Client
//     // We only do this if the database save was successful
//     await resend.emails.send({
//       from: 'Terraman Web <notifications@yourdomain.com>',
//       to: 'client-email@gmail.com', // Your client's actual email
//       subject: `New Inquiry: ${service} from ${name}`,
//       replyTo: email, // Allows client to click "Reply" and talk to the user directly
//       html: `
//         <div style="font-family: sans-serif; padding: 20px; border: 1px solid #776565; border-radius: 10px;">
//           <h2 style="color: #776565;">New Business Inquiry</h2>
//           <p><strong>Name:</strong> ${name}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Phone:</strong> ${phone}</p>
//           <p><strong>Service Requested:</strong> ${service}</p>
//           <hr style="border: 0; border-top: 1px solid #eee;" />
//           <p><strong>Message:</strong></p>
//           <p style="background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
//         </div>
//       `,
//     });

//     return { success: true };
//   } catch (error) {
//     console.error("Form Error:", error);
//     return { success: false };
//   }
// }