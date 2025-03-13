import { useEffect, RefObject } from 'react';

export const useClickOutside = (
  ref: RefObject<HTMLElement | null>,
  cb: React.Dispatch<React.SetStateAction<boolean>>
) => {
  useEffect(() => {
    const handleClickOutisde = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        cb(true);
      }
    };
    document.addEventListener('mousedown', handleClickOutisde);
    return () => document.removeEventListener('mousedown', handleClickOutisde);
  }, [ref, cb]);
};
