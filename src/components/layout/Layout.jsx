import React from 'react'
import Header from './Header'
import { BrowserRouter } from 'react-router-dom';
import ShowProducts from '../pages/ShowProducts';
import AppRoutes from '../../Routes';

const Layout = ({children}) => {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
     <ShowProducts />
    </BrowserRouter>
  )
}

export default Layout
