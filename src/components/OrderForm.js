import React, { useState } from 'react';

function OrderForm({ addOrder }) {
  const [type, setType] = useState('');
  const [size, setSize] = useState('');
  const [base, setBase] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrder({ type, size, base });
    setType('');
    setSize('');
    setBase('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Type:
       
        <select type="text" value={type} onChange={(e) => setType(e.target.value)}>
          <option>Veg</option>
          <option>NonVeg</option>
        </select>
      </label>
      <label>
        Size:
        <select type="text" value={size} onChange={(e) => setBase(e.target.value)}>
          <option>Large</option>
          <option>Medium</option>
          <option>Small</option>
        </select>
      </label>
      <label>
        Base:
        <select type="text" value={base} onChange={(e) => setType(e.target.value)}>
          <option>Thin</option>
          <option>Thik</option>
          
        </select>
      </label>
      <button type="submit">Place Order</button>
    </form>
  );
}

export default OrderForm;