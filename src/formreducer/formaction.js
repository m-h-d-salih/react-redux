import React from 'react'
import { SUBMIT_FORM } from './formtype'

export const submitForm = ({name,age}) => {
  return {
    type:SUBMIT_FORM,
    // payload:{name,age}

    // name: name,
    // age:age

    name,
    age

  }
}

