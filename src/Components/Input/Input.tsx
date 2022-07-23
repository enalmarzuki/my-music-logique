import React, { ChangeEvent } from 'react';
import Styles from './Input.module.scss';

export interface IInputProps {
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<IInputProps> = ({
  placeholder,
  onChange,
  ...props
}) => {
  return (
    <input
      placeholder={placeholder}
      onChange={onChange}
      className={Styles['input']}
      {...props}
    />
  );
};
