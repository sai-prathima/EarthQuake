import { useSelector } from "react-redux";
import { DataType } from "../Interfaces/Interfaces";


// export function useforLoading(){
//     const Loading=useSelector((state:DataType)=>state.loading)
//     return Loading;
// }
// export function useforData(){
//     const Post=useSelector((state:any)=>state.post.features)
//     return Post;
// }

// export function useforItemData(){
//     const Data=useSelector((state:any)=>state.data)
//     return Data;
// }

export function Loading(state:DataType){
    return state.loading;
}

export function Data(state:any){
    return state.post.features;
}

export function ItemData(state:any){
    return state.data;
}

// export function featuresSelector(){
//     return ((state:any)=>state.post.features)
// }
//todo 
