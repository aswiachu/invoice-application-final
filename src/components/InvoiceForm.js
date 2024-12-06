import React, { useState } from 'react';
import './InvoiceForm.css';

const InvoiceForm = () => {
  const [customerInfo, setCustomerInfo] = useState({ name: '', address: '', city: '', state: '', zip: '', country: '' });
  const [companyInfo] = useState({
    name: 'TenSketch',
    address: '513/5, Orchid Springs, Water Canal Rd, Korattur',
    city: 'Chennai',
    state: 'Tamil Nadu',
    zip: '600076',
    country: 'India',
    email: 'bala@tensketch.com',
    website: 'tensketch.com',
  });
  const [items, setItems] = useState([{ description: '', quantity: 1, rate: 0, amount: 0 }]);

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    updatedItems[index].amount = updatedItems[index].quantity * updatedItems[index].rate;
    setItems(updatedItems);
  };

  const addItem = () => {
    setItems([...items, { description: '', quantity: 1, rate: 0, amount: 0 }]);
  };

  const calculateSubTotal = () => items.reduce((total, item) => total + item.amount, 0).toFixed(2);

  return (
    <div className="invoice-form">
      <header className="company-info">
        <h2>{companyInfo.name}</h2>
        <p>{companyInfo.address}, {companyInfo.city}</p>
        <p>{companyInfo.state}, {companyInfo.zip}, {companyInfo.country}</p>
        <p>Email: {companyInfo.email}</p>
        <p>Website: {companyInfo.website}</p>
      </header>

      <section className="client-info">
        <h3>Bill To:</h3>
        <input type="text" placeholder="Client Name" onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })} />
        <textarea placeholder="Client Address" onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}></textarea>
        <input type="text" placeholder="City" onChange={(e) => setCustomerInfo({ ...customerInfo, city: e.target.value })} />
        <input type="text" placeholder="State" onChange={(e) => setCustomerInfo({ ...customerInfo, state: e.target.value })} />
        <input type="text" placeholder="Zip" onChange={(e) => setCustomerInfo({ ...customerInfo, zip: e.target.value })} />
        <input type="text" placeholder="Country" onChange={(e) => setCustomerInfo({ ...customerInfo, country: e.target.value })} />
      </section>

      <section className="items">
        <h3>Items & Description</h3>
        {items.map((item, index) => (
          <div key={index} className="item">
            <input type="text" placeholder="Description" value={item.description} onChange={(e) => handleItemChange(index, 'description', e.target.value)} />
            <input type="number" placeholder="Quantity" value={item.quantity} onChange={(e) => handleItemChange(index, 'quantity', parseInt(e.target.value))} />
            <input type="number" placeholder="Rate" value={item.rate} onChange={(e) => handleItemChange(index, 'rate', parseFloat(e.target.value))} />
            <input type="text" value={item.amount.toFixed(2)} readOnly />
          </div>
        ))}
        <button onClick={addItem}>Add Item</button>
      </section>

      <section className="summary">
        <p><strong>Sub Total:</strong> ₹{calculateSubTotal()}</p>
        <p><strong>Total:</strong> ₹{calculateSubTotal()}</p>
      </section>

      <footer>
        <p>Authorized Signature</p>
        <p><strong>{companyInfo.name}</strong></p>
      </footer>
    </div>
  );
};

export default InvoiceForm;