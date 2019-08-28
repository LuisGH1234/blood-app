import React, { FC, useState } from 'react';
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
import { isMobile } from '../../../common/helpers/detector';

interface IProps extends RouteComponentProps {
    children: React.ReactNode;
}

const { data, options } = LinearExample;
const height = isMobile() ? 300 : undefined;
function renderDatePicker(date: any, setDate: (value: any) => void) {
    return (
        <InputGroup>
            <DatePicker
                className="date form-control"
                selected={date}
                // readOnly
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

    console.log(navigator.userAgent);
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle>Line Chart Detail View</CardTitle>
                    <Row className="mt-2 mb-2">
                        <Col md="6" className="mb-2">
                            {renderDatePicker(dateStart, setDateStart)}
                        </Col>
                        <Col md="6" className="mb-2">
                            {renderDatePicker(dateEnd, setDateEnd)}
                        </Col>
                    </Row>

                    <Line height={height} data={data} options={options} />
                </CardBody>
            </Card>
            <hr />
            <Button onClick={() => props.history.push('/')}>Regresar</Button>
        </div>
    );
};

export default LinearDetail;
