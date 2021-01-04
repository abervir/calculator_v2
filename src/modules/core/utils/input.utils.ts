import { KeyboardEvent } from 'react';
import { ALLOWED_INPUT_CHARS } from '../constants';

export class InputUtils {
  static isInputNaN(event: KeyboardEvent<HTMLInputElement>): boolean {
    return (
      isNaN(Number(event.key)) &&
      !ALLOWED_INPUT_CHARS.includes(event.key) &&
      !event.ctrlKey
    );
  }

  static onKeyPressChecker(event: KeyboardEvent<HTMLInputElement>): void {
    if (InputUtils.isInputNaN(event)) {
      event.preventDefault();
    }
  }
}
