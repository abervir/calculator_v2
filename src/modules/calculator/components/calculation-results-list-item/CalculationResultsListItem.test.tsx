import { shallow } from 'enzyme';

import { CalculationResultsListItem } from './CalculationResultsListItem';
import { SharedUtils } from '@modules/core/utils';
import { CalculationResultMock } from '@modules/core/mocks';

describe('CalculationResultsListItem', () => {
  it(`should render component`, () => {
    expect(
      shallow(<CalculationResultsListItem item={CalculationResultMock} />)
    ).toMatchSnapshot();
  });

  it(`should invoke copyTextToClipboard after button was pressed`, () => {
    const spy = jest
      .spyOn(SharedUtils, 'copyTextToClipboard')
      .mockImplementation();
    const wrapper = shallow(
      <CalculationResultsListItem item={CalculationResultMock} />
    );
    wrapper.find('Button').simulate('click');

    expect(spy).toHaveBeenCalled();
  });

  it(`should display operation title`, () => {
    const title = `${CalculationResultMock.operation.title} operation`;
    const wrapper = shallow(
      <CalculationResultsListItem item={CalculationResultMock} />
    );
    const titleText = wrapper.find('.calculation-result-title').text();

    expect(titleText).toBe(title);
  });

  [
    {
      result: 1,
    },
    {
      result: null,
    },
  ].forEach(({ result }) => {
    it(`should display ${result} in result represenatation column`, () => {
      const { operands, operation } = CalculationResultMock;
      CalculationResultMock.result = result as number;
      const resultValue = result || 'N/A';
      const operationStringRepresentationExepected = `${operands[0]} ${operation.sign} ${operands[1]} = ${resultValue}`;
      const wrapper = shallow(
        <CalculationResultsListItem item={CalculationResultMock} />
      );
      const operationStringRepresentationActual = wrapper
        .find('.calculation-result-representation')
        .text();
      expect(operationStringRepresentationExepected).toBe(
        operationStringRepresentationActual
      );
    });
  });
});
