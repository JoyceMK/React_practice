import React, { useState } from 'react'

function Task() {

    const [formData,setFormData]=useState({
        fname:"hello"
    })

    const onChange=(event)=>{
        const {name,value}=event.target
        setFormData((prevData)=>({...prevData,[name]:value}))
    }

   const onDefault=()=>{
    setFormData(()=>({fname:"hello"}))
   }

  return (
    <div>
        <h1>State managemnt - {formData.fname}</h1>
        <input type='text' placeholder='Name' name='fname' value={formData.fname} onChange={onChange} />
        <input type='button' value="Restore to default" onClick={onDefault}/>
    </div>
  )
}

export default Task