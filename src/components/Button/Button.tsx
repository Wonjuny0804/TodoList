import classNames from 'classnames';
import styles from './Button.module.scss';

type ButtonProps = {
  type: 'submit' | 'reset' | 'button';
  value: string;
  style: string | null;
}

const Button = ({ type, value, style }: ButtonProps) => {

  const overallStyle = classNames(styles.defaultButton, style);

  return (<button type={type} className={overallStyle}>
    {value}
  </button>);
};

export default Button;
