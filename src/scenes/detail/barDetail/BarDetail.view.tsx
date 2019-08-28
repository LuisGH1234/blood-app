import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router';
import { Bar } from 'react-chartjs-2';
import { Button, CardBody, Card, CardTitle } from 'reactstrap';
import { TimeLine } from '../../../common/constants';
import { isMobile } from '../../../common/helpers/detector';

interface IProps extends RouteComponentProps {
    children: React.ReactNode;
}

const { dataC, options } = TimeLine;
const height = isMobile() ? 200 : undefined;
const BarDetail: FC<IProps> = props => {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle>TimeLine Chart Detail View</CardTitle>
                    <Bar height={height} data={dataC} options={options} />
                </CardBody>
            </Card>
            <hr />
            <Button onClick={() => props.history.push('/')}>Regresar</Button>
        </div>
    );
}

export default BarDetail;
