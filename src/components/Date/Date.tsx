import React from 'react';
import styles from './Date.module.scss';

export type DateProps = {
  month: number;
  day: number;
  date: number;
}

function Date({month, day, date}: DateProps) {

  const [displayMonth, setDisplayMonth] = React.useState('');
  const [displayDay, setDisplayDay] = React.useState('');
  const [displayDate, setDisplayDate] = React.useState(1);

  const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  React.useEffect(() => {
    setDisplayMonth(months[month]);
    setDisplayDay(days[day]);
    setDisplayDate(date);
  }, [month, day, date]);

  return (
  <div className={styles.dateClass}>
    <p className={styles.date}>{displayDate}</p>
    <div className={styles.dateMonth}>
      <p>{displayDay}</p>
      <p>{displayMonth}</p>
    </div>
  </div>);
}

export default Date;