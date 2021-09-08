import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text, Size, Color } from '../';

export default {
  title: 'Example/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TextExample = Template.bind({});

TextExample.args = {
  children: 'Test',
  size: Size.MEDIUM,
  color: Color.BLACK,
};
