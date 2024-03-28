import React, { useState } from 'react';
import OrderForm from './components/OrderForm';
import OrderTracker from './components/OrderTracker';

function App() {

  return (
    
    <Provider>
      <div className="App">
    
    
    <OrderForm />
    <OrderTracker />
  </div>
    </Provider>
  );
}

export default App;