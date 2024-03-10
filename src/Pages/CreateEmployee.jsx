import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { EmployeContext } from '../Context/EmployeeContext';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';

const CreateEmployee = () => {
    const {addEmployee}=useContext(EmployeContext)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    const createEmployee=(data)=>{
        addEmployee({...data,_id:uuidv4(), isAvailble:true})
        reset()
        Swal.fire({
            title: "Good job!",
            text: "Employee create Successfully",
            icon: "success"
          });
    }

  
    return (
        <div>
            <h1 className='text-center text-2xl font-semibold'>Create Employee List :</h1>

            <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
                <form className="card-body" onSubmit={handleSubmit(createEmployee)} >
                    <div className='flex items-center justify-between gap-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text ">Employee name</span>
                        </label>
                        <input  type="text" {...register("name")} placeholder="Employee name" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Employee Id</span>
                        </label>
                        <input type="text" {...register("employeId")} placeholder="Employee id" className="input input-bordered w-full"  required />
                       
                    </div>

                    </div>
                    <div className='flex items-center justify-between gap-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Designation</span>
                        </label>
                        <input type="text" {...register("designation")} placeholder="Designation" className="input input-bordered" required />
                       
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email Address </span>
                        </label>
                        <input type="email" {...register("email")} placeholder="Email Address " className="input input-bordered" required />
                       
                    </div>
                    </div>
                    <div className='flex items-center justify-between gap-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Phone </span>
                        </label>
                        <input type="text" {...register("phone")} placeholder="Phone " className="input input-bordered" required />
                       
                    </div>
                    <div className="form-control w-full mt-8">
                        <button type='submit' className="btn btn-primary">Submit</button>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateEmployee;