import React, { useState } from 'react'
import Helmet from '../../Components/Helmet/Helmet'
import '../Login/Login.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.config';

export default function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [loading,setLoading]=useState(false)
    const navigate=useNavigate()

    const signin = async(e) => {
        e.preventDefault();
        try{

            const userCredential = await signInWithEmailAndPassword(auth,email,password)
            const user = userCredential.user

            setLoading(false)
            toast.success("Successfully logged in")
            navigate('/checkout')

        }catch(error){
            setLoading(false)
            toast.error(error.message)
        }
    }
  return (
    <Helmet title='LogIn'>
        <div className='back pt-5' >
              <div  className="discount pt-2">
                  <div className="image">
                      <div className="content mt-5">
                          <h2>We Have A Discount</h2>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero tenetur doloremque iusto ut adipisci quam ratione aliquam excepturi nulla in harum, veritatis porro</p>
                          {/* <img src={loginImg} alt="Not Found"/> */}
                      </div>
                  </div>
                  <div className="form">
                      <div class="content">
                          <h2>LogIn</h2>
                          <form action="" onSubmit={signin}>
                              <input class="input" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="email" placeholder="Enter Your email"/>
                              <input class="input" value={password} onChange={(e)=>setPassword(e.target.value)}  type="password" name="password" placeholder="Enter Your password"/>
                              <button className='buy-btn'>LogIn</button>
                              <p className='d-block mx-auto mt-3'>Don`t have an account?{"  "}
                              <NavLink className='color' to='/signup'>Create an account</NavLink>
                              </p>
                          </form>
                      </div>
                  </div>
              </div>
        </div>
    </Helmet>
  )
}
