/* eslint-disable jest/no-conditional-expect */
import { ALLOWED_INPUT_CHARS } from '../constants';
import { InputUtils } from './input.utils';

describe('InputUtils', () => {
  [
    {
      key: '1',
      ctrlKey: false,
      expected: false,
    },
    {
      key: '1s',
      ctrlKey: false,
      expected: true,
    },
    {
      key: '1',
      ctrlKey: true,
      expected: false,
    },
    ...getAllowedChars(),
  ].forEach(({ key, ctrlKey, expected }) => {
    const ctrlKeyPressed = ctrlKey ? '' : 'not';
    it(`isNumbersAllowed should return true if key = ${key}, ctr key is pressed ${ctrlKeyPressed}`, () => {
      const event = new KeyboardEvent('keydown', { key, ctrlKey });

      expect(InputUtils.isInputNaN(event as any)).toBe(expected);
    });
  });

  [
    {
      expected: false,
    },
    {
      expected: true,
    },
    ...getAllowedChars(),
  ].forEach(({ expected }) => {
    const shouldInvoke = expected ? '' : 'not';
    it(`onKeyPressChecker should ${shouldInvoke} invoke preventDefault if isInputNaN returns ${expected}`, () => {
      const event = new KeyboardEvent('keydown');
      const preventDefaultSpy = jest.spyOn(event, 'preventDefault');
      jest.spyOn(InputUtils, 'isInputNaN').mockReturnValue(expected);
      InputUtils.onKeyPressChecker(event as any);

      expected
        ? expect(preventDefaultSpy).toHaveBeenCalled()
        : expect(preventDefaultSpy).not.toHaveBeenCalled();
    });
  });
});

interface PartialEventParams {
  key: string;
  ctrlKey: boolean;
  expected: boolean;
}

function getAllowedChars(): PartialEventParams[] {
  return ALLOWED_INPUT_CHARS.map((char: string) => ({
    key: char,
    ctrlKey: false,
    expected: false,
  }));
}
