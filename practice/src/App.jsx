import React from 'react';
import './App.css';
import { useState } from 'react';
function App() {
  let [counter,setcounter]=useState(10);
  const addvalue=()=>{

    // setcounter(counter+1); it updates value one by one
    // setcounter(counter+1);
    
    //but to update it at once do something like this
    //setcounter fun. have callback func as feature
    setcounter(prevcounter=>prevcounter+1);
    setcounter(prevcounter=>prevcounter+1);
    setcounter(prevcounter=>prevcounter+1);
    setcounter(prevcounter=>prevcounter+1);
  }
  const subvalue=()=>{
    setcounter(counter=counter-1);
  }
  return (
    <>
    <h1>Chai aur Code</h1>
      <button onClick={addvalue}>Add value :{counter}</button>
      <br/>
      <br/>
      <button onClick={subvalue}>Sub value :{counter}</button>
      <p>value:{counter}</p>
    </>
  )
}

export default App
