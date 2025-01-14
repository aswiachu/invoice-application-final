import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faAddressBook, faChevronDown, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const CreateCustomer = () => {
    const navigate = useNavigate();

    const invoiceTerms = [
        "Due on receipt",
        "Net 15",
        "Net 30",
        "Net 45",
        "Net 60",
        "Due end of the month",
        "Due end of the next month",
        "Custom"
    ];

    const currencyOptions = [
        "USD - United States Dollar",
        "EUR - Euro",
        "GBP - British Pound",
        "INR - Indian Rupee",
        "JPY - Japanese Yen",
        "CNY - Chinese Yuan",
        "AUD - Australian Dollar",
        "CAD - Canadian Dollar"
    ];

    const languageOptions = [
        "English",
        "Spanish",
        "French",
        "German",
        "Chinese",
        "Japanese",
        "Hindi",
        "Arabic",
        "Portuguese",
        "Russian"
    ];

    const handleBackClick = () => {
        navigate(-1); // Navigate back to the previous page
    };

    return (
        <div className='newInvoice-body pb-2'>
            <div className='d-flex align-items-center justify-content-center py-3 px-4 newInvoice-topBar sticky-top'>
                <div className='w-75'>
                    <div className='d-flex align-items-center justify-content-start'>
                        <FontAwesomeIcon icon={faArrowLeft} onClick={handleBackClick} />
                        <h6 className='mx-3 mb-0 font-size'>New Customer</h6>
                    </div>
                </div>
                <div className='w-25'>
                    <div className='d-flex align-items-center justify-content-end'>
                        <FontAwesomeIcon icon={faAddressBook} className='mx-3' />
                        <span className='font-size'>Save</span>
                    </div>
                </div>
            </div>

            <div className='bg-white m-2 border rounded px-3 py-2'>
                <h5 className='font-size'>Customer Information</h5>
                <div className='d-flex flex-column my-2 mb-3 '>
                    <label className='label-clr-size required'>Customer Type</label>
                    <div className='d-flex align-item-center justify-content-start my-2'>
                        <label className='w-50'>
                            <div className='d-flex align-item-center justify-content-start'>
                                <input type='radio' value="Business" />
                                <span className='font-size mx-2'>Business</span>
                            </div>
                        </label>
                        <label className='w-50'>
                            <div className='d-flex align-item-center justify-content-start'>
                                <input type='radio' value="Individual" />
                                <span className='font-size mx-2'>Individual</span>
                            </div>
                        </label>
                    </div>
                </div>
                <div className='d-flex'>
                    <div className='w-25'>
                        <div className='d-flex flex-column my-2 mb-3 '>
                            <label className='label-clr-size required'>Salutation</label>
                            <input
                                type="text"
                                className="font-size input-border border-top-0 border-start-0 border-end-0"
                                id="Salutation"
                                name="Salutation"
                            />
                        </div>
                    </div>
                    <div className='w-75'>
                        <div className='d-flex flex-column my-2 mb-3 ms-3'>
                            <label className='label-clr-size required'>First Name</label>
                            <input
                                type="text"
                                className="font-size input-border border-top-0 border-start-0 border-end-0"
                                id="FirstName"
                                name="FirstName"
                            />
                        </div>
                    </div>

                </div>

                <div className='d-flex flex-column my-2 mb-3 '>
                    <label className='label-clr-size required'>Last Name</label>
                    <input
                        type="text"
                        className="font-size input-border border-top-0 border-start-0 border-end-0"
                        id="LastName"
                        name="LastName"
                    />
                </div>

                <div className='d-flex flex-column my-2 mb-3 '>
                    <label className='label-clr-size required'>Customer Name</label>
                    <input
                        type="text"
                        className="font-size input-border border-top-0 border-start-0 border-end-0"
                        id="CustomerName"
                        name="CustomerName"
                    />
                </div>

                <div className='d-flex flex-column my-2 mb-3 '>
                    <label className='label-clr-size required'>Customer Display Name <span class="text-danger">*</span></label>
                    <input
                        type="text"
                        className="font-size input-border border-top-0 border-start-0 border-end-0"
                        id="CustomerDisplayName"
                        name="CustomerDisplayName"
                    />
                </div>

                <div className='d-flex flex-column my-2 mb-3 '>
                    <label className='label-clr-size required'>Email</label>
                    <input
                        type="text"
                        className="font-size input-border border-top-0 border-start-0 border-end-0"
                        id="Email"
                        name="Email"
                    />
                </div>

                <div className='d-flex gap-3'>
                    <div className='w-50'>
                        <div className='d-flex flex-column my-2 mb-3 '>
                            <label className='label-clr-size required'>Phone</label>
                            <input
                                type="phone"
                                className="font-size input-border border-top-0 border-start-0 border-end-0"
                                id="Phone"
                                name="Phone"
                            />
                        </div>
                    </div>
                    <div className='w-50'>
                        <div className='d-flex flex-column my-2 mb-3 '>
                            <label className='label-clr-size required'>Mobile</label>
                            <input
                                type="phone"
                                className="font-size input-border border-top-0 border-start-0 border-end-0"
                                id="Mobile"
                                name="Mobile"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-white m-2 border rounded px-3 py-2'>
                <h5 className='font-size'>Other Details</h5>

                <div className="d-flex flex-column my-2 mb-3">
                    <label htmlFor="currencyOptions" className="label-clr-size required">Currency<span className="text-danger">*</span></label>
                    <div className="input-with-icon position-relative">
                        <input
                            list="currencyOptionsList"
                            id="currencyOptions"
                            name="currencyOptions"
                            className="font-size input-border border-top-0 border-start-0 border-end-0 w-100"
                        />
                        <FontAwesomeIcon icon={faChevronDown} className="icon-right font-size" />
                    </div>
                    <datalist id="currencyOptionsList">
                        {currencyOptions.map((term, index) => (
                            <option key={index} value={term} />
                        ))}
                    </datalist>
                </div>

                <div className="d-flex flex-column my-2 mb-3">
                    <label htmlFor="invoiceTerms" className="label-clr-size required">Payment Terms <span className="text-danger">*</span></label>
                    <div className="input-with-icon position-relative">
                        <input
                            list="invoiceTermsList"
                            id="invoiceTerms"
                            name="invoiceTerms"
                            className="font-size input-border border-top-0 border-start-0 border-end-0 w-100"
                        />
                        <FontAwesomeIcon icon={faChevronDown} className="icon-right font-size" />
                    </div>
                    <datalist id="invoiceTermsList">
                        {invoiceTerms.map((term, index) => (
                            <option key={index} value={term} />
                        ))}
                    </datalist>
                </div>

                <div className='d-flex flex-column my-2 mb-3'>
                    <label className='label-clr-size required'>Enable Portal?</label>
                    <div className='d-flex my-2'>
                        <input
                            type="checkbox"
                            className="font-size mx-2"
                            id="EnablePortal"
                            name="EnablePortal"
                        />
                        <span className='font-size'>Allow potal access for this customer</span>
                    </div>
                </div>

                <div className="d-flex flex-column my-2 mb-3">
                    <label htmlFor="languageOptions" className="label-clr-size required">Portal languages <span className="text-danger">*</span></label>
                    <div className="input-with-icon position-relative">
                        <input
                            list="languageOptionsList"
                            id="languageOptions"
                            name="languageOptions"
                            className="font-size input-border border-top-0 border-start-0 border-end-0 w-100"
                        />
                        <FontAwesomeIcon icon={faChevronDown} className="icon-right font-size" />
                    </div>
                    <datalist id="languageOptionsList">
                        {languageOptions.map((term, index) => (
                            <option key={index} value={term} />
                        ))}
                    </datalist>
                </div>

                <div className='clr-blue fs-13'>
                    <p>Add Websites & Social</p>
                </div>

            </div>

            <div className='bg-white clr-blue m-2 border rounded px-3 py-3'>
                <FontAwesomeIcon icon={faCirclePlus} />
                <span className='font-size mx-2'>Add Billing & Shipping address</span>
            </div>

            <div className='bg-white clr-blue m-2 border rounded px-3 py-3'>
                <FontAwesomeIcon icon={faCirclePlus} />
                <span className='font-size mx-2'>Add Contact Person</span>
            </div>

            <div className='bg-white mx-2 mt-2 border rounded px-3 py-2'>
                <div className='d-flex flex-column my-2 mb-3'>
                    <label className='label-clr-size required'>Remarks (For Internal Use)</label>
                    <input
                        type="text"
                        className="font-size input-border border-top-0 border-start-0 border-end-0"
                        id="Terms & Condition"
                        name="Terms & Condition"
                    />
                </div>
            </div>
        </div>
    )
}

export default CreateCustomer
