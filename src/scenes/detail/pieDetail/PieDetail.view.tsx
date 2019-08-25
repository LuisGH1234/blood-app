import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router';
import { Pie } from 'react-chartjs-2';
import { Button } from 'reactstrap';
import { PieExample } from '../../../common/constants';

interface IProps extends RouteComponentProps {
    children: React.ReactNode;
}

const { data, options } = PieExample;
const PieDetail: FC<IProps> = props => {
    return (
        <div>
            <Pie data={data} options={options} />
            <hr />
            <Button onClick={() => props.history.push('/')}>Regresar</Button>
        </div>
    );
}

export default PieDetail;
