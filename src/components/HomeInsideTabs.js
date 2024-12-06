import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'; // Keep only the used icon
import './sidebarStyle.css';
import { useNavigate } from 'react-router-dom';

const Tabs = () => {
  const navigate = useNavigate();
  const handleCreateInvoice = () => {
    navigate('/createInvoice');
  }

  const [activeTab, setActiveTab] = useState('invoices');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'invoices':
        return (
          <div className='text-center my-5'>
            <h6 className='fs-15'>View Your Receivables Summary</h6>
            <p className='font-size'>Keep an eye on current and overdue amounts your customers owe you.</p>
            <button className="btn bg-dark text-white dark-btn font-size" onClick={handleCreateInvoice}>
              <FontAwesomeIcon icon={faPlus} />
              <span> Create Invoice</span>
            </button>
          </div>
        );
      case 'quotes':
        return (
          <div className='text-center my-5'>
            <h6 className='fs-15'>Create a Quote</h6>
            <p className='font-size'>Send quotes to your customer, which they can either accept or decline.</p>
            <button className="btn bg-dark text-white dark-btn font-size">
              <FontAwesomeIcon icon={faPlus} />
              <span> Create Quote</span>
            </button>
          </div>
        );
      case 'expenses':
        return (
          <div className='text-center my-5'>
            <h6 className='fs-15'>Record Expenses</h6>
            <p className='font-size'>Record mileage expenses, track expenses across categories, and invoice billable expenses.</p>
            <button className="btn bg-dark text-white dark-btn font-size">
              <FontAwesomeIcon icon={faPlus} />
              <span> Create Expense</span>
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="tabs-container">
      <h4 className='mx-3 mb-2 fs-15'>Recent Transaction</h4>
      <ul className="nav-tabs d-flex justify-content-around list-unstyled border-0">
        <li className={`nav-tab ${activeTab === 'invoices' ? 'active' : ''}`} onClick={() => handleTabClick('invoices')}>
          <button className="py-1 px-2 tabs-btn font-size">Invoices</button>
        </li>
        {/* <li className={`nav-tab ${activeTab === 'quotes' ? 'active' : ''}`} onClick={() => handleTabClick('quotes')}>
          <button className="py-1 px-2 tabs-btn font-size">Quotes</button>
        </li>
        <li className={`nav-tab ${activeTab === 'expenses' ? 'active' : ''}`} onClick={() => handleTabClick('expenses')}>
          <button className="py-1 px-2 tabs-btn font-size">Expenses</button>
        </li> */}
      </ul>
      <section className="tab-content bg-light mx-2 py-3 my-4">
        {renderContent()}
      </section>
    </div>
  );
};

export default Tabs;
