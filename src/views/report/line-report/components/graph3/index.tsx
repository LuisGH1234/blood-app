import React, { FC } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Card,
    CardBody,
    CardSubtitle,

} from 'reactstrap';
import { LinearExample } from '../../../../../common/constants';
import { isMobile, LineHelper } from '../../../../../common/helpers';
import { IReportResponse } from '../../../../../common/types';

interface IProps {
    data?: IReportResponse;
}

const height = isMobile() ? 300 : undefined;
const Graph3: FC<IProps> = ({ data = {} }) => {
    let lineData: Chart.ChartData;
    let lineOptions: Chart.ChartOptions;
    const notPressured = !data.Presiones || data.Presiones.length === 0;
    if (notPressured) {
        lineData = LinearExample.data;
        lineOptions = LinearExample.options;
    } else {
        lineData = LineHelper.data2(data);
        lineOptions = LineHelper.options;
    }

    return (
        <Card>
            <CardBody>
                {notPressured && <CardSubtitle style={{ color: '#d32f2f' }}>
                    "Estos datos son de prueba"
                </CardSubtitle>}
                <Line
                    height={height}
                    data={lineData!!}
                    options={lineOptions!!}
                />
            </CardBody>
        </Card>
    );
};

export default Graph3;
