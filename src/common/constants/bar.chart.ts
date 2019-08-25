import { ChartData, ChartOptions } from "chart.js";

// Stacked Options
const options: ChartOptions = {
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
var dataLabels = ['0', '1', '2', '3', '4'];

const data: ChartData = {
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

export default { data, options };