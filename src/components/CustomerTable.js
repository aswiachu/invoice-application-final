import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomerTable = () => {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'John Doe', contact: '1234567890', email: 'john@example.com', address: '123 Elm St', gst: 'GST123' },
    // Add more sample customers as needed
  ]);
  const [search, setSearch] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  
  // State for new customer details
  const [newCustomer, setNewCustomer] = useState({
    name: '',
    contact: '',
    email: '',
    address: '',
    gst: ''
  });

  const handleDelete = (id) => {
    setCustomers(customers.filter(customer => customer.id !== id));
  };

  const handleAddCustomer = () => {
    const newId = customers.length ? Math.max(customers.map(c => c.id)) + 1 : 1; // Generate new ID
    setCustomers([...customers, { id: newId, ...newCustomer }]);
    setNewCustomer({ name: '', contact: '', email: '', address: '', gst: '' }); // Reset fields
    setShowAddModal(false);
  };

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2>Customer List</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by customer name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <button className="btn btn-primary mb-3" onClick={() => setShowAddModal(true)}>
        Add New Customer
      </button>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Contact Number</th>
            <th>Email</th>
            <th>Address</th>
            <th>GST Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map(customer => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.contact}</td>
              <td>{customer.email}</td>
              <td>{customer.address}</td>
              <td>{customer.gst}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(customer.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {showAddModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Customer</h5>
                <button type="button" className="close" onClick={() => setShowAddModal(false)}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {/* Input fields remain the same */}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowAddModal(false)}>Close</button>
                <button type="button" className="btn btn-primary" onClick={handleAddCustomer}>Add Customer</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerTable;
