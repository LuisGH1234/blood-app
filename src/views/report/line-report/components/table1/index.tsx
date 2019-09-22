import React, { FC } from 'react';
import { Table, Card } from 'reactstrap';
import { IReportResponse } from '../../../../../common/types';

interface IProps {
    data?: IReportResponse;
}

enum Clasify {
    optima,
    normal,
    normalAlta,
    hGrado1,
    hGrado2,
    hGrado3,
}

function clasify(value?: string) {
    if (!value) return '#FFFF';
    if (value === 'Normal Alta') return Clasify.normalAlta;
    else if (value === 'Normal') return Clasify.normal;
    else if (value == 'Óptima') return Clasify.optima;
    else if (value == 'Etapa 1') return Clasify.hGrado1;
    else if (value == 'Etapa 2') return Clasify.hGrado2;
    else if (value == 'Etapa 3') return Clasify.hGrado3;
}

function backColor(clasi: Clasify, value?: string) {
    const clas = clasify(value);
    if (clas === clasi) return '#00bfa5';
    return '#FFFF';
}

const Table1: FC<IProps> = ({ data = {} }) => {
    return (
        <Card>
            <div
                style={{
                    height: '40px',
                    fontSize: '100%',
                    backgroundColor: '#3f51b5',
                    color: '#FFFF',
                }}
            >
                <label style={{ marginTop: '8px' }}>Clasificación de la presión arterial</label>
            </div>
            <Table responsive>
                <thead>
                    <tr style={{ backgroundColor: '#e8eaf6' }}>
                        <th>Clasificación</th>
                        <th>Sistólica(mmHg)</th>
                        <th>Diastólica(mmHg)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Óptima</td>
                        <td
                            style={{
                                backgroundColor: backColor(
                                    Clasify.optima,
                                    data!!.ClasificacionSistolica,
                                ),
                            }}
                        >
                            {'< 120'}
                        </td>
                        <td
                            style={{
                                backgroundColor: backColor(
                                    Clasify.optima,
                                    data!!.ClasificacionDiastolica,
                                ),
                            }}
                        >
                            {'< 80'}
                        </td>
                    </tr>
                    <tr>
                        <td>Normal</td>
                        <td
                            style={{
                                backgroundColor: backColor(
                                    Clasify.normal,
                                    data!!.ClasificacionSistolica,
                                ),
                            }}
                        >
                            120-129
                        </td>
                        <td
                            style={{
                                backgroundColor: backColor(
                                    Clasify.normal,
                                    data!!.ClasificacionDiastolica,
                                ),
                            }}
                        >
                            80-84
                        </td>
                    </tr>
                    <tr>
                        <td>Normal Alta</td>
                        <td
                            style={{
                                backgroundColor: backColor(
                                    Clasify.normalAlta,
                                    data!!.ClasificacionSistolica,
                                ),
                            }}
                        >
                            130-139
                        </td>
                        <td
                            style={{
                                backgroundColor: backColor(
                                    Clasify.normalAlta,
                                    data!!.ClasificacionDiastolica,
                                ),
                            }}
                        >
                            85-89
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={3} style={{ fontWeight: 'bold', backgroundColor: '#e8eaf6' }}>
                            Hipertensión
                        </td>
                    </tr>
                    <tr>
                        <td>Etapa 1</td>
                        <td
                            style={{
                                backgroundColor: backColor(
                                    Clasify.hGrado1,
                                    data!!.ClasificacionSistolica,
                                ),
                            }}
                        >
                            140-159
                        </td>
                        <td
                            style={{
                                backgroundColor: backColor(
                                    Clasify.hGrado1,
                                    data!!.ClasificacionDiastolica,
                                ),
                            }}
                        >
                            90-99
                        </td>
                    </tr>
                    <tr>
                        <td>Etapa 2</td>
                        <td
                            style={{
                                backgroundColor: backColor(
                                    Clasify.hGrado2,
                                    data!!.ClasificacionSistolica,
                                ),
                            }}
                        >
                            160-179
                        </td>
                        <td
                            style={{
                                backgroundColor: backColor(
                                    Clasify.hGrado2,
                                    data!!.ClasificacionDiastolica,
                                ),
                            }}
                        >
                            100-109
                        </td>
                    </tr>
                    <tr>
                        <td>Etapa 3</td>
                        <td
                            style={{
                                backgroundColor: backColor(
                                    Clasify.hGrado3,
                                    data!!.ClasificacionSistolica,
                                ),
                            }}
                        >
                            {'>= 180'}
                        </td>
                        <td
                            style={{
                                backgroundColor: backColor(
                                    Clasify.hGrado3,
                                    data!!.ClasificacionDiastolica,
                                ),
                            }}
                        >
                            {'>= 110'}
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Card>
    );
};

export default Table1;
