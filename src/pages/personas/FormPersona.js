import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { FaRegSave } from "react-icons/fa";
import Button from "react-bootstrap/Button";

class FormPersona extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    const cedula = this.getCedula.value;
    const nombre = this.getNombre.value;
    const nombrecomercial = this.getNombrecomercial.value;
    const estado = this.getEstado.value;
    const data = {
      codigo: new Date(),
      cedula,
      nombre,
      nombrecomercial,
      estado,
      editing: false,
    };
    this.props.dispatch({
      type: "ADD_POST",
      data,
    });
    this.getNombre.value = "";
    this.getNombrecomercial.value = "";
    this.getCedula.value = "";
    this.getEstado.value = "";
  };
  render() {
    return (
      <>
        <Container>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col className="right-align">
                <Form.Group
                  as={Row}
                  className="mb-12"
                  controlId="formHorizontalEstado"
                >
                  <Form.Label column sm={3}>
                    Estado :
                  </Form.Label>
                  <Col sm={4}>
                    <Form.Select
                      ref={(input) => (this.getEstado = input)}
                      className="mb-2"
                    >
                      <option value="T">Todos</option>
                      <option value="A">Activo</option>
                      <option value="I">Inactivo</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="right-align">
                <Form.Group
                  as={Row}
                  className="mb-12"
                  controlId="formHorizontalEstado"
                >
                  <Form.Label column sm={3}>
                    Tipo :
                  </Form.Label>
                  <Col sm={4}>
                    <Form.Select className="mb-2">
                      <option value="N">Natural</option>
                      <option value="J">Jurídica</option>
                      <option value="">Sin RUC/CI</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="right-align">
                <Form.Group
                  as={Row}
                  className="mb-12"
                  controlId="formHorizontalContribuyenteEspecial"
                >
                  <Form.Label column sm={3}>
                    Contribuyente Especial :
                  </Form.Label>
                  <Col sm={4}>
                    <Form.Check type="checkbox" label="" />
                  </Col>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="right-align">
                <Form.Group
                  as={Row}
                  className="mb-12"
                  controlId="formHorizontalRUC"
                >
                  <Form.Label column sm={3}>
                    RUC :
                  </Form.Label>
                  <Col sm={4}>
                    <Form.Control type="text" />
                  </Col>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="right-align">
                <Form.Group
                  as={Row}
                  className="mb-12"
                  controlId="formHorizontalCedula"
                >
                  <Form.Label column sm={3}>
                    Cédula :
                  </Form.Label>
                  <Col sm={4}>
                    <Form.Control
                      ref={(input) => (this.getCedula = input)}
                      type="text"
                    />
                  </Col>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="right-align">
                <Form.Group
                  as={Row}
                  className="mb-12"
                  controlId="formHorizontalNombre"
                >
                  <Form.Label column sm={3}>
                    Nombre :
                  </Form.Label>
                  <Col sm={4}>
                    <Form.Control
                      ref={(input) => (this.getNombre = input)}
                      type="text"
                    />
                  </Col>
                </Form.Group>
              </Col>
            </Row>
            <Container>
              <Row>
                <Col className="right-align">
                  <Button variant="success">
                    <FaRegSave />
                    &nbsp;&nbsp;Guardar
                  </Button>
                </Col>
              </Row>
            </Container>
          </Form>
        </Container>
        <br />
        <br />

        <br />
        <br />
      </>
    );
  }
}
export default connect()(FormPersona);
