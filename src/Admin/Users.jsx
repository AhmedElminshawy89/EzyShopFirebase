import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import useGetData from '../Custom-hooks/useGetData'
import { doc,deleteDoc } from 'firebase/firestore'
import { db } from '../Firebase/Firebase.config'


export default function Users() {

  const DeleteProduct = async id => {
    await deleteDoc(doc(db,'users',id))
  }

  const {data:usersData}=useGetData('users')
  return (
    <section className='pad'>
    <Container>
      <Row>
        <Col lg='12' className='fw-bold fs-5'>Users</Col>
        <Col lg='12' className='pt-3'>
          <table className="table bordered">
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>UserName</th>
                          <th>Email</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                       { usersData.map((user)=>(
                          <tr>
                            <td><img src={user.photoURL}/></td>
                            <td>{user.displayName}</td>
                            <td>{user.email}</td>
                            <td><button onClick={()=>DeleteProduct(user.id)} className='btn'>Delete</button></td>
                          </tr>
                        ))}
                      </tbody>
            </table>
        </Col>
      </Row>
    </Container>
  </section>
  )
}
