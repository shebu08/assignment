import React from 'react';

function MainDisplay({ orders }) {
  const ordersInProgress = orders.filter(
    (order) => order.stage !== 'Order Ready' && order.stage !== 'Order Picked'
  );

  const totalPizzasDeliveredToday = orders.filter(
    (order) => order.stage === 'Order Picked'
  ).length;

  return (
    <div>
      <h2>Main Display</h2>
      <p>Total Pizzas Delivered Today: {totalPizzasDeliveredToday}</p>
      <h3>Orders in Progress</h3>
      <ul>
        {ordersInProgress.map((order) => (
          <li key={order.id}>Order ID: {order.id}</li>
        ))}
      </ul>
    </div>
  );
}

export default MainDisplay;