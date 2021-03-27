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
      <Container
        fluid={true}
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1520066391310-428f06ebd602?ixid=MXwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDI0fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")`,
        }}
      >
        <Row className="whiteText">
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
