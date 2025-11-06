import React, { useEffect, useState } from 'react'
import { likesArrControl } from '../utils/likesStore'
import { singleProduct } from '../services/productService';
import { iProduct } from '../models/iAllProduct';
import axios from 'axios';
import ProductItem from '../components/ProductItem';

function Likes() {

  const [proArr, setproArr] = useState<iProduct[]>([])

  useEffect(() => {
    const arr = likesArrControl()
    if (arr) {

      axios.all(arr.map(id => singleProduct(id))).then(ress => {
        const newArr:iProduct[] = []
        ress.map(res => {
          const dt = res.data
          newArr.push(dt.data)
        })
        setproArr(newArr)
      })

    }
  }, [])
  
  

  return (
    <>
      <h2>Likes</h2>
      <div className='row'>
        {proArr.map((item, index) =>
          <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3' key={index}>
            <ProductItem item={item}/>
          </div>
        )}
      </div>
    </>
  )
}

export default Likes