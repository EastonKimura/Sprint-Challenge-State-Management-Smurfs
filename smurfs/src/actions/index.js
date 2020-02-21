import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "../components/App";
import { SmurfContext } from "../contexts/SmurfContext";
import axios from 'axios';
import { smurfReducer } from '../reducers/smurfReducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';




const store = createStore(smurfReducer, applyMiddleware(thunk));
export const FETCH_DATA = "FETCH_DATA";
export const POST_DATA = "POST_DATA";
export const ADD_NEW_SMURF = "ADD_NEW_SMURF";
export const UPDATE_SMURFS = "UPDATE_SMURFS";
export const SET_ERROR = "SET_ERROR";
export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA });
    setTimeout(() => {
        axios
            .get('http://localhost:3333/smurfs')
            .then(res => {           
                dispatch({ type: UPDATE_SMURFS, payload: res.data })
            })
            .catch(err => { dispatch({ type: SET_ERROR, payload: err }) 
            })
    }, 2000);
};
export const submitNewSmurf = (newSmurf) => dispatch => {
    dispatch({ type: POST_DATA });
    console.log('in the post, adding a new smurf', newSmurf);
    setTimeout(() => {
        axios
        .post('http://localhost:3333/smurfs', newSmurf)
        .then(res => {
            //console.log('res', res);
            dispatch({ type: ADD_NEW_SMURF, payload: res.data });
        })
            .catch(err => {
                //console.log('error', err)
                dispatch({ type: SET_ERROR, payload: "error fetching posting/adding a smurf to smurfList" })
            })
    }, 2000);
}
//Change Functions
export const updateNewSmurfName = (event) => dispatch => {
   dispatch({ type: UPDATE_NEW_SMURF_NAME, payload: event.target.value });
}
export const updateNewSmurfAge = (event) => dispatch => {
    dispatch({ type: UPDATE_NEW_SMURF_AGE, payload: event.target.value });
}
export const updateNewSmurfHeight = (event) => dispatch => {
    dispatch({ type: UPDATE_NEW_SMURF_HEIGHT, payload: event.target.value });
/* //Old Submit Function
export const submitNewSmurf = (e) => dispatch => {
    dispatch({ type: ADD_NEW_SMURF, payload: e.target.value });
    dispatch({ type: UPDATE_NEW_SMURF_ID, payload: Date.now() });
} */ 
}
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
