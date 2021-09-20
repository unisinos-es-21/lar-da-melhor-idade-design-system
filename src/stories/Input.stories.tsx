import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { fas } from '@fortawesome/free-solid-svg-icons';

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
    iconLabel: {
      options: Object.keys(fas).map((icon) =>
        icon.replace('fa', '').toLowerCase()
      ),
      control: { type: 'select' },
    },
    iconInternal: {
      options: Object.keys(fas).map((icon) =>
        icon.replace('fa', '').toLowerCase()
      ),
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputExample = Template.bind({});

InputExample.args = {
  disabled: false,
  placeholder: 'test',
};

const TemplateWithButton: ComponentStory<typeof Input> = (args) => {
  const [type, setType] = useState('text');

  return (
    <Input
      {...args}
      type={type}
      onClickInternalButton={() =>
        setType(type === 'text' ? 'password' : 'text')
      }
    />
  );
};

export const InputWithButton = TemplateWithButton.bind({});

InputWithButton.args = {
  disabled: false,
  placeholder: 'test',
  iconInternal: 'lock',
};

const TemplateRadio: ComponentStory<typeof Input> = (args) => (
  <Input type="radio" {...args} />
);

export const InputRadio = TemplateRadio.bind({});

InputRadio.args = {
  label: 'radio',
};
