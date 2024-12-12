import React from 'react'
import { useSelector } from 'react-redux'

const Showfrom = () => {
    // const name=useSelector(state=>state.form.name)
    // const age=useSelector(state=>state.form.age)
    const {name,age}=useSelector(state=>state.form)
  return (
    <div>
      name:{name} <br/>
      age:{age}
    </div>
  )
}

export default Showfrom
