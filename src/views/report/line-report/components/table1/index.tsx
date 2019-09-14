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
}

function clasify(value?: string) {
    if (!value) return '#FFFF';
    if (value === "Normal Alta") return Clasify.normalAlta;
    else if (value === "Normal") return Clasify.normal;
    else if (value == "Óptima") return Clasify.optima;
}

function backColor(clasi: Clasify, value?: string) {
    const clas = clasify(value);
    if (clas === clasi) return '#00bfa5';
    return '#FFFF';
}

const Table1: FC<IProps> = ({ data = {} }) => {
    return (
        <Card>
            <div style={{ height: '40px', fontSize: '100%', backgroundColor: '#3f51b5', color: '#FFFF' }}>
                <label style={{ marginTop: '8px' }}>Clasificación de la presión arterial</label>
            </div>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Clasificación</th>
                        <th>Sistólica(mmHg)</th>
                        <th>Diastólica(mmHg)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Óptima</td>
                        <td style={{ backgroundColor: backColor(Clasify.optima, data!!.ClasificacionSistolica) }}>{'< 120'}</td>
                        <td style={{ backgroundColor: backColor(Clasify.optima, data!!.ClasificacionDiastolica) }}>{'< 80'}</td>
                    </tr>
                    <tr>
                        <td>Normal</td>
                        <td style={{ backgroundColor: backColor(Clasify.normal, data!!.ClasificacionSistolica) }}>120-129</td>
                        <td style={{ backgroundColor: backColor(Clasify.normal, data!!.ClasificacionDiastolica) }}>80-84</td>
                    </tr>
                    <tr>
                        <td>Normal Alta</td>
                        <td style={{ backgroundColor: backColor(Clasify.normalAlta, data!!.ClasificacionSistolica) }}>130-139</td>
                        <td style={{ backgroundColor: backColor(Clasify.normalAlta, data!!.ClasificacionDiastolica) }}>85-89</td>
                    </tr>
                </tbody>
            </Table>
        </Card>
    );
}

export default Table1;
