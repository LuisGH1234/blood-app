import { IApiResponse } from '../types';
import { ChartPoint, ChartData, ChartOptions } from 'chart.js';
import moment from 'moment';

export default class TimeSerie {
    public static options: ChartOptions = {
        scales: {
            xAxes: [
                {
                    type: 'time',
                    distribution: 'series',
                    ticks: {
                        source: 'data',
                        autoSkip: true,
                    },
                    time: {
                        parser: 'HH:mm:ss',
                        tooltipFormat: 'll HH:mm',
                        unit: 'hour',
                        unitStepSize: 1,
                        displayFormats: {
                            hour: 'HH:mm:ss',
                        },
                    },
                },
            ],
            yAxes: [
                {
                    scaleLabel: {
                        display: false,
                        labelString: 'Closing price ($)',
                    },
                },
            ],
        },
        tooltips: {
            intersect: false,
            mode: 'index',
            callbacks: {
                label: function(tooltipItem, myData) {
                    var label = myData!!.datasets!![tooltipItem!!.datasetIndex!!].label || '';
                    if (label) {
                        label += ': ';
                    }
                    label += parseFloat(tooltipItem!!.value!!).toFixed(2);
                    return label;
                },
            },
        },
    };

    private static divideFromStr(value: string) {
        const values = value.trim().split('/');
        return Number(values[0]) / Number(values[1]);
    }

    private static getData(res: IApiResponse = {}): ChartPoint[] {
        const { Data = [] } = res;
        return Data.map((x, i, d) => {
            const { DomainObject: dm } = x;
            const y = i === 0 ? dm!!.Valor : d[i - 1].DomainObject!!.Valor;
            return {
                t: moment(dm!!.FechaRegistro, 'hh:mm:ss').valueOf(),
                y: TimeSerie.divideFromStr(y!!),
            };
        });
    }

    public static data(res: IApiResponse): ChartData {
        return {
            // labels: [],
            datasets: [
                {
                    label: 'Ritmo cardiaco',
                    backgroundColor: 'red',
                    borderColor: 'red',
                    data: TimeSerie.getData(res),
                    type: 'line',
                    pointRadius: 0,
                    fill: false,
                    lineTension: 0,
                    borderWidth: 2,
                },
            ],
        };
    }
}
