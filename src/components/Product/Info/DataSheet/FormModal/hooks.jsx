import { useRef } from 'react';
export const useFormModal = (onClose) => {
  const divRef = useRef(null);

  const handleClick = (event) => {
    if (
      event.target !== divRef.current &&
      !divRef.current.contains(event.target)
    ) {
      onClose();
    }
  };

  return { divRef, handleClick };
};
