import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useFormStatus } from 'react-dom';
import { useTranslations } from 'next-intl';

const SubmitButton = () => {
  const t = useTranslations('contac-us-form');
  const status = useFormStatus();
  return (
    <button
      type='submit'
      className='form-button disabled:bg-honeydew'
      disabled={status.pending}
    >
      {t('next')} &nbsp; <FontAwesomeIcon icon={faArrowRight} />
    </button>
  );
};

export default SubmitButton;
