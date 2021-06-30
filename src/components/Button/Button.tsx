/* eslint-disable react/button-has-type */
import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

export type ButtonProps = {
  type: 'submit' | 'reset' | 'button';
  value: string | null;
  style?: string | null;
  disabled: boolean;
  name: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  onClick: React.MouseEventHandler
}

function Button ({ type, value, style, disabled, name, icon, onClick}: ButtonProps) {
  
  const overallStyle = classNames(styles.defaultButton, style);
  const DisplayIcon = icon;

  return (<button 
        type={type} 
        className={overallStyle}
        disabled={disabled}
        name={name}
        onClick={onClick}
        >
          <DisplayIcon />
        {value}
      </button>
      );
}

export default Button;
