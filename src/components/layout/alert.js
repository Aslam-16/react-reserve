import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

const Alert=(props)=>{
    console.log(props);
    if (Object.keys(props.alert).length === 0){
       console.log(props);
       return null
   }
   else{
        return (
            <div className={`alert alert-${props.alert.color}`}>
                {props.alert.msg}
            </div>)
   }
   

}

const mapStateToProps=(state)=>({
 alert:state.alertReducer})


export default connect(mapStateToProps,null)(Alert)