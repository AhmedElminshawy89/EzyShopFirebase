import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Router from '../Routers/Router';
import AdminNavbar from '../Admin/AdminNavbar';
import { useLocation } from 'react-router-dom';
export default function Layout() {
  const location = useLocation()
  return (
    <>
        {
          location.pathname.startsWith('/dashboard')?<AdminNavbar/>:<Header/>
        }
        <div>
            <Router/>
        </div>
        <Footer/>
    </>
  )
}
