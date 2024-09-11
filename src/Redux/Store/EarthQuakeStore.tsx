
import { configureStore } from "@reduxjs/toolkit";
import Reducer from "../../Components/Reducer/EarthQuakeReducer";
import createSagaMiddleware from "@redux-saga/core";
import mysaga from "../MySaga/EarthQuakeMySaga";
const sagamiddleware=createSagaMiddleware();
const middleware=[sagamiddleware]
export const mystore=configureStore({
    reducer:Reducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(middleware)
})

sagamiddleware.run(mysaga)

//TODO USE CONFIGURE STORE refer redux document--done