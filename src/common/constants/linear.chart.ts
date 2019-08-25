import { ChartData, ChartOptions } from "chart.js";

const data: ChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
        {
            label: "Diastolica",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#aeea00",
            borderColor: "#aeea00", // The main line color
            borderCapStyle: 'square',
            borderDash: [], // try [5, 15] for instance
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "black",
            pointBackgroundColor: "white",
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: "yellow",
            pointHoverBorderColor: "brown",
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            // notice the gap in the data and the spanGaps: true
            data: [65, 59, 80, 90, 56, 55, 40, undefined, 60, 55, 109, 78],
            spanGaps: true,
        },
        {
            label: "Siastolica",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#00b0ff",
            borderColor: "#00b0ff",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "white",
            pointBackgroundColor: "black",
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: "brown",
            pointHoverBorderColor: "yellow",
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            // notice the gap in the data and the spanGaps: false
            data: [10, 20, 140, 119, 64, 78, 156, undefined, 70, 40, 160, 89],
            spanGaps: false,
        }
    ]
};

const options: ChartOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
                max: 180,
                min: 0,
            },
            scaleLabel: {
                display: true,
                labelString: 'Moola',
                fontSize: 20
            }
        }],
    },
    events: ["click"],
    onClick: (e: any, arr: any[]) => console.log(":v", e, arr)
};

export default { data, options };