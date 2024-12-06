import React, { useState, useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [navText, setNavText] = useState('Home'); // Default text
  const sidebarRef = useRef(null); // Create a ref for the sidebar
  const location = useLocation(); // Get the current location

  const toggleSidebar = () => {
    setSidebarOpen(prevState => !prevState);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    // Update navText based on current route
    switch (location.pathname) {
      case '/dashboard':
        setNavText('Home');
        break;
      case '/dashboard/customers':
        setNavText('Customers');
        break;
      case '/dashboard/items':
        setNavText('Items');
        break;
      case '/dashboard/quotes':
        setNavText('Quotes');
        break;
      case '/dashboard/invoice':
        setNavText('Invoice');
        break;
      case '/dashboard/payment-received':
        setNavText('Payment Received');
        break;
      case '/dashboard/expenses':
        setNavText('Expenses');
        break;
      case '/dashboard/reports':
        setNavText('Reports');
        break;
      case '/dashboard/settings':
        setNavText('Settings');
        break;
      default:
        setNavText('Page Not Found');
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSidebarOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className='home-bg'>
      <Navbar onMenuClick={toggleSidebar} text={navText} />
      {isSidebarOpen && (
        <Sidebar ref={sidebarRef} onClose={closeSidebar} />
      )}
      <main className='dashboard-body'>
        <Outlet /> {/* Render nested routes */}
      </main>
    </div>
  );
};

export default Dashboard;
