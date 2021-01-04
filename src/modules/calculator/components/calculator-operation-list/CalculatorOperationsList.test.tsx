import { shallow } from 'enzyme';
import React from 'react';

import { CalculatorOperationsList } from './CalculatorOperationsList';

describe('CalculatorOperationsList', () => {
  it('should render CalculatorOperationsList component', () => {
    expect(
      shallow(<CalculatorOperationsList onChangeOperation={() => {}} />)
    ).toMatchSnapshot();
  });
});
