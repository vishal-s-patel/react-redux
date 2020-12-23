import React, { Component } from "react";
import { connect } from "react-redux";

class Employees extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.employee.empname}</td>
        <td>{this.props.employee.email}</td>
        <td>{this.props.employee.role}</td>
        <td>
          <button
            className="btn btn-primary"
            onClick={() =>
              this.props.dispatch({
                type: "EDIT_EMP",
                id: this.props.employee.id,
              })
            }
          >
            Edit
          </button>{" "}
          |{" "}
          <button
            className="btn btn-danger"
            onClick={() =>
              this.props.dispatch({
                type: "DELETE_EMP",
                id: this.props.employee.id,
              })
            }
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default connect()(Employees);
