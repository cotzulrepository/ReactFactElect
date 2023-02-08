import React, { Component } from "react";
import { connect } from "react-redux";

class GridPersona extends Component {
  render() {
    return (
      <>
        <tr key={this.props.post.codigo}>
          <td>
            <button
              className="edit"
              onClick={() =>
                this.props.dispatch({
                  type: "EDIT_POST",
                  codigo: this.props.post.codigo,
                })
              }
            >
              Edit
            </button>
          </td>
          <td>
            <button
              className="delete"
              onClick={() =>
                this.props.dispatch({
                  type: "DELETE_POST",
                  codigo: this.props.post.codigo,
                })
              }
            >
              Delete
            </button>
          </td>
          <td>{this.props.post.cedula}</td>
          <td>{this.props.post.nombre}</td>
          <td>{this.props.post.nombrecomercial}</td>
          <td>{this.props.post.estado}</td>
        </tr>
      </>
    );
  }
}
export default connect()(GridPersona);
