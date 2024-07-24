'use server';
import { cookies } from 'next/headers';
import messageSchema from '../util/validation/messageSchema';
import { contactForm } from '@/lib/api/users';

export default async function submitMessageForm(prevState, formData) {
  const cookieOptions = {
    expires: new Date(Date.now() + 5000),
    path: '/',
    httpOnly: false,
  };

  const validatedFields = messageSchema.safeParse({
    subject: formData.get('subject'),
    message: formData.get('message'),
    enteredOTP: formData.get('enteredOTP'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const token = cookies().get('token').value;
  try {
    await contactForm({ ...validatedFields.data, token });
    cookies().set('alert', 'Message sent successfully', cookieOptions);
    cookies().delete('name');
    cookies().delete('email');
    cookies().delete('token');
  } catch (error) {
    return {
      errors: {
        api: error.message,
      },
    };
  }
}
