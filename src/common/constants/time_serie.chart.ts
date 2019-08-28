import moment from 'moment';
import { ChartOptions, ChartData } from 'chart.js';

function randomNumber(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

function randomBar(date: moment.Moment, lastClose: number) {
    var open = randomNumber(lastClose * 0.95, lastClose * 1.05).toFixed(2);
    var close = randomNumber(Number(open) * 0.95, Number(open) * 1.05).toFixed(2);
    return {
        t: date.valueOf(),
        y: close
    };
}

var dateFormat = 'MMMM DD YYYY';
var date = moment('April 01 2017', dateFormat);
var data = [randomBar(date, 30)];
while (data.length < 60) {
    date = date.clone().add(1, 'd');
    if (date.isoWeekday() <= 5) {
        data.push(randomBar(date, Number(data[data.length - 1].y)));
    }
}

var dataC: ChartData = {
    // labels: [],
    datasets: [{
        label: 'CHRT - Chart.js Corporation',
        backgroundColor: 'red',
        borderColor: 'red',
        data: data,
        type: 'line',
        pointRadius: 0,
        fill: false,
        lineTension: 0,
        borderWidth: 2
    }]
};

const options: ChartOptions = {
    scales: {
        xAxes: [{
            type: 'time',
            distribution: 'series',
            ticks: {
                source: 'data',
                autoSkip: true
            }
        }],
        yAxes: [{
            scaleLabel: {
                display: false,
                labelString: 'Closing price ($)'
            }
        }]
    },
    tooltips: {
        intersect: false,
        mode: 'index',
        callbacks: {
            label: function (tooltipItem, myData) {
                var label = myData!!.datasets!![tooltipItem!!.datasetIndex!!].label || '';
                if (label) {
                    label += ': ';
                }
                label += parseFloat(tooltipItem!!.value!!).toFixed(2);
                return label;
            }
        }
    }
}

export default { options, dataC };