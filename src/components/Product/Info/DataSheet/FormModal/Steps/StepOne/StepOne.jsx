import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import SubmitButton from './SubmitButton';
import { useFormState } from 'react-dom';
import { useCookies } from 'next-client-cookies';
import requestOtp from '@/actions/requestOtp';

const StepOne = ({ product, setStep, close }) => {
  const cookies = useCookies();
  const name = cookies.get('name') ?? '';
  const email = cookies.get('email') ?? '';
  const [errors, setErrors] = useState(null);
  const handleSubmit = async (prevState, formData) => {
    const result = await requestOtp(prevState, formData);
    if (result.success) {
      setErrors(null);
      setStep((prevStep) => prevStep + 1);
    } else {
      setErrors(result);
    }
  };

  const [state, action] = useFormState(handleSubmit, {
    email: '',
    name: '',
  });

  const t = useTranslations('datasheet');
  return (
    <form action={action} className={style.form}>
      <h1 className={style.heading}>{t('step-one.heading')}</h1>
      <h2 className={style.subHeading}>{product.name['en']}</h2>
      <div className='flex w-full justify-center gap-5 px-10'>
        <p
          className='cursor-pointer text-xs text-dolphine hover:text-emerald'
          onClick={close}
        >
          {t('step-one.cancel')}
        </p>
      </div>
      <div className={style.inputContainer}>
        <label htmlFor='name' className={style.label}>
          {t('step-one.name')}
        </label>
        <input
          className={style.input}
          type='text'
          id='name'
          name='name'
          defaultValue={name}
        />
      </div>
      {errors && errors.errors.name && (
        <span className={style.error}>{errors.errors.name}</span>
      )}
      {errors && errors.errors.api && (
        <span className={style.error}>{errors.errors.api}</span>
      )}
      <div className={style.inputContainer}>
        <label htmlFor='email' className={style.label}>
          {t('step-one.email')}
        </label>
        <input
          className={style.input}
          type='text'
          id='email'
          name='email'
          defaultValue={email}
        />
      </div>
      {errors && errors.errors.email && (
        <span className={style.error}>{errors.errors.email}</span>
      )}
      <SubmitButton />
    </form>
  );
};

export default StepOne;

//* Style
const style = {
  form: `bg-lightgray m-5 flex h-fit w-full flex-col items-center gap-5 rounded-lg p-5 md:m-0 md:w-[60%] lg:w-[40%]`,
  heading: `text-center text-4xl font-semibold`,
  subHeading: `text-center text-sm text-dolphine`,
  inputContainer: `flex w-full flex-col gap-2 px-5`,
  label: `font-semibold`,
  input: `bg-lightgray h-12 rounded-lg border-[1px] border-solid border-dolphine/20 p-5`,
  error: `form-error`,
};
