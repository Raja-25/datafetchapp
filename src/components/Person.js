import React from 'react'

export default function Person({person}) {
  return (
    <div>
    Hi I am {person.name},<br></br> 
    My age is {person.age}. <br></br> 
    My skill is :{person.skill}
    </div>
  )
}
