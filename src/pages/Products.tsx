import React, { useEffect, useState } from 'react'
import { allProduct } from '../services/productService'
import { iProduct } from '../models/iAllProduct'

function Products() {

  const [proArr, setproArr] = useState<iProduct[]>([])

  useEffect(() => {
    allProduct(1).then(res => {
      const dt = res.data
      const arr = dt.data
      setproArr(arr)
    })
  }, [])

  return (
    <>
      <h2>Products</h2>
      {proArr.map((item, index) => 
        <h3>{item.title}</h3>
      )}
    </>
  )
}

export default Products