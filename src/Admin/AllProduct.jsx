import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import useGetData from '../Custom-hooks/useGetData'
import { db } from '../Firebase/Firebase.config'
import { doc,deleteDoc } from 'firebase/firestore'
export default function AllProduct() {

  const {data:productsData}=useGetData('products')

  const DeleteProduct = async id => {
    await deleteDoc(doc(db,'products',id))
  }
  return (
    <section className='pad'>
      <Container>
        <Row>
          <Col lg='12'>
          <table className="table bordered">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Tittle</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        productsData.map((e,i)=>(
                          <tr key={i}>
                            <td><img src={e.ProductImg}/></td>
                            <td>{e.title}</td>
                            <td>{e.Category}</td>
                            <td>{e.Price}</td>
                            <td><button onClick={()=>DeleteProduct(e.id)} className='btn'>Delete</button></td>
                          </tr>
                        ))
                      }
                    </tbody>
          </table>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
