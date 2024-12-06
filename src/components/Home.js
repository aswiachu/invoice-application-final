import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoice, faUser, faReceipt, faPlus, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import Tabs from './HomeInsideTabs';
import sparkleImg from './img/sparkle.webp';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const IconCard = ({ icon, label , clr, bgClr, to}) => {
  const navigate = useNavigate();
  return (
    <div className="col-6 text-center" onClick={() => {navigate(to)}}>
      <div className="d-flex justify-content-center">
        <div className="bg-circle d-flex align-items-center justify-content-center" style={{backgroundColor: bgClr}}>
          <FontAwesomeIcon icon={icon} color={clr} />
          <FontAwesomeIcon icon={faCirclePlus} className='fa-circle'/>
        </div>
      </div>
      <p className="text-center m-0 font-size">{label}</p>
    </div>
  );
};

IconCard.propTypes = {
  icon: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
};

const Home = () => {
  const navigate = useNavigate();
  const handleCreateInvoice = () => {
    navigate('/createInvoice');
  }

  return (
    <main className=''>
      <div className="">
        <section className="d-flex justify-content-center py-3 mb-2 px-md-5">
          <div className="col-1">
            <img src={sparkleImg} alt="Sparkle" width="25" />
          </div>
          <div className="col-10">
            <h4 className='my-1 fs-17'>Welcome {"Aswitha"}</h4>
            <p className="m-0 font-size">Here&apos;s your organization overview</p>
          </div>
        </section>

        <section className="bg-light rounded mx-2 py-4 mb-3 py-md-5 px-md-5 border">
          <div className="d-flex align-items-center justify-content-around mx-4">
            <IconCard icon={faFileInvoice} label="New Invoices" clr={"#6f7cff"} bgClr={"rgb(237 237 237)"} to="/createInvoice"/>
            <IconCard icon={faUser} label="New Customers" clr={"#44db79"} bgClr={"rgb(228 246 229)"} to="/createCustomer"/>
            {/* <IconCard icon={faReceipt} label="New Expenses" clr={"#f04141"} bgClr={"rgb(248 225 225)"} to="/"/> */}
          </div>
        </section>

        <section className="bg-light rounded mx-2 py-4 px-3 mb-3 py-md-5 px-md-5 border">
          <div>
            <h6 className='fs-15'>View Your Receivables Summary</h6>
            <p className='font-size'>Keep an eye on current and overdue amounts your customers owe you.</p>
            <button className="btn bg-dark text-white font-size dark-btn" onClick={handleCreateInvoice}>
              <FontAwesomeIcon icon={faPlus} />
              <span> Create Invoice</span>
            </button>
          </div>
        </section>

        <section className="bg-light rounded mx-2 py-4 mb-3 px-md-5 py-md-5 border">
          <Tabs />
        </section>

        <section className="bg-light rounded mx-2 py-3 px-3 mb-3 px-md-5 border">
          <h6 className='fs-15'>Sales and Expenses</h6>
        </section>
        <section className="bg-light rounded mx-2 py-3 px-3 px-md-5 border">
          <h6 className='fs-15'>Top Expenses</h6>
        </section>
      </div>
    </main>
  );
};

export default Home;
