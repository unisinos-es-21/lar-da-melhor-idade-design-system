import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { Button, Color } from '../';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    icon: {
      options: Object.keys(fas).map((icon) =>
        icon.replace('fa', '').toLowerCase()
      ),
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ButtonExample = Template.bind({});

ButtonExample.args = {
  children: 'Test',
  color: Color.BLACK,
  disabled: false,
};
