import React from 'react';

import './Table.scss';

interface Props {
  data: any[];
  render: (item: any) => JSX.Element;
  rowKeyProperty: string;
}

export const Table = (props: Props) => {
  const { data, rowKeyProperty, render } = props;

  const rowsRender = (): JSX.Element[] => {
    return data.map((item, index) => {
      const rowId = item[rowKeyProperty];

      return (
        <tr key={rowId}>
          <td>{index + 1}</td>
          {render(item)}
        </tr>
      );
    });
  };
  return (
    <table className='table'>
      <tbody>{rowsRender()}</tbody>
    </table>
  );
};
