import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faFacebookSquare,
  faTwitterSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import "../App.css";

class NBarSocialLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  /* THIS NEEDS TO BE A BUTTON GROUP */
  render() {
    return (
      <div className="NBarSocialLinks text-center">
        <h5>Social</h5>
        <a className="btn" href="http://instagram.com/">
          <i>
            <FontAwesomeIcon icon={faInstagramSquare} />
          </i>
        </a>
        <a className="btn" href="http://facebook.com/">
          <i>
            <FontAwesomeIcon icon={faFacebookSquare} />
          </i>
        </a>
        <a className="btn" href="http://twitter.com/">
          <i>
            <FontAwesomeIcon icon={faTwitterSquare} />
          </i>
        </a>
        <a className="btn" href="http://youtube.com/">
          <i>
            <FontAwesomeIcon icon={faYoutubeSquare} />
          </i>
        </a>
      </div>
    );
  }
}

export default NBarSocialLinks;
