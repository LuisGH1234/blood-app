import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MainLayout } from '../common/components';
import { Page404, MainPage, PieDetail, BarDetail, LinearDetail, Page422, LineReport, LineDetailReport } from '../views';

const Routes: FC = () => {
    return (
        <BrowserRouter>
            <MainLayout title="BloodApp">
                <Switch>
                    {/* <Route exact path="/" component={MainPage} /> */}
                    <Route exact path="/" component={LineDetailReport} />
                    <Route exact path="/pie-details" component={PieDetail} />
                    {/* <Route exact path="/linear-details" component={LinearDetail} /> */}
                    <Route exact path="/bar-details" component={BarDetail} />

                    <Route exact path="/line-report" component={LineReport} />

                    <Route exact path="/error/422" component={Page422} />
                    <Route component={Page404} />
                </Switch>
            </MainLayout>
        </BrowserRouter>
    );
};

export default Routes;
