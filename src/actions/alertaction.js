const SETALERT='SETALERT';
const REMOVEALERT='REMOVEALERT';

export const setAlert=(color,msg)=>dispatch=>{
    dispatch({type:SETALERT,payload:{color,msg}})

    setTimeout(()=>dispatch({type:REMOVEALERT,payload:{}}),3000)
}