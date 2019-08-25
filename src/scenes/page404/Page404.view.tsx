import React, { FC } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

interface IProps extends RouteComponentProps { }

const Page404: FC<IProps> = props => {
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>Oops!</h1>
                        <h2>404 Not Found</h2>
                        <div className="error-details">
                            Sorry, an error has occured, Requested page not found!
                        </div>
                        <div className="error-actions">
                            <Link to="/" className="btn btn-primary btn-lg">
                                <span className="glyphicon glyphicon-home"></span>
                                Take Me Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Page404;