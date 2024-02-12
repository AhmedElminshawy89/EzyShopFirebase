import React from 'react'
import Helmet from '../../Components/Helmet/Helmet'
import CommoSection from '../../Components/UI/CommoSection'
import '../Contact/Contact.css'

export default function Contact() {
  return (
    <Helmet title='LogIn'>
        <div className='back pt-5' >
        <CommoSection title={'Contact Us'}/>
              <div  className="discount">
                  <div className="image">
                      <div className="content mt-5">
                          <h2>We Have A Discount</h2>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero tenetur doloremque iusto ut adipisci quam ratione aliquam excepturi nulla in harum, veritatis porro</p>
                      </div>
                  </div>
                  <div className="form">
                      <div class="content">
                          <h2>Contact Us</h2>
                          <form action="" >
                              <input className="input"  type="text" name="text" placeholder="Enter Your Name"/>
                              <input className="input"  type="email" name="email" placeholder="Enter Your email"/>
                              <input className="input"  type="phone" name="email" placeholder="Enter Your Phone"/>
                              <div className="form-group">
                                <textarea  rows={4} type="text" className='input' placeholder=' Message...'/>
                              </div>
                              <button className='buy-btn'>Submit</button>
                          </form>
                      </div>
                  </div>
              </div>
        </div>
    </Helmet>
  )
}
