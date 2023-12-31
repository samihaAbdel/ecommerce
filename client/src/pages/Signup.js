import React from "react";
import Layout from "../components/Layout";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Input from "../components/Input";

function Signup() {
  return (
    <div>
      <Layout>
        <Container>
          <Row style={{ marginTop: "50px" }}>
            <Col md={{ span: 6, offset: 3 }}>
              <Form>
                <Row>
                  <Col md={6}>
                    <Input
                      label="First Name"
                      placeholder="First Name"
                      value=""
                      type="text"
                      onChange={() => {}}
                    />
                  </Col>
                  <Col md={6}>
                    <Input
                      label="Last Name"
                      placeholder="Last Name"
                      value=""
                      type="text"
                      onChange={() => {}}
                    />
                  </Col>
                </Row>

                <Form.Group controlId="formBasicCheckbox">
                  <Input
                    label="Email "
                    placeholder="Email "
                    value=""
                    type="Email"
                    onChange={() => {}}
                  />{" "}
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Input
                    label="Password "
                    placeholder="Password "
                    value=""
                    type="password"
                    onChange={() => {}}
                  />{" "}
                </Form.Group>
                
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>{" "}
      </Layout>
    </div>
  );
}

export default Signup;
