import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; 

const PaymentReceivedTab = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="">
                <section>
                    <div className='dash-child-tabs active pt-3 tab-navBar'>
                        <button className="px-2 pb-2 navTabsBtn mx-3" >All</button>
                        <div className="bg-white d-flex justify-content-center align-items-center py-5">
                            <div className='text-center  my-5 py-5'>
                                <FontAwesomeIcon icon={faUser} className="navTab-icons" />
                                <p className='font-size'>There are no active customers</p>
                                <button className="btn bg-dark text-white btn-create font-size dark-btn" onClick={() => {navigate('/createCustomer')}}>
                                    <FontAwesomeIcon icon={faPlus} /> New Customer</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default PaymentReceivedTab
