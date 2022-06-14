const initialState = {
    token:localStorage.getItem('auth'),
    isauth:false,
    loaded:false,
    user:null,
    register:false
};

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER':
            // localStorage.setItem('auth', action.payload)
            //let token=action.payload
            return { ...state,register:true}

        case 'REGISTER_FAIL', 'LOGIN_USER_FAIL', 'LOGIN_FAIL':
            localStorage.removeItem('auth')
            return { ...state, token: null, isauth: false, loaded: false, user: null}
        case 'LOGIN':
            console.log(action.payload,"log");
            localStorage.setItem('auth', action.payload.token)
            return { ...state, token: localStorage.getItem('auth'), isauth: true, loaded: true,register:false }

        case 'LOGIN_USER':
            
            return { ...state,token:localStorage.getItem('auth'), isauth: true, loaded: true,user:action.payload }
        default:
            return state
    }
}