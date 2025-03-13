import React, { useRef } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';

type Props = {
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, children }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useClickOutside(modalRef, onClose);

  if (!isOpen) {
    return;
  }
  return (
    <div className="fixed inset-0 z-20 bg-gray-900/90  flex justify-center items-center">
      <div
        ref={modalRef}
        className="bg-white w-[500px] rounded-4xl gap-9 h-[200px] flex justify-center flex-col  items-center"
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
