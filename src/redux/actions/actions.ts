
import { ADD_OR_UPDATE_EMPLOYEE, DELETE_EMPLOYEE, SET_FETCHED_EMPLOYEES } from './typesConstants.ts';

export interface Employee {
  empid: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  department: string;
  [key: string]: number | string;
}

export interface FetchedEmployees {
  empid: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  department: string;
}

// // Define action interfaces
// export interface AddOrUpdateEmployeeAction extends Action<typeof ADD_OR_UPDATE_EMPLOYEE> {
//   payload: Employee; // Type of the employee object
// }

// export interface DeleteEmployeeAction extends Action<typeof DELETE_EMPLOYEE> {
//   payload: number; 
// }

// export interface SetFetchedEmployeesAction extends Action<typeof SET_FETCHED_EMPLOYEES> {
//   payload: FetchedEmployees[];
// }



// Action creators
export const addOrUpdateEmployee = (employee: Employee) => ({
  type: ADD_OR_UPDATE_EMPLOYEE,
  payload: employee
});

export const deleteEmployee = (empid: number) => ({
  type: DELETE_EMPLOYEE,
  payload: empid
});

export const setFetchedUsers = (users: FetchedEmployees[]) => ({
  type: SET_FETCHED_EMPLOYEES,
  payload: users
});



