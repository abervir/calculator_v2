import { shallow } from 'enzyme';

import { Table } from '@modules/shared/components';
import { CalculationResultsList } from './CalculationResultsList';

describe('CalculationResultsList', () => {
  [
    {
      calculationResults: [],
      expectedResult: false,
    },
    {
      calculationResults: [{} as any],
      expectedResult: true,
    },
  ].forEach(({ calculationResults, expectedResult }) => {
    const shouldDisplay = expectedResult ? '' : 'not';
    it(`should ${shouldDisplay} display table if calculationResults is ${shouldDisplay} empty`, () => {
      const wrapper = shallow(
        <CalculationResultsList calculationResults={calculationResults} />
      );

      expect(wrapper.find(Table).exists()).toBe(expectedResult);
    });
  });

  it(`should display 'No Results' if calculationResults is empty`, () => {
    const wrapper = shallow(<CalculationResultsList calculationResults={[]} />);

    expect(wrapper.find('h3').exists()).toBe(true);
  });
});
