import { z } from 'zod';

export const InquirySchema = z.object({
  name: z.string()
    .min(2, "Name is too short")
    .max(50, "Name is too long")
    .regex(/^[a-zA-Z\s]*$/, "Name should only contain letters"),
  
  email: z.string()
    .email("Invalid email address"),
  
  phone: z.string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number is too long")
    .regex(/^[0-9+\s-]*$/, "Invalid phone format"),
  
  service: z.string()
    .min(1, "Please select a service"),
  
  message: z.string()
    .min(10, "Please provide more details (min 10 chars)")
    .max(1000, "Message is too long")
});