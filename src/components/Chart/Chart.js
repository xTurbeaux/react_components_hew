import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (data) => {

  const dataPointValues = data.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {data.dataPoints.map((dataPoint) => (
        <ChartBar 
          key={dataPoint.label}
          value={dataPoint.value} 
          maxValue={totalMaximum} 
          label={dataPoint.label} 
        />
      ))}
    </div>
  );
};

export default Chart;