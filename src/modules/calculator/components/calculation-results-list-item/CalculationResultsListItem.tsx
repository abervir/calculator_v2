import React from 'react';

import { Button } from '@modules/shared/components';
import { SharedUtils } from '@modules/core/utils';
import { CalculationResult } from '@modules/calculator/models';

import './CalculationResultsListItem.scss';

interface Props {
  item: CalculationResult;
}

const _CalculationResultsListItem = (props: Props) => {
  const {
    item: { operands, operation, result, id },
  } = props;

  const resultValue = result ?? 'N/A';
  const operationStringRepresentation = `${operands[0]} ${operation.sign} ${operands[1]} = ${resultValue}`;

  return (
    <>
      <td className='calculation-result-title'>{operation.title} operation</td>
      <td className='calculation-result-representation'>
        {operationStringRepresentation}
      </td>
      <td>{new Date(id).toUTCString()}</td>
      <td className='controls-column'>
        <Button
          title='Copy result!'
          onClick={() => SharedUtils.copyTextToClipboard(result.toString())}
        />
      </td>
    </>
  );
};

export const CalculationResultsListItem = React.memo(
  _CalculationResultsListItem
);
