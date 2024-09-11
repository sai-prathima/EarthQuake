import {takeEvery} from "redux-saga/effects"
import { Constants } from "../../Components/Constants/Constants";
import getData from "../../Components/Sagas/EarthQuakeSaga";

function* mysaga(){
    yield takeEvery(Constants.DataRequested,getData)
    
}
export default mysaga;

//create enums and use it --done