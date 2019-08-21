import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./MainView.scss";

interface IProps {
  title: string;
  children?: React.ReactNode;
}

export default function MainLayout(props: IProps) {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="head-navbar">
        <Navbar light expand="md">
          <NavbarBrand href="/">{props.title}</NavbarBrand>
        </Navbar>
      </header>
      <div className="App">{props.children}</div>
    </>
  );
}
