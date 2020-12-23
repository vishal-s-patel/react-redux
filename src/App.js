import React from "react";
import CreateEmployee from "./components/create-employee.component";
import EmployeeList from "./components/emp-list.component";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar.component";
function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Navbar />
          <br />
          <Route path="/" exact component={EmployeeList} />

          <Route path="/create" component={CreateEmployee} />
        </div>
      </Router>
    </div>
  );
}

export default App;
