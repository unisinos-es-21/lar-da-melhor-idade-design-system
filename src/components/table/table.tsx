import classnames from 'classnames';
import React, { useCallback } from 'react';
import { useTable, usePagination, Column, HeaderGroup, Row } from 'react-table';

import './table.css';

import { Card } from '../card';
import { Title } from '../title';
import { Input } from '../input';
import { Button } from '../button';

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
  const tableInstance = useTable({ columns, data }, usePagination) as any;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    pageOptions,
    state: { pageIndex },
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
  } = tableInstance;

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
            {headerGroups.map((headerGroup: HeaderGroup) => (
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
            {page.map((row: Row) => {
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
        <div className="flex w-full items-center justify-end space-x-4 mt-4">
          <Button
            color={Color.BLACK}
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            icon="arrow-left"
          >
            Anterior
          </Button>
          <div>
            Página{' '}
            <em>
              {pageIndex + 1} de {pageOptions.length}
            </em>
          </div>
          <Button
            color={Color.BLACK}
            onClick={() => nextPage()}
            disabled={!canNextPage}
            icon="arrow-right"
          >
            Próxima
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}
