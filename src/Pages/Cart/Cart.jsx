import React from 'react'
import { NavLink } from 'react-router-dom';
import Helmet from '../../Components/Helmet/Helmet'
import CommoSection from '../../Components/UI/CommoSection'
import { cartActions } from '../../redux/slices/cartSlices'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row ,Col} from 'react-bootstrap'
import {AiOutlineDelete} from 'react-icons/ai'
import '../Cart/Cart.css'
export default function Cart() {

 const cartItems = useSelector(state=>state.cart.cartItems)
 const totalAmount = useSelector(state=>state.cart.totalAmount)

  return (
    <Helmet title={"Cart"}>
      <section>
       <CommoSection title='Shopping Cart'/>
        <Container>
          <Row>
            <Col lg='9'>
              {
                cartItems.length===0?(
                  <h4 className=' text-center mb-3'>No Item Added To The Cart</h4>
                ):(
                <table className="table bordered">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Tittle</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item,index)=>(
                          <Tr item={item} key={index}/>
                        )) }

                    </tbody>
                </table>
                )
              }
            </Col>
            <Col lg='3'>
              <div className='d-flex align-items-center justify-content-between mb-3'>
                <h6>Subtotal</h6>
                <span className='fs-4 fw-bold'>${totalAmount}</span>
              </div>
              <p>taxes and shipping will calculate in checkout</p>
              <div>
              <NavLink to='/checkout'> <button className='btn w-100 '>Checkout</button></NavLink>
              <NavLink to='/shop'><button className='btn continue w-100 mt-3'>Continue Shopping</button></NavLink>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>

  )
}


const Tr=({item})=>{
  const dispatch = useDispatch()

  const deleteProduct =()=>{
    dispatch(cartActions.deleteItem(item.id))
  }
  return(
    <tr>
      <td><img src={item.imgUrl} alt='not found'/></td>
      <td>{item.productName}</td>
      <td>{item.price}</td>
      <td>{item.quantity}</td>
      <td onClick={deleteProduct}><AiOutlineDelete/></td>
   </tr>
  )
}