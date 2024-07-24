import React, { useState } from 'react';
import SubmitButton from '../SubmitButton/SubmitButton';
import requestOtp from '@/actions/requestOtp';
import { useFormState } from 'react-dom';
import { useTranslations } from 'next-intl';

const StepOne = ({ name, email, setStep }) => {
  const t = useTranslations('subscribe');
  const [errors, setErrors] = useState(null);
  const handleSubmit = async (prevState, formData) => {
    try {
      const result = await requestOtp(prevState, formData);
      if (!result.success) {
        setErrors(result);
      } else {
        setStep((prev) => prev + 1);
        setErrors(null);
      }
    } catch (error) {}
  };

  const [state, action] = useFormState(handleSubmit, {
    email: '',
    name: '',
  });

  return (
    <form action={action} className={style.form}>
      <h2 className={style.heading}>{t('step1.heading')}</h2>
      {errors && errors.errors.email && (
        <span className={style.error}>{errors.errors.email}</span>
      )}
      {errors && errors.errors.name && (
        <span className={style.error}>{errors.errors.name}</span>
      )}
      {errors && errors.errors.api && (
        <span className={style.error}>{errors.errors.api}</span>
      )}
      <div className={style.inputsContainer}>
        <input
          type='text'
          name='name'
          id='name'
          placeholder={t('step1.name')}
          defaultValue={name ?? ''}
          className={style.input}
        />
        <input
          type='text'
          name='email'
          id='email'
          placeholder={t('step1.email')}
          defaultValue={email ?? ''}
          className={style.input}
        />

        <SubmitButton>{t('step1.get')}</SubmitButton>
      </div>
    </form>
  );
};

export default StepOne;

//* Style

const style = {
  heading: `p-2 text-2xl text-center text-white font-semibold`,
  form: `mt-5 flex w-[90%] md:w-[80%] lg:w-[50%]  h-fit flex-col mx-auto justify-between gap-5 rounded-xl border-[0.25px] border-solid border-dolphine/20 bg-darkEmerald p-6 shadow-md `,
  inputsContainer: `flex flex-col md:flex-row gap-5 justify-center items-center`,
  input: `w-full md:w-[70%] rounded-[225px] flex border-[1px] border-solid border-dolphine p-3 outline-none ring-0 focus:ring-1 focus:ring-charcoal`,
  error: `form-error`,
};
