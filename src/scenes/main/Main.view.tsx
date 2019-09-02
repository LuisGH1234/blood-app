import React, { FC, useEffect, useState } from 'react';
import './Main.scss';
import { Row, Col, Card, CardBody, CardTitle, Button } from 'reactstrap';
import { Pie, Line, Bar } from 'react-chartjs-2';
import { RouteComponentProps } from 'react-router-dom';
import { LinearExample, PieExample } from '../../common/constants';
import { isMobile } from '../../common/helpers/detector';
import Axios from 'axios';
import { IApiResponse } from '../../common/types';
import { TimeSerie } from '../../common/helpers';

interface IProps extends RouteComponentProps {}

function goToDetail(props: IProps, detail: number) {
    let route = '/';

    switch (detail) {
        case 1:
            route = '/pie-details';
            break;
        case 2:
            route = '/linear-details';
            break;
        case 3:
            route = '/bar-details';
            break;
    }
    props.history.push(route);
}

const baseUrl = 'https://api-upcbp.azurewebsites.net/api/Dashboard/GetDatosUsuarios';
const height = isMobile() ? 200 : undefined;
const App: FC<IProps> = props => {
    const [res, setRes] = useState<IApiResponse>({});
    let timeInterval: NodeJS.Timeout;

    useEffect(() => {
        try {
            timeInterval = setInterval(async () => {
                const res = await Axios.get<IApiResponse>(`${baseUrl}?UsuarioID=3&CodigoID=1`);
                console.log(res.data);
                setRes(res.data);
            }, 5000);
        } catch (e) {
            console.log(e);
        }

        return () => clearInterval(timeInterval);
    }, []);

    return (
        <>
            <Row>
                <Col md="12">
                    <Card inverse>
                        <CardBody>
                            <CardTitle>Pie Chart Overview</CardTitle>
                            <Pie
                                height={height}
                                data={PieExample.data}
                                options={PieExample.options}
                            />
                        </CardBody>
                        <Button onClick={() => goToDetail(props, 1)}>Detalle</Button>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <Card inverse>
                        <CardBody>
                            <CardTitle>Line Chart Overview</CardTitle>
                            <Line
                                height={height}
                                data={LinearExample.data}
                                options={LinearExample.options}
                            />
                        </CardBody>
                        <Button onClick={() => goToDetail(props, 2)}>Detalle</Button>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <Card inverse>
                        <CardBody>
                            <CardTitle>TimeLine Chart Overview</CardTitle>
                            <Bar
                                height={height}
                                data={TimeSerie.data(res)}
                                options={TimeSerie.options}
                            />
                        </CardBody>
                        <Button onClick={() => goToDetail(props, 3)}>Detalle</Button>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default App;
