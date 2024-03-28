import React, { useState, useEffect } from 'react';
import OrderCard from "../components/OrderCard"
import MainDisplay from '../components/MainDisplay';

function OrderTracker() {
  const [orders, setOrders] = useState([]);

  const addOrder = (order) => {
    setOrders([...orders, { ...order, stage: 'Order Placed', timeInStage: 0 }]);
  };

  const moveToNextStage = (orderId) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, stage: 'Order in Making' } : order
      )
    );
  };

  const markAsReady = (orderId) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, stage: 'Order Ready' } : order
      )
    );
  };

  const markAsPicked = (orderId) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, stage: 'Order Picked' } : order
      )
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setOrders((prevOrders) =>
        prevOrders.map((order) => ({
          ...order,
          timeInStage: order.timeInStage + 1,
        }))
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <MainDisplay orders={orders} />
      <div>
        {orders.map((order) => (
          <OrderCard
            key={order.id}
            order={order}
            moveToNextStage={moveToNextStage}
            markAsReady={markAsReady}
            markAsPicked={markAsPicked}
          />
        ))}
      </div>
    </div>
  );
}

export default OrderTracker;