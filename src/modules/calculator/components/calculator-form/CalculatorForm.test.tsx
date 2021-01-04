import { CalculationResult } from '@modules/calculator/models';
import { shallow } from 'enzyme';
import React from 'react';

import { CalculatorForm } from './CalculatorForm';

describe('CalculatorForm', () => {
  it('should render component', () => {
    expect(
      shallow(<CalculatorForm onSumbit={(_: CalculationResult) => {}} />)
    ).toMatchSnapshot();
  });
});
