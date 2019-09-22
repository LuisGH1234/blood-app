import React, { useEffect } from 'react';
import './MainView.scss';

interface IProps {
    title: string;
    children?: React.ReactNode;
}

export default function MainLayout(props: IProps) {
    useEffect(() => {
        document.title = props.title;
    });

    return (
        <div className="App">
            <div className="container">{props.children}</div>
        </div>
    );
}
