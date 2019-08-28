import { ChartData, ChartOptions } from 'chart.js';

const RED = '#d50000';
const sourceD = [65, 59, 80, 90, 56, 55, 40, undefined, 60, 55, 109, 78];
const sourceS = [10, 20, 140, 119, 64, 78, 156, undefined, 70, 40, 160, 89];

const data: ChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'Diastolica',
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#aeea00',
            borderColor: '#aeea00', // The main line color
            borderCapStyle: 'square',
            borderDash: [], // try [5, 15] for instance
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'black',
            pointBackgroundColor: dtPointerColors(sourceD),
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: 'yellow',
            pointHoverBorderColor: 'brown',
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            // notice the gap in the data and the spanGaps: true
            data: sourceD,
            spanGaps: true,
        },
        {
            label: 'Siastolica',
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#00b0ff',
            borderColor: '#00b0ff',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'white',
            pointBackgroundColor: stPointerColors(sourceS),
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: 'brown',
            pointHoverBorderColor: 'yellow',
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            // notice the gap in the data and the spanGaps: false
            data: sourceS,
            spanGaps: false,
        },
        {
            label: 'none1',
            fill: false,
            lineTension: 0.1,
            borderWidth: 1.5,
            backgroundColor: '#d50000',
            borderColor: '#d50000',
            // borderCapStyle: 'butt',
            borderDash: [5, 15],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#d50000',
            pointBackgroundColor: '#d50000',
            pointBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBackgroundColor: 'brown',
            pointHoverBorderColor: 'yellow',
            pointHoverBorderWidth: 0,
            pointRadius: 0,
            pointHitRadius: 0,
            // notice the gap in the data and the spanGaps: false
            data: [90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90],
            spanGaps: false,
        },
        {
            label: 'none2',
            fill: false,
            lineTension: 0.1,
            borderWidth: 1.5,
            backgroundColor: '#d50000',
            borderColor: '#d50000',
            // borderCapStyle: 'butt',
            borderDash: [5, 15],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#d50000',
            pointBackgroundColor: '#d50000',
            pointBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBackgroundColor: 'brown',
            pointHoverBorderColor: 'yellow',
            pointHoverBorderWidth: 0,
            pointRadius: 0,
            pointHitRadius: 0,
            // notice the gap in the data and the spanGaps: false
            data: [140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140],
            spanGaps: false,
        },
    ],
};

const options: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,

    legend: {
        // display: false
        labels: {
            filter: (item, chart) => {
                if (item.text) return !item.text.includes('none');
                return item;
            },
        },
    },
    scales: {
        yAxes: [
            {
                // beforeBuildTicks: (scale: any) => {
                //     console.log(scale);
                //     if (scale._ticks)
                //         scale._ticks[0].major = true;
                // },
                ticks: {
                    beginAtZero: true,
                    max: 180,
                    min: 0,
                    stepSize: 20,
                    // values: []
                    // callback: function (value, index, values) {
                    //     // if (value) console.log(value, values);
                    //     return value == 120 ? null : value;
                    // }
                },
                // scaleLabel: {
                //     display: true,
                //     labelString: 'Moola',
                //     fontSize: isMobile() ? 11 : 30,
                //     padding: isMobile() ? 0 : undefined,
                //     lineHeight: isMobile() ? '70%' : undefined,
                // },
                // gridLines: {
                //     zeroLineWidth: 1,
                //     // borderDash: [6, 6],
                //     lineWidth: 1,
                //     color: ['#bdbdbd', '#bdbdbd', '#d50000', '#bdbdbd', '#bdbdbd', '#bdbdbd', '#bdbdbd', '#bdbdbd', '#bdbdbd'],
                // }
            },
        ],
    },
    events: ['click'],
    onClick: (e: any, arr: any[]) => console.log(':v', e, arr),
};

function stPointerColors(data: any[]) {
    const pointBackgroundColor: string[] = [];
    data.forEach((x: any) => {
        if (x >= 140) pointBackgroundColor.push(RED);
        else pointBackgroundColor.push('#212121');
    });
    return pointBackgroundColor;
}

function dtPointerColors(data: any[]) {
    const pointBackgroundColor: string[] = [];
    data.forEach((x: any) => {
        if (x >= 90) pointBackgroundColor.push(RED);
        else pointBackgroundColor.push('#FFFFFF');
    });
    return pointBackgroundColor;
}

// data.datasets![0].pointBackgroundColor = dtPointerColors(data.datasets![0].data!);
// data.datasets![1].pointBackgroundColor = stPointerColors(data.datasets![1].data!);

export default { data, options };
