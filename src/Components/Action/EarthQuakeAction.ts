import { Constants } from "../Constants/Constants"

export const fetchData=()=>{
    return{
        type:Constants.Success,
    }
    
}

export const fetchError=()=>{
    return{
        type:Constants.Error,
        payload:[]
    }
    
}

export const dataRequested=()=>{
    return{
        type:Constants.DataRequested,
        
    }
    
}