import React from 'react'
import {connect} from 'react-redux';
import {deleteSmurfs, updateSmurfs} from '../actions/smurf';

function Smurf(props) {
  const {name,age,height, id} = props.smurf;
  return (
    <div className="smurf">
      <div className="smurf-modify">        
        <button>Update</button>
        <button onClick={() => props.deleteSmurfs(id)}>Delete</button>
      </div>
      <div>     
        <h2 style={{textAlign:'cener'}}>Name: {name}</h2>
        <p style={{textAlign:'center'}}>Age: {age}</p>
        <p style={{textAlign:'center'}}>Height: {height}</p>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
   deleteSmurfs, updateSmurfs
}
export default connect(null, mapDispatchToProps)(Smurf);

