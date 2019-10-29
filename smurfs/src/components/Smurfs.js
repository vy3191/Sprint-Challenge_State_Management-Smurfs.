import React, { useEffect} from 'react'
import { connect } from 'react-redux';
import {getSmurfs} from '../actions/smurf';
import Smurf from './Smurf';
function Smurfs(props) {
  useEffect( () => {
     props.getSmurfs();
  },[])
  return (
    <div>
      { props.isLoading ?
        (<h1>Loading..</h1>): 
        (props.smurfs.map( (smurf, index) => {
         return <Smurf key={index} smurf={smurf} />
          })
        )
      }
    </div>
  )
}
function mapStateToProps(state) {
   return {
     isLoading:state.isLoading,
     smurfs: state.smurfs,
     error:state.error
   }
}
const mapDispatchToProps = {
   getSmurfs
}
export default connect(mapStateToProps, mapDispatchToProps)(Smurfs);

