import React from "react";
import Layout from "../components/Layout";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Input from "../components/Input";

function Signin() {
  return (
    <div>
      <Layout>
        <Container>
          <Row style={{ marginTop: "50px" }}>
            <Col md={{ span: 6, offset: 3 }}>
              <Form>
                <Input
                  label="Email "
                  placeholder="Email "
                  value=""
                  type="Email"
                  onChange={() => {}}
                />{" "}
                <Input
                  label="Password "
                  placeholder="Password "
                  value=""
                  type="password"
                  onChange={() => {}}
                />{" "}
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

export default Signin;
