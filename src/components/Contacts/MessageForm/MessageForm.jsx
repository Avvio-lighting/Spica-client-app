'use client';
import React, { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import { useTranslations } from 'next-intl';
import { useCookies } from 'next-client-cookies';
import submitMessageForm from '@/actions/submitMessageForm';
import SubmitButton from './SubmitButton/SubmitButton';
import OtpInput from 'react-otp-input';

const MessageForm = ({ setStep }) => {
  const cookies = useCookies();
  const email = cookies.get('email') ?? ' ';
  const t = useTranslations('contac-us-form');
  const [otp, setOtp] = useState('');

  const [state, action] = useFormState(submitMessageForm, {
    subject: '',
    message: '',
    enteredOTP: '',
  });

  const handleCancelation = () => {
    cookies.remove('name');
    cookies.remove('email');
    setStep((prev) => prev - 1);
  };

  useEffect(() => {
    if (email == ' ') {
      setStep((prev) => prev - 1);
    }
  }, [email, setStep]);

  return (
    <form action={action} className={style.form}>
      <div className={style.controlsContainer}>
        <span className='text-center'>{`${t('message-form.enter-otp')} (${email.replace(/(?<=.{3}).(?=[^@]*?@)/g, '*')}) `}</span>

        <div className={style.controls}>
          <span
            className={style.control}
            onClick={() => setStep((prev) => prev - 1)}
          >
            {t('message-form.edit')}
          </span>
          <span className={style.control} onClick={handleCancelation}>
            {t('message-form.cancel')}
          </span>
        </div>
      </div>
      <OtpInput
        containerStyle={style.otpContainer}
        inputStyle={style.otp}
        value={otp}
        onChange={setOtp}
        numInputs={6}
        skipDefaultStyles={true}
        shouldAutoFocus={true}
        renderInput={(props) => <input {...props} />}
      />
      {state && state.errors && state.errors.enteredOTP && (
        <span className={style.error}>{state.errors.enteredOTP}</span>
      )}
      {state && state.errors && state.errors.api && (
        <span className={style.error}>{state.errors.api}</span>
      )}
      <div>
        <label htmlFor='subject' className={style.label}>
          {t('message-form.subject')}
        </label>
        <input
          type='text'
          name='subject'
          id='subject'
          className={style.input}
        />
        {state && state.errors && state.errors.subject && (
          <span className={style.error}>{state.errors.subject}</span>
        )}
      </div>

      <div className='h-fit'>
        <label htmlFor='message' className={style.label}>
          {t('message-form.message')}
        </label>
        <textarea name='message' id='message' className={style.area} />
        {state && state.errors && state.errors.message && (
          <span className={style.error}>{state.errors.message}</span>
        )}
      </div>

      <input
        type='text'
        hidden
        name='enteredOTP'
        value={otp}
        onChange={(ev) => {
          ev.preventDefault;
        }}
      />
      <SubmitButton />
    </form>
  );
};

export default MessageForm;

//* Style

const style = {
  form: `mt-5 h-[500px]  md:h-[600px] lg:h-[600px] w-[90vw] flex-col justify-between gap-5 rounded-lg border-[0.25px] 
border-solid border-dolphine/20 bg-white p-6 shadow-md md:w-[450px] duration-250`,
  inputsContainer: `flex flex-col gap-5`,
  label: `form-label`,
  input: `form-input`,
  error: `form-error`,
  area: `form-text-area`,
  otpContainer: `flex justify-between items-center  w-full`,
  otp: `otp-input flex h-12 w-10 items-center justify-center rounded-lg border-[1px] border-solid
   border-emerald text-center text-3xl font-semibold text-emerald md:h-20 md:w-16`,
  control: `hover:text-emerald cursor-pointer`,
  controls: `flex justify-end gap-5 pt-5 text-sm`,
  controlsContainer: `flex w-full flex-col justify-between text-wrap text-sm text-dolphine md:text-lg`,
};
