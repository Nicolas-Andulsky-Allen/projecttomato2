import React from "react";
import { Media, Col, Container, Row } from "reactstrap";

const Ship = () => {
  return (
    <Container
      fluid={true}
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1508425671066-06a0ee0bc915?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80")`,
      }}
    >
      <Row>
        <Col>
          <Media left href="#">
            <Media
              src="assets/images/cruiseLogo.png"
              alt="Company Logo"
              width="60%"
              height="80%"
            />
            <Media
              src="assets/images/pexels-jess-vide-4612307.png"
              alt="Beach Sunset"
              width="60%"
              height="40%"
              //style={{
              //backgroundImage: `url("https://images.pexels.com/photos/4612307/pexels-photo-4612307.jpeg?cs=srgb&dl=pexels-jess-vide-4612307.jpg&fm=jpg")`,
              //}}
            />
          </Media>
        </Col>
        <Col>
          <Media body className="getFrosty whiteText">
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
