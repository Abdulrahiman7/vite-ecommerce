import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Modal from '../UI/Modal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div className="w-full h-[50px] p-0 m-0 top-0 header  px-4 flex items-center justify-between border-b shadow-md fixed bg-white z-50">
      <div className="flex items-center">
        <NavLink to={'/'} className=" items-center hidden md:flex ">
          <div className="text-xl ">Shop Zone</div>
        </NavLink>
        <nav>
          <div className="flex space-x-5 items-center ml-8">
            <NavLink
              to={'/'}
              className={({ isActive }) =>
                isActive
                  ? 'text-sm hover:text-blue-500 active-link'
                  : 'text-sm hover:text-blue-500'
              }
            >
              All
            </NavLink>
            <NavLink
              to={'/clothes'}
              className={({ isActive }) =>
                isActive
                  ? 'text-sm hover:text-blue-500 active-link'
                  : 'text-sm hover:text-blue-500'
              }
            >
              Clothes
            </NavLink>
            <NavLink
              to={'/electronics'}
              className={({ isActive }) =>
                isActive
                  ? 'text-sm hover:text-blue-500 active-link'
                  : 'text-sm hover:text-blue-500'
              }
            >
              Electronics
            </NavLink>
            <NavLink
              to={'/furniture'}
              className={({ isActive }) =>
                isActive
                  ? 'text-sm hover:text-blue-500 active-link'
                  : 'text-sm hover:text-blue-500'
              }
            >
              Furniture
            </NavLink>
            <NavLink
              to={'/shoes'}
              className={({ isActive }) =>
                isActive
                  ? 'text-sm hover:text-blue-500 active-link'
                  : 'text-sm hover:text-blue-500'
              }
            >
              Shoes
            </NavLink>
          </div>
        </nav>
      </div>

      <nav className="relative">
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 bg-blue-500 text-white rounded"
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <NavLink
            to="/my-orders"
            className={({ isActive }) =>
              isActive
                ? 'text-sm hover:text-blue-500 active-link'
                : 'text-sm hover:text-blue-500'
            }
          >
            My Orders
          </NavLink>
          <NavLink
            to="/my-account"
            className={({ isActive }) =>
              isActive
                ? 'text-sm hover:text-blue-500 active-link'
                : 'text-sm hover:text-blue-500'
            }
          >
            My Account
          </NavLink>
          <button onClick={showCartHandler} className="py-2">
            Cart
          </button>
          {cartIsShown && (
            <Modal onClose={hideCartHandler}>
              <Cart onClose={hideCartHandler} />
            </Modal>
          )}
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full right-0 bg-white shadow-md rounded-md p-4 w-48">
            <NavLink to="/my-orders" className="block py-2 text-sm">
              My Orders
            </NavLink>
            <NavLink to="/my-account" className="block py-2 text-sm">
              My Account
            </NavLink>
            <NavLink to="/cart" className="block py-2 text-sm">
              Cart
            </NavLink>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
