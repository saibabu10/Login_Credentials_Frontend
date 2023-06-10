import React, { Component } from 'react'

 class SignUpComponent extends Component {
  render() {
    return (
     <form>
        <h3>Sign Up</h3>
        <div className='mb-3'>
            <label>First Name</label>
            <input
            type='text'
            className='form-control'
            placeholder='Enter Your First Name'
            required/> 
        </div>
        <div className='mb-3'>
            <label>Last Name</label>
            <input
            type='text'
            className='form-control'
            placeholder='Enter Your First Name'
            required/> 
        </div>
        <div className='mb-3'>
            <label>Email</label>
            <input
            type='email'
            className='form-control'
            placeholder='Enter Your First Name'
            required/> 
        </div>
        <div className='mb-3'>
            <label>Password</label>
            <input
            type='password'
            className='form-control'
            placeholder='Enter Your First Name'
            required/> 
        </div>
        <div className='d-grid'>
            <button type = "submit" className='btn btn-primary'>Sign Up</button>
        </div>
        <p className='forgot-password text-right'>
            Already registered,<a href='/login'>sign-in here? </a>
        </p>
     </form>
    )
  }
}

export default SignUpComponent