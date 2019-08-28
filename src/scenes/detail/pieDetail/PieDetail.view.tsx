import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router';
import { Pie } from 'react-chartjs-2';
import { Button, Card, CardBody, CardTitle } from 'reactstrap';
import { PieExample } from '../../../common/constants';
import { isMobile } from '../../../common/helpers/detector';

interface IProps extends RouteComponentProps {
    children: React.ReactNode;
}

const { data, options } = PieExample;
const height = isMobile() ? 200 : undefined;
const PieDetail: FC<IProps> = props => {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle>Pie Chart Detail View</CardTitle>
                    <Pie height={height} data={data} options={options} />
                </CardBody>
            </Card>
            <hr />
            <Button onClick={() => props.history.push('/')}>Regresar</Button>
        </div>
    );
}

export default PieDetail;
