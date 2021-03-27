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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* THE NAVBAR IS NOT THE JUMBOTRON, THERE NEEDS TO BE A JUMBOTRON */
const NBar = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleNavbar = () => setCollapsed(!collapsed);

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
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <div className="collapse navbar-collapse" id="tomatoNavbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/home">
                    <i>
                      <FontAwesomeIcon icon={faHome} />
                    </i>
                    {"Home"}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/aboutus">
                    <i>
                      <FontAwesomeIcon icon={faInfo} />
                    </i>
                    {"About"}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/ship">
                    <i>
                      <FontAwesomeIcon icon={faShip} />
                    </i>
                    {"Ship"}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/itinerary">
                    <i>
                      <FontAwesomeIcon icon={faList} />
                    </i>
                    {"Itinerary"}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/testimonials">
                    <i>
                      <FontAwesomeIcon icon={faThumbsUp} />
                    </i>
                    {"Testimonials"}
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/contact">
                    <i>
                      <FontAwesomeIcon icon={faAddressCard} />
                    </i>
                    {"Contact"}
                  </a>
                </li>
              </ul>
            </div>
          </Nav>
        </Collapse>
        <NBarSocialLinks />
      </Navbar>
    </div>
  );
};

export default NBar;

/*          <Nav className="mr-auto" navbar>
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
          <NavbarText>Simple Text</NavbarText> */
