import { Meta } from '@storybook/react/types-6-0';
import Date, { DateProps } from './Date';


/* ------------------------------------------------------------------- */

export default {
  title: 'Component/Date',
  component: Date,
} as Meta;
 

export const Sample = ({month, day, date}: DateProps) => (<Date month={month} day={day} date={date}/>)
