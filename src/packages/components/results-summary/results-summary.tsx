import React from 'react';

interface ResultsSummaryProps {
  first: number;  // The first product number displayed
  last: number;   // The last product number displayed
  total: number;  // The total number of products
}

export const ResultsSummary: React.FC<ResultsSummaryProps> = ({ first, last, total }) => {
  return (
    <div>
      {`Showing ${first} to ${last} of ${total} results`}
    </div>
  );
};