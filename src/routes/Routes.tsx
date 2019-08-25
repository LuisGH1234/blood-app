import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MainLayout } from '../common/components';
import { Page404, MainPage, PieDetail, BarDetail, LinearDetail } from '../scenes';

const Routes: FC = () => {
    return (
        <BrowserRouter>
            <MainLayout title="BloodApp">
                <Switch>
                    <Route exact path="/" component={MainPage} />

                    <Route exact path="/pie-details" component={PieDetail} />
                    <Route exact path="/linear-details" component={LinearDetail} />
                    <Route exact path="/bar-details" component={BarDetail} />

                    <Route component={Page404} />
                </Switch>
            </MainLayout>
        </BrowserRouter>
    );
}

export default Routes;