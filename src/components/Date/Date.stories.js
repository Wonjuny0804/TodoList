import Date from './Date'

/* ------------------------------------------------------------------- */

export default {
  title: 'Component/Date',
  component: Date,
  // argTypes: {
  // },
}

const Template = (args) => <Date {...args} />


export const Sample = Template.bind({})
Sample.args = {
  month: 5,
  day: 5,
  date: 23
}