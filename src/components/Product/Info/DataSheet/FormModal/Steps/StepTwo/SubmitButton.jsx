import { useFormStatus } from 'react-dom';
import { useTranslations } from 'next-intl';

const SubmitButton = () => {
  const t = useTranslations('datasheet');
  const status = useFormStatus();
  return (
    <button
      type='submit'
      className='relative flex h-10 w-[92%] items-center justify-center rounded-lg border-[1.5px] border-solid border-emerald px-3 py-5 font-semibold text-emerald duration-150 hover:bg-emerald hover:text-white'
      disabled={status.pending}
    >
      {t('step-two.confirm')} &nbsp;{' '}
    </button>
  );
};

export default SubmitButton;
