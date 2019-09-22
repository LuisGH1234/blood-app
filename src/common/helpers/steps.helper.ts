// import { IApiResponse, IReportResponse } from '../types';
import { ChartData, ChartOptions } from 'chart.js';
import { IApiResponse, IReportResponse } from '../types';

// const RED = '#d50000';
export default class StepsHelper {
    static get options(): ChartOptions {
        return {
            tooltips: {
                callbacks: {
                    title: () => 'PASOS',
                },
            },
            scales: {
                xAxes: [
                    {
                        stacked: false,
                        ticks: { beginAtZero: true },
                    },
                ],
                yAxes: [
                    {
                        scaleLabel: { padding: 0 },
                        ticks: { minRotation: 90, padding: 0 },
                        stacked: false,
                    },
                ],
            },
        };
    }

    static get getExampleData(): ChartData {
        return {
            // labels: ['PASOS'],
            datasets: [
                {
                    label: 'PASOS META',
                    data: [12000],
                    backgroundColor: '#e65100',
                },
                {
                    label: 'PASOS REALIZADOS',
                    data: [3000],
                    backgroundColor: '#1a237e',
                },
            ],
        };
    }

    static getData(response: IReportResponse): ChartData {
        const { PasosMetas = 0, PasosRealizados = 0 } = response;
        return {
            datasets: [
                {
                    label: 'PASOS META',
                    data: [Number(PasosMetas)],
                    backgroundColor: '#e65100',
                },
                {
                    label: 'PASOS REALIZADOS',
                    data: [Number(PasosRealizados)],
                    backgroundColor: '#1a237e',
                },
            ],
        };
    }
}
