import React from 'react'

function Smurf({smurf:{name,age,height}}) {
  return (
    <div className="smurf">
      <div className="smurf-modify">        
        <button>Update</button>
        <button>Delete</button>
      </div>
      <div>     
        <h2 style={{textAlign:'cener'}}>Name: {name}</h2>
        <p style={{textAlign:'center'}}>Age: {age}</p>
        <p style={{textAlign:'center'}}>Height: {height}</p>
      </div>
    </div>
  )
}

export default Smurf
