import React, { Component, useEffect, useState } from "react";
import FormPersona from "./FormPersona";
import GridPersona from "./GridPersona";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { FaPlus } from "react-icons/fa";
import { FaRegListAlt } from "react-icons/fa";

function Index() {
  const [formulario, setFormulario] = useState(false);

  const form = () => {
    setFormulario(true);
  };
  const grid = () => {
    setFormulario(false);
  };

  const gridProp = (prop) => {
    setFormulario(prop);
  }

  return (
    <>
    
      <Container>
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
        <Row>{formulario ? <FormPersona /> : <GridPersona gridProp={gridProp} />}</Row>
      </Container>
    </>
  );
}

export default Index;
