import React from "react";
import Layout from "../components/Layout";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <div>
      <Layout>
        <Container>
          <h1>Welcome to Admin Dashboard </h1>
        </Container>
      </Layout>
    </div>
  );
}

export default Home;
