import './App.css';
import React, { useEffect } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Error from './components/Error/Error';
import Alert from './components/layout/alert';
import headercheck from './headercheck';
import { getUser } from './actions/registeraction';
// import { getProfile } from './actions/profileaction';
// import { connect } from 'react-redux';
// import { Provider } from 'react';
import { store } from '.';
import Dashboard from './components/main.js/Dashboard';
import Privateroute from './protectedroutes/privateroute';
import Profile from './components/main.js/Profile';
import EditProfile from './components/main.js/EditProfile'
import AddEducation from './components/main.js/AddEducation'
import AddExperience from './components/main.js/AddExperience';
import Profiles from './components/main.js/Profiles';
import ViewProfile from './components/main.js/viewProfile';
//import AddPost from './components/Posts/Post';
import Posts from './components/Posts/Posts';
import PostItem from './components/Posts/PostItem';
// import AddPost from './components/Posts/Post'

let token = localStorage.getItem('auth')
if (token) {

  headercheck(token);
}
const App = () => {
  useEffect(()=>{
      store.dispatch(getUser());
  },[])
  
  return (
    <Router>    
      <React.Fragment>
       
          <Navbar/>
       
          <Route exact path="/" render={()=><Landing/>}/>
        
          <section className='container'>
          <Alert />
            <Switch>
            
            <Route exact path="/login" render={()=><Login/>}/>   
            <Route exact path="/register" render={()=><Register/>}/>
            {/* <Route exact path="/dashboard" render={() => <Dashboard/>} /> */}
            <Privateroute exact path="/dashboard" component={Dashboard}/>
            <Privateroute exact path="/create-profile" component={Profile} />
            <Privateroute exact path="/edit-profile" component={EditProfile} />
            <Privateroute exact path="/add-education" component={AddEducation} />
            <Privateroute exact path="/add-experience" component={AddExperience} />
            <Route exact path="/developers" render={() => <Profiles />} />
            <Route exact path="/profile/:id" render={(props) => <ViewProfile {...props} />} />
            <Privateroute exact path="/posts" component={Posts} />
            <Route exact path="/posts/:id" render={(props) => <PostItem {...props} />} />

            <Route component={Error}/>
            </Switch>
          
          </section>
        {/* <Route path="*" component={Error} /> */}
          
                        

          
      </React.Fragment>
    </Router>  
    )
}
// const mapStateToProps = (state) => ({
//   registerState: state.registerReducer
// })

export default App;
