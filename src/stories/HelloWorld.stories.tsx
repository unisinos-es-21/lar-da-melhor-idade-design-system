import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HelloWorld } from '../';

export default {
  title: 'Example/HelloWorld',
  component: HelloWorld
} as ComponentMeta<typeof HelloWorld>;

const Template: ComponentStory<typeof HelloWorld> = args => (
  <HelloWorld {...args} />
);

export const HelloWorldExample = Template.bind({});

HelloWorldExample.args = {};
