import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import SubmitButton from './SubmitButton';
import { useFormState } from 'react-dom';
import { useCookies } from 'next-client-cookies';
import OtpInput from 'react-otp-input';
import sendDataSheet from '@/actions/sendDataSheet';

const StepTwo = ({ product, setStep, close }) => {
  const [otp, setOtp] = useState('');
  const cookies = useCookies();
  const email = cookies.get('email');
  const [errors, setErrors] = useState(null);

  const handleSubmit = async (prevState, formData) => {
    const result = await sendDataSheet(prevState, formData);
    if (result.success) {
      setErrors(null);
      setStep((prevStep) => prevStep + 1);
    } else {
      setErrors(result);
    }
  };

  const [state, action] = useFormState(handleSubmit, {
    productName: '',
    enteredOTP: '',
  });

  useEffect(() => {
    if (!email) {
      setStep(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);

  const t = useTranslations('datasheet');
  return (
    <form action={action} className={style.form}>
      <h1 className={style.heading}>{t('step-two.heading')}</h1>
      <h2
        className={style.subHeading}
      >{`${t('step-two.subheading')} (${email}) ${t('step-two.reason')}`}</h2>
      <div className={style.controlsContainer}>
        <p className={style.control} onClick={close}>
          {t('step-two.cancel')}
        </p>
        <p className={style.control} onClick={() => setStep(1)}>
          {t('step-two.edit')}
        </p>
      </div>
      {errors && errors.errors.enteredOTP && (
        <span className={style.error}>{errors.errors.enteredOTP}</span>
      )}
      {errors && errors.errors.productName && (
        <span className={style.error}>{errors.errors.productName}</span>
      )}
      {errors && errors.errors.api && (
        <span className={style.error}>{errors.errors.api}</span>
      )}
      <div className={style.inputContainer}>
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
      </div>

      <input type='hidden' name='enteredOTP' value={otp} />
      <input type='hidden' name='productName' value={product.name['en']} />
      <SubmitButton />
      <button className={style.resend} onClick={() => setStep(1)}>
        {t('step-two.resend')}
      </button>
    </form>
  );
};

export default StepTwo;

//* Style
const style = {
  form: `bg-lightgray m-5 flex h-fit w-full flex-col items-center gap-5 rounded-lg p-5 md:m-0 md:w-[60%] lg:w-[40%]`,
  heading: `text-center text-4xl font-semibold`,
  subHeading: `text-center text-sm text-dolphine`,
  inputContainer: `flex w-full flex-col gap-2 px-5`,
  label: `font-semibold`,
  input: `bg-lightgray h-12 rounded-lg border-[1px] border-solid border-dolphine/20 p-5`,
  error: `form-error`,
  resend: `relative flex h-10 w-[92%] items-center justify-center rounded-lg border-[1.5px] border-solid border-dolphine px-3
   py-5 font-semibold text-charcoal duration-150 hover:bg-dolphine hover:text-white`,
  otpContainer: `flex justify-between items-center w-full`,
  otp: `otp-input flex h-12 w-10 items-center justify-center rounded-lg border-[1px] border-solid border-emerald text-center 
    text-3xl font-semibold text-emerald md:h-20 md:w-16`,
  controlsContainer: `flex w-full justify-center gap-5 px-10`,
  control: `cursor-pointer text-xs text-dolphine hover:text-emerald`,
};
