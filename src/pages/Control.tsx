import React, { JSX } from 'react'
import { Navigate } from 'react-router-dom'
import { apiConfig } from '../services/apiConfig'

function Control(props: {item: JSX.Element}) {

  const jwt = localStorage.getItem('token')
  apiConfig.defaults.headers.common['Authorization'] = `Bearer ${jwt}`

  return (
    jwt 
        ?
        <>
            {props.item}
        </>
        :
        <Navigate to={'/'} replace={true} />
  )
}

export default Control