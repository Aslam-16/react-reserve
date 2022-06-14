import React from 'react'
import { Link } from 'react-router-dom'
// import { setAlert } from '../../actions/alertaction';
// import { getUser } from '../../actions/registeraction';
import { connect } from 'react-redux';
// import { login } from '../../actions/registeraction'


 const Navbar = ({auth}) => {

     const loginLinks = <ul><li> <Link to="/developers">Developers </Link></li>
     <li><Link to="/dashboard">Dashboard</Link></li> 
         <li><Link to="/posts">Posts</Link></li>
         <li><Link to="/" onClick={() => {
             localStorage.removeItem('auth'); window.location.reload()
         }
         } >logout</Link></li>
     </ul>;
     const guestLinks = <ul><li> <Link to="/developers">Developers </Link></li>
         <li><Link to="/register">Register</Link></li>
         <li><Link to="/login" >logIn</Link></li>
     </ul>
  return (
      <div>    <nav className="navbar bg-dark">
          <h1> 
              <Link to="/"><i className="fas fa-code"></i> DevConnector</Link>
          </h1>
         {auth.token && auth.isauth ? loginLinks : guestLinks}
      </nav></div>
  )
}
const mapStateToProps = (state) => ({
    auth: state.registerReducer
})
export default connect(mapStateToProps)(Navbar)