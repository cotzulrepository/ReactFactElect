import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";
import { FaPlus, FaTrash } from "react-icons/fa";
import { FaRegListAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { personaSelectService } from "../../services/public.service";
import { createPersonaAdapter } from "../../adapters";
import Cookies from "universal-cookie";
import { useFetchAndLoad } from "../../hooks";
import { personaService } from "../../services/public.service";
import { useDispatch, useSelector } from "react-redux";
import store from "../../redux/store";
import {
  createPersona,
  modifyPersona,
  resetPersona,
} from "../../redux/states/persona";
import FormPersona from "./FormPersona";

function GridPersona({gridProp}) {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const personaState = useSelector((store: AppStore) => store.persona);
  const { loading, callEndpoint } = useFetchAndLoad();


  const url = "https://localhost:44322/api/personas";

  const [personas, setPersonas] = useState([]);
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

  const [findNombre, setFindNombre] = useState("");
  const findNombreChange = (event) => {
    setFindNombre(event.target.value);
  };

  const [findEstado, setFindEstado] = useState("");
  const findEstadoChange = (event) => {
    setFindEstado(event.target.value);
  };

  /*
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  <Pagination size="sm">{items}</Pagination>
*/

  useEffect(() => {
    getPersonas();
  }, []);

  const getPersonas = async () => {
    const respuesta = await axios.get(url);
    setPersonas(respuesta.data);
  };


  const formularioPersona = () => {
    gridProp(true);
  };


  return (
    <>
      <Container>
        <Form>
          <Row>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>B??squeda</Accordion.Header>
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
                            onChange={findNombreChange}
                            type="text"
                            name="findNombre"
                            placeholder="findNombre"
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
                          <Form.Select>
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
                          <Form.Select>
                            <option>Todos</option>
                            <option>Natural</option>
                            <option>Jur??dica</option>
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
                          <Form.Select onChange={findEstadoChange}>
                            <option value="T">Todos</option>
                            <option value="A">Activo</option>
                            <option value="I">Inactivo</option>
                          </Form.Select>
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
                    
                  </th>
                  
                  <th>Identificaci??n</th>
                  <th>Raz??n Social</th>
                  <th>Nombre Comercial</th>
                  <th>Estado</th>
                  <th>

                  </th>
                </tr>
              </thead>
              <tbody id="registrosTabla">
                {personas
                  .filter((item) =>
                    item.nombre.toUpperCase().includes(findNombre.toUpperCase())
                  )
                  .filter((item) =>
                    item.estado.includes(
                      findEstado == "T" ? item.estado : findEstado
                    )
                  )
                  .map((personas, codigo) => {
                    return (
                      <tr key={personas.codigo}>
                        <td>
                          <Button variant="outline-success" onClick={formularioPersona}>
                            <FaEdit />
                            &nbsp;&nbsp;Editar
                          </Button>
                        </td>
                        
                        <td>{personas.cedula}</td>
                        <td>{personas.nombre}</td>
                        <td>{personas.nombrecomercial}</td>
                        <td>{personas.estado}</td>
                        <td>
                          <Button variant="outline-danger" >
                            <FaTrash />
                            &nbsp;&nbsp;Eliminar
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </Row>
        </Form>
      </Container>
    </>
  );
}

export default GridPersona;
