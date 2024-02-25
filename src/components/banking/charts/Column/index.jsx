import React from "react";
import ReactApexChart from "react-apexcharts";

function Column() {
  const state = {
    series: [
      {
        name: "Revenue",
        data: [76, 40, 30, 40, 28, 105, 88, 77, 65],
      },
      {
        name: "Free Cash Flow",
        data: [80, 60, 36, 88, 70, 95, 13, 28, 55],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
      },
      yaxis: {
        title: {
          text: "$ (thousands)",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
  };
  return (
    <div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={350}
      />
    </div>
  );
}

export default Column;
// class ApexChart extends React.Component {
//     constructor(props) {
//       super(props);

//     }

//     render() {
//       return (

//   <div id="chart">
// <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
// </div>
