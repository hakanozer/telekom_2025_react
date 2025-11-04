import React, { FormEvent, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { isValidEmail } from '../utils/valids'
import { ToastContainer, toast } from 'react-toastify';
import { userLogin } from '../services/userService';

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const sendLogin = (evt: FormEvent) => {
    evt.preventDefault()
    if (!isValidEmail(email)) {
      toast.error('Email format fail!')
    }else if(password.length < 5) {
      toast.error('Password fail')
    }else {
      // service call
      userLogin(email, password)
      .then(res => {
        // servisten 200 döndü, servis başarılı oldu
        const dt = res.data
        console.log(dt.data.access_token)
      })
      .catch(err => {
        // servis hatalı ise
        toast.error('Incorrect email or password')
      })
    }

  }

  return (
    <>
      <div className="row">
        <div className='col-sm-4'></div>
        <div className='col-sm-4'>
          <h2>User Login</h2>
          <form onSubmit={sendLogin}>
            <div className='mb-3'>
              <input onChange={(evt) => setEmail(evt.target.value)} type='email' className='form-control' placeholder='E-Mail' />
            </div>
            <div className='mb-3'>
              <input onChange={(evt) => setPassword(evt.target.value)}  type='password' className='form-control' placeholder='Password' />
            </div>
            <div className='d-flex justify-content-between'>
              <button className='btn btn-success'>Login</button>
              <NavLink to={'/register'} className='btn btn-danger'>Register</NavLink>
            </div>
          </form>
        </div>
        <div className='col-sm-4'></div>
      </div>
      <ToastContainer />
    </>
  )
}

export default Login