import React, { useState } from 'react';
import EmployeeEdit from './EmployeeEdit';
    function Foreman() {
        const [jobCodes, setJobCodes] = useState([]);
        const [newJobCode, setNewJobCode] = useState('');
      

        const handleAddJobCode = (e) => {
            e.preventDefault();
            if (newJobCode.trim() !== '') {
                const newCode = {
                    id: Date.now(),
                    code: newJobCode.trim()
                };
                setJobCodes([...jobCodes, newCode]);
                setNewJobCode('');
            }
        };

        const handleDeleteJobCode = (id) => {
            setJobCodes(jobCodes.filter((jobCode) => jobCode.id !== id));
        };

        return (
            <>
                <h2>Job Codes</h2>
                {/* Add Job Code */}
                <form onSubmit={handleAddJobCode}>
                    <input
                        type="text"
                        placeholder="Enter job code"
                        value={newJobCode}
                        onChange={(e) => setNewJobCode(e.target.value)}
                    />
                    <button type="submit">Add</button>
                </form>

                {/* View Job Codes */}
                <ul>
                    {jobCodes.map((jobCode) => (
                        <li key={jobCode.id}>
                            {jobCode.code}
                            <button onClick={() => handleDeleteJobCode(jobCode.id)}>Delete</button>
                        </li>
                    ))}
                </ul>

                {/* Rest of the code */}
                {/* ... */}
                <EmployeeEdit />
            </>
        );
    }

    export default Foreman;
