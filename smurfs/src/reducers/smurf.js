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
    case GET_SMURFS_LOADING:
     return {
       ...state,
       isLoading:true
     }
   case GET_SMURFS_SUCCESS:
      return {
        ...state,
        isLoading:false,
        smurfs: [...action.payload]
      } 
   case GET_SMURFS_ERROR:
     return {
       ...state,
       isLoading:false,
       error: action.payload
     }   
   case POST_SMURFS_START:
     return {
      ...state,
      isLoading:true
     }
   case POST_SMURFS_SUCCESS:
     return {
       ...state,
       isLoading:false,
       smurfs: action.payload
     }   
   case POST_SMURFS_ERROR:
     return {
       ...state,
       isLoading:false,
       error:action.payload
     }    
    default:
     return state
   }
}