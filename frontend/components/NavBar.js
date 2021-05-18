import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const customStyles = {
    buttonStyle : {
      "borderRadius": "25px"
    }
  }

  return (
    <div>
      <Navbar color="faded" expand="md" >
        <NavbarBrand href="/">AMS</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/Browse"><Button color="link">Browse APIs</Button></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Login"><Button outline color="success" style={customStyles.buttonStyle}>Login</Button></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Register"><Button outline color="success" style={customStyles.buttonStyle}>Signup</Button></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
