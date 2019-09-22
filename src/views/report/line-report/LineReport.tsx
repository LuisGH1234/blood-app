import React, { FC, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { Jumbotron, Button, Spinner } from 'reactstrap';
import { parseQuery } from '../../../common/helpers';
import { IReportResponse, IQuery } from '../../../common/types';
import Axios from 'axios';
import { toast } from 'react-toastify';
import { Graph1, Graph2, Graph3, Table1 } from './components';

interface IProps extends RouteComponentProps {
    children: React.ReactNode;
}

const baseUrl = 'https://api-upcbp.azurewebsites.net/api/Dashboard/GetReporteUsuarioById';
const LinearDetail: FC<IProps> = props => {
    const [data, setData] = useState<IReportResponse>({});
    const [loading, setLoading] = useState(true);
    const query = parseQuery(props.location.search) as IQuery;
    const { type, userId } = query;

    useEffect(() => {
        if (!query.userId) return props.history.push('/error/422');
        const foo = async () => {
            try {
                const res = await Axios.get<IReportResponse>(
                    `${baseUrl}?UsuarioID=${userId}&CodigoID=${type}`,
                );
                if (res.status == 500) toast.error('Ocurrio un error con el servidor');
                console.log(res.data);
                setData(res.data);
            } catch (ex) {
                console.error(ex);
                toast.error('Ocurrio un error con el servidor');
            }
            setLoading(false);
        };
        foo();
    }, []);

    return (
        <>
            <div>
                <Spinner
                    color="primary"
                    style={{
                        position: 'absolute',
                        left: 'calc(50% - 15px)',
                        top: 'calc(50% - 15px)',
                        display: loading ? 'unset' : 'none',
                    }}
                />
            </div>
            <div style={{ display: loading ? 'none' : 'unset' }}>
                <h1 style={{ marginTop: '20px' }}>REPORTE DE SALUD EDUCATIVA</h1>
                <hr />
                <div>
                    <label>
                        <strong>USUARIO: {data!!.NombreCompleto}</strong>
                    </label>
                    <br />
                    <label>
                        <strong>EDAD: {data!!.Edad} años</strong>
                    </label>
                    <br />
                    <label>
                        <strong>FECHA: {data!!.Fecha}</strong>
                    </label>
                    <br />
                    <label>
                        <strong>
                            PESO: {data!!.Peso} - ALTURA: {data!!.Altura} CM
                        </strong>
                    </label>
                </div>

                <Graph1 data={data} />
                <Graph3 data={data} />
                <Graph2 data={data} />
                <Table1 data={data} />
                {/* <Table2 data={data} /> */}
                <Jumbotron className="mt-4" style={{ marginLeft: '8px', marginRight: '8px' }}>
                    <h3>SU SCORE:</h3>
                    <h3 style={{ color: '#d50000' }}>{data!!.ResultadoScore}</h3>
                </Jumbotron>
                <div style={{ height: '30px' }}></div>
                <Button
                    style={{ position: 'fixed', bottom: '16px', right: '23px' }}
                    onClick={() => props.history.push(`/?userId=${userId}&type=${type}`)}
                >
                    Regresar
                </Button>
            </div>
        </>
    );
};

export default LinearDetail;
