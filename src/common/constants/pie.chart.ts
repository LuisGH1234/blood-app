import { ChartData, ChartOptions } from "chart.js";

const data: ChartData = {
    labels: ["Red", "Green", "Yellow"],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
        }
    ]
};

const options: ChartOptions = {
    events: ["click"],
    onClick: (e: any, arr: any[]) => console.log(":v", e, arr)
};

export default { data, options };