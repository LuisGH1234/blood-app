import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import './MainView.scss';

interface IProps {
    title: string;
    children?: React.ReactNode;
}

export default function MainLayout(props: IProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="head-navbar">
                <Navbar light expand="md">
                    <NavbarBrand href="/">{props.title}</NavbarBrand>
                    <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </header>
            <div className="App">
                {props.children}
            </div>
        </>
    );
}
