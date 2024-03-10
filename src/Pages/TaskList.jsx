import React, { useContext } from 'react';
import { EmployeContext } from '../Context/EmployeeContext';

const TaskList = () => {
    const { employees, tasks, deleteTask, openModalForUpdate, openModalForReassign, modalInputValue, saveChanges, handleModalChange } = useContext(EmployeContext)

    return (
        <>
        <h2 className='text-2xl mt-6 font-bold text-center'>Task List</h2>
           <div className='flex items-center justify-center flex-col mt-6'>

           

            <div className="overflow-x-auto">
                <table className="table">
                
                    <thead>
                        <tr>
                            <th className='text-xl'>Task Name</th>
                            <th className='text-xl'>Assign to</th>

                            <th className='text-center text-xl'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks?.map((task, i) => (
                                <tr key={i}>
                                    <td>{task.name}</td>
                                    <td>{task.assignedTo}</td>

                                    <td className='flex gap-1'>
                                        <button onClick={() => deleteTask(task.id)} className='btn btn-error ml-4'>Delete</button>

                                        <button className="btn" onClick={() => { document.getElementById('my_modal_3').showModal(), openModalForUpdate(task.id) }}>Update</button>

                                        <button className='btn btn-secondary ml-4' onClick={() => { document.getElementById('my_modal_4').showModal(), openModalForReassign(task.id) }}>Reassign</button>

                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            {/* For Update Modal */}
            <dialog id="my_modal_3" className="modal p-4">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className='font-semibold text-2xl mb-4'>Update Your Task:</h3>
                    <input className='p-2 border-2' type="text" value={modalInputValue} onChange={handleModalChange} />
                    <button className='ml-4 btn btn-secondary' onClick={saveChanges}>Save</button>
                </div>
            </dialog>
            {/* for reassign modal */}
            <dialog id="my_modal_4" className="modal p-4">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className='font-semibold text-2xl mb-4'>Resign :</h3>
                    <div className='mt-2'>
                        <label htmlFor="" className='text-1xl'> Selecte Employee:</label>
                        <select className='select select-secondary w-full max-w-xs ml-4' value={modalInputValue} onChange={handleModalChange}>
                            <option value="" className='text-xl'>Select Employee</option>
                            {employees.map((employee, index) => (
                                employee?.isAvailble && <option key={index} value={employee.name}>{employee.name}</option>
                            ))}
                        </select>
                    </div>
                    <button className='ml-4 btn btn-secondary' onClick={saveChanges}>Save</button>
                </div>
            </dialog>
            </div>
        </>
    );
};

export default TaskList;