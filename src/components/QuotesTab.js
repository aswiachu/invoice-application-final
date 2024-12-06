import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus , faFileInvoice} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; 
    

const QuotesTab = () => {
  const navigate = useNavigate(); 

  const [activeTab, setActiveTab] = useState('draft');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  return (
    <div className="">
      <section className=''>
        <div>
          <ul className=" list-unstyled d-flex align-items-center justify-content-center pt-3 mb-0 tab-navBar">
            <li className={`col-3 text-center dash-child-tabs ${activeTab === 'draft' ? 'active' : ''}`}>
              <button className="px-2 pb-2 navTabsBtn font-size" onClick={() => handleTabClick('draft')}>Draft</button>
            </li>
            <li className={`col-3 text-center dash-child-tabs ${activeTab === 'sent' ? 'active' : ''}`}>
              <button className="px-2 pb-2 navTabsBtn font-size" onClick={() => handleTabClick('sent')}>Sent</button>
            </li>
            <li className={`col-3 text-center dash-child-tabs ${activeTab === 'accepted' ? 'active' : ''}`}>
              <button className="px-2 pb-2 navTabsBtn font-size" onClick={() => handleTabClick('accepted')}>Accepted</button>
            </li>
            <li className={`col-3 text-center dash-child-tabs ${activeTab === 'all' ? 'active' : ''}`}>
              <button className="px-2 pb-2 navTabsBtn font-size" onClick={() => handleTabClick('all')}>All</button>
            </li>
          </ul>
          <div className="bg-white d-flex justify-content-center align-items-center py-5">
            {activeTab === 'draft' && (
              <div className='text-center my-5 py-5'>
               <FontAwesomeIcon icon={faFileInvoice} className="navTab-icons" />
                <p className='font-size'>There are no draft quotes.</p>
                  <button className="btn bg-dark text-white btn-create dark-btn font-size" onClick={() => {navigate('/newQuote')}}> 
                  <FontAwesomeIcon icon={faPlus} className="icons"/>
                  <span> New Quotes</span>
                  </button>
              </div>
            )}
            {activeTab === 'sent' && (
              <div className='text-center my-5 py-5'>
                <FontAwesomeIcon icon={faFileInvoice} className="navTab-icons" />
                <p className='font-size'>There is no sent quotes.</p>
              </div>
            )}
            {activeTab === 'accepted' && (
              <div className='text-center my-5 py-5'>
                <FontAwesomeIcon icon={faFileInvoice} className="navTab-icons" />
                <p className='font-size'>There is no accepted quotes.</p>
              </div>
            )}
            {activeTab === 'all' && (
              <div className='text-center my-5 py-5'>
               <FontAwesomeIcon icon={faFileInvoice} className="navTab-icons" />
                <p className='font-size'>There is no quotes.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuotesTab;
