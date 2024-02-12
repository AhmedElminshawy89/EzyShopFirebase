import React from 'react'
import Helmet from '../../Components/Helmet/Helmet'
import '../CheckOut/CheckOut.css'
import CommoSection from '../../Components/UI/CommoSection'
import { Col, Container, Form, FormGroup, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export default function CheckOut() {

  const totalQuantity = useSelector(state=>state.cart.totalQuantity)
  const totalAmount = useSelector(state=>state.cart.totalAmount)
  return (
    <Helmet title={"CheckOut"}>
      <section>
        <CommoSection title={'CheckOut'}/>
        <Container>
          <Row>
            <Col lg='8'>
              <div className="review-form form-checkout">
              <h6 className="mb-4 fw-bold">Billing Information</h6>
                <form action="" >
                 <div className="form-group">
                    <input type="text" placeholder='Enter Your Name...'/>
                  </div>
                  <div className="form-group">
                     <input type="email" placeholder='Enter Your Email...'/>
                  </div>
                  <div className="form-group">
                     <input type="Number" placeholder='Enter Your Number...'/>
                  </div>
                  <div className="form-group">
                     <input type="text" placeholder='Street Address...'/>
                  </div>
                  <div className="form-group">
                     <input type="text" placeholder='City...'/>
                  </div>
                  <div className="form-group">
                     <input type="text" placeholder='Postal Code...'/>
                  </div>
                  <div className="form-group">
                     <input type="text" placeholder='Country...'/>
                  </div>
                  
                  <button className='btn d-block mt-3 mx-auto'>Submit</button>
                 </form>
              </div>
            </Col>
            <Col lg='4'>
              <div className="checkout-cart">
                <h6>Total Qty: <span>{totalQuantity}</span></h6>
                <h6>Subtotal: <span>${totalAmount}</span></h6>
                <h6>Shipping: <span>$0</span></h6>
                <h6>Free Shipping</h6>
                <h6>Total Cost: <span>{totalAmount}</span></h6>
              </div>
              <button className='btn auth-btn w-100'>Place an Order</button>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>

  )
}
