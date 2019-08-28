import React, { FC, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { Line } from 'react-chartjs-2';
import { Button, Card, CardBody, CardTitle, Row, Col, InputGroup, InputGroupAddon } from 'reactstrap';
import { LinearExample } from '../../../common/constants';
import DatePicker from 'react-datepicker';
import { isMobile } from '../../../common/helpers/detector';

interface IProps extends RouteComponentProps {
    children: React.ReactNode;
}

const { data, options } = LinearExample;
const height = isMobile() ? 300 : undefined;
const LinearDetail: FC<IProps> = props => {
    const [date, setDate] = useState(new Date());
    console.log(navigator.userAgent)
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle>Line Chart Detail View</CardTitle>
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

                    <Line height={height} data={data} options={options} />
                </CardBody>
            </Card>
            <hr />
            <Button onClick={() => props.history.push('/')}>Regresar</Button>
        </div>
    );
}

export default LinearDetail;
