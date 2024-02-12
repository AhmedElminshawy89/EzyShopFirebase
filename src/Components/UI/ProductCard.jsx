import React from 'react';
import productImg from '../../assests/images/arm-chair-01.jpg';
import {AiOutlinePlus} from 'react-icons/ai'
import {MdFavoriteBorder} from 'react-icons/md'

import { Col } from 'react-bootstrap';

import {motion} from 'framer-motion'
import { NavLink } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slices/cartSlices';
import { toast } from 'react-toastify';

export default function ProductCard({item}) {

    const dispatch = useDispatch();

    const addToCart = () =>{
        dispatch(cartActions.addItem({
            id: item.id,
            productName: item.productName,
            imgUrl: item.imgUrl,
            price: item.price,
        }))
        toast.success('Product Added Successfully')
    }
    const addToFavorite = () =>{
        dispatch(cartActions.addFavorite({
          id: item.id,
          productName: item.productName,
          imgUrl: item.imgUrl,
          price: item.price,
        }))
      }

  return (
    <>
        <Col lg='12' className='mb-2'>
            <div className='product-item d-flex align-items-center justify-content-between flex-wrap text-center'>
                <Col lg='4' md='12'>
                    <div className='product-img'>
                        <motion.img whileHover={{scale:.9}} src={item.imgUrl} alt='not found'/>
                    </div>
                </Col>
                <Col lg='6' md='6'>
                    <div className='p-2 product-info'>
                        <h3 className="product-name"><NavLink to={`/shop/${item.id}`}>{item.productName}</NavLink></h3>
                        <span className='d-block text-center'>{item.category}</span>
                        <span className='d-block text-center'>{item.shortDesc}</span>
                    </div>
                </Col>
                <Col lg='2' md='6'>
                    <div className="product-card-bottom d-flex align-items-center justify-content-between p-2">
                        <span className="price">${item.price}</span>
                        <div>
                            <motion.span whileTap={{scale:1.1}} className='icon' onClick={addToFavorite}><MdFavoriteBorder/></motion.span>
                            <motion.span whileTap={{scale:1.1}}  className='icon p-2' onClick={addToCart}><AiOutlinePlus/></motion.span>
                        </div>
                    </div>
                </Col>
            </div>
        </Col>
    </>
  )
}
