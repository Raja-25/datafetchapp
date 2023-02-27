import React from 'react'

export default function NameList() {
    const nameList=['raja','rajesh','ramya','kiran']
  return (
    <div>
      {
      nameList.map((name,index) => <h2 key={index}>{index} {name}</h2>)
      }

    </div>
  )
}
