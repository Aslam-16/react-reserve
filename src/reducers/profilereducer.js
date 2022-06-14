const initialState={
    profile:null,
    loading:true,
    profiles:[],
    devprofile:null
}

export const profileReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'GET_PROFILE':
            return {...state,profile:action.payload,loading:false}
        case 'ALL_PROFILES':
            return { ...state, profiles: action.payload, loading: false }
        case 'VIEW_PROFILE':
            return { ...state, devprofile: action.payload, loading: false }
        default:
            return state
    }
}