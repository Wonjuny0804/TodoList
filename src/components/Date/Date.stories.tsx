import React from 'react';
import Date, { DateProps } from './Date';


/* ------------------------------------------------------------------- */

export default {
  title: 'Component/Date',
  component: Date,
  // argTypes: {
  // },
}


export const Sample = ({month, day, date}: DateProps) => (<Date month={month} day={day} date={date}/>)
