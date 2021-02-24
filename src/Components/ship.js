import React from "react";
import { Media, Col, Container, Row } from "reactstrap";

const Ship = () => {
  return (
    <Container fluid={true}>
      <Row className="foodPicShip">
        <Col>
          <Media left href="#">
            <Media src="assets/images/cruiseLogo.png" alt="Company Logo" />
          </Media>
        </Col>
        <Col>
          <Media body className="getFrosty">
            <Media heading>Media heading</Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Col>
      </Row>
    </Container>
  );
};

export default Ship;
