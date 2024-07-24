import { z } from 'zod';
let contactUsSchema = z.object({
  name: z.string().min(1, { message: 'Name is required.' }),
  email: z.string().trim().email(),
});

export default contactUsSchema;
