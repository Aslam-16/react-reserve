import axios from "axios";
import { setAlert } from "./alertaction";
import headercheck from "../headercheck";

const REGISTER='REGISTER';
const REGISTER_FAIL = 'REGISTER_FAIL';
const LOGIN = 'LOGIN';
const LOGIN_FAIL = 'LOGIN_FAIL';
const LOGIN_USER = 'LOGIN_USER';
const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';


export const getUser = () => async (dispatch) => {
    let token = localStorage.getItem('auth')
    if (token) {

        headercheck(token);
    }
    try {
        const data = await axios.get("http://localhost:4000/users/getuser");

        dispatch({ type: LOGIN_USER, payload: data.data.data });
        // dispatch(setAlert('success', 'Registered Successfully'));


    }
    catch (error) {
        dispatch({ type: LOGIN_USER_FAIL });
    }

}


export const register=(registerData)=> async(dispatch)=>{
try {
   const data=await axios.post("http://localhost:4000/users/addusers", registerData)
   console.log(data.data.token);
       dispatch({ type: REGISTER, payload: data.data.token });

    dispatch(setAlert('success', 'Registered Successfully'));


} catch (error) {
    dispatch({ type: REGISTER_FAIL});

    dispatch(setAlert('danger','User already available'));
}

}
export const login = (loginData) => async (dispatch) => {
    
    try {
        const data = await axios.post("http://localhost:4000/users/login", loginData)
        console.log(data.data.token);
        console.log(data.data.data);
         dispatch({ type: LOGIN, payload: data.data });
         
         dispatch(getUser())
        dispatch(setAlert('success', 'Logged In Successfully'));



    } catch (error) {
        dispatch({ type: LOGIN_FAIL });
        console.log(error);

        dispatch(setAlert('danger', 'Invalid Credentials'));

    }

}
