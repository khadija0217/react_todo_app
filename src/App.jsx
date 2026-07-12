import React from 'react'

function App() {
 const language = "javascript"
 const experience = 1
 const framework = "react"
   return(
    <div>
      <p>language: {language}</p>
      <p>experience: {experience} years</p>
      <p>framework: {framework}</p>
      <p>experience Next year: {experience+1}</p>
      <p>framework Length: {framework.length}</p>
      <p>Current Date: {new Date().toLocaleDateString()}</p>
    </div>
   );
}

export default App

