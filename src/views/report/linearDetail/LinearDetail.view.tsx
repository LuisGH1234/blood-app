import React, { FC, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { Line } from 'react-chartjs-2';
import { Button, Card, CardBody, Spinner } from 'reactstrap';
import { LinearExample } from '../../../common/constants';
// import DatePicker from 'react-datepicker';
import { isMobile, LineHelper, parseQuery } from '../../../common/helpers';
import { IQuery, IReportResponse } from '../../../common/types';
import Axios from 'axios';

interface IProps extends RouteComponentProps {
    children: React.ReactNode;
}

const baseUrl = 'https://api-upcbp.azurewebsites.net/api/Dashboard/GetReporteUsuarioById';
const height = isMobile() ? 300 : undefined;
const LinearDetail: FC<IProps> = props => {
    // const [res, setRes] = useState<IReportResponse>({});
    const [loading, setLoading] = useState(true);
    let timeInterval: NodeJS.Timeout;
    const query = parseQuery(props.location.search) as IQuery;
    const { userId, type } = query;
    let [lineData, setLineData] = useState({});

    useEffect(() => {
        console.log('query:', query);
        if (!query.userId) return props.history.push('/error/422');
        try {
            const foo = async () => {
                const { data } = await Axios.get<IReportResponse>(`${baseUrl}?UsuarioID=${userId}`);
                const notPressured = !data.Presiones || data.Presiones.length === 0;
                console.log(notPressured);
                if (notPressured) {
                    setLineData(LinearExample.data);
                } else setLineData(LineHelper.data2(data));
                setLoading(false);
                console.log(data);
            };
            foo();
            timeInterval = setInterval(foo, 2000);
        } catch (e) {
            console.log(e);
        }

        return () => {
            if (timeInterval) return clearInterval(timeInterval);
        };
    }, []);

    return (
        <>
            <div>
                <Spinner
                    color="primary"
                    style={{
                        position: 'absolute',
                        left: 'calc(50% - 25px)',
                        top: 'calc(50% - 25px)',
                        display: loading ? 'unset' : 'none',
                    }}
                />
            </div>
            <div style={{ marginTop: '20px', display: loading ? 'none' : 'unset' }}>
                <Card>
                    <CardBody>
                        {/* <CardTitle className="mb-4">Line Chart Detail View</CardTitle> */}
                        <Line height={height} data={lineData} options={LineHelper.options} />
                    </CardBody>
                </Card>
                <hr />
                <Button
                    onClick={() => props.history.push(`/line-report?userId=${userId}&type=${type}`)}
                >
                    Reporte
                </Button>
            </div>
        </>
    );
};

export default LinearDetail;
