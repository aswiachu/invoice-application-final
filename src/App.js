import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Customers from './components/CustomerTab';
import Items from './components/ItemsTab';
import Quotes from './components/QuotesTab';
import Invoice from './components/InvoiceTab';
import PaymentReceived from './components/PaymentReceivedTab';
import Expenses from './components/ExpensesTab';
import Reports from './components/ReportsTab';
import Settings from './components/SettingsTab';
import Index from './components/Index';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import OrganizationSetupForm from './components/OrganizationSetupForm';
import CustomerTable from './components/CustomerTable';
import BusinessDetailsForm from './components/BusinessDetailsForm';
import CreateInvoice from './components/CreateInvoice';
import CreateCustomer from './components/CreateCustomer';
import NewItem from './components/NewItem';
import NewQuote from './components/NewQuote';
import ProtectRouter from './ProtectRouter/ProtectRouter';
import OrganizationDetails from './components/OrganizationDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<Index />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/signup' element={<SignUpForm />} />
        <Route path='/organizationDetails' element={<OrganizationDetails/>} />

        <Route element={<ProtectRouter />} >

          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="customers" element={<Customers />} />
            <Route path="items" element={<Items />} />
            <Route path="quotes" element={<Quotes />} />
            <Route path="invoice" element={<Invoice />} />
            <Route path="payment-received" element={<PaymentReceived />} />
            <Route path="expenses" element={<Expenses />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path='/createInvoice' element={<CreateInvoice />} />
          <Route path='/createCustomer' element={<CreateCustomer />} />
          <Route path='/newItem' element={<NewItem />} />
          <Route path='/newQuote' element={<NewQuote />} />
          <Route path='/businessDetailsForm' element={<BusinessDetailsForm />} />
          <Route path='/customerTable' element={<CustomerTable />} />
          <Route path="organizationSetupForm" element={<OrganizationSetupForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
