
import { combineReducers, Reducer} from "redux";
import {
  ADD_OR_UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE,
  SET_FETCHED_EMPLOYEES,
  GET_EMPLOYEES,
} from "../actions/typesConstants.ts";
import {Employee, FetchedEmployees } from "../actions/actions.ts";


type ActionTypes =
  | { type: typeof ADD_OR_UPDATE_EMPLOYEE; payload: Employee | any }
  | { type: typeof DELETE_EMPLOYEE; payload: number | any }
  | { type: typeof SET_FETCHED_EMPLOYEES; payload: FetchedEmployees[] }
  ;

const employeesReducer: Reducer<Employee[], ActionTypes> = (state = [], action) => {
  switch (action.type) {
    case GET_EMPLOYEES:
      return state;
    case ADD_OR_UPDATE_EMPLOYEE:
      const employee = action.payload;
      console.log("employee to be added :", employee);
      const existingEmployeeIndex = state.findIndex(
        (emp) => emp.empid === employee.empid
      );
      if (existingEmployeeIndex !== -1) {
        return state.map((emp, index) => {
          if (index === existingEmployeeIndex) {
            return employee;
          } else {
            return emp;
          }
        });
      } else {
        return [...state, employee];
      }
    case DELETE_EMPLOYEE:
      return state.filter((emp) => emp.empid !== action.payload);
    default:
      return state;
  }
};

const fetchedUsersReducer: Reducer<FetchedEmployees [], ActionTypes> = (state = [], action) => {
  switch (action.type) {
    case SET_FETCHED_EMPLOYEES:
      return action.payload;
    default:
      return state;
  }
};



const rootReducer = combineReducers({
  employees: employeesReducer,
  fetchedUsers: fetchedUsersReducer,
});

export default rootReducer;


