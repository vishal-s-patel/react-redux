import React, { Component } from "react";
import { connect } from "react-redux";
class EditEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      empname: this.props.employee.empname,
      email: this.props.employee.email,
      role: this.props.employee.role,
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
      empname: this.state.empname,
      email: this.state.email,
      role: this.state.role,
    };
    this.props.dispatch({
      type: "UPDATE",
      id: this.props.employee.id,
      data: data,
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
            <input type="submit" value="Update" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(EditEmployee);
