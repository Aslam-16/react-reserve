

const initialState={
    post:null,
    posts:[],
    loading:true,
    
}

export const postReducer=(state=initialState,action)=>{
    const {type,payload}=action
    switch(type){
        case 'ALL_POSTS':
            return {...state,posts:payload,loading:false}
        case 'UPDATE_LIKE':
            return { ...state,posts:state.posts.map(post=>post._id===payload.id?{...post,likes:payload.data}:post),loading:false}

        case 'POST':
            return { ...state, post: payload, loading: false }
        case 'DELETE_POST':
            return { ...state, posts: payload, loading: false }
        case 'ADD_CMT':
            return { ...state, post: {...state.post,comments:payload}, loading: false }
        case 'DEL_CMT':
            return { ...state, post: { ...state.post, comments: state.post.comments.filter((cmt)=>cmt._id!==payload) }, loading: false }
        default:
            return state
    }

}