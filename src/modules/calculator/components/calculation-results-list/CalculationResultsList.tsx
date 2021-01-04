import React from 'react';

import { Table } from '@modules/shared/components';
import { CalculationResult } from '@modules/calculator/models';
import { CalculationResultsListItem } from '../calculation-results-list-item/CalculationResultsListItem';

export interface Props {
  calculationResults: CalculationResult[];
}

export const CalculationResultsList = (props: Props) => {
  const { calculationResults } = props;

  return (
    <div className='calculation-results-list'>
      <h2>Calculation History</h2>
      {calculationResults.length ? (
        <Table
          data={calculationResults}
          render={(item) => <CalculationResultsListItem item={item} />}
          rowKeyProperty='id'
        />
      ) : (
        <h3>No Results</h3>
      )}
    </div>
  );
};
