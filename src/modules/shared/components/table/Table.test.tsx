/* eslint-disable jest/no-conditional-expect */
import { shallow } from 'enzyme';
import React from 'react';

import { Table } from './Table';

describe('Table', () => {
  it('should render component', () => {
    const data = [
      {
        name: 'test',
        value: 5,
      },
    ];

    expect(
      shallow(
        <Table
          data={data}
          rowKeyProperty='name'
          render={(item) => (
            <>
              <td>{item.name}</td>
              <td>{item.value}</td>
            </>
          )}
        />
      )
    ).toMatchSnapshot();
  });
});
