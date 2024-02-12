import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import useGetData from '../Custom-hooks/useGetData'

export default function Dashboard() {

  const {data:products} = useGetData('products')
  const {data:users} = useGetData('users')
  return (
    <section className='pad services'>
      <Container>
        <Row>
           <Col lg='3' md='4'>
              <div>
                  <div className='intro-services px-4 py-4 rounded ' style={{backgroundColor:'#fdefe6'}}>
                    <h3 className='pb-3'>Total Sales</h3>
                    <p>$78000</p>
                  </div>
              </div>
           </Col>
           <Col lg='3' md='4'>
              <div>
                  <div className='intro-services px-4 py-4 rounded ' style={{backgroundColor:'#d6e5fb'}}>
                    <h3 className='pb-3'>Orders</h3>
                    <p>$78000</p>
                  </div>
              </div>
           </Col>
           <Col lg='3' md='4'>
              <div>
                  <div className='intro-services px-4 py-4 rounded' style={{backgroundColor:'#ceebe9'}}>
                    <h3 className='pb-3'>Total Products</h3>
                    <p>{products.length}</p>
                  </div>
              </div>
           </Col>
           <Col lg='3' md='4'>
              <div>
                  <div className='intro-services px-4 py-4 rounded' style={{backgroundColor:'#e2f2b2'}}>
                    <h3 className='pb-3'>Total Users</h3>
                    <p>{users.length}</p>
                  </div>
              </div>
           </Col>

        </Row>
      </Container>
    </section>
  )
}
