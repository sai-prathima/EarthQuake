
import {call,put} from "redux-saga/effects"
import callApi from "../Service/Service"
import { Constants } from "../Constants/Constants"
import { AxiosResponse } from "axios"


function* getData(){
    try{
        console.log("abcd")
        // const res=yield call(axios.get,"https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2021-06-14&endtime=2021-07-14")
        const res:AxiosResponse=yield call(callApi)
        console.log("going")
        console.log(res,"sagas")
        yield put({type:Constants.Success,payload:res})
    }catch(error){
        yield put({type:Constants.Error,payload:"something went wrong"})
        console.log("helllloooo")
    }
}
export default getData;



//create enums and use it --done