import React, { useCallback, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Table } from '../';

export default {
  title: 'Example/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const data = [
  {
    col1: 'Hello',
    col2: 'World',
  },
  {
    col1: 'react-table',
    col2: 'rocks',
  },
  {
    col1: 'whatever',
    col2: 'you want',
  },
];

const columns = [
  {
    Header: 'Column 1',
    accessor: 'col1',
  },
  {
    Header: 'Column 2',
    accessor: 'col2',
  },
];

const Template: ComponentStory<typeof Table> = (args) => {
  const [values, setValues] = useState(data);

  const handleSearch = useCallback(
    (value: string) => {
      if (value.length === 0) {
        return setValues(data);
      }

      const dataSearch = data.filter(
        ({ col1, col2 }) => col1.match(value) || col2.match(value)
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
};
