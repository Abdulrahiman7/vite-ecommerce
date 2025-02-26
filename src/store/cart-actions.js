import { cartActions } from './cart-slice';
import { orderActions } from './order-slice';

export const addItemToCart = (item) => {
  return async (dispatch) => {
    // Perform any asynchronous operations here, e.g., sending data to a server

    dispatch(
      cartActions.addItem(item)
    );
  };
};

export const removeItemFromCart = (id) => {
  return async (dispatch) => {
    // Perform any asynchronous operations here, e.g., sending data to a server

    dispatch(
      cartActions.removeItem(id)
    );
  };
};

export const incrementItemQuantity = (id) => {
  return async (dispatch) => {
    // Perform any asynchronous operations here, e.g., sending data to a server

    dispatch(
      cartActions.incrementItem(id)
    );
  };
};

export const decrementItemQuantity = (id) => {
  return async (dispatch) => {
    // Perform any asynchronous operations here, e.g., sending data to a server

    dispatch(
      cartActions.decrementItem(id)
    );
  };
};

export const deleteCartItem = (id) => {
  return async (dispatch) => {
    // Perform any asynchronous operations here, e.g., sending data to a server

    dispatch(
      cartActions.deleteItem(id)
    );
  };
};

export const storeOrder = (order) => {
  return async (dispatch) => {
    // Perform any asynchronous operations here, e.g., sending data to a server

    dispatch(
      orderActions.storeOrder(order)
    );
  };
};
