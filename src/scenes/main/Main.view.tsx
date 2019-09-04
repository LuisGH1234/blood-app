import React, { FC, useEffect, useState } from 'react';
import './Main.scss';
import { Row, Col, Card, CardBody, CardTitle, Button } from 'reactstrap';
import { Pie, Line, Bar } from 'react-chartjs-2';
import { RouteComponentProps } from 'react-router-dom';
import { PieExample } from '../../common/constants';
import { isMobile, TimeSerie, parseQuery, LineHelper } from '../../common/helpers';
import Axios from 'axios';
import { IApiResponse, IQuery } from '../../common/types';

interface IProps extends RouteComponentProps {}

function goToDetail(props: IProps, detail: number, query: IQuery) {
    let route = '/';
    const { userId, type } = query;
    switch (detail) {
        case 1:
            route = `/pie-details?userId=${userId}&type=${type}`;
            break;
        case 2:
            route = `/linear-details?userId=${userId}&type=${type}`;
            break;
        case 3:
            route = `/bar-details?userId=${userId}&type=${type}`;
            break;
    }
    props.history.push(route);
}

const baseUrl = 'https://api-upcbp.azurewebsites.net/api/Dashboard/GetDatosUsuarios';
const height = isMobile() ? 200 : undefined;
const App: FC<IProps> = props => {
    const [res, setRes] = useState<IApiResponse>({});
    let timeInterval: NodeJS.Timeout;
    const query = parseQuery(props.location.search) as IQuery;

    useEffect(() => {
        console.log('query:', query);
        const { type, userId } = query;
        if (!query.userId) return props.history.push('/error/422');
        try {
            timeInterval = setInterval(async () => {
                const res = await Axios.get<IApiResponse>(
                    `${baseUrl}?UsuarioID=${userId}&CodigoID=${type}`,
                );
                console.log(res.data);
                setRes(res.data);
            }, 2000);
        } catch (e) {
            console.log(e);
        }

        return () => {
            if (timeInterval) return clearInterval(timeInterval);
        };
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
                        <Button onClick={() => goToDetail(props, 1, query)}>Detalle</Button>
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
                                data={LineHelper.data(res)}
                                options={LineHelper.options}
                            />
                        </CardBody>
                        <Button onClick={() => goToDetail(props, 2, query)}>Detalle</Button>
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
                        <Button onClick={() => goToDetail(props, 3, query)}>Detalle</Button>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default App;
