import React, { useState } from 'react';
import employeeData from '../assets/employeeData.json';

const Employee = () => {
    const [employees, setEmployees] = useState(employeeData.employees);
    const [employeeInfo, setEmployeeInfo] = useState(0);

    const handleDeleteEmployee = (i) => {
        const updatedEmployees = employees.filter((employee, index) => index !== i);
        setEmployees(updatedEmployees);
        if (employeeInfo === i) {
            setEmployeeInfo(0);
        } else if (employeeInfo > i) {
            setEmployeeInfo(employeeInfo - 1);
        }
    };


    return (
        <div className='w-[100vw] h-[100vh] bg-red-100'>
            <div className='h-[10%] flex justify-between items-center px-2'>
                <p className='text-xl font-bold uppercase py-4'>Employee Database Management</p>
                <button className='border-2 px-2 py-2 rounded-xl bg-green-400'>
                    Add Employee
                </button>
            </div>

            <div className='h-[89%] w-full flex'>
                <div className="employee_list w-[40%] overflow-scroll border-2 border-black">
                    {employees.map((emp, i) => (
                        <div
                            onClick={() => setEmployeeInfo(i)}
                            className='flex justify-between items-center px-2 py-4 hover:bg-red-200'
                            key={i}>
                            <p>{emp.name}</p>
                            <p onClick={(e) => { e.stopPropagation(); handleDeleteEmployee(i); }}
                                className='hover:font-bold hover:text-red-600 cursor-pointer'>X</p>
                        </div>
                    ))}
                </div>

                <div className="employee_info w-[60%] border-2 border-black flex flex-col items-center py-4">
                    {employees.length > 0 && (
                        <>
                            <img
                                className='h-[50%] rounded-full'
                                src={employees[employeeInfo]?.image} alt="employee image" />

                            <div className='text-center h-[50%] py-8'>
                                <p>{employees[employeeInfo]?.name}</p>
                                <p>{employees[employeeInfo]?.email}</p>
                                <p>{employees[employeeInfo]?.salary}</p>
                                <p>{employees[employeeInfo]?.dob}</p>
                                <p>{employees[employeeInfo]?.contact}</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Employee;
