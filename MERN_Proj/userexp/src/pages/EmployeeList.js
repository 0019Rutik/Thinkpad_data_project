import { useState, useEffect } from 'react';
import './EmployeeList.css';
import { NavLink } from 'react-router-dom';

export const EmployeeList = () => {
    const [employeedata, setEmployeedata] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('api/auth/getEmployee')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Parse the JSON response
            })
            .then(data => {
                console.log("my data");
                console.log(data); // Log the parsed JSON data
                setEmployeedata(data); // Update state with the parsed JSON data
            })
            .catch(error => {
                console.error('Error fetching employee data:', error);
            });
    }, []);
    // Empty dependency array means this effect runs only once after the initial render

    // Function to handle employee deletion
    // const handleDelete = async (id) => {
    //     try {
    //         const response = await fetch(`http://localhost:3000/api/auth/delete/${id}`, {
    //             method: 'DELETE'
    //         });

    //         if (!response.ok) {
    //             throw new Error('Failed to delete employee');
    //         }

    //         // Remove the deleted employee from the list
    //         // setEmployees(employees.filter(employee => employee._id !== id));
    //     } catch (error) {
    //         console.error('Error deleting employee:', error);
    //         // Handle error, e.g., show error message to the user
    //     }
    // }

    // const filteredEmployees = employees.filter(employee =>
    //     employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    // );

    const filteredEmployees = employeedata.length > 0 ? employeedata.filter(employee =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    
      ) : []; 

    return (
        <div className="employee-list">
            <div className="header">
                <h2>Employee List</h2>
                <div className="search">
                    <input
                        type="text"
                        placeholder="Search by name"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="total-count">Total Employees: {employeedata.length}</div>
                <NavLink to="/CreateEmployee" className="create-link">Create Employee</NavLink>
            </div>
          
            <table>
                <thead>
                    <tr>
                        <th>Unique ID</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile Number</th>
                        <th>Designation</th>
                        <th>Gender</th>
                        <th>Course</th>
                        <th>Create Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   

                     {filteredEmployees.forEach(employee => (
                        
                        <tr key= {employee.id}>  
                            <td>${employee.id}</td>
                            <td><img src={employee.image} alt={employee.name} /></td>
                            <td>$${employee.name}</td>
                            <td>${employee.email}</td>
                            <td>${employee.mobileNumber}</td>
                            <td>${employee.designation}</td>
                            <td>${employee.gender}</td>
                            <td>${employee.courses}</td>
                            <td>${employee.createdate}</td>
                            <td>
                                <NavLink to="/EditEmployee" className="action-link">Edit</NavLink>
                                {/* <button onClick={() => handleDelete(employee._id)} className="action-btn">Delete</button> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
