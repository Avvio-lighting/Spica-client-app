import { z } from 'zod';
const subscribeSchema = z.object({
  enteredOTP: z
    .string()
    .regex(/^\d{6}$/, { message: 'OTP must be exactly 6 digits.' })
    .refine((value) => !isNaN(parseInt(value)), {
      message: 'OTP must be a number.',
      path: ['enteredOTP'],
    })
    .transform((value) => parseInt(value)),
});
export default subscribeSchema;
