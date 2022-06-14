import React, { useState } from 'react'
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios';
import { connect } from 'react-redux';
import { register } from '../../actions/registeraction';

 const Register = (props) => {

  const [formData, setFormdata]=useState({name:"",email:"",password:"",password2:""})
  const {name,email,password,password2}=formData

  const onchange=e=>{
    setFormdata({...formData,[e.target.name]:e.target.value})
    console.log(formData);
    
  }
  const  onsubmit=(e)=>{
    e.preventDefault();
    if(password==password2){
    console.log(formData);

      props.register({name,email,password});
      console.log(props.registerState); 
      
    }
    else{
      console.log('pwd mismatch!');
      
    }
    
  }
   if (props.registerState.register) {
     console.log('kkk');
     return <Redirect to='/login' />
   }
  return (

    <div>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" onSubmit={e=>onsubmit(e)}>
        <div className="form-group">
          <input type="text" placeholder="Name" name="name" value={name} onChange={e=>onchange(e)} required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value={email} onChange={e=>onchange(e)}/>
          <small className="form-text"
            >This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password} onChange={e=>onchange(e)}

          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2} onChange={e=>onchange(e)}

          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </div>
  )
}
const mapStateToProps = (state) => ({
  registerState: state.registerReducer
})

export default connect(mapStateToProps,{register})(Register);
