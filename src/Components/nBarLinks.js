import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faFacebookSquare,
  faTwitterSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faInfo,
  faList,
  faShip,
  faThumbsUp,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import "../App.css";

class NBarLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  /* THIS DOES NOT ACTUALLY GO IN THE NAV BAR */
  render() {
    return (
      <div className="NBarLinks container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#tomatoNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
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
      </div>
    );
  }
}

export default NBarLinks;
