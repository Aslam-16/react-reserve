import React, { useState } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {setAlert} from '../../actions/alertaction';
import { getUser } from '../../actions/registeraction';
import { connect } from 'react-redux';
import {login} from '../../actions/registeraction'

 const Login = (props) => {
   const [formData,setFormdata]=useState({email:"",password:""})

   const {email,password}=formData;


   const onChange=e=>{
     setFormdata({...formData,[e.target.name]:e.target.value})
   }
   const onSubmit=e=>{
     e.preventDefault();
    props.login({email,password})
     

   }
   if(props.loginState.isauth){
     console.log(props);
     return <Redirect to='/dashboard'/>
   }
   console.log(props.loginState);

  return (
<div>
      
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
      <form className="form" onSubmit={e=>onSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            
            onChange={e=>onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e=>onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="register">Sign Up</Link>
      </p>
      </div>
  )
}
const mapStateToProps = (state) => ({
  loginState: state.registerReducer
})

export default connect(mapStateToProps,{setAlert,login})(Login);