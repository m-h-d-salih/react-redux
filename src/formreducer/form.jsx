import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { submitForm } from './formaction'

const Form = () => {
    const [name,setname]=useState('')
    const [age,setage]=useState('')
    const dispatch=useDispatch()
  return (
    <div>
      <input type='text' onChange={(event)=>setname(event.target.value)} placeholder='name'/><br/>
      <input type='text' onChange={(event)=>setage(event.target.value)} placeholder='age'/>
      <button onClick={()=>dispatch(submitForm({name,age}))}>submit</button>
    </div>
  )
}

export default Form;
