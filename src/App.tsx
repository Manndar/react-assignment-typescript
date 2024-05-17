// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import EmployeeForm from "./pages/EmployeeForm.tsx";
import EmployeeList from "./pages/EmployeeList.tsx";
import Home from "./pages/Home.tsx";
import FetchedEmployeesList from "./pages/FetchedEmployeesList.tsx";
import ShowEmployeeDetails from "./pages/ShowEmployeeDetails.tsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee-form/:id" element={<EmployeeForm />} />
          <Route path="/display-list" element={<EmployeeList />} />
          <Route path="/fetched-employees" element={<FetchedEmployeesList />} />
          <Route path="/show-selected-employees" element={<ShowEmployeeDetails />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
