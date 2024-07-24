import { z } from 'zod';
const dataSheetSchema = z.object({
  productName: z.string().min(1, { message: 'productName is required.' }),
  enteredOTP: z
    .string()
    .regex(/^\d{6}$/, { message: 'OTP must be exactly 6 digits.' })
    .refine((value) => !isNaN(parseInt(value)), {
      message: 'OTP must be a number.',
      path: ['enteredOTP'],
    })
    .transform((value) => parseInt(value)),
});
export default dataSheetSchema;
