import classNames from 'classnames';
import styles from './Button.module.scss';
import { ReactComponent as Add } from './assets/Add.svg'; 

type ButtonProps = {
  type: 'submit' | 'reset' | 'button';
  value: string;
  style: string | null;
}

const Button = ({ type, value, style }: ButtonProps) => {

  const overallStyle = classNames(styles.defaultButton, style);

  return (<button type={type} className={overallStyle}>
    <Add />
    {value}
  </button>);
};

export default Button;
