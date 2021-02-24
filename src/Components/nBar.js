import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import NBarSocialLinks from "./nBarSocialLinks";
import NBarLinks from "./nBarLinks";
import {
  faHome,
  faInfo,
  faList,
  faShip,
  faThumbsUp,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import "../App.css";

/* THE NAVBAR IS NOT THE JUMBOTRON, THERE NEEDS TO BE A JUMBOTRON */
const NBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="NBar">
      <Navbar color="warning" sticky="top" light expand="md">
        <NavbarBrand className="mr-auto" href="/">
          <img
            src="assets/images/cruiseLogo.png"
            height="80"
            width="70"
            alt="NuCamp Logo"
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <NBarLinks />
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
        <NBarSocialLinks />
      </Navbar>
    </div>
  );
};

export default NBar;
