import { IApiResponse, IReportResponse } from '../types';
import { ChartPoint, ChartData, ChartOptions } from 'chart.js';

const RED = '#d50000';
export default class LineHelper {
    public static options: ChartOptions = {
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
                    ticks: {
                        beginAtZero: true,
                        max: 180,
                        min: 0,
                        stepSize: 20,
                    },
                },
            ],
        },
        // events: ['click'],
        // onClick: (e: any, arr: any[]) => console.log('onClick', e, arr),
    };

    // siatolica/diastolica
    public static getSiastolica(response: IApiResponse) {
        const { Data = [] } = response;
        return Data.map((x, i, a) => {
            const result = x.DomainObject!!.Valor!!.split('/')[0];
            return Number(result);
        });
    }

    public static getDiastolica(response: IApiResponse) {
        const { Data = [] } = response;
        return Data.map((x, i, a) => {
            const result = x.DomainObject!!.Valor!!.split('/')[1];
            return Number(result);
        });
    }

    public static getSiastolica2(response: IReportResponse) {
        const { Presiones = [] } = response;
        return Presiones.map((x, i, a) => {
            const result = x.Valor!!.split('/')[0];
            return Number(result);
        });
    }

    public static getDiastolica2(response: IReportResponse) {
        const { Presiones = [] } = response;
        return Presiones.map((x, i, a) => {
            const result = x.Valor!!.split('/')[1];
            return Number(result);
        });
    }

    private static stPointerColors(data: any[]) {
        const pointBackgroundColor: string[] = [];
        data.forEach((x: any) => {
            if (x >= 140) pointBackgroundColor.push(RED);
            else pointBackgroundColor.push('#212121');
        });
        return pointBackgroundColor;
    }

    private static dtPointerColors(data: any[]) {
        const pointBackgroundColor: string[] = [];
        data.forEach((x: any) => {
            if (x >= 90) pointBackgroundColor.push(RED);
            else pointBackgroundColor.push('#FFFFFF');
        });
        return pointBackgroundColor;
    }

    public static data(res: IApiResponse): ChartData {
        const sourceD = LineHelper.getDiastolica(res);
        const sourceS = LineHelper.getSiastolica(res);
        return {
            labels: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
            ],
            datasets: [
                {
                    label: 'Diastólica',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: '#aeea00',
                    borderColor: '#aeea00', // The main line color
                    borderCapStyle: 'square',
                    borderDash: [], // try [5, 15] for instance
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'black',
                    pointBackgroundColor: LineHelper.dtPointerColors(sourceD),
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
                    label: 'Sistólica',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: '#00b0ff',
                    borderColor: '#00b0ff',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'white',
                    pointBackgroundColor: LineHelper.stPointerColors(sourceS),
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
    }

    public static data2(res: IReportResponse): ChartData {
        const sourceD = LineHelper.getDiastolica2(res);
        const sourceS = LineHelper.getSiastolica2(res);
        return {
            labels: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
            ],
            datasets: [
                {
                    label: 'Diastólica',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: '#aeea00',
                    borderColor: '#aeea00', // The main line color
                    borderCapStyle: 'square',
                    borderDash: [], // try [5, 15] for instance
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'black',
                    pointBackgroundColor: LineHelper.dtPointerColors(sourceD),
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
                    label: 'Sistólica',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: '#00b0ff',
                    borderColor: '#00b0ff',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'white',
                    pointBackgroundColor: LineHelper.stPointerColors(sourceS),
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
    }
}
