import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const CustomerTab = () => {
    const [activeTab, setActiveTab] = useState('all');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="">
            <section className=''>
                <div>
                    <ul className="list-unstyled d-flex align-items-center justify-content-center pt-3 mb-0 tab-navBar">
                        <li className={`col-4 text-center dash-child-tabs ${activeTab === 'all' ? 'active' : ''}`}>
                            <button className="px-2 pb-2 navTabsBtn font-size" onClick={() => handleTabClick('all')}>All</button>
                        </li>
                        <li className={`col-4 text-center dash-child-tabs ${activeTab === 'invoices' ? 'active' : ''}`}>
                            <button className="px-2 pb-2 navTabsBtn font-size" onClick={() => handleTabClick('invoices')}>Invoices</button>
                        </li>
                        <li className={`col-4 text-center dash-child-tabs ${activeTab === 'unbilled' ? 'active' : ''}`}>
                            <button className="px-2 pb-2 navTabsBtn font-size" onClick={() => handleTabClick('unbilled')}>Unbilled</button>
                        </li>

                    </ul>
                    <div className="bg-white d-flex justify-content-center align-items-center py-5">
                        {activeTab === 'all' && (
                            <div className='text-center my-5 py-5'>
                                <FontAwesomeIcon icon={faUser} className="navTab-icons" />
                                <p className='font-size'>There is no expenses</p>
                            </div>
                        )}
                        {activeTab === 'invoices' && (
                            <div className='text-center my-5 py-5'>
                                <FontAwesomeIcon icon={faUser} className="navTab-icons" />
                                <p className='font-size'>There is no Invoiced expenses</p>
                            </div>
                        )}
                        {activeTab === 'unbilled' && (
                            <div className='text-center my-5 py-5'>
                                <FontAwesomeIcon icon={faUser} className="navTab-icons" />
                                <p className='font-size'>There is no unbilled expenses</p>
                            </div>
                        )}

                    </div>
                </div>
            </section>
        </div>
    );
};

export default CustomerTab;
