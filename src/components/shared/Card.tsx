import React from 'react';

type Props = {
  children: React.ReactNode;
  reverse?: boolean;
};

const Card = ({ children, reverse = false }: Props) => {
  return (
    <div className={`card ${reverse && 'reverse'} relative`}>{children}</div>
  );
};

export default Card;
