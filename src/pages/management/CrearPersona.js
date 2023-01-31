import React from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { FaRegSave } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <Form.Check
      type="checkbox"
      id={`rol-${children}`}
      label={`${children}`}
      onClick={decoratedOnClick}
    ></Form.Check>
  );
}

function CrearPersona() {
  return (
    <>
      <Container>
        <Form>
          <Row>
            <Col sm={10}>
              <h3>Personas</h3>
            </Col>
          </Row>
          <Row>&nbsp;</Row>

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
                  <Form.Select className="mb-2">
                    <option>Todos</option>
                    <option>Activo</option>
                    <option>Inactivo</option>
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
                    <option>Natural</option>
                    <option>Jurídica</option>
                    <option>Sin RUC/CI</option>
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
                  <Form.Control type="text" label="" />
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
                  <Form.Control type="text" label="" />
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
                  <Form.Control type="text" label="" />
                </Col>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="right-align">
              <Form.Group
                as={Row}
                className="mb-12"
                controlId="formHorizontalNombreComercial"
              >
                <Form.Label column sm={3}>
                  Nombre Comercial :
                </Form.Label>
                <Col sm={4}>
                  <Form.Control type="text" label="" />
                </Col>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="right-align">
              <Form.Group
                as={Row}
                className="mb-12"
                controlId="formHorizontalTelefonos"
              >
                <Form.Label column sm={3}>
                  Teléfonos :
                </Form.Label>
                <Col sm={4}>
                  <Form.Control type="text" label="" />
                </Col>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="right-align">
              <Form.Group
                as={Row}
                className="mb-12"
                controlId="formHorizontalDireccion"
              >
                <Form.Label column sm={3}>
                  Dirección :
                </Form.Label>
                <Col sm={4}>
                  <Form.Control type="text" label="" />
                </Col>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="right-align">
              <Form.Group
                as={Row}
                className="mb-12"
                controlId="formHorizontalProvincia"
              >
                <Form.Label column sm={3}>
                  Provincia :
                </Form.Label>
                <Col sm={4}>
                  <Form.Select className="mb-2" defaultValue="-">
                    <option>-</option>
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
                controlId="formHorizontalCanton"
              >
                <Form.Label column sm={3}>
                  Cantón :
                </Form.Label>
                <Col sm={4}>
                  <Form.Select className="mb-2" defaultValue="-">
                    <option>-</option>
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
                controlId="formHorizontalParroquia"
              >
                <Form.Label column sm={3}>
                  Parroquia :
                </Form.Label>
                <Col sm={4}>
                  <Form.Control type="text" label="" />
                </Col>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="right-align">
              <Form.Group
                as={Row}
                className="mb-12"
                controlId="formHorizontalSexo"
              >
                <Form.Label column sm={3}>
                  Sexo :
                </Form.Label>
                <Col sm={4}>
                  <Form.Select className="mb-2" defaultValue="-">
                    <option>-</option>
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
                controlId="formHorizontalEstadoCivil"
              >
                <Form.Label column sm={3}>
                  Estado Civil :
                </Form.Label>
                <Col sm={4}>
                  <Form.Select className="mb-2" defaultValue="-">
                    <option>-</option>
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
                controlId="formHorizontalOtrosIngresos"
              >
                <Form.Label column sm={3}>
                  Otros Ingresos :
                </Form.Label>
                <Col sm={4}>
                  <Form.Select className="mb-2" defaultValue="-">
                    <option>-</option>
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
                controlId="formHorizontalExtranjero"
              >
                <Form.Label column sm={3}>
                  Extranjero :
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
                controlId="formHorizontalPersonaAsociada"
              >
                <Form.Label column sm={3}>
                  Persona Asociada :
                </Form.Label>
                <Col sm={4}>
                  <Form.Control type="text" label="" />
                </Col>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="right-align">
              <Form.Group
                as={Row}
                className="mb-12"
                controlId="formHorizontalCategoria"
              >
                <Form.Label column sm={3}>
                  Categoría :
                </Form.Label>
                <Col sm={4}>
                  <Form.Control type="text" label="" />
                </Col>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="right-align">
              <Form.Group
                as={Row}
                className="mb-12"
                controlId="formHorizontalEmail"
              >
                <Form.Label column sm={3}>
                  Email :
                </Form.Label>
                <Col sm={4}>
                  <Form.Control type="text" label="" />
                </Col>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
      <br />
      <br />

      <Container>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Rol de Persona</Accordion.Header>
            <Accordion.Body>
              <Accordion>
                <Card>
                  <Card.Header>
                    <CustomToggle eventKey="0">Cliente</CustomToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
              <Accordion>
                <Card>
                  <Card.Header>
                    <CustomToggle eventKey="1">Proveedor</CustomToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>

              <Accordion >
                <Card>
                  <Card.Header>
                    <CustomToggle eventKey="2">Empleado</CustomToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>Hello! I'm another body</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
      <br />
      <br />
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
      <br />
      <br />
    </>
  );
}

export default CrearPersona;
