import React from "react";
import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = ({ dataPoints }) => {
  const dataPointsValue = dataPoints.map((dp) => dp.value);
  const totalMax = Math.max(...dataPointsValue);
  return (
    <div className="chart">
      {dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={totalMax}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
