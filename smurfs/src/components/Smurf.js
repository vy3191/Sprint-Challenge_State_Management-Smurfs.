import React, {useState} from 'react'
import {connect} from 'react-redux';
import {deleteSmurfs, updateSmurfs} from '../actions/smurf';

function Smurf(props) {
  const {name,age,height, id} = props.smurf;
  const [editing,setEditing] = useState(false)
  const defaultSmurf = {name:"", age:"", height:"", id: id}
  const [smurf,setSmurf] = useState(defaultSmurf);
  const handleChange = (event) => {
     setSmurf( {...smurf,[event.target.name]: event.target.value});
  }
  const handleSubmit = e => {
    
     e.preventDefault();
     console.log(smurf)
     props.updateSmurfs(smurf);
     setEditing(false);
     setSmurf(defaultSmurf);
  }
  if(editing) {
    return(
      <div>
      <form onSubmit={handleSubmit} class="smurf-form">
        <input type='text' name="name" className="smurf-input" onChange={handleChange} value={smurf.name} placeholder={name} />
        <input type='text' name="age" className="smurf-input" onChange={handleChange} value={smurf.age} placeholder={age} />
        <input type='text' name="height" className="smurf-input" onChange={handleChange} value={smurf.height} placeholder={height} />
        <button type="submit" className="smurf-input">Add Smurf</button>
      </form>
    </div>
    )
  }
  return (
    <div className="smurf">
      <div className="smurf-modify">        
        <button onClick={() => setEditing(true)}>Update</button>
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

