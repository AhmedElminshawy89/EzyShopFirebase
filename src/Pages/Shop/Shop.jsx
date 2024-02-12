import React, { useState } from 'react'
import Helmet from '../../Components/Helmet/Helmet'
import CommoSection from '../../Components/UI/CommoSection'
import '../Shop/Shop.css'
import { Col, Container, Row } from 'react-bootstrap'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsFillGridFill,BsList} from 'react-icons/bs'

import products from '../../assests/data/Products'
import ProductList from '../../Components/UI/ProductList'
import ProductGrid from '../../Components/UI/ProductGrid'

export default function Shop() {

  const [data,setdata] = useState(products);

  const [view,setView]=useState(true)


  const handleFilter = (e) =>{
    const filterValue = e.target.value;
    if(filterValue==='All'){
      setdata(products)
    }
    if(filterValue==='sofa'){
      const filterProducts = products.filter((item)=>item.category==='sofa');
      setdata(filterProducts)
    }
    if(filterValue==='mobile'){
      const filterProducts = products.filter((item)=>item.category==='mobile');
      setdata(filterProducts)
    }
    if(filterValue==='chair'){
      const filterProducts = products.filter((item)=>item.category==='chair');
      setdata(filterProducts)
    }
    if(filterValue==='watch'){
      const filterProducts = products.filter((item)=>item.category==='watch');
      setdata(filterProducts)
    }
    if(filterValue==='wireless'){
      const filterProducts = products.filter((item)=>item.category==='wireless');
      setdata(filterProducts)
    }

    handleSorting(e)
  }

  const handleSorting=(e)=>{

      const sortValue = e.target.value;
      if(sortValue==="ascending"){
        const filterAsc = products.sort((a,b)=>a.id-b.id)
        setdata(filterAsc)
      }
      if(sortValue==="descending"){
        const filterDesc = products.sort((a,b)=>b.id-a.id)
        setdata(filterDesc)
      }
  }

  const handleSearch = (e)=>{
    const searchValue = e.target.value;
    const searchFilter = products.filter(item=>item.productName.toLowerCase().includes(searchValue.toLowerCase())
    || item.category.toLowerCase().includes(searchValue.toLowerCase())
    )
    setdata(searchFilter)
  }
  return (
    <Helmet title={"Shop"}>
        <section>
        <CommoSection title='Products'/>
          <Container>
            <Row>
              <Col lg='3' md='6'>
                <div className="filter-widget">
                  <select onChange={handleFilter}>
                    <option >Filter By Category</option>
                    <option value="All">All</option>
                    <option value="sofa">Sofa</option>
                    <option value="mobile">Mobile</option>
                    <option value="chair">Chair</option>
                    <option value="watch">Watch</option>
                    <option value="wireless">Wireless</option>
                  </select>
                </div>
              </Col>
              <Col lg='3' md='6'>
                <div className="filter-widget">
                  <select onChange={handleSorting}>
                    <option >Filter By Sorting</option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                  </select>
                </div>
              </Col>
              <Col lg='4' md='10' className='text-end'>
                <div className="search-box">
                  <input type="text" name='search' onChange={handleSearch} placeholder='Search here... '/>
                  <label htmlFor='search' className="icon"><AiOutlineSearch/></label>
                </div>
              </Col>
              <Col lg='2' md='2' className='mt-2 text-center'>
                <div className="box">
                  <label  onClick={()=>setView(true)} className={view?'activeView':''}><BsFillGridFill/></label>
                  <label onClick={()=>setView(false)} className={view?'':'activeView'}><BsList/></label>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <div className='mb-5'>
          <Container>
            <Row>
               {data.length===0?(
                <h2 className='text-center'>No Products Are Found!</h2>
                ) : (
                <ProductList view={view} data={data}/>
                )}  
            </Row>
          </Container>
        </div>
    </Helmet>

  )
}
