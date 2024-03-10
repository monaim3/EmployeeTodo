import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { EmployeContext } from '../Context/EmployeeContext';

const EditEmployee = () => {
    const {updateEmployee,employees}=useContext(EmployeContext)
   const {id}=useParams()
   const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const edit=(data)=>{
      updateEmployee({data,id})

  }
  useEffect(()=>{
    const findEmploye=employees.find((item)=>item._id === id)
    console.log("findEmploye",findEmploye)
    setValue("name",findEmploye?.name)
    setValue("employeId",findEmploye?.employeId)
    setValue("designation",findEmploye?.designation)
    setValue("email",findEmploye?.email)
    setValue("phone",findEmploye?.phone)
    setValue("isAvailble",findEmploye?.isAvailble  )
  },[id])
    return (
        <div>
            <h1>Edit Employee:</h1>

            <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
                <form className="card-body" onSubmit={handleSubmit(edit)} >
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

export default EditEmployee;