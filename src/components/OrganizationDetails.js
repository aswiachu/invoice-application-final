import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faLocationDot, faPlus, faLocationCrosshairs, faAngleDown, faAngleUp, faLock } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import { State } from 'country-state-city';

const OrganizationDetails = () => {
    const { state } = useLocation();
    const { formData, countries } = state || {};

    let states = [];
    if (formData && formData.country && countries) {
        const countryDetails = countries.find(
            (item) => item.name === formData.country
        );
        states = State.getStatesOfCountry(countryDetails.isoCode);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const [currentFormData, setCurrentFormData] = useState(
        {
            state: '',
            GST: false,
            currency: 'INR - Indian Rupee',
            timeZone: '(GMT 5:30) India Standard Time'
        }
    );
    const [updatedFormData, setUpdatedFormData] = useState(formData);

    const handleSubmit = () => {

    }

    const [addOrganization, setAddOrganization] = useState(false);
    const [moreInformation, setMoreInformation] = useState(false);

    const fiscalYears = [
        "January - December",
        "February - January",
        "March - February",
        "April - March",
        "May - April",
        "June - May",
        "July - June",
        "August - July",
        "September - August",
        "October - September",
        "November - October",
        "December - November"
    ];


    return (
        <div className="d-flex align-items-center justify-content-center min-vh-100">
            <form onSubmit={handleSubmit} className="col-12 col-sm-8 col-md-6 col-lg-6 col-xl-6 my-5 border border-1 rounded shadow-sm p-4">
                <div>
                    <div className='mb-4'>
                        <h5>Welcome aboard, <span>{formData.name}</span></h5>
                        <p>Enter your organization details to get started with Achu Invoice.</p>
                    </div>

                    {/* Organization Name */}
                    <div>
                        <label className='m-0 font-size'>Organization Name<span className='text-danger'> *</span></label>
                        <div className="border border-1 border-secondary-subtle rounded px-3 py-1 border-dark d-flex align-items-center justify-content-center">
                            <div className="d-flex align-items-center justify-content-center">
                                <FontAwesomeIcon icon={faBuilding} />
                            </div>
                            <input
                                type="text"
                                className="form-control border-0"
                                id="organizationName"
                                name="organizationName"
                                value={formData.companyName || ''}
                                required
                                placeholder="Organization Name"
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {!addOrganization && <div className='mb-3' style={{ cursor: 'pointer' }}>
                        <span onClick={() => { setAddOrganization(true) }} className='text-primary font-size'><FontAwesomeIcon icon={faPlus} /> Add Organization Address</span>
                    </div>}

                    {addOrganization && <div className='my-3'>
                        <div>
                            <label className='m-0 font-size'>Street 1</label>
                            <div className="mb-3 border border-1 border-secondary-subtle rounded py-1 border-dark d-flex align-items-center justify-content-center">
                                <input
                                    type="text"
                                    className="form-control border-0"
                                    id="street 1"
                                    name="street 1"
                                    required
                                    placeholder="Street address"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label className='m-0 font-size'>Street 2</label>
                            <div className="mb-3 border border-1 border-secondary-subtle rounded py-1 border-dark d-flex align-items-center justify-content-center">
                                <input
                                    type="text"
                                    className="form-control border-0"
                                    id="street 1"
                                    name="street 1"
                                    required
                                    placeholder="Street address"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className='d-flex align-item-center'>
                            <div className='col-lg-6'>
                                <div className='me-2'>
                                    <label className='m-0 font-size'>Business Location <span className='text-danger'> *</span></label>
                                    <div className="mb-3 border border-1 border-secondary-subtle rounded px-3 py-1 border-dark d-flex align-items-center justify-content-center">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <FontAwesomeIcon icon={faLocationCrosshairs} />
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control border-0 bg-transparent"
                                            id="businessLocation"
                                            name="businessLocation"
                                            value={formData.country}
                                            placeholder="Business Location"
                                            disabled
                                        />
                                         <FontAwesomeIcon icon={faLock} />
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-6'>
                                <div className='ms-2'>
                                    <label className='m-0 font-size'>State/Province <span className='text-danger'> *</span></label>
                                    <div className="mb-3 border border-1 border-secondary-subtle rounded px-3 py-1 border-dark d-flex align-items-center justify-content-center">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <FontAwesomeIcon icon={faLocationDot} />
                                        </div>
                                        <select
                                            id="state"
                                            name="state"
                                            value={currentFormData.state || ''}
                                            onChange={handleChange}
                                            className="form-control border-0"
                                        >
                                            <option value="">-- Select State --</option>
                                            {states.map((state) => (
                                                <option key={state.isoCode} value={state.isoCode}>
                                                    {state.name}
                                                </option>
                                            ))
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='d-flex align-item-center'>
                            <div className='col-lg-6'>
                                <div className='me-2'>
                                    <label className='m-0 font-size'>City</label>
                                    <div className="mb-3 border border-1 border-secondary-subtle rounded py-1 border-dark d-flex align-items-center justify-content-center">
                                        <input
                                            type="text"
                                            className="form-control border-0 bg-transparent"
                                            id="City"
                                            name="City"
                                            placeholder="Enter your City"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-6'>
                                <div className='ms-2'>
                                    <label className='m-0 font-size'>Postal code</label>
                                    <div className="mb-3 border border-1 border-secondary-subtle rounded py-1 border-dark d-flex align-items-center justify-content-center">
                                        <input
                                            type="text"
                                            className="form-control border-0 bg-transparent"
                                            id="postalCode"
                                            name="postalCode"
                                            placeholder="Enter Postal code"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>}

                    {!addOrganization &&
                        <div className='d-flex align-item-center'>
                            <div className='col-lg-6'>
                                <div className='me-2'>
                                    <label className='m-0 font-size'>Business Location <span className='text-danger'> *</span></label>
                                    <div className="mb-3 border border-1 border-secondary-subtle rounded px-3 py-1 border-dark d-flex align-items-center justify-content-center">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <FontAwesomeIcon icon={faLocationCrosshairs} />
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control border-0 bg-transparent"
                                            id="businessLocation"
                                            name="businessLocation"
                                            value={formData.country}
                                            placeholder="Business Location"
                                            disabled
                                        />
                                        <FontAwesomeIcon icon={faLock} />
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-6'>
                                <div className='ms-2'>
                                    <label className='m-0 font-size'>State/Province <span className='text-danger'> *</span></label>
                                    <div className="mb-3 border border-1 border-secondary-subtle rounded px-3 py-1 border-dark d-flex align-items-center justify-content-center">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <FontAwesomeIcon icon={faLocationDot} />
                                        </div>
                                        <select
                                            id="state"
                                            name="state"
                                            value={currentFormData.state || ''}
                                            onChange={handleChange}
                                            className="form-control border-0"
                                        >
                                            <option value="">-- Select State --</option>
                                            {states.map((state) => (
                                                <option key={state.isoCode} value={state.isoCode}>
                                                    {state.name}
                                                </option>
                                            ))
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>}

                    <div className=''>
                        <div className='me-2'>
                            <div className="mb-3 border border-1 border-secondary-subtle rounded px-3 py-2 border-dark d-flex align-items-center flex-column">
                                <div className='col-12  d-flex align-items-center justify-content-between'>
                                    <p className='m-0 font-size'>Is this Business registered for GST ?</p>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input bg-dark-subtle" type="checkbox"
                                            id="disabledCheckbox1" autocomplete="off"
                                            checked={currentFormData.GST}
                                            onChange={() => {
                                                // Toggle the GST value between true and false
                                                setCurrentFormData({
                                                    ...currentFormData,
                                                    GST: !currentFormData.GST,
                                                })
                                            }} />
                                    </div>
                                </div>

                                {currentFormData.GST && <div className='col-12 mt-3 d-flex align-items-center justify-content-start flex-column'>
                                    <label className='m-0 col-12 font-size'>GSTIN</label>
                                    <input type='text' className='col-12 px-2 py-1 border rounded border-dark-subtle' />
                                </div>}
                            </div>
                        </div>
                    </div>

                    <div className='text-primary font-size mb-3' style={{ cursor: 'pointer' }} onClick={() => setMoreInformation(!moreInformation)}>
                        <span >More Information <FontAwesomeIcon icon={moreInformation ? faAngleUp : faAngleDown} className='px-1 pt-1' /></span>
                    </div>

                    {moreInformation && <div className="mb-3 border border-1 border-secondary-subtle rounded px-3 py-2 border-dark">
                        <div>
                            <label className='m-0 font-size'>Currency <span className='text-danger'> *</span></label>
                            <div className='d-flex align-utm-center justify-content-between '>
                                <input
                                    type="text"
                                    className="form-control bg-transparent px-0 border-0 font-size"
                                    id="street 1"
                                    name="street 1"
                                    required
                                    value={currentFormData.currency}
                                    placeholder="Street address"
                                    onChange={handleChange}
                                    disabled
                                />
                                <FontAwesomeIcon icon={faLock} />
                            </div>
                        </div>

                        <div>
                            <label className='m-0 font-size'>Fiscal Year <span className='text-danger'> *</span></label>
                            <div className='d-flex align-utm-center justify-content-between '>
                                <select
                                    className='form-control px-0 font-size border-0 fw-bold '>
                                    {fiscalYears.map((year, index) => {
                                        return <option key={index} value={year}>{year}</option>
                                    })}
                                </select>
                                <FontAwesomeIcon icon={faAngleDown} className='font-size fw-bold' />
                            </div>
                        </div>



                        <div>
                            <label className='m-0 font-size'>Time Zone <span className='text-danger'> *</span></label>
                            <div className='d-flex align-utm-center justify-content-between '>
                                <input
                                    type="text"
                                    className="form-control bg-transparent px-0 border-0 font-size"
                                    id="street 1"
                                    name="street 1"
                                    required
                                    value={currentFormData.timeZone}
                                    placeholder="Street address"
                                    onChange={handleChange}
                                    disabled
                                />
                                <FontAwesomeIcon icon={faLock} />
                            </div>
                        </div>
                    </div>}

                    <button type="submit" className="btn btn-primary px-4 w-100 py-2 fw-bold" >Continue</button>
                </div>
            </form>

        </div>
    );
}

export default OrganizationDetails;
