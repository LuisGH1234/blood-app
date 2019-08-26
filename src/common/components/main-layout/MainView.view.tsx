import React, { useEffect } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./MainView.scss";

interface IProps {
    title: string;
    children?: React.ReactNode;
}

export default function MainLayout(props: IProps) {

    useEffect(() => { document.title = props.title });

    return (
        <div className="App">
            {/* <header className="head-navbar">
                <Navbar light expand="md">
                    <NavbarBrand href="/">{props.title}</NavbarBrand>
                </Navbar>
            </header> */}
            <div className="container">
                {props.children}
            </div>
        </div>
    );
}
