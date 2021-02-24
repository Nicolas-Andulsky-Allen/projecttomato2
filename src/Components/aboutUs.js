import React from "react";
import { Media, Col, Container, Row } from "reactstrap";
import { FadeTransform } from "react-animation-components";

const AboutUs = () => {
  return (
    <FadeTransform
      in
      transformProps={{
        exitTransform: "scale(0.5) translateY(50%)",
      }}
    >
      <Container fluid={true}>
        <Row className="foodPicAboutUs">
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
    </FadeTransform>
  );
};

export default AboutUs;
