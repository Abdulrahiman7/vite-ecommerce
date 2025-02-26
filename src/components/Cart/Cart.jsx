import React, { useState } from 'react';
import classes from './Cart.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { orderActions } from '../../store/order-slice';

const Cart = (props) => {
  const [orderSuccess, setOrderSuccess] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
  const dispatch = useDispatch();

  const checkoutHandler = () => {
    const orderDate = new Date().toLocaleDateString();
    const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
    dispatch(orderActions.storeOrder({
      items: cartItems,
      date: orderDate,
      totalQuantity: totalQuantity,
      totalPrice: totalPrice,
    }));
    dispatch(cartActions.clearCart());
    setOrderSuccess(true);
    setTimeout(() => {
      setOrderSuccess(false);
    }, 3000);
  };

  const incrementCartItemHandler = (id) => {
    dispatch(cartActions.incrementItem(id));
  };

  const decrementCartItemHandler = (id) => {
    dispatch(cartActions.decrementItem(id));
  };

  const deleteCartItemHandler = (id) => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <div>
      {orderSuccess && (
        <div className="bg-green-200 text-green-800 p-3 rounded mb-4">
          Order created successfully!
        </div>
      )}
      <h2 className='text-amber-800 font-bold justify-self-center absolute top-2'>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="flex items-center h-52 border-b border-gray-200 py-2 text-xs">
            <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-contain mr-4" />
            <div className="flex-grow">
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-gray-600">${item.totalPrice.toFixed(2)}</p>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => decrementCartItemHandler(item.id)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-l"
              >
                <i className="fas fa-minus"></i>
              </button>
              <span className="mx-2">{item.quantity}</span>
              <button
                onClick={() => incrementCartItemHandler(item.id)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-r"
              >
                <i className="fas fa-plus"></i>
              </button>
              <button
                onClick={() => deleteCartItemHandler(item.id)}
                className="ml-4 text-red-500 hover:text-red-700"
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-between w-80 items-center absolute bottom-2 bg-amber-50">
        <h2 className="font-bold">Total: ${totalPrice.toFixed(2)}</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={checkoutHandler}>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
