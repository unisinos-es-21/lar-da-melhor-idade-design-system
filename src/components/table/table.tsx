import classnames from 'classnames';
import React, { useCallback } from 'react';
import { useTable, Column } from 'react-table';

import './table.css';

import { Card } from '../card';
import { Title } from '../title';
import { Input } from '../input';
import { Color, Size } from '../../types';

export interface TableProps
  extends React.DetailedHTMLProps<
    React.TableHTMLAttributes<HTMLTableElement>,
    HTMLTableElement
  > {
  columns: Column[];
  data: any[];
  title: string;
  inputName: string;
  inputPlaceholder: string;
  filter: Function;
}

export function Table({
  columns,
  data,
  className,
  title,
  children,
  inputName,
  inputPlaceholder,
  filter,
  ...props
}: TableProps) {
  const classNames = classnames('table-container', className);
  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  const onSearch = useCallback(async (evt) => {
    if (filter) {
      await filter(evt.target[inputName].value);
    }

    evt.preventDefault();
  }, []);

  return (
    <Card className={classNames}>
      <Card.Header color={Color.PURPLE} className="table-header">
        <Title type="h3" size={Size.LARGE}>
          {title}
        </Title>
        <form onSubmit={onSearch}>
          <Input
            id={inputName}
            name={inputName}
            placeholder={inputPlaceholder}
            iconInternal="search"
            internalButtonType="submit"
          />
        </form>
      </Card.Header>
      <Card.Content className="table-content">
        <table className="table" {...getTableProps()} {...props}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card.Content>
    </Card>
  );
}
