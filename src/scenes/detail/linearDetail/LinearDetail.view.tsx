import React, { FC, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { Line } from 'react-chartjs-2';
import { Button, Card, CardBody, CardTitle, Row, Col, InputGroup, InputGroupAddon } from 'reactstrap';
import { LinearExample } from '../../../common/constants';
import DatePicker from 'react-datepicker';

interface IProps extends RouteComponentProps {
    children: React.ReactNode;
}
const RED = '#d50000';
const { data, options } = LinearExample;

function stPointerColors(data: any[]) {
    const pointBackgroundColor: string[] = [];
    data.forEach((x: any) => {
        if (x >= 140) pointBackgroundColor.push(RED);
        else pointBackgroundColor.push('#212121');
    });
    return pointBackgroundColor;
}

function dtPointerColors(data: any[]) {
    const pointBackgroundColor: string[] = [];
    data.forEach((x: any) => {
        if (x >= 90) pointBackgroundColor.push(RED);
        else pointBackgroundColor.push('#FFFFFF');
    });
    return pointBackgroundColor;
}

const LinearDetail: FC<IProps> = props => {
    const [date, setDate] = useState(new Date());
    data.datasets![0].pointBackgroundColor = dtPointerColors(data.datasets![0].data!);
    data.datasets![1].pointBackgroundColor = stPointerColors(data.datasets![1].data!);

    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle>Grafico de Lineas</CardTitle>
                    <Row className="mt-2 mb-2">
                        <Col md={{ size: 4, offset: 4 }}>
                            <InputGroup>
                                <DatePicker
                                    className="date form-control"
                                    selected={date}
                                    dateFormat="dd/MM/yyyy"
                                    onChange={value => setDate(value!)}
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
                        </Col>
                    </Row>

                    <Line data={data} options={options} />
                </CardBody>
            </Card>
            <hr />
            <Button onClick={() => props.history.push('/')}>Regresar</Button>
        </div>
    );
}

export default LinearDetail;
