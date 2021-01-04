import React, { KeyboardEvent } from 'react';
import { InputUtils } from '@modules/core/utils';

import './Input.scss';

interface Props {
  placeholder?: string;
  isNumbersOnly?: boolean;
  onChange: (value: string) => void;
}

export const Input = (props: Props) => {
  const { placeholder = 'Value', isNumbersOnly, onChange } = props;

  const onKeyPressChecker = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (!isNumbersOnly) {
      return;
    }

    InputUtils.onKeyPressChecker(event);
  };

  return (
    <div className='calc-input'>
      <input
        placeholder={placeholder}
        onChange={({ target }) => onChange(target.value)}
        onKeyDown={onKeyPressChecker}
      />
    </div>
  );
};
