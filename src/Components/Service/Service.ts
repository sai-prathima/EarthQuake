import axios from "axios"

const callApi=async()=>{
    try{
        const result=await axios.get("https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2021-06-14&endtime=2021-07-14")
        // console.log(result.data,"service")
        return result.data
    }catch(error){
        throw error;
        //TODO add error handling --done
    }
}
export default callApi;



