import axios from "axios";

export const FETCH_SMURFS = "FETCH_SMURFS";
export const SMURFS_SUCCESS = "SMURFS_SUCCESS";
export const SMURFS_ERROR = "SMURFS_ERROR";
export const ADDING_SMURF = "ADDING_SMURF";
export const ADDED_SMURF = "ADDED_SMURF";
export const ADDING_SMURF_ERROR = "ADDING_SMURF_ERROR";
export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURFS });
    axios.get("http://localhost:3333/smurfs")
    .then(res => {
        console.log(res)
        dispatch({ type : SMURFS_SUCCESS, payload : res.data })})
    .catch(res => dispatch({ type : SMURFS_ERROR, payload : res}))
}
export const addSmurf = item => dispatch => {
    dispatch({ type : ADDING_SMURF });
    axios.post("http://localhost:3333/smurfs", item)
    .then(res => {
        console.log(res);
        dispatch({ type : ADDED_SMURF, payload : res.data})
    })
    .catch(err => dispatch({ type : ADDING_SMURF_ERROR, payload : err}))
} 