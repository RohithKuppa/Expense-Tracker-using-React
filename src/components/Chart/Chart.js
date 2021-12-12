import React from "react";
import ChartBar from "./ChartBar.js";
import "./Chart.css";

function Chart(props) {
  const dataPointValues = props.dataPoints.map(
    (dataPointValue) => dataPointValue.value
  );
  const totalMax = Math.max(...dataPointValues); //Math.max takes in comma seperated values [1,2,3]
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={totalMax}
        />
      ))}
    </div>
  );
}

export default Chart;
