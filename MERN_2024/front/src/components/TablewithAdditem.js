import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TableWithAddItem = () => {
  const [items, setItems] = useState([]);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  const handleAddItem = () => {
    const newItem = { id, name, description, status, category };
    setItems([...items, newItem]);
    // Clear the input fields after adding an item
    setId('');
    setName('');
    setDescription('');
    setStatus('');
    setCategory('');
  };

  const filteredItems = items.filter(item => {
    if (!searchTerm && !category) return true;
    if (searchTerm && !category) return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    if (!searchTerm && category) return item.category === category;
    return item.name.toLowerCase().includes(searchTerm.toLowerCase()) && item.category === category;
  });

  return (
    <div className="container mt-5">
      <div className="row mb-3">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col">
          <label htmlFor="category" className="form-label">Category</label>


        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-primary" onClick={handleAddItem}>Add Product</button>
        </div>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
            <th scope="col">Category</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.status}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableWithAddItem;
