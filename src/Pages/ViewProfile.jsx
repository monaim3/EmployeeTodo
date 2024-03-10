import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { EmployeContext } from '../Context/EmployeeContext';

const ViewProfile = () => {
    const {employees}=useContext(EmployeContext)
    const [employe,setEmployee]=useState({})
    const {id}=useParams()
    useEffect(()=>{
        const findEmploye=employees.find((item)=>item._id === id)
        setEmployee(findEmploye)
      },[id])
    return (
        <div className='mt-4 card w-96 bg-base-100 shadow-xl p-4 mx-auto '>
             
             <h4>Employe ID: {employe.employeId}</h4>
             <h4 className='card-title'> Name: {employe.name}</h4>
             <h4> Email: {employe.email}</h4>
             <h4> Phone{employe.phone}</h4>
             <h4> Designation :{employe.designation}</h4>
             
        </div>
    );
};

export default ViewProfile;