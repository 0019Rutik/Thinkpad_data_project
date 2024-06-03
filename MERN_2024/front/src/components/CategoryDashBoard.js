// Dashboard.jsx

import React, { useState } from 'react';
import './CategoryDashBoard.css';

const CategoryDashboard = () => {
    const initialFormData = {
        id: '',
        name: '',
        packsize: '',
        category: '',
        mrp: '',
        image: '',
        status: ''
    };

    const [formData, setFormData] = useState(initialFormData);
    const [data, setData] = useState([]);
    const [searchCategory, setSearchCategory] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAdd = () => {
        setData([...data, formData]);
        setFormData(initialFormData);
    };

    const handleEdit = (index) => {
        // Handle edit functionality here
        console.log('Edit item at index:', index);
    };

    const handleDelete = (index) => {
        const newData = [...data];
        newData.splice(index, 1);
        setData(newData);
    };

    const filteredData = data.filter(item =>
        item.category.toLowerCase().includes(searchCategory.toLowerCase())
    );

    return (
        <div className="dashboard-container">
            <h2>Dashboard</h2>
            <div className="search-bar">
                <label htmlFor="category">Category:</label>
                <input
                    type="text"
                    id="category"
                    value={searchCategory}
                    onChange={(e) => setSearchCategory(e.target.value)}
                />
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Pack Size</th>
                        <th>Category</th>
                        <th>MRP</th>
                        <th>Image</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.packsize}</td>
                            <td>{item.category}</td>
                            <td>{item.mrp}</td>
                            <td>{item.image}</td>
                            <td>{item.status}</td>
                            <td>
                                <button onClick={() => handleEdit(index)}>Edit</button>
                                <button onClick={() => handleDelete(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="add-form">
                <h3>Add Item</h3>
                <input
                    type="text"
                    placeholder="ID"
                    name="id"
                    value={formData.id}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Pack Size"
                    name="packsize"
                    value={formData.packsize}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="MRP"
                    name="mrp"
                    value={formData.mrp}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Image"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                />
                <button onClick={handleAdd}>Add</button>
            </div>
        </div>
    );
};

export default CategoryDashboard;
