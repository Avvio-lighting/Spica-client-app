'use client';
import Image from 'next/image';
import { useFormState } from 'react-dom';
import { useTranslations } from 'next-intl';
import SubmitButton from './SubmitButton/SubmitButton';
import rgbDataURL from '@/util/rgbDataUrl';
import { useEffect, useState } from 'react';
import MessageForm from '../MessageForm/MessageForm';
import requestOtp from '@/actions/requestOtp';
import { motion } from 'framer-motion';

const ContactUsForm = ({ name, email }) => {
  const t = useTranslations('contac-us-form');
  const [step, setStep] = useState(1);
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

  useEffect(() => {}, [step]);

  const formVariants = {
    initial: { x: '100%' },
    animate: { x: 0 },
    exit: { x: '-100%' },
  };

  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <h2 className={style.heading}>{t('heading')}</h2>
        <h3 className={style.subHeading}>{t('sub-heading')}</h3>
      </div>

      <div className={style.background}>
        <Image
          src='/lines.svg'
          alt='lines'
          fill
          style={{
            objectFit: 'cover',
          }}
          placeholder='blur'
          blurDataURL={rgbDataURL(237, 255, 238)}
        />
      </div>

      <div className={style.formContainer}>
        <motion.div
          initial='initial'
          animate='animate'
          exit='exit'
          variants={formVariants}
          transition={{ duration: 0.5 }}
          key={step}
          className={style.formWrapper}
        >
          {step === 1 && (
            <form action={action} className={style.form}>
              <div className={style.inputsContainer}>
                <div>
                  <label htmlFor='name' className={style.label}>
                    {t('full-name')}
                  </label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    className={style.input}
                    defaultValue={name ?? ''}
                  />
                  {errors && errors.errors.name && (
                    <span className={style.error}>{errors.errors.name}</span>
                  )}
                  {errors && errors.errors.api && (
                    <span className={style.error}>{errors.errors.api}</span>
                  )}
                </div>

                <div>
                  <label htmlFor='email' className={style.label}>
                    {t('email')}
                  </label>
                  <input
                    type='text'
                    name='email'
                    id='email'
                    defaultValue={email ?? ''}
                    className={style.input}
                  />
                  {errors && errors.errors.email && (
                    <span className={style.error}>{errors.errors.email}</span>
                  )}
                </div>
              </div>
              <SubmitButton />
            </form>
          )}

          {step === 2 && <MessageForm setStep={setStep} />}
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUsForm;

//* Style

const style = {
  container: `relative h-fit w-full bg-honeydew/20 py-5`,
  textContainer: `flex w-full flex-col items-center justify-between`,
  heading: `pb-3 pt-5 text-4xl lg:text-6xl`,
  subHeading: `px-2 text-center text-sm text-dolphine`,
  background: `z-5 absolute bottom-0 left-0 h-[80%] w-[100%] lg:h-[60%]`,
  formContainer: `relative flex z-20 mx-auto h-fit w-fit items-center justify-center overflow-hidden`,
  formWrapper: `relative w-full`,
  form: `mt-5 h-[500px] md:h-[600px] lg:h-[600px] flex w-[90vw] flex-col justify-between gap-5 rounded-lg border-[0.25px] border-solid border-dolphine/20 bg-white p-6 shadow-md md:w-[450px]`,
  inputsContainer: `flex flex-col gap-5`,
  label: `form-label`,
  input: `form-input`,
  error: `form-error`,
};
