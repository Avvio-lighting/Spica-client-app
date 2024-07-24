'use client';
import { useState } from 'react';
import { useFormModal } from './hooks';
import StepOne from './Steps/StepOne/StepOne';
import StepTwo from './Steps/StepTwo/StepTwo';
import StepThree from './Steps/StepThree/StepThree';

const FormModal = ({ onClose, product }) => {
  const { divRef, handleClick } = useFormModal(onClose);
  const [step, setStep] = useState(1);

  return (
    <div className={style.modal} onClick={handleClick}>
      <div ref={divRef} className={style.stepContainer}>
        {step == 1 && (
          <StepOne product={product} setStep={setStep} close={onClose} />
        )}
        {step == 2 && (
          <StepTwo product={product} setStep={setStep} close={onClose} />
        )}
        {step == 3 && <StepThree product={product} close={onClose} />}
      </div>
    </div>
  );
};

export default FormModal;

//* Style
const style = {
  modal: `absolute right-0 top-0 z-[150] flex h-screen 
  w-screen justify-center rounded-md bg-[#000000]/[56%] py-2 shadow-md  backdrop-blur-md`,
  stepContainer: `flex h-full w-full items-center justify-center`,
};
