'use server';
import { cookies } from 'next/headers';
import { dataSheet } from '@/lib/api/users';
import dataSheetSchema from '@/util/validation/dataSheetSchema';

export default async function sendDataSheet(prevState, formData) {
  const validatedFields = dataSheetSchema.safeParse({
    productName: formData.get('productName'),
    enteredOTP: formData.get('enteredOTP'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const token = cookies().get('token').value;
  try {
    await dataSheet({ ...validatedFields.data, token });
    cookies().delete('name');
    cookies().delete('email');
    cookies().delete('token');
    return { success: true };
  } catch (error) {
    return {
      errors: {
        api: error.message,
      },
    };
  }
}
