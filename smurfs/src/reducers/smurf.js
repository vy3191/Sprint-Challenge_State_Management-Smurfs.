import {
   GET_SMURFS_LOADING,
   GET_SMURFS_SUCCESS, 
   GET_SMURFS_ERROR,
   POST_SMURFS_START,
   POST_SMURFS_SUCCESS,
   POST_SMURFS_ERROR
} from '../actions/smurf';

const initialState = {
   isLoading: false,
   smurfs: [],
   error: null
}

export function reducer(state=initialState,action) {
   switch(action.type) {
    
    default:
     return state
   }
}