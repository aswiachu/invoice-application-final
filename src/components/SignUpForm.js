import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUser, faLock, faUserPlus, faBuilding, faGlobe, faPhone, faEnvelope, faXmark, faPencil } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { Country, State, City } from 'country-state-city';
import OtpInput from 'react-otp-input';


const SignUpForm = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    country: 'India',
    name: '',
    companyName: '',
    email: '',
    password: '',
    confirmPassword: '',
    countryCode: '',
    phoneNumber: '',
  });

  const [otp, setOtp] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const countries = Country.getAllCountries();

  useEffect(() => {
    if (formData.country) {

      const countryDetails = countries.find(
        (item) => item.name.toLowerCase() === formData.country.toLowerCase()
      );

      setFormData((prevData) => ({
        ...prevData,
        countryCode: countryDetails?.phonecode || '',
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        countryCode: '',
      }));
    }
  }, [formData.country]);

  const verifyMobileOTP = () => {
    setIsOTPOpen(true);
  }

  const [isOTPOpen, setIsOTPOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    verifyMobileOTP();

    setFormData({
      country: '',
      name: '',
      companyName: '',
      email: '',
      password: '',
      confirmPassword: '',
      countryCode: '',
      phoneNumber: ''
    });
  };




  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 flex-column">
      <form onSubmit={handleSubmit} className="col-12 col-sm-8 col-md-6 col-lg-4 col-xl-3 my-5 text-center border border-1 rounded shadow-sm p-4">
        <div className="text-center mb-4">
          <h5 className='my-3'>Create an account</h5>
          <FontAwesomeIcon icon={faUserPlus} size="3x" />
        </div>

        <div className="mb-3 border border-1 border-secondary-subtle rounded px-3 py-1 border-dark d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={faGlobe} />
          </div>
          <select
            className="form-control border-0"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            <option value="">- Select a Country -</option>
            {countries.map((country) => (
              <option key={country.isoCode} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3 border border-1 border-secondary-subtle rounded px-3 py-1 border-dark d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <input
            type="text"
            className="form-control border-0"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Name"
          />
        </div>

        <div className="mb-3 border border-1 border-secondary-subtle rounded px-3 py-1 border-dark d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={faBuilding} />
          </div>
          <input
            type="text"
            className="form-control border-0"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
            placeholder="Company Name"
          />
        </div>

        <div className="mb-3 border border-1 border-secondary-subtle rounded px-3 py-1 border-dark d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <input
            type="email"
            className="form-control border-0"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email Address"
          />
        </div>

        <div className="mb-3 border border-1 border-secondary-subtle rounded px-3 py-1 border-dark d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={faLock} />
          </div>
          <input
            type="password"
            className="form-control border-0"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Password"
          />
        </div>

        <div className="mb-3 border border-1 border-secondary-subtle rounded px-3 py-1 border-dark d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={faLock} />
          </div>
          <input
            type="password"
            className="form-control border-0"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            placeholder="Confirm Password"
          />
        </div>

        <div className="mb-3 border border-1 border-secondary-subtle rounded px-3 py-1 border-dark d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={faPhone} />
            <input
              className=" border-0"
              id="countryCode"
              name="countryCode"
              value={"+" + formData.countryCode}
              readOnly
              style={{ width: `${formData.countryCode.length + 2}ch` }}
            />
          </div>
          <input
            type="tel"
            className="form-control border-0 px-1"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            placeholder="Phone Number"
          />
        </div>

        <div className="text-center mt-4 mb-2">
          <button type="submit" className="btn btn-primary px-4 w-100 py-2 fw-bold" disabled={!formData.country || !formData.email || !formData.password || !formData.confirmPassword || !formData.phoneNumber}>Sign Up</button>
        </div>

        <div className='text-center'>
          <p className='fw-bold m-1 mt-4'>Or sign in using</p>
          <ul className="list-unstyled d-flex gap-2 justify-content-center ">
            <li>
              <FontAwesomeIcon icon={faGoogle} size="2x" />
            </li>
            <li>
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </li>
            <li>
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </li>
          </ul>
        </div>

        <div className="mb-2 text-center">
          <span className="form-text mt-0">
            Already have an account? <Link to="/login" className="fw-bold text-decoration-none">Login</Link>
          </span>
        </div>
      </form>

      {isOTPOpen && <form onSubmit={() => navigate('/login')} className="col-12 col-sm-8 col-md-6 my-5 text-center border border-1 rounded shadow-sm p-4 position-fixed">
        <div className='position-relative'>
          <h4 className="mb-4">Verify your phone number</h4>
          <p className='font-size'>We'll send a code to {formData.phoneNumber} <span className='text-primary'>Edit <FontAwesomeIcon icon={faPencil} className='text-white' /></span></p>
          <div className='d-flex align-item-center justify-content-center'>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span>-</span>}
              renderInput={(props) => (
                <input {...props} style={{ width: '30px', height: '30px', textAlign: 'center' }} />
              )}
            />
          </div>
          <FontAwesomeIcon icon={faXmark} className='close-icon' onClick={() => setIsOTPOpen(!isOTPOpen)} />
          <p className='font-size'>Haven't received it yet? <span className='text-primary' style={{ cursor: 'pointer' }}>Resend in </span></p>
          <button className='btn bg-primary text-white px-5' type=''>Verify</button>
        </div>
      </form>}
    </div>
  );
};

export default SignUpForm;
