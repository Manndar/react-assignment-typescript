import React, {useState, useEffect} from "react";
import { Grid, Typography} from '@mui/material';
import { useNavigate , useParams } from "react-router-dom";
import CustomButton from "../customComp/CustomButton.js";
import CustomTextField from "../customComp/CustomTextField.tsx";
import { useSelector, useDispatch } from "react-redux";
import { addOrUpdateEmployee } from "../redux/actions/actions.ts";
import { RootState } from "../redux/store/store.ts";
import { Employee } from "../redux/actions/actions.ts";
const EmployeeForm = () => {   
    const navigate = useNavigate();
    const {id} = useParams(); 
    const dispatch = useDispatch();

    const employees = useSelector<RootState, Employee[]>(state => state.employees);
    console.log('employee', employees);

    const [formData, setFormData] = useState({
        empid:  Math.floor(Math.random() * 100) + 1,
        firstName:'',
        lastName:'',
        email:  '',
        phoneNumber:  '',
        department: '',
    })

  useEffect(() => {
    if (typeof id === 'string' && id !== ':id') {
      const employee: Employee = (employees.find((employee: Employee) => employee.empid === parseInt(id)))!;
      setFormData(employee);
    }
  },[id, employees])

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }
     
    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        dispatch(addOrUpdateEmployee(formData));
        setFormData({
            empid:0,
            firstName : '',
            lastName : '',
            email : '',
            phoneNumber: '',
            department: ''
        })
        navigate('/display-list');
    }
    function onHomeClick (){
        navigate('/');
    }
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={8} md={6}>
        <Typography variant="h5" align="center" gutterBottom>
        {(id !== ':id') ? 'Edit Employee' : 'Employee Registration Form'}
        </Typography>
        <CustomButton onClick={onHomeClick}>Home</CustomButton>
        <form >
          <CustomTextField          
            required
            fullWidth
            type="text"
            id="firstName"
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleOnChange}            
          />
          <CustomTextField            
            required
            fullWidth
            type="text"
            id="lastName"
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleOnChange}
          />
          <CustomTextField           
            required            
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleOnChange}
          />
          <CustomTextField
            required={false}
            fullWidth
            id="phoneNumber"
            label="Phone Number"
            name="phoneNumber"
            type='text'
            value={formData.phoneNumber}
            onChange={handleOnChange}
          />
          <CustomTextField            
            required 
            fullWidth
            id="department"
            label="Department"
            type='text'
            name="department"
            value={formData.department}
            onChange={handleOnChange}
          />
          <CustomButton
            onClick={handleSubmit}     
            color='#007bff'
          >
            {(id !== ':id') ? 'Update' : 'Register'}
          </CustomButton>
          <hr />
        <CustomButton onClick={() => {
            navigate('/display-list');
        }}>
        Go to List
        </CustomButton>
        </form>
      </Grid>
    </Grid>
  )
}

export default EmployeeForm

