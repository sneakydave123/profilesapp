import React, { useState } from 'react';

const EmployeeEdit = () => {
    const [employees, setEmployees] = useState([]);
    const [newEmployee, setNewEmployee] = useState('');

    const handleAddEmployee = () => {
        if (newEmployee.trim() !== '') {
            setEmployees([...employees, newEmployee]);
            setNewEmployee('');
        }
    };

    const handleDeleteEmployee = (index) => {
        const updatedEmployees = [...employees];
        updatedEmployees.splice(index, 1);
        setEmployees(updatedEmployees);
    };

    return (
        <div>
            <h1>Employee Edit</h1>
            <input
                type="text"
                value={newEmployee}
                onChange={(e) => setNewEmployee(e.target.value)}
                placeholder="Enter employee name"
            />


            
            <button onClick={handleAddEmployee}>Add Employee</button>
            <ul>
                {employees.map((employee, index) => (
                    <li key={index}>
                        {employee}
                        <button onClick={() => handleDeleteEmployee(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeEdit;