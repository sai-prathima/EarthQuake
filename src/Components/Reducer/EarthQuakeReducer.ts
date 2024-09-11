import { Constants } from "../Constants/Constants"
import { DataType } from "../../Interfaces/Interfaces"

export const initial_state={
    loading:true,
    post:{},
    error:'',
    data:''
}

const Reducer=(state=initial_state,action:DataType)=>{
    switch(action.type){
        case Constants.Success:{
            return{
                ...state,
                loading:false,
                post:action.payload,
                error:''
            }
        }
        case Constants.Error:{
            return{
                ...state,
                loading:false,
                post:{},
                error:'error'
            }
        }
        case Constants.SendData:{
            return{
                ...state,
                data:action.payload
            }
        }
        default:
           return state
    }
}
export default Reducer;