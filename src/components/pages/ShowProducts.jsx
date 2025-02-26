import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/products-actions';
import Card from '../UI/Card';
import LoadingBar from '../UI/LoadingBar';
import Modal from '../UI/Modal';

const ShowProducts = (props) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products[props.category]);
  const isLoading = useSelector((state) => state.products.isLoading);
  const error = useSelector((state) => state.products.error);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (!isLoading) dispatch(fetchProducts(props.category));
  }, [ props.category]);

  const showModalHandler = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <div className="w-3/5 mx-auto mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products ? (
          products.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              imageUrl={product.images[0]}
              category={product.category.name}
              title={product.title}
              price={product.price}
              description={product.description}
              showModal={showModalHandler}
            />
          ))
        ) : (
          <p></p>
        )}
      </div>
      {showModal && selectedProduct && (
        <Modal onClose={closeModalHandler}>
          <div className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto scrollbar-hide">
            <img
              src={selectedProduct.imageUrl}
              alt="Product"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-900">{selectedProduct.title}</h2>
            <p className="text-lg font-bold text-gray-900 mt-4">${selectedProduct.price}</p>
            <p className="text-gray-600 mt-2">{selectedProduct.description}</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ShowProducts;
