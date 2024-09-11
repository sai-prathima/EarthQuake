// import axios from "axios";
// const api="https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2021-06-14&endtime=2021-07-14"
// describe('Test API',()=>{
//     it('ack',()=>{
//         const res=axios.get(api);
//         expect(res).toBeDefined()
//     })  
// })
//Todo mock the api
import callApi from "./Service"
jest.setTimeout(30000)

it('api testcase',async function () {
    global.fetch=jest.fn().mockImplementation(()=>{
        var p=new Promise((resolve,reject)=>{
            resolve({
                json:function(){
                    return {type:"FeatureCollection"}
                }
            })
        })
        return p;
    })
    const response=await callApi();
    expect(response.type).toBe("FeatureCollection")
})