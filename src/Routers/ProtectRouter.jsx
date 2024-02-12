import React from 'react'
import useAuth from '../Custom-hooks/useAuth'
import { Navigate, Outlet } from 'react-router-dom'


export default function ProtectRouter() {

     const {currentUser} = useAuth();

  return ( currentUser ? <Outlet/>:<Navigate to='/login'/>)
}
