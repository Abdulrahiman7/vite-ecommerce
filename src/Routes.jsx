import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ShowProducts from './components/pages/ShowProducts';
import Orders from './components/pages/Orders';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Logout from './components/pages/Logout';

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<ShowProducts category="all" />} />
      <Route path="/clothes" element={<ShowProducts category="1" />} />
      <Route path="/electronics" element={<ShowProducts category="2" />} />
      <Route path="/furniture" element={<ShowProducts category="3" />} />
      <Route path="/shoes" element={<ShowProducts category="4" />} />
      <Route path="/my-orders" element={<Orders />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
};

export default AppRoutes;
