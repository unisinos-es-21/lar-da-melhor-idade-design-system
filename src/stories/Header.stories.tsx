import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from '../';

export default {
  title: 'Example/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const HeaderExample = Template.bind({});

HeaderExample.args = {
  children: 'Test',
};
