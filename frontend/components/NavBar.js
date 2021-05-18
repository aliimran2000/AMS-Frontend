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

import buttonstyles from '../styles/button.module.css'

import { useUser } from "../contexts/UserContext";

const NavBar = (props) => {
  const UserTools = useUser();

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const customStyles = {
    buttonStyle: {
      borderRadius: "25px",
      fontFamily : `'Roboto', sans-serif`
    },

    popopbutton :{
      borderRadius: "25px",
      boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
    }
    
  };

  return (
    <div>
      <Navbar color="faded" expand="md">
        <NavbarBrand href="/">AMS</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/Browse">
                <Button color="success" style={customStyles.buttonStyle} >Browse APIs</Button>
              </NavLink>
            </NavItem>

            {!!UserTools.Con ? (
              <>
              <NavLink href="/Profile">
                <Button
                  outline
                  color="success"
                  className={buttonstyles.fancybutton}
                >

                  {UserTools.Con.name}
                </Button>
              </NavLink>
              
              <NavLink href="/Dashboard">
                
              <Button className={buttonstyles.fancybutton} >
                  Dashboard
                </Button>
              </NavLink>

              </>

            ) : (
              <>
                <NavItem>
                  <NavLink href="/Login">
                    <Button
                      className={buttonstyles.fancybutton}
                    >
                      Login
                    </Button>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="/Register">
                    <Button
                      className={buttonstyles.fancybutton}
                    >
                      Signup
                    </Button>
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
