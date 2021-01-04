import { shallow } from 'enzyme';
import React from 'react';

import { CalculatorOperationsListItem } from './CalculatorOperationsListItem';

describe('CalculatorOperationsListItem', () => {
  it('should render component', () => {
    const title = 'title';
    const icon = 'icon';

    expect(
      shallow(<CalculatorOperationsListItem title={title} icon={icon} />)
    ).toMatchSnapshot();
  });
});
