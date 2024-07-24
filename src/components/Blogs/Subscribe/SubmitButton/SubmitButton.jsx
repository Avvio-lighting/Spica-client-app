import { useFormStatus } from 'react-dom';
import { useTranslations } from 'next-intl';

const SubmitButton = ({ children }) => {
  const t = useTranslations('contac-us-form');
  const status = useFormStatus();
  return (
    <button
      type='submit'
      className='relative flex h-12 w-[100%] items-center justify-center rounded-[200px] bg-emerald p-3 text-sm text-white duration-150 hover:bg-emerald/70 md:w-[30%]'
      disabled={status.pending}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
