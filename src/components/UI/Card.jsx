import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { useEffect } from 'react';

const Card = ({id, imageUrl, category, title, price, description, showModal }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const itemInCart = cartItems.find((item) => item.id === id);
    setIsAdded(!!itemInCart);
  }, [cartItems, id]);

  const handleAddToCart = () => {
    dispatch(
      cartActions.addItem({
        id ,
        imageUrl,
        title,
        price,
        description,
      })
    );
  };

  return (
    <div className="w-full h-96 rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-64 object-cover hover:cursor-pointer hover:scale-[1.05]"
          onClick={() => showModal({ imageUrl, title, description, price })}
        />
        <div className="absolute bottom-2 opacity-75  left-2 bg-green-500 text-white rounded-full px-3 py-1 text-xs font-bold">
          {category}
        </div>
        <button
          className={`absolute top-2 opacity-75 right-2 hover:scale-[1.2] hover:opacity-100 hover:cursor-pointer text-white rounded-full w-8 h-8 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 ${
            isAdded ? 'bg-green-500 hover:bg-green-700 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'
          }`}
          onClick={handleAddToCart}
          disabled={isAdded}
        >
          {isAdded ? <i className="fas fa-check"></i> : <i className="fas fa-plus"></i>}
        </button>
      </div>

      {/* Text and price section */}
      <div className="flex flex-col flex-grow p-4 bg-white rounded-b-lg shadow-md ">
  <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
  <p className="text-gray-600 text-sm flex-grow">{description}</p>
  <div className="mt-auto pt-4 border-t border-gray-200">
    <div className="flex justify-between items-center">
      <p className="text-gray-500 text-sm">Price:</p>
      <p className="text-gray-900 font-bold text-lg">${price}</p>
    </div>
  </div>
</div>

    </div>
  );
};

export default Card;
