const initialState={};

 export const alertReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'SETALERT':
            
            return Object.assign({},action.payload)
             case 'REMOVEALERT':
            
            return Object.assign({},action.payload)
        default:
            return state
    }
}