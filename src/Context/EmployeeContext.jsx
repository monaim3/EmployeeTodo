import React, { createContext, useState } from 'react';
import Swal from 'sweetalert2';

const demodata = [
  {
    _id: "2424",
    name: "Ashik",
    email: "monaimmukul20@gmail.com",
    designation: "Frontend",
    phone: "0179866746",
    employeId: "12347",
    isAvailble:true
  },
  {
    _id: "4",
    name: "risha",
    email: "monaimmukul5@gmail.com",
    designation: "Frontend",
    phone: "0179866746",
    employeId: "12347",
    isAvailble:true
  },
  {
    _id: "80",
    name: "sumon",
    email: "monaimmukul78@gmail.com",
    designation: "Frontend",
    phone: "0179866746",
    employeId: "12347",
    isAvailble:false
  },
  {
    _id: "85",
    name: "Rabbi",
    email: "Rabbi@gmail.com",
    designation: "Apps Developer",
    phone: "01745787691",
    employeId: "12347",
    isAvailble:false
  }
]

export const EmployeContext = createContext();
const EmployeeContext = ({ children }) => {
  const [employees, setEmployess] = useState(demodata)
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [currentTaskId, setCurrentTaskId] = useState(null);
  const [modalInputValue, setModalInputValue] = useState('');
  const [isReassigning, setIsReassigning] = useState(false);

  // Create Employee
  const addEmployee = (data) => {
    setEmployess([...employees, data])
  }
  // Delete Employee
  const deleteEmployee = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        const deleteItem = employees.filter((ele) => ele._id !== id)
        setEmployess(deleteItem)
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }
// update Employee
  const updateEmployee = ({ data, id }) => {
    console.log("update Emply",data)
    const findEmployeIndex = employees.findIndex((item) => item._id === id)
    employees[findEmployeIndex] = { ...data, _id: id, }
    setEmployess(employees)
    Swal.fire({
      title: "Good job!",
      text: "Employee Edited Successfully",
      icon: "success"
    });
  }

  // delete Task
  const deleteTask = (id) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            const deleteTask = tasks.filter(task => task.id !== id)
            setTasks(deleteTask);
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
    });

};

// open modal for update
const openModalForUpdate = (taskId) => {
  setCurrentTaskId(taskId);
  setIsReassigning(false);
  const currentTask = tasks.find(task => task.id === taskId);
  setModalInputValue(currentTask.name);
};

// open modal for reassigned
const openModalForReassign = (taskId) => {
  setCurrentTaskId(taskId);
  setIsReassigning(true);
  const currentTask = tasks.find(task => task.id === taskId);
  setModalInputValue(currentTask.assignedTo);
};

// handle modal change
const handleModalChange = (event) => {
  setModalInputValue(event.target.value);
};
// modal save change
const saveChanges = () => {
  if (isReassigning) {
      reassignTask(currentTaskId, modalInputValue);
  } else {
      updateTask(currentTaskId, modalInputValue);
  }
 
};

//update Task
const updateTask = (id, newTask) => {
  // const findtask=tasks.find(task=>task.id==id)
  // findtask.name=newTask
  // setTasks([...tasks,{findtask}])
   setTasks(tasks.map(task => task.id === id ? { ...task, name: newTask } : task));
  Swal.fire({
      title: "Good job!",
      text: "Task Update Successfully",
      icon: "success"
  });
};

// reassign Task to someone
const reassignTask = (id, newEmployee) => {
  setTasks(tasks.map(task => task.id === id ? { ...task, assignedTo: newEmployee } : task));
  Swal.fire({
      title: "Good job!",
      text: "Resign Successfully",
      icon: "success"
  });
};
  const employeInfo = {
    addEmployee,
    employees,
    deleteEmployee,
    updateEmployee,
    selectedEmployee,
    setSelectedEmployee,
    task, 
    setTask,
    tasks, 
    setTasks,
    currentTaskId, 
    setCurrentTaskId,
    modalInputValue, 
    setModalInputValue,
    isReassigning, 
    setIsReassigning,
    deleteTask,
    openModalForUpdate,
    openModalForReassign,
    handleModalChange,
    saveChanges,
  }
  return (

    <EmployeContext.Provider value={employeInfo}>
      {children}
    </EmployeContext.Provider>

  );
};

export default EmployeeContext;