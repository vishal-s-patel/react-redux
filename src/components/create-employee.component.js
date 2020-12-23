import React, { Component } from "react";
import { connect } from "react-redux";
class CreateEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      empname: "",
      email: "",
      role: "",
    };
    this.onChangeEmpname = this.onChangeEmpname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeRole = this.onChangeRole.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeEmpname(e) {
    this.setState({
      empname: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangeRole(e) {
    this.setState({
      role: e.target.value,
    });
  }
  onSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: new Date(),
      empname: this.state.empname,
      email: this.state.email,
      role: this.state.role,
      editing: false,
    };
    this.props.dispatch({
      type: "ADD_EMP",
      data,
    });
    this.setState({
      empname: "",
      email: "",
      role: "",
    });
    //console.log(data);
  };
  render() {
    return (
      <div className="col-sm-6">
        <h3>Create New Employee</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Fullname: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.empname}
              onChange={this.onChangeEmpname}
            />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div className="form-group">
            <label>Role: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.role}
              onChange={this.onChangeRole}
            />
          </div>

          <div className="form-group">
            <input type="submit" value="Submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(CreateEmployee);
