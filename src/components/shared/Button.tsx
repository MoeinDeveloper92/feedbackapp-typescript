import React from 'react';

type Props = {
  children: React.ReactNode;
  version?: string;
  type?: 'submit';
  isDisabled?: boolean;
};

const Button = ({
  children,
  type,
  version = 'primary',
  isDisabled = true,
}: Props) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
};

export default Button;
