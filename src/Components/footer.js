import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeSquare,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";

const Footer = (props) => {
  return (
    <Container
      className="tomatoHomeBody"
      fluid={true}
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1502825305473-fedeffa5b12c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80")`,
      }}
    >
      <Row>
        <Col>
          {" "}
          We would like to meet you!
          <Form className="getFrosty">
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="areaCode">Contact Tel.</Label>
              <Input
                type="text"
                name="number"
                id="areaCode"
                placeholder="Area code"
              />
            </FormGroup>
            <FormGroup>
              <Label for="phoneNumber"></Label>
              <Input
                type="text"
                name="number"
                id="phoneNumber"
                placeholder="Tel. Number"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Email"
              />
            </FormGroup>
            <FormGroup check>
              <Input type="checkbox" name="check" id="exampleCheck" />
              <Label for="exampleCheck" check>
                May we contact you?
              </Label>
            </FormGroup>

            <FormGroup>
              <Label for="exampleText">Your Feedback</Label>
              <Input type="textarea" name="text" id="exampleText" />
              <FormText color="muted">
                Please type your feedback here and we will respond within 2
                business days. Thank You!
              </FormText>
            </FormGroup>
            <Button>Send Feedback</Button>
          </Form>
        </Col>
        <Col>
          <div className="getFrosty">
            <p>Links</p>
            <Nav vertical>
              <NavItem>
                <NavLink href="/home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/aboutus">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/ship">Our Ship</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/itinerary">Itinerary</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/testimonials">Testimonials</NavLink>
              </NavItem>
            </Nav>
          </div>
        </Col>
        <Col>
          {" "}
          <Card>
            <CardBody>
              <CardTitle tag="h3">
                Contact Us Today And Prepare For Your Next Adventure!
              </CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                <a
                  role="button"
                  className="btn btn-link"
                  href="tel:+12065551234"
                >
                  <h2>
                    <i>
                      <FontAwesomeIcon icon={faPhoneSquare} />
                    </i>
                  </h2>
                  <h2>1-206-555-1234</h2>
                </a>
                <br />
              </CardSubtitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                <a
                  role="button"
                  className="btn btn-link"
                  href="mailto:CypriotEats@GastroTravels.co"
                >
                  <h2>
                    <i>
                      <FontAwesomeIcon icon={faEnvelopeSquare} />
                    </i>
                  </h2>
                  <h2>CypriotEats@GastroTravels.co</h2>
                </a>
                <br />
              </CardSubtitle>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
