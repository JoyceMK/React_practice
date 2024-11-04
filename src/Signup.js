import React from "react";
function Signup()
{
    return(
      <div>
        <form>
        <h1>Registration form</h1>
          <label>First name:</label>
          <input type='text' name='fname'/><br/><br/>
          <label>Last name:</label>
          <input type='text' name='lname'/><br/><br/>
          <label>Email:</label>
          <input type='text' name='email'/><br/><br/>
          <label>Gender:</label>
          <input type='text' name='gender'/><br/><br/>
          <input type='button' value="Submit" onClick={()=>btnClick()} />
        </form>
      </div>
    );

    function btnClick()
{
  console.log("Clicked")
}

}



export default Signup;


