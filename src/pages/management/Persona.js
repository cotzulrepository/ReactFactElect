import React from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";
import { FaPlus } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import CrearPersona from './CrearPersona';

function Persona() {
  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      <Container>
        <Form>
          <Row>
            <Col sm={10}>
              <h3>Personas</h3>
            </Col>
            <Col sm={2}>
              <Button href="./CrearPersona" variant="success">
                <FaPlus />
              </Button>
              <Button variant="outline-danger">
                <FaTrash />
              </Button>
            </Col>
          </Row>
          <Row>&nbsp;</Row>

          <Row>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Búsqueda</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col xs={3}>
                      <Form.Group
                        as={Row}
                        className="mb-2"
                        controlId="formHorizontalEmail"
                      >
                        <Form.Label column sm={4}>
                          Nombre :
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            type="text"
                            name="nombre"
                            placeholder="Nombre"
                          />
                        </Col>
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group
                        as={Row}
                        className="mb-2"
                        controlId="formHorizontalEmail"
                      >
                        <Form.Label column sm={4}>
                          Rol :
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Select >
                            <option>Todos</option>
                            <option>Cliente</option>
                            <option>Proveedor</option>
                            <option>Empleado</option>
                            <option>Vendedor</option>
                          </Form.Select>
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group
                        as={Row}
                        className="mb-2"
                        controlId="formHorizontalEmail"
                      >
                        <Form.Label column sm={4}>
                          Tipo :
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Select >
                            <option>Todos</option>
                            <option>Natural</option>
                            <option>Jurídica</option>
                            <option>Sin RUC/CI</option>
                          </Form.Select>
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group
                        as={Row}
                        className="mb-2"
                        controlId="formHorizontalEmail"
                      >
                        <Form.Label column sm={5}>
                          Estado :
                        </Form.Label>
                        <Col sm={7}>
                          <Form.Select >
                            <option>Todos</option>
                            <option>Activo</option>
                            <option>Inactivo</option>
                          </Form.Select>
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group
                        as={Row}
                        className="mb-1"
                        controlId="formHorizontalEmail"
                      >
                        <Form.Label column sm={3}>
                        </Form.Label>
                        <Col sm={9}>
                        <Button variant="outline-primary">Buscar</Button>

                        </Col>
                       
                         
                      </Form.Group>
                      
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Row>
          <Row>&nbsp;</Row>
          <Row>
            <Table striped>
              <thead>
                <tr>
                  <th>
                    <Form.Check type="checkbox" label="" />
                  </th>
                  <th></th>
                  <th>Identificación</th>
                  <th>Razón Social</th>
                  <th>Nombre Comercial</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Form.Check type="checkbox" label="" />
                  </td>
                  <td></td>
                  <td>9999999999999</td>
                  <td>Consumidor Final</td>
                  <td>Consumidor Final</td>
                  <td>Activo</td>
                </tr>
              </tbody>
            </Table>
            <Pagination size="sm">{items}</Pagination>
          </Row>
        </Form>
      </Container>
    </>
  );
}

export default Persona;
