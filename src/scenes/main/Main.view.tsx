import React, { FC } from "react";
import "./Main.scss";
import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
import { Pie, Line, Bar } from "react-chartjs-2";
import { RouteComponentProps } from "react-router-dom";
import { BarExample, LinearExample, PieExample } from '../../common/constants';

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

const App: FC<IProps> = props => {
    return (
        <>
            <Row>
                <Col md="12">
                    <Card inverse>
                        <CardBody>
                            <CardTitle>Card title 1</CardTitle>
                            <Pie data={PieExample.data} options={PieExample.options} />
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
                            <CardTitle>Card title 2</CardTitle>
                            <Line data={LinearExample.data} options={LinearExample.options} />
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
                            <CardTitle>Card title 3</CardTitle>
                            <Bar data={BarExample.data} options={BarExample.options} />
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
