const postReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_EMP":
      return state.concat([action.data]);
    case "DELETE_EMP":
      return state.filter((employee) => employee.id !== action.id);
    case "EDIT_EMP":
      return state.map((employee) =>
        employee.id === action.id
          ? { ...employee, editing: !employee.editing }
          : employee
      );
    case "UPDATE":
      return state.map((employee) => {
        if (employee.id === action.id) {
          return {
            ...employee,
            empname: action.data.empname,
            email: action.data.email,
            role: action.data.role,
            editing: !employee.editing,
          };
        } else return employee;
      });
    default:
      return state;
  }
};
export default postReducer;
