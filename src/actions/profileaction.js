import axios from "axios";
import { setAlert } from "./alertaction";
import { getUser } from "./registeraction";
const GET_PROFILE='GET_PROFILE'
const ALL_PROFILES='ALL_PROFILES'
const VIEW_PROFILE='VIEW_PROFILE'


export const getProfile=()=> async dispatch=>{

    try {
        const data = await axios.get("http://localhost:4000/profiles/profile")
         dispatch({ type: GET_PROFILE, payload: data.data });
        //await dispatch(getUser());
    } catch (error) {
    }
    
}

export const allProfiles = () => async dispatch => {

    try {
        const data = await axios.get("http://localhost:4000/profiles/allprofiles")
        dispatch({ type: ALL_PROFILES, payload: data.data });
        //await dispatch(getUser());
    } catch (error) {

    }

}
export const viewProfiles = (id) => async dispatch => {

    try {
        const data = await axios.get(`http://localhost:4000/profiles/profile/${id}`)
        dispatch({ type: VIEW_PROFILE, payload: data.data });
        //await dispatch(getUser());
    } catch (error) {
        console.log(error);
    }

}

export const createProfile = (formData,history,edit=false) => async dispatch => {

    try {
        const data = await axios.post("http://localhost:4000/profiles/create-profiles",formData)
       
        history.push('/dashboard');
        if (!edit) dispatch(setAlert('success', 'Profile created'));
        else dispatch(setAlert('success', 'Profile Updated Successfully'));

        //dispatch({ type: CREATE_PROFILE})
    } catch (error) {
        console.log(error);
        dispatch(setAlert('danger', 'Profile already created'));
    }

}

export const addEducation=(formData,history)=>async dispatch=>{
    try {
        const data = await axios.post("http://localhost:4000/profiles/addeducation", formData);
       
         
        history.push('/dashboard');
        dispatch(setAlert('success', 'Education added'));

    } catch (error) {
        console.log(error);
        dispatch(setAlert('danger', 'Error occured'));
    }
}

export const addExperience = (formData, history) => async dispatch => {
    try {
        const data = await axios.post("http://localhost:4000/profiles/addexperience", formData);

        history.push('/dashboard');
        dispatch(setAlert('success', 'Experience added created'));


    } catch (error) {
        console.log(error);
        dispatch(setAlert('danger', 'Error occured'));
    }
}

export const deleteEducation = (id) => async dispatch => {
    try {
        const data = await axios.delete(`http://localhost:4000/profiles/deleteeducation/${id}`);
        dispatch(getProfile());
        dispatch(setAlert('success', 'Education Deleted'));

        

    } catch (error) {
        console.log(error);
        dispatch(setAlert('danger', 'Error occured'));
    }
}

export const deleteExperience = (id) => async dispatch => {
    try {
        const data = await axios.delete(`http://localhost:4000/profiles/deleteexperience/${id}`);
        dispatch(getProfile());
        dispatch(setAlert('success', 'Experience Deleted'));
        

    } catch (error) {
        console.log(error);
        dispatch(setAlert('danger', 'Error occured'));
    }
}

export const deleteProfile = () => async dispatch => {
    try {
        const data = await axios.delete(`http://localhost:4000/profiles/deleteprofile`);
        dispatch(getProfile());
        dispatch(setAlert('success', 'Profile Deleted'));
        

    } catch (error) {
        console.log(error);
        dispatch(setAlert('danger', 'Error occured'));
    }
}