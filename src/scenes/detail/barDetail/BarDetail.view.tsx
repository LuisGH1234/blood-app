import React, { FC, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { Bar } from 'react-chartjs-2';
import { Button, CardBody, Card, CardTitle } from 'reactstrap';
import { isMobile } from '../../../common/helpers/detector';
import { IApiResponse, IQuery } from '../../../common/types';
import { TimeSerie, parseQuery } from '../../../common/helpers';
import Axios from 'axios';

interface IProps extends RouteComponentProps {
    children: React.ReactNode;
}

// tipo 2
const baseUrl = 'https://api-upcbp.azurewebsites.net/api/Dashboard/GetDatosUsuarios';
const height = isMobile() ? 200 : undefined;
const BarDetail: FC<IProps> = props => {
    const [res, setRes] = useState<IApiResponse>({});
    let timeInterval: NodeJS.Timeout;
    const query = parseQuery(props.location.search) as IQuery;

    useEffect(() => {
        const { userId, type } = query;
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

        return () => clearInterval(timeInterval);
    }, []);

    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle>TimeLine Chart Detail View</CardTitle>
                    <Bar height={height} data={TimeSerie.data(res)} options={TimeSerie.options} />
                </CardBody>
            </Card>
            <hr />
            <Button onClick={() => props.history.goBack()}>Regresar</Button>
        </div>
    );
};

export default BarDetail;
