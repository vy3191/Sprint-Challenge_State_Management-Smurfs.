import axios from 'axios';
export const GET_SMURFS_LOADING = "GET_SMURFS_LOADING";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_ERROR = "GET_SMURFS_ERROR";

export const POST_SMURFS_START = "POST_SMURFS_START";
export const POST_SMURFS_SUCCESS = "POST_SMURFS_SUCCESS";
export const POST_SMURFS_ERROR = "POST_SMURFS_ERROR";

export function getSmurfs(){
   return (dispatch) => {
       dispatch({type:GET_SMURFS_LOADING });
       axios.get( `http://localhost:8000/smurfs`)
            .then(response => {
               dispatch({type:GET_SMURFS_SUCCESS, payload:response.data })
              //  console.log(response.data);
            })
            .catch(err => {
              // console.log(err);
              dispatch({type:GET_SMURFS_ERROR, payload:err })
            })
   }
}
export function postSmurfs(newSmurf) {
    return (dispatch) => {
       dispatch({type: POST_SMURFS_START});
       axios.post(`http://localhost:8000/smurfs`, newSmurf)
            .then(res => {
               console.log(res.data)
               dispatch({type:POST_SMURFS_SUCCESS, payload: res.data})
            })
            .catch( err => {
               console.log(err);
              dispatch({type:POST_SMURFS_ERROR, payload:err })

            })
    }
}
