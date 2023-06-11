import React, { Component } from 'react'

 class SignUpComponent extends Component {
    constructor(props){
        super(props)
        this.state ={
            firstName:"",
            lastName:"",
            email:"",
            password:""
        }
    }
    firstnameHandler = event =>{
        this.setState({
            firstName:event.target.value
        })
    }
    lastnameHandler = event =>{
        this.setState({
            lastName:event.target.value
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
    console.log(this.state.firstName,
        this.state.lastName,
            this.state.email,
        this.state.password
        );
        fetch('http://localhost:3500/api/v1/signup',{
        method:'POST',
        crossDomain:true,
        header:{
 'Content-type':'application/json',
 'Access-Control-Allow-Origin':'*'
        },
        body:JSON.stringify({
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            email:this.state.email,
            password:this.state.password
        })
    })
    .then((response)=>response.json())
    .then((data)=>{
     console.log(data)
    })


}
  render() {
    const {firstName,lastName,email,password} = this.state
    return (
     <form onSubmit={this.formSubmitHandler}>
        <h3>Sign Up</h3>
        <div className='mb-3'>
            <label>First Name</label>
            <input
            type='text'
            className='form-control'
            placeholder='Enter Your First Name'
            value={firstName}
            onChange={this.firstnameHandler}
            required/> 
        </div>
        <div className='mb-3'>
            <label>Last Name</label>
            <input
            type='text'
            className='form-control'
            placeholder='Enter Your Last Name'
            value={lastName}
            onChange={this.lastnameHandler} /> 
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
            value=
            {password}
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