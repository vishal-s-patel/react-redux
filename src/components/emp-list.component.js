import React, { Component } from "react";
import { connect } from "react-redux";
import Employees from "./Employees";
import EditEmployee from "./edit-employee.component";

class EmployeeList extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>All Employee</h1>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>FullName</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.employees.map((employee) => (
              <React.Fragment key={employee.id}>
                {employee.editing ? (
                  <EditEmployee employee={employee} key={employee.id} />
                ) : (
                  <Employees key={employee.id} employee={employee} />
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateProps = (state) => {
  return {
    employees: state,
  };
};

export default connect(mapStateProps)(EmployeeList);
