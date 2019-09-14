import React, { FC, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { Line } from 'react-chartjs-2';
import {
    Button,
    Card,
    CardBody,
    CardTitle,
    Row,
    Col,
    InputGroup,
    InputGroupAddon,
} from 'reactstrap';
import { LinearExample } from '../../../common/constants';
import DatePicker from 'react-datepicker';
import { isMobile, LineHelper, parseQuery } from '../../../common/helpers';
import { IApiResponse, IQuery } from '../../../common/types';
import Axios from 'axios';

interface IProps extends RouteComponentProps {
    children: React.ReactNode;
}

const baseUrl = 'https://api-upcbp.azurewebsites.net/api/Dashboard/GetDatosUsuarios';
const height = isMobile() ? 300 : undefined;
function renderDatePicker(date: any, setDate: (value: any) => void) {
    return (
        <InputGroup>
            <DatePicker
                className="date form-control"
                selected={date}
                dateFormat="dd/MM/yyyy"
                onChange={(value, e) => {
                    setDate(value!);
                    e!!.preventDefault();
                }}
            />
            <InputGroupAddon addonType="append">
                <Button
                    type="button"
                    color="primary"
                // onClick={() => this.filterProducts()}
                >
                    <i className="fa fa-search" />
                </Button>
            </InputGroupAddon>
        </InputGroup>
    );
}
const LinearDetail: FC<IProps> = props => {
    const [dateStart, setDateStart] = useState(new Date());
    const [dateEnd, setDateEnd] = useState(new Date());
    const [res, setRes] = useState<IApiResponse>({});
    let timeInterval: NodeJS.Timeout;
    const query = parseQuery(props.location.search) as IQuery;
    const { userId, type } = query;
    useEffect(() => {
        if (!query.userId) return props.history.push('/error/422');
        try {
            const foo = async () => {
                const res = await Axios.get<IApiResponse>(
                    `${baseUrl}?UsuarioID=${userId}&CodigoID=${type}`,
                );
                console.log(res.data);
                setRes(res.data);
            };
            foo();
            timeInterval = setInterval(foo, 2000);
        } catch (e) {
            console.log(e);
        }

        return () => clearInterval(timeInterval);
    }, []);

    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle className="mb-4">Line Chart Detail View</CardTitle>
                    <Row className="mt-2 mb-2" style={{ display: 'none' }}>
                        <Col md="6" className="mb-2">
                            {renderDatePicker(dateStart, setDateStart)}
                        </Col>
                        <Col md="6" className="mb-2">
                            {renderDatePicker(dateEnd, setDateEnd)}
                        </Col>
                    </Row>

                    <Line
                        height={height}
                        data={LineHelper.data(res)}
                        options={LineHelper.options}
                    />
                </CardBody>
            </Card>
            <hr />
            <Button onClick={() => props.history.push(`/line-report?userId=${userId}&type=${type}`)}>Reporte</Button>
        </div>
    );
};

export default LinearDetail;
