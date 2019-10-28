import React, {useState} from 'react'

function Form() {
  const defaultSmurf = {name:"", age:"", height:""}
  const [smurf,setSmurf] = useState(defaultSmurf);
  const handleChange = (event) => {
     setSmurf( {...smurf,[event.target.name]: event.target.value});
  }
  const handleSubmit = e => {
     e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' name="name" onChange={handleChange} value={smurf.name} placeholder="name" />
        <input type='text' name="age" onChange={handleChange} value={smurf.age} placeholder="age" />
        <input type='text' name="height" onChange={handleChange} value={smurf.height} placeholder="height" />
        <button type="submit">Add Smurf</button>
      </form>
    </div>
  )
}

export default Form;
