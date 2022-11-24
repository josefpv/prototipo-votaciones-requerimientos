import React from "react";
import { Chart } from "react-google-charts";

const Grafica = ({ options, data }) => {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
};

export default Grafica;
