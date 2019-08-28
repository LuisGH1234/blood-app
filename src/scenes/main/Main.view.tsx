import React, { FC } from "react";
import "./Main.scss";
import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
import { Pie, Line, Bar } from "react-chartjs-2";
import { RouteComponentProps } from "react-router-dom";
import { TimeLine, LinearExample, PieExample } from '../../common/constants';
import { isMobile } from "../../common/helpers/detector";

interface IProps extends RouteComponentProps { }

function goToDetail(props: IProps, detail: number) {
    let route = '/';

    switch (detail) {
        case 1: route = '/pie-details'; break;
        case 2: route = '/linear-details'; break;
        case 3: route = '/bar-details'; break;
    }
    props.history.push(route);
}

const height = isMobile() ? 200 : undefined;
const App: FC<IProps> = props => {
    return (
        <>
            <Row>
                <Col md="12">
                    <Card inverse>
                        <CardBody>
                            <CardTitle>Pie Chart Overview</CardTitle>
                            <Pie height={height} data={PieExample.data} options={PieExample.options} />
                        </CardBody>
                        <Button onClick={() => goToDetail(props, 1)}>
                            Detalle
                        </Button>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <Card inverse>
                        <CardBody>
                            <CardTitle>Line Chart Overview</CardTitle>
                            <Line height={height} data={LinearExample.data} options={LinearExample.options} />
                        </CardBody>
                        <Button onClick={() => goToDetail(props, 2)}>
                            Detalle
                        </Button>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <Card inverse>
                        <CardBody>
                            <CardTitle>TimeLine Chart Overview</CardTitle>
                            <Bar height={height} data={TimeLine.dataC} options={TimeLine.options} />
                        </CardBody>
                        <Button onClick={() => goToDetail(props, 3)}>
                            Detalle
                        </Button>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default App;
