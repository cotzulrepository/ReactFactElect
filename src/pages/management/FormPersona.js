import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { FaRegSave } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import store from "../../redux/store";
import {
  createPersona,
  modifyPersona,
  resetPersona,
} from "../../redux/states/persona";
import { createPersonaAdapter } from "../../adapters";
import Cookies from "universal-cookie";
import { useFetchAndLoad } from "../../hooks";
import { personaService } from "../../services/public.service";

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

function FormPersona() {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const personaState = useSelector((store: AppStore) => store.persona);
  const { loading, callEndpoint } = useFetchAndLoad();

  const [codigo, SetCodigo] = useState();
  const [nombre, setNombre] = useState();
  const [ruc, setRuc] = useState();
  const [cedula, setCedula] = useState();
  const [estado, setEstado] = useState();
  const [nombrecomercial, setNombreComercial] = useState();
  const [tipo, setTipo] = useState();
  const [especial, setEspecial] = useState();
  const [telefono, setTelefono] = useState();
  const [direccion, setDireccion] = useState();
  const [provincia, setProvincia] = useState();
  const [ciudad, setCiudad] = useState();
  const [genero, setGenero] = useState();
  const [estadocivil, setEstadoCivil] = useState();
  const [email, setEmail] = useState();
  const [personaasociadaid, setPersonaAsociadaId] = useState();
  const [usuarioing, setUsuarioIng] = useState();
  const [fechaing, setFechaIng] = useState();
  const [usuariomod, setUsuarioMod] = useState();
  const [fechamod, setFechaMod] = useState();
  const [usuarioelim, setUsuarioElim] = useState();
  const [fechaelim, setFechaElim] = useState();

  const guardaPersona = async () => {
    //const nuevo  =  this.personaState;

    const persona = {
      data: {
        cedula,
        nombre,
        nombrecomercial,
        estado,
        ruc,
        tipo,
        usuarioing: cookies.get("codigo"),
        fechaing: new Date(),
      },
    };

    const newPersona = await callEndpoint(personaService(persona.data));
    dispatch(createPersona(createPersonaAdapter(newPersona)));

    //dispatch(resetPersona());
    alert("Persona Ingresada");
  };

  return (
    <>
      <Container>
        <Form>
          
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
                    onChange={(e) => setEstado(e.target.value)}
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
                  <Form.Select
                    onChange={(e) => setTipo(e.target.value)}
                    className="mb-2"
                  >
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
                  <Form.Control
                    onChange={(e) => setRuc(e.target.value)}
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
                controlId="formHorizontalCedula"
              >
                <Form.Label column sm={3}>
                  Cédula :
                </Form.Label>
                <Col sm={4}>
                  <Form.Control
                    onChange={(e) => setCedula(e.target.value)}
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
                    onChange={(e) => setNombre(e.target.value)}
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

              <Accordion>
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
            <Button variant="success" onClick={guardaPersona}>
              <FaRegSave />
              &nbsp;&nbsp;Guardar
            </Button>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <div>
        <h3>{JSON.stringify(personaState)}</h3>
      </div>
    </>
  );
}

export default FormPersona;
