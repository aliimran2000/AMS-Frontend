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

import Image from "next/image";

import buttonstyles from '../styles/button.module.css'

import {useUser} from '../Utils/UserManagement.js'

const NavBar = (props) => {
  
  

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
      <Navbar color="faded" expand="md" fixed="top">

        <NavbarBrand href="/">
          
          <Image
            src="/../public/media/stock-exchange-app.png"
            height="50%"
            width="50%"
          />
          </NavbarBrand>

        <NavbarToggler onClick={toggle} />
        
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/Browse">
                <Button color="success" style={customStyles.buttonStyle} >Browse APIs</Button>
              </NavLink>
            </NavItem>

            {useUser() ? (
              <>
              <NavLink href="/account">
                <Button
                  outline
                  color="success"
                  className={buttonstyles.fancybutton}
                >

                  {useUser().name}

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
