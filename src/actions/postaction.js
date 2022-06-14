import axios from "axios";
import { setAlert } from "./alertaction";
const ADD_POST="ADD_POST"
const ALL_POSTS = "ALL_POSTS"
const UPDATE_LIKE='UPDATE_LIKE'
const POST='POST'
const DELETEPOST='DELETE_POST'
const ADD_CMT='ADD_CMT'
const DEL_CMT = 'DEL_CMT'

export const addPost=(formData)=>async dispatch=>{
    try {
        const data = await axios.post(`http://localhost:4000/posts/addpost`, formData);
        dispatch({type:ADD_POST})
        dispatch(setAlert('Success', 'Post Added!'));
        dispatch(getPosts())

  
    } catch (error) {
        dispatch(setAlert('Danger', 'Error occured!'));
 
    }
}

export const getPosts = () => async dispatch => {
    try {
        const data = await axios.get(`http://localhost:4000/posts/allposts`);
        dispatch({ type: ALL_POSTS,payload:data.data.data })

        //dispatch(setAlert('Success', 'Post Added!'));


    } catch (error) {
        dispatch(setAlert('Danger', 'Error occured!'));

    }
}

export const addLike = (id) => async dispatch => {
    try {
        const data = await axios.put(`http://localhost:4000/posts/addlikes/${id}`);
        dispatch({ type: UPDATE_LIKE, payload: {data:data.data,id} })
        //dispatch(getPosts())
        //dispatch(setAlert(data, 'Liked!'));


    } catch (error) {
        dispatch(setAlert('danger', 'Already Liked!'));

    }
}
export const removeLike = (id) => async dispatch => {
    try {
        const data = await axios.put(`http://localhost:4000/posts/removelikes/${id}`);
        dispatch({ type: UPDATE_LIKE, payload: {data:data.data,id }})
        //dispatch(getPosts())

        //dispatch(setAlert(data, 'UnLiked!'));


    } catch (error) {
        dispatch(setAlert('danger', 'Already UnLiked!'));

    }
}

export const deletePost = (id) => async dispatch => {
    try {
        const data = await axios.delete(`http://localhost:4000/posts/deleteposts/${id}`);
        console.log(data);
        dispatch({ type: DELETEPOST,payload:data.data })
        dispatch(getPosts());
        dispatch(setAlert('success', 'deleted!'));


    } catch (error) {
        dispatch(setAlert('danger', 'server issue!'));

    }
}

export const onePost = (id) => async dispatch => {
    try {
        const data = await axios.get(`http://localhost:4000/posts/getposts/${id}`);
        dispatch({ type: POST, payload: data.data })

        //dispatch(setAlert('Success', 'Post Added!'));


    } catch (error) {
        dispatch(setAlert('Danger', 'Error occured!'));

    }
}

export const addCmt = (formData,id) => async dispatch => {
    try {
        const data = await axios.put(`http://localhost:4000/posts/addcmt/${id}`,formData);
        dispatch({ type: ADD_CMT, payload: data.data })
        console.log('yes',data.data);
                    //dispatch(setAlert(data, 'Liked!'));


    } catch (error) {
        dispatch(setAlert('danger', 'Already Liked!'));

    }
}

export const delCmt = (id,cid) => async dispatch => {
    try {
        const data = await axios.delete(`http://localhost:4000/posts/removecmt/${id}`);
        dispatch({ type: DEL_CMT, payload: cid })
        console.log('yes', data.data);
        //dispatch(setAlert(data, 'Liked!'));


    } catch (error) {
        dispatch(setAlert('danger', 'Already Liked!'));

    }
}