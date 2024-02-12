import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

import { serviceData } from '../../assests/data/ServicesData';

import { motion } from 'framer-motion';


import './Services.css'

export default function Services() {
  return (
    <section className='services'>
        <Container>
            <Row>
                {
                    serviceData.map((items,index)=>(
                        <Col lg='3' md='4' key={index}>
                             <motion.div whileHover={{scale:1.1}} className='service-item' style={{backgroundColor:`${items.bg}`}}>
                                  <div className="icon">{items.icon}</div>
                                  <div className='intro-services'>
                                    <h3>{items.title}</h3>
                                    <p>{items.subtitle}</p>
                                  </div>

                             </motion.div>
                        </Col>

                    ))
                }
            </Row>
        </Container>
    </section>
  )
}
