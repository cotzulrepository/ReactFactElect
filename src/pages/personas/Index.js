import React, { Component, useEffect, useState } from "react";
import FormPersona from "./FormPersona";
import AllPost from "./AllPost";
import { createStore } from "redux";
import { Provider } from "react-redux";
import postReducer from "./postReducer";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { FaPlus } from "react-icons/fa";
import { FaRegListAlt } from "react-icons/fa";

class Index extends Component {
  render() {
    const store = createStore(postReducer);

    const formulario = false;

    const form = () => {
      this.formulario = true;
    };
    const grid = () => {
      this.formulario = false;
    };

    return (
      <>
        <Provider store={store}>
          <Container>
            <Form>
              <Row>
                <Col sm={10}>
                  <h3>Personas</h3>
                </Col>
                <Col sm={2}>
                  <Button onClick={form} variant="outline-success">
                    <FaPlus />
                  </Button>
                  <Button onClick={grid} variant="outline-primary">
                    <FaRegListAlt />
                  </Button>
                </Col>
              </Row>
              <Row>&nbsp;</Row>
              <Row><FormPersona />  <AllPost /></Row>
            </Form>
          </Container>
        </Provider>
      </>
    );
  }
}

export default Index;
