import './App.css'
import { useState,useEffect } from 'react';
function App() {
//variable name,setfunction      usestate(default value)
let [counter,setCounter]=useState (15);
// let counter=15;
const addValue=()=>{
  console.log("clicked",counter);
  setCounter(counter+1);
 console.log("value added",Math.random()); 
}

const minusvalue=()=>{
  setCounter(counter-1);
  console.log("value subtracted",counter);
}
  return (
    <>
     <h1>Chai aur Chaska</h1>
     <h2>Counter value:5</h2>
     <button onClick={addValue}>Add Value{counter}</button>
     <br/>
     <button onClick={minusvalue}>remove Value{counter}</button>
     <p>footer:{counter}</p>
    </>
  )
}

export default App
