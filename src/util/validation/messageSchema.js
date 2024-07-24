import { z } from 'zod';
const messageSchema = z.object({
  subject: z.string().min(1, { message: 'Subject is required.' }),
  message: z.string().min(1, { message: 'Message is required.' }),
  enteredOTP: z
    .string()
    .regex(/^\d{6}$/, { message: 'OTP must be exactly 6 digits.' })
    .refine((value) => !isNaN(parseInt(value)), {
      message: 'OTP must be a number.',
      path: ['enteredOTP'],
    })
    .transform((value) => parseInt(value)),
});
export default messageSchema;
