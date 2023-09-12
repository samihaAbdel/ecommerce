import React from "react";
import Header from "./Header";
import { Container } from "react-bootstrap";

function Layout(props) {
  return (
    <div>
      <Header />
      <Container
        // className="text-center"
        style={{ margin: "5rem", background: "white", padding: "3%" }}
      >
        {" "}
        {props.children}
      </Container>
    </div>
  );
}

export default Layout;
