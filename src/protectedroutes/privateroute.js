import { connect } from "react-redux"
import { Redirect, Route } from "react-router-dom"
import Login from "../components/auth/Login";
import Spinner from "../components/main.js/spinner";


const PrivateRoute =  ({ component: Component, auth,...rest })=>


     <Route {...rest} render={(props)=>
       !auth.token ?  <Redirect to='/login'/> : <Component {...props} />
}/>


const mapStateToProps=(state)=>({
    auth:state.registerReducer
})
export default connect(mapStateToProps)(PrivateRoute)