import { productsActions } from './products-slice';
import axios from 'axios';

export const fetchProducts = (categoryId) => {
  return async (dispatch) => {
    dispatch(productsActions.setLoading());
    try {
      if (categoryId == 'all') {
       let response = await axios.get('https://api.escuelajs.co/api/v1/products');
        dispatch(productsActions.setProducts({ all: response.data }));
      } else {
      let  response = await axios.get(`https://api.escuelajs.co/api/v1/categories/${categoryId}/products`);
      console.log(response.data);
        dispatch(productsActions.setProducts({ [categoryId]: response.data }));
      }
    } catch (error) {
      dispatch(productsActions.setError(error.message));
    }
  };
};
