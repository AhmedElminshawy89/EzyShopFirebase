import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { db,storage } from '../Firebase/Firebase.config'
import { addDoc, collection } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { useNavigate } from 'react-router-dom'

export default function AddProduct() {


  const [productTitle,setProductTitle] = useState('')
  const [productShortDesc,setProductShortDesc] = useState('')
  const [productDesc,setProductDesc] = useState('')
  const [productPrice,setProductPrice] = useState('')
  const [category,setCategory] = useState('')
  const [productImg,setProductImg] = useState(null)

  const navigate = useNavigate()

  const handleAddProduct = async(e) =>{
    e.preventDefault();

    // const ProductInfo = {
    //   title:productTitle,
    //   ShortDescribtion:productShortDesc,
    //   Describtion:productDesc,
    //   Price:productPrice,
    //   Category:category,
    //   ProductImg:productImg
    // }

    try{

      const docRef = await collection(db,'products')

      const storageRef = ref(storage,`productImg/${Date.now()+productImg.name}`)
      const UploadImg =  uploadBytesResumable(storageRef,productImg)
      UploadImg.on(()=>{
        toast.error('Image not uploaded')
      },()=>{
        getDownloadURL(UploadImg.snapshot.ref).then(async(DownloadURL)=>{
          await addDoc(docRef,{
            title:productTitle,
            ShortDescribtion:productShortDesc,
            Describtion:productDesc,
            Price:productPrice,
            Category:category,
            ProductImg:DownloadURL
          })
        })
      })
      toast.success('Product Successfully Added')
      navigate('/dashboard/AllProduct')
    }catch(error){
      toast.error(error.message)
    }
    toast.success('Product Successfully Added!')
    setProductTitle('')
    setProductShortDesc('')
    setProductDesc('')
    setProductPrice('')
    setCategory('')
    setProductImg('')
  }

  return (
    <section className='pad'>
      <Container>
        <Row>
          <Col>
             <div className="review-form form-add">
              <h6 className="mb-4 fw-bold">Add Product</h6>
                <form action="" onSubmit={handleAddProduct} >
                 <div className="form-group">
                    <label className='lbl' htmlFor="pt">Product Title</label>
                    <input type="text" id='pt' placeholder='Product title...' value={productTitle} onChange={(e)=>setProductTitle(e.target.value)}/>
                  </div>
                  <div className="form-group">
                    <label className='lbl' htmlFor="sd">Short Describtion</label>
                     <input type="text" id='sd' placeholder='Short Describtion...' value={productShortDesc} onChange={(e)=>setProductShortDesc(e.target.value)}/>
                  </div>
                  <div className="form-group">
                     <label className='lbl' htmlFor="d">Describtion</label>
                     <input type="text" id='d' placeholder='Describtion...' value={productDesc} onChange={(e)=>setProductDesc(e.target.value)}/>
                  </div>
                  <div className='d-flex  align-items-center justify-content-between gap-5'>
                    <div className="form-group w-50">
                      <label className='lbl' htmlFor="P">Price</label>
                      <input type="text" id='P' placeholder='Price...' value={productPrice} onChange={(e)=>setProductPrice(e.target.value)}/>
                    </div>
                    <div className="filter-widget mb-3 w-50">
                        <label className='lbl' htmlFor="cat">Category</label><br/>
                        <select id='cat' className='w-100 p-2' onChange={(e)=>setCategory(e.target.value)}>
                          <option >Filter By Category</option>
                          <option value="sofa">Sofa</option>
                          <option value="mobile">Mobile</option>
                          <option value="chair">Chair</option>
                          <option value="watch">Watch</option>
                          <option value="wireless">Wireless</option>
                        </select>
                    </div>
                  </div>
                  <div className="form-group">
                      <label className='lbl' htmlFor="pi">Product Image</label>
                      <input type="file" id='pi' placeholder='Product Image...' onChange={(e)=>setProductImg(e.target.files[0])}/>
                    </div>
                  <button className='btn d-block mt-3 mx-auto'>Add Product</button>
                 </form>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
