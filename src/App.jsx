import { useState } from 'react'

import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Layout from './Layout/Layout';
import CreateEmployee from './Pages/CreateEmployee';
import EmployeList from './Pages/EmployeList';
import EmployeeContext from './Context/EmployeeContext';
import EditEmployee from './Pages/EditEmployee';
import ViewProfile from './Pages/ViewProfile';
import CreateTask from './Pages/CreateTask';
import TaskList from './Pages/TaskList';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/create-employee",
          element: <CreateEmployee></CreateEmployee>
        },
        {
          path: "/employee-list",
          element: <EmployeList></EmployeList>
        },
        {
          path: "/edit-employee/:id",
          element: <EditEmployee></EditEmployee>
        },
        {
          path: "/preview-employee/:id",
          element:<ViewProfile></ViewProfile>
        },
    
        {
          path: "/create-task",
          element:<CreateTask></CreateTask>
        },
        {
          path: "/task-list",
          element:<TaskList></TaskList>
        }
      ]
    }
  ]);

  return (
    <>
      <EmployeeContext>
     
        <RouterProvider router={router} />
        
      </EmployeeContext>

    </>
  )
}

export default App
