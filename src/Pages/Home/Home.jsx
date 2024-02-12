import React, { useEffect, useState } from 'react';
import Helmet from '../../Components/Helmet/Helmet';
import products from '../../assests/data/Products';

import { Col, Container,Row } from 'react-bootstrap';

import homeImg from '../../assests/images/hero-img.png';
import counter from '../../assests/images/counter-timer-img.png';

import { motion } from 'framer-motion';

import './Home.css'
import { NavLink } from 'react-router-dom';
import Services from '../../Components/Services/Services';
import ProductList from '../../Components/UI/ProductList';
import Clock from '../../Components/UI/Clock';

export default function Home() {

  const [dataTrendingProduct,setDataTrendingProduct]=useState([]);
  const [dataBestProduct,setDataBestProduct]=useState([]);
  const [dataMobileProduct,setDataMobileProduct]=useState([]);
  const [dataWilrelessProduct,setDataWilrelessProduct]=useState([]);
  const [dataPopularProduct,setDataPopularProduct]=useState([]);

  useEffect(()=>{
    const filterTrendingProduct=products.filter((item)=>item.category==='chair');
    const filterBestProduct=products.filter((item)=>item.category==='sofa');
    const filterMobileProduct=products.filter((item)=>item.category==='mobile');
    const filterWilrelessProduct=products.filter((item)=>item.category==='wireless');
    const filterPopularProduct =products.filter((item)=>item.category==='watch')
    
    setDataTrendingProduct(filterTrendingProduct)
    setDataBestProduct(filterBestProduct)
    setDataMobileProduct(filterMobileProduct)
    setDataWilrelessProduct(filterWilrelessProduct)
    setDataPopularProduct(filterPopularProduct)

  },[])

  const year = new Date().getFullYear();


  return (
    <Helmet title={"Home"}>
      <section className='home-section'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='home-content'>
                <p className='sub-title'>Trending Product in {year} </p>
                <h2>Make Your Interior More Minimalistics &#986; Modern</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ab, voluptatem doloribus esse
                   perspiciatis sint vitae sed hic quibusdam, nesciunt sit illo cum similique provident 
                   aliquid facilis ipsa autem eum!</p>
                   <NavLink to='/shop'><motion.button whileTap={{scale:1.2}} className='buy-btn'>Shop Now</motion.button></NavLink>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <img src={homeImg} alt='not found' />
            </Col>
          </Row>
        </Container>
      </section>
      <Services/>
      <section className="trending-product" id='sec'>
        <Container>
          <Row>
            <Col lg='12'>
              <h2 className="section-title">Trending Products</h2>
            </Col>
            <ProductList data={dataTrendingProduct}/>
          </Row>
        </Container>
      </section>
      <section className="best-product">
        <Container>
          <Row>
            <Col lg='12'>
             <h2 className="section-title">Best Products</h2>
            </Col>
            <ProductList data={dataBestProduct}/>
          </Row>
        </Container>
      </section>
      <section className="timer-counter">
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="clock-top-content">
                <h4 className='text-white  mb-2'>Limited Offers</h4>
                <h3 className='text-white  mb-3'>Quality Armchair</h3>
              </div>
              <Clock/>
              <NavLink to='/shop'>
                <motion.button whileTap={{scale:1.1}} className="buy-btn">
                  Visit Store
                </motion.button>
              </NavLink>
            </Col>
            <Col lg='6' md='6' className='text-end'>
               <img src={counter} alt='not found'/>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="new-arrival">
        <Container>
          <Row>
            <Col lg='12'>
             <h2 className="section-title">New Arrival</h2>
            </Col>
            <ProductList data={dataMobileProduct}/>
            <ProductList data={dataWilrelessProduct}/>
          </Row>
        </Container>
      </section>
      <section className="new-arrival">
        <Container>
          <Row>
            <Col lg='12'>
             <h2 className="section-title">Popular in Category</h2>
            </Col>
            <ProductList data={dataPopularProduct}/>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}
