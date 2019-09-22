import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface IProps extends RouteComponentProps {}

const Page422: FC<IProps> = props => {
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>Oops!</h1>
                        <h2>422 Unprocessable Entity</h2>
                        <div className="error-details">Sorry, a query paremeter is missing!</div>
                        <hr />
                        <h4>Required query params</h4>
                        <div>
                            <strong>userId: string</strong>
                        </div>
                        <div>
                            <strong>type: string</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page422;
