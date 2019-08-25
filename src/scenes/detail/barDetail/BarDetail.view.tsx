import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router';
import { Bar } from 'react-chartjs-2';
import { Button } from 'reactstrap';
import { BarExample } from '../../../common/constants';

interface IProps extends RouteComponentProps {
    children: React.ReactNode;
}

const { data, options } = BarExample;
const BarDetail: FC<IProps> = props => {
    return (
        <div>
            <Bar data={data} options={options} />
            <hr />
            <Button onClick={() => props.history.push('/')}>Regresar</Button>
        </div>
    );
}

export default BarDetail;
