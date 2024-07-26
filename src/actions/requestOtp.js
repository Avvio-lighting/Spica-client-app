'use server';

import contactUsSchema from '@/util/validation/contactUsSchema';
import { cookies } from 'next/headers';
import { requestOtp } from '@/lib/api/users';
export default async function requestOTP(prevState, formData) {
  const cookieOptions = {
    expires: new Date(Date.now() + 300000),
    path: '/',
    httpOnly: false,
  };

  const validatedFields = contactUsSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const token = await requestOtp(validatedFields.data);
    cookies().set('token', token, cookieOptions);
  } catch (error) {
    return {
      errors: {
        api: 'Something went wrong. Please try again.',
      },
    };
  }

  cookies().set('name', formData.get('name'), cookieOptions);
  cookies().set('email', formData.get('email'), cookieOptions);

  return { success: true };
}
