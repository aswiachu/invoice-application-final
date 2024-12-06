import React, { forwardRef } from 'react'; // Ensure forwardRef is imported
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHouse, 
  faUser, 
  faBagShopping, 
  faNoteSticky, 
  faFileInvoice, 
  faDownload, 
  faClipboard, 
  faChartColumn, 
  faGear, 
  faAngleLeft 
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Ensure Link is imported
import invoiceLogo from './img/invoice-icon.avif'; // Ensure the image path is correct
import './sidebarStyle.css'; // Your CSS for styling

const SidebarItem = ({ to, icon, text }) => (
  <li className="my-4 ms-4">
    <Link to={to} className="text-decoration-none text-black">
      <div className="d-flex align-items-center">
        <div className="icon-wrapper col-2">
          <FontAwesomeIcon icon={icon} className="" color='black' />
        </div>
        <div className="text-wrapper col-10 font-size">
          <span>{text}</span>
        </div>
      </div>
    </Link>
  </li>
);

SidebarItem.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};

const Sidebar = forwardRef(function Sidebar({ onClose }, ref) {
  return (
    <aside className="bg-white vh-100 sidebarNav-body" ref={ref}>
      <ul className="sidebarNav-ul p-0 list-unstyled">
        <li className='pt-4 ms-3'>
          <Link to="/" className="text-decoration-none d-flex align-items-center text-black">
            <img src={invoiceLogo} alt="Invoice Logo" width="30px" height="30px" className="rounded-circle" />
            <h3 className="d-inline mx-2">Invoice</h3>
          </Link>
        </li>
        <li className=''>
          <SidebarItem to="/dashboard" icon={faHouse} text="Home" />
          <SidebarItem to="/dashboard/customers" icon={faUser} text="Customers" />
          <SidebarItem to="/dashboard/items" icon={faBagShopping} text="Items" />
          {/* <SidebarItem to="/dashboard/quotes" icon={faNoteSticky} text="Quotes" /> */}
          <SidebarItem to="/dashboard/invoice" icon={faFileInvoice} text="Invoice" />
          {/* <SidebarItem to="/dashboard/payment-received" icon={faDownload} text="Payment Received" /> */}
          {/* <SidebarItem to="/dashboard/expenses" icon={faClipboard} text="Expenses" /> */}
          <SidebarItem to="/dashboard/reports" icon={faChartColumn} text="Reports" />
          <SidebarItem to="/dashboard/settings" icon={faGear} text="Settings" />
        </li>
        <li className='bottom-close-icon' onClick={onClose}>
          <FontAwesomeIcon icon={faAngleLeft} className='icon' />
        </li>
      </ul>
    </aside>
  );
});

Sidebar.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Sidebar;
