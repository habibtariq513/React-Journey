import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
/*
  useState: This Hook is reponsible to change your states.
  It gets us two things: 
  1) Value -> Controlled by the method
  2) Function / Method -> Controls the value
*/

  let [counter, setCounter] = useState(15)

  const addValue = () => {
    if(counter != 20) counter = counter + 1
    setCounter(counter)
  }

  const remValue = () => {
    if(counter != 0) counter = counter - 1    
    setCounter(counter)
  }

  return (
    <>
      <h1>Chai Aur REACT</h1>      
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>
          Add Value
      </button>

      <br />

      <button onClick={remValue}>
        Remove Value
      </button>
    </>
  )
}

export default App
