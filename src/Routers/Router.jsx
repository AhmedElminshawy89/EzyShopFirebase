import React from 'react';
import { Navigate, Route,Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Shop from '../Pages/Shop/Shop';
import Cart from '../Pages/Cart/Cart';
import CheckOut from '../Pages/CheckOut/CheckOut';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Signup/Signup';
import ProductDetails from '../Pages/ProductDetails/ProductDetails';
import ProtectRouter from './ProtectRouter';
import AddProduct from '../Admin/AddProduct';
import AllProduct from '../Admin/AllProduct';
import Dashboard from '../Admin/Dashboard';
import Users from '../Admin/Users';
import Orders from '../Admin/Orders';
import Favorite from '../Pages/Favorite/Favorite';
import Aboutus from '../Pages/AboutUs/Aboutus';
import Contact from '../Pages/Contact/Contact';

export default function Router() {
  return (
    <Routes>
      <Route path='/e-commerce-reactjs' element={<Navigate to='/home'/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='shop' element={<Shop/>}/>
      <Route path='Aboutus' element={<Aboutus/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='shop/:id' element={<ProductDetails/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='favorite' element={<Favorite/>}/>
      <Route path='/' element={<ProtectRouter/>}>
        <Route path='checkout' element={<CheckOut/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='dashboard/AddProduct' element={<AddProduct/>}/>
        <Route path='dashboard/AllProduct' element={<AllProduct/>}/>
        <Route path='dashboard/users' element={<Users/>}/>
        <Route path='dashboard/orders' element={<Orders/>}/>
      </Route>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
    </Routes>
  )
}
