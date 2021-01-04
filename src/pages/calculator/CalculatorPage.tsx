import React, { useCallback, useState } from 'react';
import {
  CalculationResultsList,
  CalculatorForm,
} from '@modules/calculator/components';
import { CalculationResult } from '@modules/calculator/models';

export const CalculatorPage = () => {
  const [calculationResults, setCalculationResults] = useState<
    CalculationResult[]
  >([]);

  const onSaveCalculationResult = useCallback((value: CalculationResult) => {
    setCalculationResults((results) => {
      return [...results, value];
    });
  }, []);

  return (
    <div className='calculator-page'>
      <CalculatorForm onSumbit={onSaveCalculationResult} />
      <CalculationResultsList calculationResults={calculationResults} />
    </div>
  );
};
