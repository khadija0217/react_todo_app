import React from 'react'

function App() {
  const name="khadija"
  const course="react"
  const age=25
  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>I am learning {course}</p>
      <p>I am {age} years old</p>
      <p>and next year i am{age+1} year old </p>
      <p> Name in uppercases is {name.toUpperCase()} </p>
    </div>
  )
}

export default App

