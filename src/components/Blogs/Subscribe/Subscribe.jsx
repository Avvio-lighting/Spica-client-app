'use client';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import StepOne from './Steps/StepOne';
import StepTwo from './Steps/StepTwo';

const Subscribe = ({ name, email }) => {
  const t = useTranslations('contac-us-form');
  const [step, setStep] = useState(1);

  useEffect(() => {}, [step]);

  const formVariants = {
    initial: { x: '100%' },
    animate: { x: 0 },
    exit: { x: '-100%' },
  };

  return (
    <div className={style.container}>
      <motion.div
        initial='initial'
        animate='animate'
        exit='exit'
        variants={formVariants}
        transition={{ duration: 0.5 }}
        key={step}
        className={style.formWrapper}
      >
        {step === 1 && <StepOne email={email} setStep={setStep} name={name} />}

        {step === 2 && <StepTwo setStep={setStep} email={email} name={name} />}
      </motion.div>
    </div>
  );
};

export default Subscribe;

//* Style

const style = {
  container: `relative h-fit w-full bg-honeydew/20 py-5`,
  textContainer: `flex w-full flex-col items-center justify-between`,
  heading: `p-2 text-2xl text-center text-white font-semibold`,
  subHeading: `px-2 text-center text-sm text-dolphine`,
  background: `z-5 absolute bottom-0 left-0 h-[80%] w-[100%] lg:h-[60%]`,
  formWrapper: `relative w-full`,
  form: `mt-5 flex w-[90%] md:w-[80%] lg:w-[50%] h-fit flex-col mx-auto justify-between gap-5 rounded-xl border-[0.25px] border-solid border-dolphine/20 bg-darkEmerald p-6 shadow-md `,
  inputsContainer: `flex flex-col md:flex-row gap-5`,
  input: `w-full md:w-[70%] rounded-[225px] flex border-[1px] border-solid border-dolphine p-3 outline-none ring-0 focus:ring-1 focus:ring-charcoal`,
  error: `form-error`,
  otpContainer: `flex justify-between items-center  w-full`,
  otp: `otp-input flex h-12 w-10 items-center justify-center rounded-lg border-[1px] border-solid
     border-emerald text-center text-3xl font-semibold text-emerald md:h-20 md:w-16`,
  control: `hover:text-emerald cursor-pointer`,
  controls: `flex justify-end gap-5 pt-5 text-sm`,
  controlsContainer: `flex w-full flex-col justify-between text-wrap text-sm text-dolphine md:text-lg`,
};
