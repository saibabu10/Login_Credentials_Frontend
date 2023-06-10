import React, { Component } from 'react'

 class SignUpComponent extends Component {
    constructor(props){
        super(props)
        this.state ={
            firstname:"",
            lastname:"",
            email:"",
            password:""
        }
    }
    firstnameHandler = event =>{
        this.setState({
            firstname:event.target.value
        })
    }
    lasttnameHandler = event =>{
        this.setState({
            lasttname:event.target.value
        })
    }
    emailHandler = event =>{
        this.setState({
            email:event.target.value
        })
    }
    passwordHandler = event =>{
        this.setState({
            password :event.target.value
        })
    }

    formSubmitHandler = event =>{
    event.preventDefault()
    console.log(this.state.firstname,
        this.state.lastname,
        this.state.email,
        this.state.password);
}
  render() {
    const {firstname,lastname,email,password} = this.state
    return (
     <form onSubmit={this.formSubmitHandler}>
        <h3>Sign Up</h3>
        <div className='mb-3'>
            <label>First Name</label>
            <input
            type='text'
            className='form-control'
            placeholder='Enter Your First Name'
            value={firstname}
            onChange={this.firstnameHandler}
            required/> 
        </div>
        <div className='mb-3'>
            <label>Last Name</label>
            <input
            type='text'
            className='form-control'
            placeholder='Enter Your Last Name'
            value={lastname}
            onChange={this.lastnameHandler}
            required/> 
        </div>
        <div className='mb-3'>
            <label>Email</label>
            <input
            type='email'
            className='form-control'
            placeholder='Enter Your Email'
            value={email}
            onChange={this.emailHandler}
            required/> 
        </div>
        <div className='mb-3'>
            <label>Password</label>
            <input
            type='password'
            className='form-control'
            placeholder='Enter The Password'
            value={password}
            onChange={this.passwordHandler}
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