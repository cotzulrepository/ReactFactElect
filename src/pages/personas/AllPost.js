import React, { Component } from "react";
import { connect } from "react-redux";
import GridPersona from "./GridPersonaAnt";
import EditComponent from "./EditComponent";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";

class AllPost extends Component {

    

  render() {

    

    return (
      <Container>
       
             
              
                <Table striped>
                  <thead>
                    <tr>
                      <th>
                        
                      </th>
                      <th></th>
                      <th>Identificación</th>
                      <th>Razón Social</th>
                      <th>Nombre Comercial</th>
                      <th>Estado</th>
                    </tr>
                  </thead>
                  <tbody id="registrosTabla">


                    {this.props.posts.map((post) => (
                        <div key={post.codigo}>
                            {post.editing ? (
                                <EditComponent post={post} key={post.codigo} />    
                            ) : (
                                <GridPersona post={post} key={post.codigo} />
                            )}
                        </div>
                    ))}
        
                  </tbody>
                    </Table>
           


          
      </Container>
 
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state,
  };
};
export default connect(mapStateToProps)(AllPost);
