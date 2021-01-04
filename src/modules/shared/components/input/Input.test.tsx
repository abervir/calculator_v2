/* eslint-disable jest/no-conditional-expect */
import React from 'react';
import { shallow } from 'enzyme';

import { EventMock } from '@modules/core/mocks';
import { InputUtils } from '@modules/core/utils';

import { Input } from './Input';

const placeholder = 'placeholder';
const isNumbersOnly = false;
const onChange = jest.fn((_: string) => {});

describe('Input', () => {
  it('should render component', () => {
    expect(
      shallow(
        <Input
          placeholder={placeholder}
          isNumbersOnly={isNumbersOnly}
          onChange={onChange}
        />
      )
    ).toMatchSnapshot();
  });

  it('should invoke onChange function after typing input', () => {
    const wrapper = shallow(
      <Input
        placeholder={placeholder}
        isNumbersOnly={isNumbersOnly}
        onChange={onChange}
      />
    );
    wrapper.find('input').simulate('change', EventMock);

    expect(onChange).toHaveBeenCalled();
  });

  [
    {
      isNumbersOnly: false,
    },
    {
      isNumbersOnly: true,
    },
  ].forEach(({ isNumbersOnly }) => {
    const shouldInvoke = isNumbersOnly ? '' : 'not';
    it(`should ${shouldInvoke} invoke onKeyPressCheckerSpy on KeyDown if isNumbersOnly is set to ${isNumbersOnly}`, () => {
      const wrapper = shallow(
        <Input
          placeholder={placeholder}
          isNumbersOnly={isNumbersOnly}
          onChange={onChange}
        />
      );
      const onKeyPressCheckerSpy = jest
        .spyOn(InputUtils, 'onKeyPressChecker')
        .mockImplementation();
      wrapper.find('input').simulate('keydown', new KeyboardEvent('keydown'));

      isNumbersOnly
        ? expect(onKeyPressCheckerSpy).toHaveBeenCalledWith(
            new KeyboardEvent('keydown')
          )
        : expect(onKeyPressCheckerSpy).not.toHaveBeenCalled();
    });
  });
});
