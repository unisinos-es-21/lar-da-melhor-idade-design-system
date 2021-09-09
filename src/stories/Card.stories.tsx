import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card, Color } from '../';

export default {
  title: 'Example/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => {
  return (
    <Card {...args}>
      <Card.Content>
        <div>Test</div>
      </Card.Content>
    </Card>
  );
};

export const CardExample = Template.bind({});

CardExample.args = {
  children: 'Test',
};

const TemplateWithHeader: ComponentStory<typeof Card> = (args) => {
  return (
    <Card {...args}>
      <Card.Header>Header</Card.Header>
      <Card.Content>
        <div>Test</div>
      </Card.Content>
    </Card>
  );
};

export const CardWithHeaderExample = TemplateWithHeader.bind({});

CardWithHeaderExample.args = {
  children: 'Test',
  color: Color.PURPLE,
};
