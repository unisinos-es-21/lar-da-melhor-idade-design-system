import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Title } from '../';

export default {
  title: 'Example/Title',
  component: Title
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = args => <Title {...args} />;

export const TitleExample = Template.bind({});

TitleExample.args = {
  children: 'Test'
};
