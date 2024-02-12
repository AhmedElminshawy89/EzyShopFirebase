import React, { useEffect, useRef, useState } from 'react';
import { ReactDOM } from 'react';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';

import { Container,Row } from 'react-bootstrap';

import logo from '../assests/images/eco-logo.png';
import userImg from '../assests/images/user-icon.png';

import {AiOutlineShoppingCart,AiOutlineHeart,AiOutlineUser,AiOutlineMenu} from 'react-icons/ai';

import { AdminLinks } from '../assests/data/NavLink';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import useAuth from '../Custom-hooks/useAuth';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';
import { toast } from 'react-toastify';


export default function AdminNavbar() {
    
  const [activeNavigator,setActiveNavigator]=useState(false);
  const [activeProfileAction,setActiveProfileAction]=useState(false);
  const totalQuantity = useSelector(state=>state.cart.totalQuantity)

  const menuRef = useRef()
  const clickRef = useRef()

  const navigate = useNavigate()
  const {currentUser} = useAuth()

  const handleNavigator = ()=>{
    setActiveNavigator(!activeNavigator);
  }
  const handleProfileAction = ()=>{
    setActiveProfileAction(!activeProfileAction);
  }

  window.addEventListener('click',(e)=>{
    if(e.target !==menuRef.target && e.target !== clickRef.current){
      setActiveNavigator(false)
    }
  })

  const logOut = () => {
    signOut(auth).then(
      toast.success("Logged Out"),
      navigate('/Home')
    ).catch(error=>{
      toast.error(error.message)
    })
  }

  return (
    <header className='header'>
        <Container>
          <Row>
            <div className="nav_wrapper">
                <div className="logo">
                  <img src={logo} alt='logo'/>
                  <div>
                    <h1>Multimart</h1>
                    <p>Since 1990</p>
                  </div>
                </div>
                <div ref={menuRef} className={activeNavigator?"active-menu":"navigator"}>
                  <ul className="navbar">
                    {
                      AdminLinks.map((link)=>{
                        return(
                            <li className="nav-item" key={Math.random()}>
                               <NavLink to={link.link} className={(navclass)=>navclass.isActive?"NavActive":''}>{link.path}</NavLink>
                            </li>
                        )
                      })
                    }
                  </ul>
                </div>
                <div className='nav-icons'>
                  <span className="cart-icon">
                    <span><AiOutlineShoppingCart/></span>
                    <span className='counter'>{totalQuantity}</span>
                    </span>
                  <span className="fav-icon">
                    <AiOutlineHeart/>
                    <span className='counter'>1</span>
                  </span>
                    <div className="profile">
                      <span  className="user-icon" >
                        <img onClick={handleProfileAction} className='img-user' src={currentUser?currentUser.photoURL: userImg} />
                      </span>
                      <div className={activeProfileAction?'showAction':'profileAction'}>
                        {
                          currentUser?(
                            <>
                              <p className='username'>{currentUser.displayName}</p>
                              <span onClick={logOut}>Logout</span>
                            </>
                          ):(
                          <div className='d-flex align-items-center justify-content-center flex-column'>
                            <NavLink to='signup'>SignUp</NavLink>
                            <NavLink to='/login'>LogIn</NavLink>
                          </div>
                          )
                        }
                      </div>
                    </div>
                  <span ref={clickRef} onClick={handleNavigator} className="menu-icon"><AiOutlineMenu/></span>
                </div>
            </div>
          </Row>
        </Container>
    </header>
  )
}
