import React from 'react'
import ProductCard from './ProductCard'
import ProductGrid from './ProductGrid'
export default function ProductList({data,view}) {
  return (
    <>
    {
      view===false?(
        data?.map((item)=><ProductCard key={Math.random()} item={item}/>)
        ):(
          data?.map((item)=><ProductGrid key={Math.random()} item={item}/>)
      )
    }
    </>
  )
}
