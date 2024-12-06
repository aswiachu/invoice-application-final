import React, { useState } from 'react';

const BusinessDetailsForm = () => {
  // State to handle form input values
  const [formData, setFormData] = useState({
    clientName: '',
    businessName: '',
    registrationNumber: '',
    businessType: '',
    phoneNumber: '',
    email: '',
    website: ''
  });

  // Handle change for all form inputs
  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  // Handle form submit (if needed)
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form-group">
      <h4>Personal Information</h4>
      <label htmlFor="clientName">Client Name:</label>
      <input
        type="text"
        className="form-control"
        id="clientName"
        placeholder="Enter client name"
        value={formData.clientName}
        onChange={handleChange}
      />
      
      <label htmlFor="businessName">Business Name:</label>
      <input
        type="text"
        className="form-control"
        id="businessName"
        placeholder="Enter business name"
        value={formData.businessName}
        onChange={handleChange}
      />
      
      <label htmlFor="registrationNumber">Business Registration Number:</label>
      <input
        type="text"
        className="form-control"
        id="registrationNumber"
        placeholder="Enter registration number"
        value={formData.registrationNumber}
        onChange={handleChange}
      />
      
      <label htmlFor="businessType">Business Type:</label>
      <select
        className="form-control"
        id="businessType"
        value={formData.businessType}
        onChange={handleChange}
      >
        <option value="">Select Business Type</option>
        <option value="Sole Proprietorship">Sole Proprietorship</option>
        <option value="Partnership">Partnership</option>
        <option value="Private Limited">Private Limited</option>
        <option value="Public Limited">Public Limited</option>
        <option value="LLP">LLP</option>
        <option value="Non-profit">Non-profit</option>
      </select>
      
      <label htmlFor="phoneNumber">Phone Number:</label>
      <input
        type="text"
        className="form-control"
        id="phoneNumber"
        placeholder="Enter phone number"
        value={formData.phoneNumber}
        onChange={handleChange}
      />
      
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        className="form-control"
        id="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
      />
      
      <label htmlFor="website">Website:</label>
      <input
        type="text"
        className="form-control"
        id="website"
        placeholder="Enter website URL"
        value={formData.website}
        onChange={handleChange}
      />

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default BusinessDetailsForm;
