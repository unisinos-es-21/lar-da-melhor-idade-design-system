import React, { useCallback, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Table } from '../';

export default {
  title: 'Example/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const data = [
  {
    values: ['Hello', 'World'],
  },
  {
    values: ['react-table', 'rocks'],
  },
  {
    values: ['whatever', 'you want'],
  },
];

const columns = ['Column 1', 'Column 2'];
const dataValues = [...data, ...data, ...data];

const Template: ComponentStory<typeof Table> = (args) => {
  const [values, setValues] = useState([...dataValues]);

  const handleSearch = useCallback(
    (value: string) => {
      if (value.length === 0) {
        return setValues(dataValues);
      }

      const dataSearch = dataValues.filter(({ values }) =>
        values.includes(value)
      );

      return setValues(dataSearch);
    },
    [data]
  );

  return <Table {...args} filter={handleSearch} data={values} />;
};

export const TableExample = Template.bind({});

TableExample.args = {
  data,
  columns,
  title: 'test',
  inputName: 'test',
  inputPlaceholder: 'test',
  totalPages: 1,
};
