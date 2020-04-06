import React from "react";
import { FETCH_SMURFS, SMURFS_SUCCESS, SMURFS_ERROR, ADDING_SMURF, ADDED_SMURF, ADDING_SMURF_ERROR }  from "../actions/index"

const initialValue = {
    smurfs : [],
    isLoading : false,
    error : ""
}
export const reducer = (state=initialValue, action) => {
    switch (action.type) {
        case FETCH_SMURFS : 
            return {
                ...state,
                isLoading : true
            }
        case SMURFS_SUCCESS : 
            return {
                ...state,
                isLoading : false,
                smurfs : action.payload
            }
        case SMURFS_ERROR : 
            return {
                ...state,
                error : action.payload 
            }
            case ADDING_SMURF : 
             return {
                ...state,
                isLoading : true
            }
            case ADDED_SMURF : 
             return {
                 ...state, 
                 isLoading : false,
                 smurfs : action.payload
             }
             case ADDING_SMURF_ERROR :
              return {
                  ...state,
                  error : action.payload 
              }
        default :
        return state 
    }
}  