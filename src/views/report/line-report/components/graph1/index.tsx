import React, { FC } from 'react';
import { Card, CardBody, Row, Col, Jumbotron, ListGroup, ListGroupItem } from 'reactstrap';
import { IReportResponse } from '../../../../../common/types';

interface IProps {
    data?: IReportResponse;
}

enum Score {
    debajoPeso,
    normal,
    sobrepeso,
    obesidad,
}

function weight(value?: string) {
    if (!value) return Score.normal;
    const wight = Number(value);
    if (wight < 18.50) return Score.debajoPeso;
    else if (wight >= 18.50 && wight < 25.00) return Score.normal;
    else if (wight >= 25.00 && wight < 30.00) return Score.sobrepeso;
    else if (wight >= 30.00) return Score.obesidad;
}

function scoreColor(value?: string) {
    switch (weight(value)) {
        case Score.debajoPeso: return '#311b92'
        case Score.normal: return '#00c853'
        case Score.sobrepeso: return '#ffc400'
        case Score.obesidad: return '#d50000'
        default: return '#00c853';
    }
}

function weightColor(score: Score, value?: string) {
    const w = weight(value);
    if (w === score) return scoreColor(value);
    return '#FFFFFF';
}

function fWeightColor(score: Score, value?: string) {
    const w = weight(value);
    if (w === score) return '#FFFFFF';
    return '#212121';
}

const Graph1: FC<IProps> = ({ data }) => {
    return (
        <Card>
            <CardBody>
                <Jumbotron>
                    <Row>
                        <Col md="6" style={{ color: '#212121' }}>
                            <ListGroup>
                                {/* <p style={{ margin: 0 }}>¡Felicitaciones!</p> */}
                                <p style={{ margin: 0 }}>Su IMC es</p>
                                <h1 className="display-3" style={{ color: scoreColor(data!!.IMC), fontSize: '3.5em' }}>
                                    <strong>{data!!.IMC}</strong>
                                </h1>
                                <p style={{ margin: 0 }}>{data!!.CriterioIMC}</p>
                            </ListGroup>
                        </Col>
                        <Col md="6" className="mt-4">
                            <ListGroup>
                                <ListGroupItem style={{ backgroundColor: weightColor(Score.debajoPeso, data!!.IMC), color: fWeightColor(Score.debajoPeso, data!!.IMC) }}>Por debajo del peso</ListGroupItem>
                                <ListGroupItem style={{ backgroundColor: weightColor(Score.normal, data!!.IMC), color: fWeightColor(Score.normal, data!!.IMC) }}>Peso normal</ListGroupItem>
                                <ListGroupItem style={{ backgroundColor: weightColor(Score.sobrepeso, data!!.IMC), color: fWeightColor(Score.sobrepeso, data!!.IMC) }}>Sobrepeso</ListGroupItem>
                                <ListGroupItem style={{ backgroundColor: weightColor(Score.obesidad, data!!.IMC), color: fWeightColor(Score.obesidad, data!!.IMC) }}>Obesidad</ListGroupItem>
                            </ListGroup>
                        </Col>
                        {/* <Col md="4" className="mt-4">
                            <ListGroup>
                                <ListGroupItem style={{ backgroundColor: '#7e57c2', color: '#FFFFFF' }}>{'18,5 KG/ALTURA²'}</ListGroupItem>
                                <ListGroupItem style={{ backgroundColor: '#69f0ae', color: '#FFFFFF' }}>{'18,5 - 24,9 KG/ALTURA²'}</ListGroupItem>
                                <ListGroupItem style={{ backgroundColor: '#ffb300', color: '#FFFFFF' }}>{'25,0 - 29,9 KG/ALTURA²'}</ListGroupItem>
                                <ListGroupItem style={{ backgroundColor: '#ff8a80', color: '#FFFFFF' }}>{'30,0 KG/ALTURA²'}</ListGroupItem>
                            </ListGroup>
                        </Col> */}
                    </Row>
                </Jumbotron>
            </CardBody>
        </Card>
    );
}

export default Graph1;
