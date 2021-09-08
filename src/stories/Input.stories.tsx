import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from '../';

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    className: {
      name: 'variant',
      options: ['error', 'none'],
      control: { type: 'select', labels: { error: 'error', none: '' } },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputExample = Template.bind({});

InputExample.args = {
  disabled: false,
  placeholder: 'test',
};
