import React, { FC, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { Bar } from 'react-chartjs-2';
import { Button, CardBody, Card, CardTitle } from 'reactstrap';
import { isMobile } from '../../../common/helpers/detector';
import { IApiResponse } from '../../../common/types';
import { TimeSerie } from '../../../common/helpers';
import Axios from 'axios';

interface IProps extends RouteComponentProps {
    children: React.ReactNode;
}

const baseUrl = 'https://api-upcbp.azurewebsites.net/api/Dashboard/GetDatosUsuarios';
const height = isMobile() ? 200 : undefined;
const BarDetail: FC<IProps> = props => {
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
        <div>
            <Card>
                <CardBody>
                    <CardTitle>TimeLine Chart Detail View</CardTitle>
                    <Bar height={height} data={TimeSerie.data(res)} options={TimeSerie.options} />
                </CardBody>
            </Card>
            <hr />
            <Button onClick={() => props.history.push('/')}>Regresar</Button>
        </div>
    );
};

export default BarDetail;
