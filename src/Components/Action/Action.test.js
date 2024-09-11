import { Constants } from "../Constants/Constants";
import { fetchData,fetchError,dataRequested } from "./EarthQuakeAction";

describe("Action Test ",()=>{
    it("fetchData action",()=>{
        const expected = {
            type: Constants.Success
        }
        expect(fetchData()).toEqual(expected);
    });
    it("fetchError action",()=>{
        const expected = {
            type: Constants.Error,
            payload:[]
        }
        expect(fetchError()).toEqual(expected);
    });
    it("dataRequested action",()=>{
        const expected = {
            type: Constants.DataRequested,
        }
        expect(dataRequested()).toEqual(expected);
    });
})