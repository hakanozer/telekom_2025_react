import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {
  
  const params = useParams()
  useEffect(() => {
    const id = params.id
    if (id) {
        // service call
        console.log("id", id)
    }
  }, [])
  

  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail