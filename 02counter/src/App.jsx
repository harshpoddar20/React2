import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter]=useState(15)

  // let counter = 15;

  const addValue=()=>{
     counter = counter + 1;
    setCounter(counter)
    console.log("clicked",counter);
    
  }

  const removeValue =()=>{
    counter=counter-1;
    setCounter(counter)
    console.log("clicked",counter);
    
  }

  return (
    <>
    <h1>chai aur react</h1>
    <h2>counter value {counter}</h2>

    <button
    onClick={addValue}>Add value {counter}</button>
    <br />
    <button
    onClick={removeValue}>remove value {counter} </button>


    </>
  )
}

export default App
