import React from "react";
// import Chart from "react-apexcharts";
// import ChartistGraph from 'react-chartist';
import "./Main.scss";
import { MainLayout } from "../../common/components";
import { Row, Col, Card, CardBody } from "reactstrap";
import { Pie, Line, Bar } from "react-chartjs-2";
// import { IChartOptions } from "chartist";

const App: React.FC = () => {
  // const data = fetch('jhklj');
  return (
    <MainLayout title="BloodApp">
      <Row md="12">
        <Col md="6">
          <Card style={{ margin: "8px" }}>
            <CardBody>
              <Pie data={data} options={options} />
            </CardBody>
          </Card>
        </Col>
        <Col md="6">
          <Card style={{ margin: "8px" }}>
            <CardBody>
              <Line data={dataLine} options={options} />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row md="12">
        <Col md="12">
          <CardBody>
            <Bar data={stackedBarData} options={stackedBarOptions} />
          </CardBody>
        </Col>
      </Row>
    </MainLayout>
  );
};

export default App;

const data = {
  labels: ["Red", "Green", "Yellow"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }
  ]
};

const options = {
  events: ["click"],
  onClick: (e: any, arr: any[]) => console.log(":v", e, arr)
};

const dataLine = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const stackedBarOptions = {
  scales: {
    xAxes: [
      {
        stacked: true
      }
    ],
    yAxes: [
      {
        stacked: true
      }
    ]
  }
};

var dataValues = [12, 19, 3, 5];
var dataLabels = [0, 1, 2, 3, 4];

const stackedBarData = {
  labels: dataLabels,
  datasets: [
    {
      label: "Group A",
      data: dataValues,
      backgroundColor: "rgba(255, 99, 132, 1)"
    },
    {
      label: "Group B",
      data: [19, 26, 1, 9],
      backgroundColor: "rgba(109, 99, 100, 1)"
    }
  ]
};
