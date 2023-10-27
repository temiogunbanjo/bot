import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { Chart as GoogleChart } from "react-google-charts";

function Chart({
  title = "",
  data = [],
  width = "100%",
  height = 100,
  is3D = true,
  useGoogle = true,
  ...rest
}) {
  if (useGoogle) {
    data = [["Task", "Hours per Day"]].concat(
      data.map((each) => [each?.title, each?.value])
    );
    console.log(data);
    return (
      <GoogleChart
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        width={width}
        height={height}
        data={data}
        options={{
          is3D,
          title,
          backgroundColor: "transparent",
          color: "white",
          pieHole: 0.4,
          legend: "bottom",
          chartArea: { left: 0, top: 0, right: 0, bottom: 50 },
        }}
        {...rest}
      />
    );
  }

  return (
    <PieChart
      totalValue={100}
      radius={width / 2 - 1.5}
      // segmentsShift={(index) => (index !== 0 ? 0.3 : 0.3)}
      viewBoxSize={[width, height]}
      center={[width / 2, height / 2]}
      startAngle={-90}
      animate
      // lengthAngle={90}
      label={({ dataEntry }) => Math.round(dataEntry.percentage) + "%"}
      labelStyle={{
        fontSize: "14px",
        fill: "white",
      }}
      paddingAngle={1}
      lineWidth={75}
      data={data.map((each, _, arr) => {
        const total = arr.reduce((a, b) => {
          return a + Number(b.value || 0);
        }, 0);

        const percentage = Math.round((each.value / Math.max(total, 1)) * 100);

        // console.log(each?.name, total, percentage);
        return {
          ...each,
          value: percentage,
          total,
        };
      })}
      // style={{ height: "58px" }}
      {...rest}
    />
  );
}

export default Chart;
