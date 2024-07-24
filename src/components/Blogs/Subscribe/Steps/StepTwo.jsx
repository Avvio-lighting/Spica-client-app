'use client';
import React, { useEffect, useState } from 'react';
import OTPInput from 'react-otp-input';
import SubmitButton from '../SubmitButton/SubmitButton';
import { useTranslations } from 'next-intl';
import { useFormState } from 'react-dom';
import { useCookies } from 'next-client-cookies';
import subscribeAction from '@/actions/subscribe';
const StepTwo = ({ setStep, email, name }) => {
  const cookies = useCookies();
  const t = useTranslations('subscribe');
  const [otp, setOtp] = useState('');
  const [errors, setErrors] = useState(null);

  const handleSubmit = async (prevState, formData) => {
    try {
      const result = await subscribeAction(prevState, formData);
      if (!result.success) {
        setErrors(result);
      } else {
        setStep((prev) => prev - 1);
        setErrors(null);
      }
    } catch (error) {}
  };

  const [state, action] = useFormState(handleSubmit, {
    enteredOTP: '',
  });

  const handleCancelation = () => {
    cookies.remove('name');
    cookies.remove('email');
    setStep((prev) => prev - 1);
  };

  useEffect(() => {
    if (email == ' ' || name == ' ') {
      setStep((prev) => prev - 1);
    }
  }, [email, setStep, name]);

  return (
    <form action={action} className={style.form}>
      <h2 className={style.heading}>{t('step2.heading')}</h2>
      <span className={style.control} onClick={handleCancelation}>
        cancel
      </span>
      {errors && errors.errors.enteredOTP && (
        <span className={style.error}>{errors.errors.enteredOTP}</span>
      )}
      {errors && errors.errors.api && (
        <span className={style.error}>{errors.errors.api}</span>
      )}
      <div className={style.inputsContainer}>
        <OTPInput
          containerStyle={style.otpContainer}
          inputStyle={style.otp}
          value={otp}
          onChange={setOtp}
          numInputs={6}
          skipDefaultStyles={true}
          shouldAutoFocus={true}
          renderInput={(props) => <input {...props} />}
        />
        <input
          type='text'
          hidden
          name='enteredOTP'
          value={otp}
          onChange={(ev) => {
            ev.preventDefault;
          }}
        />
        <SubmitButton>{t('step2.sub')}</SubmitButton>
      </div>
    </form>
  );
};

export default StepTwo;

const style = {
  heading: `p-2 text-2xl text-center text-white font-semibold`,
  form: `mt-5 flex w-[90%] md:w-[80%] lg:w-[50%] h-fit flex-col mx-auto justify-between gap-5 rounded-xl border-[0.25px] border-solid border-dolphine/20 bg-darkEmerald p-6 shadow-md `,
  inputsContainer: `flex flex-col md:flex-row gap-5`,
  error: `form-error`,
  otpContainer: `flex justify-between items-center  w-full`,
  otp: `otp-input flex h-12 w-10 items-center justify-center rounded-lg border-[1px] border-solid
         border-emerald text-center text-3xl font-semibold text-emerald md:h-20 md:w-16`,
  control: `hover:text-emerald cursor-pointer text-white text-center`,
};
