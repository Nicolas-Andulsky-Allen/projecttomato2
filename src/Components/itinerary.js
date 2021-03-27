import React from "react";
import { Media, Col, Container, Row, Table } from "reactstrap";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../App.css";
import { FadeTransform } from "react-animation-components";

const Itinerary = () => {
  return (
    <FadeTransform
      in
      transformProps={{
        exitTransform: "scale(0.5) translateY(50%)",
      }}
    >
      <Container fluid={true}>
        <Row
          className="tomatoHomeBody"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1571734410667-0bde8dfbebf0?ixid=MXwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDE2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")`,
          }}
        >
          <Col>
            <Media left href="#" classNames="page">
              <Media src="assets/images/cruiseLogo.png" alt="Company Logo" />
            </Media>
          </Col>
          <Col>
            <Media right body className="getFrosty whiteText">
              <Media heading>Media heading</Media>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
              in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </Media>
            <Media>
              <div>
                <img
                  src="http://www.mapsopensource.com/images/cyprus-political-map.gif"
                  alt="Map of Cyprus"
                />
              </div>
            </Media>
          </Col>
        </Row>
      </Container>
      <Container fluid={true}>
        <Table bordered>
          <thead>
            <tr>
              <th colspan="2">
                <h1>Itinerary</h1>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <h2>Date</h2>
              </td>
              <td>
                <h2>Destination</h2>
              </td>
            </tr>
            <tr>
              <td>7/1/2021</td>
              <td>Paphos</td>
            </tr>
            <tr>
              <td>7/2/2021</td>
              <td>Out To Sea</td>
            </tr>
            <tr>
              <td>7/3/2021</td>
              <td>Limassol</td>
            </tr>
            <tr>
              <td>7/4/2021</td>
              <td>Out To Sea</td>
            </tr>
            <tr>
              <td>7/5/2021</td>
              <td>Larnaca</td>
            </tr>
            <tr>
              <td>7/8/2021</td>
              <td>Larnaca</td>
            </tr>
            <tr>
              <td>7/9/2021</td>
              <td>Out To Sea</td>
            </tr>
            <tr>
              <td>7/10/2021</td>
              <td>Famagusta</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </FadeTransform>
  );
};

export default Itinerary;
