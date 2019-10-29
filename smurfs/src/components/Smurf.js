import React from 'react'

function Smurf({smurf:{name,age,height}}) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{height}</p>
    </div>
  )
}

export default Smurf
