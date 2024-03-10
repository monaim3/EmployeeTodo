import React, { useContext, useState } from 'react';
import { EmployeContext } from '../Context/EmployeeContext';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
function CreateTask() {
    const { 
        selectedEmployee,
        setSelectedEmployee,
        task, 
        setTask,
        tasks, 
        setTasks,
        employees,
        } = useContext(EmployeContext)
    
    
    const handleEmployeeChange = (event) => {
        setSelectedEmployee(event.target.value);
    };
    
    const handleTaskChange = (event) => {
        setTask(event.target.value);
    };

    const addTask = () => {
        setTasks([...tasks, { id:uuidv4(), name: task, assignedTo: selectedEmployee }]);
        setTask('');
        Swal.fire({
            title: "Good job!",
            text: "Task create Successfully",
            icon: "success"
        });
    };
  
    return (
        <div className="flex items-center justify-center flex-col	 mt-6">
            <h1 className='text-center text-2xl font-bold'>Assign Task</h1>
            <div className='mt-12 w-[30%] '>
                <h3><label htmlFor="" className='text-2xl  '> Selecte Employee:</label></h3>
                <select className='select select-secondary w-full max-w-xs mt-2' value={selectedEmployee} onChange={handleEmployeeChange}>
                    <option value="" className='text-xl'>Select Employee</option>
                    {employees.map((employee, index) => (
                       employee?.isAvailble && <option key={index} value={employee.name}>{employee.name}</option>
                    ))}
                </select>
            </div>
            <div className='mt-2 w-[30%]'>
            <h3><label htmlFor="" className='text-2xl  '> Task Name :</label></h3>
                <input type="text" className='px-4 py-2 border-2 w-full max-w-xs' value={task} onChange={handleTaskChange} placeholder="Enter Task" /> <br></br>
                <button className=' mt-4 btn btn-secondary w-full max-w-xs' onClick={addTask}>Add Task</button>
            </div>
        </div>
    );
}

export default CreateTask;
