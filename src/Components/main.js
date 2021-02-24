import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import AboutUs from "./aboutUs";
import Footer from "./footer";
import HomeComp from "./homeComp";
import NBar from "./nBar";
import Itinerary from "./itinerary";
import Testimonials from "./testimonials";
import ContactEmpty from "./contact";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import NVarBread from "./nBarBread";
import NBarLinks from "./nBarLinks";
import NBarSocialLinks from "./nBarSocialLinks";
import Ship from "./ship";
import { Switch, Route, Redirect } from "react-router-dom";
import Row from "reactstrap/lib/Row";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {" "}
        <NBar />
        <TransitionGroup>
          <CSSTransition
            key="this.props.location.key"
            classNames="page"
            timeout={300}
          >
            <Switch>
              <Route path="/home" component={HomeComp} />
              <Route path="/aboutus" component={AboutUs} />
              <Route path="/ship" component={Ship} />
              <Route path="/itinerary" component={Itinerary} />
              <Route path="/testimonials" component={Testimonials} />
              <Route path="/contact" component={ContactEmpty} />
              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}
export default Main;
