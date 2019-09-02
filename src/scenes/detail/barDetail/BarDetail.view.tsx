import React, { FC, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { Bar } from 'react-chartjs-2';
import { Button, CardBody, Card, CardTitle } from 'reactstrap';
import { TimeLine } from '../../../common/constants';
import { isMobile } from '../../../common/helpers/detector';
import { IApiResponse } from '../../../common/types';
import axios from 'axios';

interface IProps extends RouteComponentProps {
    children: React.ReactNode;
}

const baseUrl = 'https://api-upcbp.azurewebsites.net/api/Dashboard/GetDatosUsuarios';
const { dataC, options } = TimeLine;
const height = isMobile() ? 200 : undefined;
const BarDetail: FC<IProps> = props => {
    const [res, setRes] = useState<IApiResponse>({});

    useEffect(() => {
        axios.get<IApiResponse>(`${baseUrl}?UsuarioID=3&CodigoID=1`, {
            headers: {
                "Access-Control-Allow-Origin": '*',

            }
        })
            .then(res => setRes(res.data))
            .catch(err => console.log(err))
    });

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
