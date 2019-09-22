// import { IApiResponse, IReportResponse } from '../types';
import { ChartData, ChartOptions } from 'chart.js';

// const RED = '#d50000';
export default class StepsHelper {
    static get options(): ChartOptions {
        return {
            scales: {
                xAxes: [
                    {
                        stacked: false,
                        ticks: { beginAtZero: true },
                    },
                ],
                yAxes: [
                    {
                        ticks: { minRotation: 90 },
                        stacked: false,
                    },
                ],
            },
        };
    }

    static get getExampleData(): ChartData {
        return {
            labels: ['PASOS'],
            datasets: [
                {
                    label: 'PASOS QUE RECORRER',
                    data: [12000, 3000],
                    backgroundColor: '#e65100',
                },
                {
                    label: 'PASOS RECORRIDOS',
                    data: [3000],
                    backgroundColor: '#1a237e',
                },
            ],
        };
    }
}
