import React, { FC } from 'react';
import { Card, CardBody } from 'reactstrap';
import { HorizontalBar } from 'react-chartjs-2';
import { IReportResponse } from '../../../../../common/types';
import { StepsHelper, isMobile } from '../../../../../common/helpers';

interface IProps {
    data?: IReportResponse;
}

const height = isMobile() ? 250 : undefined;
const Graph1: FC<IProps> = ({ data = {} }) => {
    return (
        <Card>
            <CardBody style={{ color: '#0097A7' }}>
                <HorizontalBar
                    height={height}
                    data={StepsHelper.getData(data)}
                    options={StepsHelper.options}
                />
            </CardBody>
        </Card>
    );
};

export default Graph1;

// const data = {
//     labels: ['PASOS QUE RECORRER (8000)', 'PASOS RECORRIDOS (2000)'],
//     datasets: [
//         {
//             data: [300, 50],
//             backgroundColor: ['#FF6384', '#36A2EB'],
//             hoverBackgroundColor: ['#FF6384', '#36A2EB'],
//         },
//     ],
// };
