import React from 'react'
import Helmet from '../../Components/Helmet/Helmet'
import CommoSection from '../../Components/UI/CommoSection'
import { Container, Row ,Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../redux/slices/cartSlices'
import {AiOutlineDelete} from 'react-icons/ai'


export default function Favorite() {

  const FavoriteItems = useSelector(state=>state.cart.favoriteItems);
  return (
    <Helmet title='Favorite'>
        <section>
            <CommoSection title='Favorite List'/>
            <Container>
                <Row>
                    <Col lg='12'>
                      {
                        FavoriteItems.length===0?(
                          <h4 className=' text-center mb-3'>No Item Added To The Favorite</h4>
                        ):(
                          <table className="table bordered">
                          <thead>
                               <tr>
                               <th>Image</th>
                               <th>Tittle</th>
                               <th>Price</th>
                               <th>Delete</th>
                             </tr>
                            </thead>
                             <tbody>
                                {
                                  FavoriteItems.map((item,index)=>(
                                    <Tr key={index} item={item}/>
                                  ))
                                }
                             </tbody>
                        </table>
                        )
                      }

                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>
  )
}


const Tr = ({item}) =>{
    const dispatch = useDispatch();
    const deleteProduct = ()=>{
        dispatch(cartActions.deleteFavorite(item.id))
    }
    return(
    <tr>
      <td><img src={item.imgUrl} alt='not found'/></td>
      <td>{item.productName}</td>
      <td>{item.price}</td>
      <td onClick={deleteProduct}><AiOutlineDelete/></td>
    </tr>
    )
}