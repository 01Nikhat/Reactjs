import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/card'

function App() {
  const [count, setCount] = useState(0)
// in tailwind img tag must have close tag .
let userName = {
  name: "naaz",
  age: 25,
  education: "CTET"
}
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded'>Tailwind Test</h1>
      <Card username = "Nikhat" btnText = "Contact Me"/>
      <Card  username = {userName.name} btnText = "Visit Me"/>

    </>
  )
}

export default App
