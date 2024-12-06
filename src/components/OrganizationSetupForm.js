import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const OrganizationSetupForm = () => {
  const [formData, setFormData] = useState({
    organizationName: '',
    industry: '',
    location: '',
    state: '',
    street1: '',
    street2: '',
    city: '',
    postalCode: '',
    currency: '',
    language: '',
    timezone: '',
    gstin: '',
    invoicingMethod: '',
    isGstRegistered: false,
    showAddressFields: false,
  });
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const toggleAddressFields = () => {
    setFormData((prevData) => ({
      ...prevData,
      showAddressFields: !prevData.showAddressFields,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation check
    if (!formData.organizationName) {
      setError("Organization Name is required.");
      return;
    }
    if (!formData.industry) {
      setError("Industry is required.");
      return;
    }
    setError(''); // Clear error if validation passes
    console.log(formData); // Replace with your form submission logic
  };

  const states = [
    "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    // Add other states as needed
  ];

  const timeZones = [
    "UTC-12:00 International Date Line West",
    "UTC-11:00 Coordinated Universal Time-11",
    // Add other time zones as needed
  ];

  return (
    <section className="m-3">
      <div className="d-flex align-items-center justify-content-center py-5">
        <form className="col-12 col-sm-5" onSubmit={handleSubmit}>
          <div className="text-center">
            <h3 className="mb-5">Organization Setup</h3>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className="mb-3">
            <label htmlFor="organizationName" className="form-label">Organization Name</label>
            <input
              type="text"
              className="form-control"
              id="organizationName"
              name="organizationName"
              value={formData.organizationName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="industry" className="form-label">Industry</label>
            <input
              type="text"
              className="form-control"
              id="industry"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              required
            />
          </div>
          <div className="my-3 row">
            <div className="col-md-6">
              <label htmlFor="location" className="form-label">Organization Location</label>
              <input
                type="text"
                className="form-control"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="state" className="form-label">State/Union Territory</label>
              <select
                className="form-select"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
              >
                <option value="" disabled>Select State/Union Territory</option>
                {states.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="my-3 add-address" onClick={toggleAddressFields}>
            <img src="img/plus.png" alt="" width="15px" /><span> Add Organization Address</span>
          </div>
          {formData.showAddressFields && (
            <div className="additional-address my-4">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="street1"
                  name="street1"
                  placeholder="Street 1"
                  value={formData.street1}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="street2"
                  name="street2"
                  placeholder="Street 2"
                  value={formData.street2}
                  onChange={handleChange}
                />
              </div>
              <div className="row">
                <div className="col-md-6 my-3">
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 my-3">
                  <input
                    type="text"
                    className="form-control"
                    id="postalCode"
                    name="postalCode"
                    placeholder="ZIP/Postal code"
                    value={formData.postalCode}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          )}
          <div className="my-3 row">
            <div className="col-md-6">
              <label htmlFor="currency" className="form-label">Currency</label>
              <input
                type="text"
                className="form-control"
                id="currency"
                name="currency"
                value={formData.currency}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="language" className="form-label">Language</label>
              <select
                className="form-select"
                id="language"
                name="language"
                value={formData.language}
                onChange={handleChange}
              >
                <option value="" disabled>Select Language</option>
                <option value="English">English</option>
                {/* Add more languages as needed */}
              </select>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="timezone" className="form-label">Time Zone</label>
            <select
              className="form-select"
              id="timezone"
              name="timezone"
              value={formData.timezone}
              onChange={handleChange}
            >
              <option value="" disabled>Select Time Zone</option>
              {timeZones.map((zone) => (
                <option key={zone} value={zone}>{zone}</option>
              ))}
            </select>
          </div>
          <div className="row justify-content-between my-4">
            <div className="col-md-6">
              <label className="form-label">Is this business registered for GST?</label>
              <input
                type="text"
                className="form-control"
                id="gstin"
                name="gstin"
                placeholder="Enter your GSTIN"
                value={formData.gstin}
                onChange={handleChange}
                disabled={!formData.isGstRegistered} // Only enable if registered
              />
            </div>
            <div className="col-md-2">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="isGstRegistered"
                  name="isGstRegistered"
                  checked={formData.isGstRegistered}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="isGstRegistered">
                  {formData.isGstRegistered ? 'Yes' : 'No'}
                </label>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">How are you managing invoicing currently?</label>
            <input
              type="text"
              className="form-control"
              id="invoicingMethod"
              name="invoicingMethod"
              value={formData.invoicingMethod}
              onChange={handleChange}
            />
          </div>
          <div className="mt-5 mb-2 row justify-content-start final-btn">
            <div className="col-3">
              <button type="submit" className="btn btn-primary login">Get Started</button>
            </div>
            <div className="col-3">
              <a href="login.html">
                <button type="button" className="btn btn-secondary login">Go Back</button>
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default OrganizationSetupForm;
