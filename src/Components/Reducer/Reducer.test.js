import Reducer from "./EarthQuakeReducer";
import { initial_state } from "./EarthQuakeReducer";

import { Constants, mockdata } from "../Constants/Constants";

describe('post reducer', () => {

    it('should handle success', () => {
        const successAction = {
          type: Constants.Success
        };
        expect(Reducer({}, successAction)).toEqual({loading:false,post:mockdata.data,error:''});
      });

  it('should handle error', () => {
        const errorAction = {
          type: Constants.Error
        };
        expect(Reducer({}, errorAction)).toEqual({loading:false,post:{},error:'error'});
      });

});