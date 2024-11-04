import React,{useState} from "react";

function Signup()
{
  const[formData,setFormData]=useState({
    firstname:"",
    lastname:"",
    email:"",
    gender:""
  })

  const handleInputChange=(event)=>{
    const {name,value}=event.target
    setFormData((prevData)=>({...prevData,[name]:value}))
  }
  const handleSubmit=(event)=>{
    event.preventDefault()
    console.log(formData,"The Data")
  }
    return(
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
        <h1>Registration form</h1>
          <label>First name:</label>
          <input type='text' name='firstname' value={formData.firstname} onChange={(event)=>handleInputChange(event)} /><br/><br/>
          <label>Last name:</label>
          <input type='text' name='lastname' value={formData.lastname} onChange={(event)=>handleInputChange(event)} /><br/><br/>
          <label>Email:</label>
          <input type='text' name='email' value={formData.email} onChange={(event)=>handleInputChange(event)} /><br/><br/>
          <label>Gender:</label>
          <input type='text' name='gender' value={formData.gender} onChange={(event)=>handleInputChange(event)} /><br/><br/>
          <input type='submit' value="Submit"/>
        </form>
      </div>
    );



}



export default Signup;


