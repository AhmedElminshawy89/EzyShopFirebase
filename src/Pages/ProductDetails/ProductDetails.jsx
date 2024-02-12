import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import products from '../../assests/data/Products';
import Helmet from '../../Components/Helmet/Helmet';
import CommoSection from '../../Components/UI/CommoSection';
import { Col, Container, Row } from 'react-bootstrap';

import {AiFillStar,AiOutlineStar} from 'react-icons/ai';
import {BiSolidStarHalf} from 'react-icons/bi';
import '../ProductDetails/ProductDetails.css';
import ProductList from '../../Components/UI/ProductList';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slices/cartSlices';
import { toast } from 'react-toastify';

export default function ProductDetails() {

  const [tab,setTab]=useState('desc')
  const [rate,setRate]=useState(null)
  const {id} = useParams();
  const reviewUser =useRef('')
  const reviewMsg  =useRef('')


  const product = products.find((item)=>item.id===id);

  const relatedProducts = products.filter((item)=>item.category===product.category);

  const SubmitHandler=(e)=>{
    e.preventDefault()
    const reviewUserName=reviewUser.current.value
    const reviewUserMsg=reviewMsg.current.value
    const reviewObj={
      userName:reviewUserName,
      text:reviewUserMsg,
      reting:rate
    }
    toast.success('Review Submitted')
  }


  const dispatch = useDispatch();

    const addToCart = () =>{
      dispatch(cartActions.addItem({
          id: product.id,
          productName: product.productName,
          image: product.imgUrl,
          price: product.price,
      }))
      toast.success("product added to the cart")
  }

  const addToFavorite = () =>{
    dispatch(cartActions.addFavorite({
      id: product.id,
      productName: product.productName,
      imgUrl: product.imgUrl,
      price: product.price,
    }))
  }

  useEffect(()=>{
    window.scrollTo(0,0)
  },[product])

  return (
    <Helmet title={product.productName}>
      <section className='details'>
       <CommoSection title={product.productName}/>
       <Container>
        <Row>
          <Col lg='6'>
            <img src={product.imgUrl}/>
          </Col>
          <Col lg='6'>
            <div className="product-details">
              <h2>{product.productName}</h2>
              <div className="product-rating d-flex align-items-center gap-5 mb-3 mt-1">
                <div>
                  <span><AiFillStar/></span>
                  <span><AiFillStar/></span>
                  <span><AiFillStar/></span>
                  <span><AiFillStar/></span>
                  <span><BiSolidStarHalf/></span>
                </div>
                <p>({product.avgRating}ratings)</p>
              </div>
              <div className='d-flex align-items-center gap-5'>
               <span className='price'>${product.price}</span>
              <span className='price'>Category: {product.category}</span>
              </div>
              <p className='mt-3'>{product.shortDesc}</p>
              <button className="btn mx-2" onClick={addToCart}>Add to Cart</button>
              <button className="btn " onClick={addToFavorite}>Add to Favorite</button>
            </div>
          </Col>
        </Row>
       </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className="tab-wrapper d-flex align-items-center gap-5 mb-3 mt-1">
                <h6 className={`${tab==='desc'?"active-tab":""}`} onClick={()=>setTab('desc')}>Describtion</h6>
                <h6 className={`${tab==='rev'?"active-tab":""}`} onClick={()=>setTab('rev')}>Reviews ({product.reviews.length})</h6>
              </div>
              {
                tab==='desc'?(<div className="tab-content mt-5">
                     <p>{product.description}</p>
                  </div>):(
                    <div className="product-review mt-5">
                        <div className="review-wrapper">
                          <ul>
                            {
                              product.reviews.map((item,index)=>
                              <li key={index}>
                                <span>{item.rating}(rating)</span>
                                <p>{item.text}</p>
                              </li>)
                            }
                          </ul>
                          <div className="review-form">
                            <h4>Leave Your Exprience</h4>
                            <form action="" onSubmit={SubmitHandler}>
                              <div className="form-group">
                                <input ref={reviewUser} type="text" placeholder='Enter Your Name...'/>
                              </div>
                              <div className="form-group d-flex align-items-center gap-5 mb-2">
                                <span onClick={()=>setRate(1)}><AiOutlineStar/></span>
                                <span onClick={()=>setRate(2)}><AiOutlineStar/></span>
                                <span onClick={()=>setRate(3)}><AiOutlineStar/></span>
                                <span onClick={()=>setRate(4)}><AiOutlineStar/></span>
                                <span onClick={()=>setRate(5)}><AiOutlineStar/></span>
                              </div>
                              <div className="form-group">
                                <textarea ref={reviewMsg} rows={4} type="text" placeholder='Review Message...'/>
                              </div>
                              <button className='btn'>Submit</button>
                            </form>
                          </div>
                        </div>
                   </div>
                  )
              }
            </Col>
            <Col lg='12'>
            <h2 className="section-title mt-5">Related Products</h2>
            </Col>
            <ProductList  data={relatedProducts}/>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}
