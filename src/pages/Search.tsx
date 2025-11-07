import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

function Search() {

  const [params, setParams] = useSearchParams()
  useEffect(() => {
    const q = params.get('q')
    if (q) {
        console.log(q)
    }
  }, [])
  

  return (
    <div>Search</div>
  )
}

export default Search