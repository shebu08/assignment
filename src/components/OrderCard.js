import React from 'react';

function OrderCard({ order, moveToNextStage, markAsReady, markAsPicked }) {
  const handleMoveToNextStage = () => {
    moveToNextStage(order.id);
  };

  const handleMarkAsReady = () => {
    markAsReady(order.id);
  };

  const handleMarkAsPicked = () => {
    markAsPicked(order.id);
  };

  return (
    <div className="order-card">
      <h2>Order ID: {order.id}</h2>
      <p>Type: {order.type}</p>
      <p>Size: {order.size}</p>
      <p>Base: {order.base}</p>
      <p>Stage: {order.stage}</p>
      <p>Time Spent in Stage: {order.timeInStage} seconds</p>
      {order.stage === 'Order Placed' && (
        <button onClick={handleMoveToNextStage}>Start Making</button>
      )}
      {order.stage === 'Order in Making' && (
        <button onClick={handleMarkAsReady}>Mark as Ready</button>
      )}
      {order.stage === 'Order Ready' && (
        <button onClick={handleMarkAsPicked}>Mark as Picked</button>
      )}
    </div>
  );
}

export default OrderCard;