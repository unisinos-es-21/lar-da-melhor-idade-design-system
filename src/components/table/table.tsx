import classnames from 'classnames';
import React, { useCallback } from 'react';

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
  title: string;
  inputName: string;
  inputPlaceholder: string;
  columns: string[];
  data: { values: any[] }[];
  totalPages: number;
  page: number;
  isFirst: boolean;
  isLast: boolean;
  filter: Function;
  previousPage: Function;
  nextPage: Function;
}

export function Table({
  title,
  children,
  inputName,
  inputPlaceholder,
  columns,
  data,
  className,
  page = 0,
  totalPages = 0,
  isFirst,
  isLast,
  filter,
  previousPage,
  nextPage,
  ...props
}: TableProps) {
  const classNames = classnames('table-container', className);

  const onSearch = useCallback((evt) => {
    if (filter) {
      filter(evt.target[inputName].value);
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
        <div className="overflow-x-auto">
          <table className="table" {...props}>
            <thead>
              <tr>
                {columns.map((column, index) => {
                  return <th key={`column-${index}`}>{column}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => {
                return (
                  <tr key={`row-tr-${index}`}>
                    {row.values.map((value, index) => {
                      return <td key={`row-td-${index}`}>{value}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="table-footer">
          <Button
            color={Color.BLACK}
            onClick={() => previousPage()}
            disabled={isFirst}
            icon="arrow-left"
          >
            Anterior
          </Button>
          <div>
            P??gina{' '}
            <em>
              {page + 1} de {totalPages}
            </em>
          </div>
          <Button
            color={Color.BLACK}
            onClick={() => nextPage()}
            disabled={isLast}
            icon="arrow-right"
          >
            Pr??xima
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}
