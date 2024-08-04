import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
let myobj={
  username:"hitesh",
  age:21
}
let newarr=[1,2,3]
  return (
    <>
    <h1 className='bg-green-400  text-black p-4 rounded-xl mb-4'>Tailwind CSS</h1>
    <Card username="chaiaurcode" someObje={myobj} btnText="click me"/>
    <Card username="hellocode" someObje={newarr} btnText="visit me"/>
    </>
  )
}

export default App
