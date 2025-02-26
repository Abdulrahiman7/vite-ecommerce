import { authActions } from './auth-slice';
import axios from 'axios';

const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;

export const signup = (email, password) => {
  return async (dispatch) => {
    dispatch(authActions.setLoading());
    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      );

      dispatch(
        authActions.setUser({
          token: response.data.idToken,
          userId: response.data.localId,
        })
      );
    } catch (error) {
      dispatch(authActions.setError(error.message));
    } finally {
      dispatch(authActions.setLoading(false));
    }
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    dispatch(authActions.setLoading());
    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      );

      dispatch(
        authActions.setUser({
          token: response.data.idToken,
          userId: response.data.localId,
        })
      );
    } catch (error) {
      dispatch(authActions.setError(error.message));
    } finally {
      dispatch(authActions.setLoading(false));
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch(authActions.logout());
  };
};
