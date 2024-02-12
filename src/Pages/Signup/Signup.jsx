import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Helmet from '../../Components/Helmet/Helmet';
import {useNavigate} from 'react-router-dom'
import { createUserWithEmailAndPassword ,updateProfile} from 'firebase/auth';
import { ref,uploadBytesResumable,getDownloadURL } from 'firebase/storage';
import { setDoc,doc} from 'firebase/firestore';

import { auth } from '../../Firebase/Firebase.config';
import { storage } from '../../Firebase/Firebase.config';
import { db } from '../../Firebase/Firebase.config';

import {toast} from 'react-toastify'



export default function Signup() {

  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [file,setFile] = useState(null)
  const [loading,setLoading] = useState(false)

  const navigate = useNavigate()

  const signup = async(e) => {
    e.preventDefault()
    setLoading(true)
    try{
      const userCredential = await createUserWithEmailAndPassword(auth,
        email,password)
        const user = userCredential.user
        const storageRef = ref(storage,`images/${Date.now()+username}`)
        const uploadFile = uploadBytesResumable(storageRef,file)
        uploadFile.on((error)=>{
          toast.error(error.message)
        },()=>{
          getDownloadURL(uploadFile.snapshot.ref).then(async(downloadURL)=>{

           await updateProfile(user,{
              displayName:username,
              photoURL:downloadURL
            })
            
            await setDoc(doc(db,'users', user.uid),{
              uid:user.uid,
              displayName:username,
              email,
              photoURL:downloadURL
            })
          })
        })
      toast.success('Account Created')
      navigate('/login')
      setLoading(false)
    }
    catch(err){
      setLoading(false)
      toast.error('Something Went Error')
    }
  }

  return (
    <Helmet title='SignUp'>
      {loading?(<h2>Loading...</h2>
      ):(
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
                      <div class="content mt-5">
                          <h2 className='mt-5'>SignUp</h2>
                          <form action="" onSubmit={signup}>
                              <input class="input" value={username} onChange={(e)=>setUsername(e.target.value)} type="text" name="username" placeholder=" UserName"/>
                              <input class="input" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="email" placeholder="Email"/>
                              <input class="input" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" name="password" placeholder="Password"/>
                              {/* <input class="input" type="password" name="password" placeholder="Confirm Password"/> */}
                              <input class=" file" onChange={(e)=>setFile(e.target.files[0])}  type="file" />
                              <button className='buy-btn mt-1 mb-4'>Create an account</button>
                              <p className='d-block mx-auto mt-3 mb-5'>Already Have an account?{"  "}
                              <NavLink className='color' to='/login'>LogIn</NavLink>
                              </p>
                          </form>
                      </div>
                  </div>
              </div>
        </div>
      )}
    </Helmet>
  )
}
