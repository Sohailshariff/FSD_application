import React, { useState} from 'react';
import "./App.css";
import Axios from 'axios'
function App()
{
const[sname,setStudentName]=useState("")
const[t,setTech]=useState("")
const[s,setSection]=useState("")

  const submitReview=()=>
  {
Axios.post('http://localhost:9000/demo',
{
name:sname,
tech:t,
section:s}).then(()=>{
  alert("sucess")
});
  };
return (
<div className="App">
<h1> CRUD Application Demo </h1>

<div className="information">
<label><b> Student Name</b></label>
  <input type="text" name="sname" onChange= { (e)=>
  {
setStudentName(e.target.value);
  }
  }required/>

  <label><b> Technology</b></label>
  <input type="text" name="tech" onChange= { (e)=>
  {
setTech(e.target.value);
  }
  }required/>

  <label><b> Section</b></label>
  <input type="text" name="section" onChange= { (e)=>
  {
setSection(e.target.value);
  }
  }required/>
  
  <button onClick={submitReview}><b> Submit </b></button>
</div>

</div>);
}
export default App