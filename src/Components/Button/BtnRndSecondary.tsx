import React from 'react';
import Styles from './Button.module.scss';

export interface IBtnRndSecondaryProps {
  title: string;
  onClick: () => void;
}

export const BtnRndSecondary: React.FC<IBtnRndSecondaryProps> = ({
  title,
  onClick,
  ...props
}) => {
  return (
    <button
      className={Styles['btn-rnd-secondary']}
      onClick={onClick}
      {...props}
    >
      {title}
    </button>
  );
};
