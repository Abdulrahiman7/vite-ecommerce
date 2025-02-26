import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from '../UI/Modal';
import Card from '../UI/Card';

const Orders = () => {
  const orders = useSelector((state) => state.order.orders);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
  };

  return (
    <div>
      <h2>Orders</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20 border-2 border-amber-950 w-[500px]">
        {orders.map((order, index) => (
          <div key={index} onClick={() => handleOrderClick(order)} className="cursor-pointer">
            <h3>Order Date: {order.date}</h3>
            <p>Total Items: {order.totalQuantity}</p>
            <p>Total Price: ${order.totalPrice.toFixed(2)}</p>
          </div>
        ))}
      </div>
      {selectedOrder && (
        <div onClose={handleCloseModal}>
          <h3>Order Details</h3>
          <ul>
            {selectedOrder.items.map((item) => (
              <li key={item.id}>
                {item.name} - {item.quantity} x ${item.price} = ${item.totalPrice}
              </li>
            ))}
          </ul>
          <p>Total Price: ${selectedOrder.totalPrice.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default Orders;
