import React, { useState } from "react";
import {
  Media,
  Col,
  Container,
  Row,
  Collapse,
  Button,
  CardBody,
  Card,
} from "reactstrap";

function Testimonials(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Container
      fluid={true}
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1485921325833-c519f76c4927?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80")`,
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
          <div>
            <Card>
              <Button
                color="link"
                onClick={toggle}
                style={{ marginBottom: "1rem" }}
              >
                Happy Customer 1 <small> Let me tell you how happy I am.</small>
              </Button>
              <Collapse isOpen={isOpen}>
                <Card>
                  <CardBody>
                    I am very happy. Anim pariatur cliche reprehenderit, enim
                    eiusmod high life accusamus terry richardson ad squid. Nihil
                    anim keffiyeh helvetica, craft beer labore wes anderson cred
                    nesciunt sapiente ea proident.
                  </CardBody>
                </Card>
              </Collapse>
            </Card>
            <Card>
              <Button
                color="link"
                onClick={toggle}
                style={{ marginBottom: "1rem" }}
              >
                Happy Customer 2 <small> The food was great.</small>
              </Button>
              <Collapse isOpen={isOpen}>
                <Card>
                  <CardBody>
                    I am very happy. Anim pariatur cliche reprehenderit, enim
                    eiusmod high life accusamus terry richardson ad squid. Nihil
                    anim keffiyeh helvetica, craft beer labore wes anderson cred
                    nesciunt sapiente ea proident.
                  </CardBody>
                </Card>
              </Collapse>
            </Card>
            <Card>
              <Button
                color="link"
                onClick={toggle}
                style={{ marginBottom: "1rem" }}
              >
                Not so happy customer 3{" "}
                <small> I got seasick the whole time.</small>
              </Button>
              <Collapse isOpen={isOpen}>
                <Card>
                  <CardBody>
                    I am not very happy. Where are the ratings on this site?
                    There should be little rocket ships somewhere, and this
                    isn't even a real accordian. The reviews should open
                    individually. Why aren't these populating from a remote
                    database somewhere? WHAT'S GOING ON AROUND HERE ANYWAY?!!!
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  </CardBody>
                </Card>
              </Collapse>
            </Card>
            <Card>
              <Button
                color="link"
                onClick={toggle}
                style={{ marginBottom: "1rem" }}
              >
                Happy Customer 4 <small> Let me tell you how happy I am.</small>
              </Button>
              <Collapse isOpen={isOpen}>
                <Card>
                  <CardBody>
                    I am very happy. Anim pariatur cliche reprehenderit, enim
                    eiusmod high life accusamus terry richardson ad squid. Nihil
                    anim keffiyeh helvetica, craft beer labore wes anderson cred
                    nesciunt sapiente ea proident.
                  </CardBody>
                </Card>
              </Collapse>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Testimonials;
