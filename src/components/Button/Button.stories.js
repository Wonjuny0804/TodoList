import Button from './Button';
import {ReactComponent as Add} from './assets/Add.svg'; 

/* ------------------------------------------------------------------- */

export default {
  title: 'Component/Button',
  component: Button,
  argTypes: {
    type: {
      options: ['submit', 'button', 'reset']
    },
    disabled: { control: 'boolean' },
  },
}

const Template = (args) => <Button {...args}/>

export const Sample = Template.bind({});
Sample.args = {
  type: 'submit',
  value: 'Sample button',
  style: null,
  disabled: false,
  name: 'Button',
  icon: Add
}
