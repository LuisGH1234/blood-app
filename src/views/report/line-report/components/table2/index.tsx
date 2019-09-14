import React, { FC } from 'react';
import { Table, Card } from 'reactstrap';
import { IReportResponse } from '../../../../../common/types';

interface IProps {
    data?: IReportResponse;
}

const Table1: FC<IProps> = (props) => {
    return (
        <Card>
            <Table responsive>
                <thead>
                    <tr>
                        <th></th>
                        <th>Enfermedad Cardiovascular grave</th>
                        <th>Enfermedad CV mortal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Bajo</th>
                        <td>{'< 15%'}</td>
                        <td>{'< 4%'}</td>
                    </tr>
                    <tr>
                        <th scope="row">Moderado</th>
                        <td>15-20%</td>
                        <td>4-5%</td>
                    </tr>
                    <tr>
                        <th scope="row">Alto</th>
                        <td>20-30%</td>
                        <td>5-8%</td>
                    </tr>
                    <tr>
                        <th scope="row">Muy Alto</th>
                        <td>{'> 30%'}</td>
                        <td>{'> 8%'}</td>
                    </tr>
                </tbody>
            </Table>
        </Card>
    );
}

export default Table1;
