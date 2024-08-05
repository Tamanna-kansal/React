import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css';
import './App.css'

function App() {
  const [color,setcolor]=useState("olive");
  return(
  
<div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
  <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
  <div className="flex flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
    <button onClick={()=>setcolor("red")} className='outLine-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>Red</button>
    <button onClick={()=>setcolor("green")} className='outLine-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}}>Green</button>
    <button onClick={()=>setcolor("blue")} className='outLine-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}}>Blue</button>
    <button onClick={()=>setcolor("yellow")} className='outLine-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"yellow"}}>Yellow</button>
    <button onClick={()=>setcolor("purple")} className='outLine-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"purple"}}>Purple</button>
    <button onClick={()=>setcolor("gray")} className='outLine-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"gray"}}>gray</button>
    <button onClick={()=>setcolor("orange")} className='outLine-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"orange"}}>Orange</button>
    <button onClick={()=>setcolor("pink")} className='outLine-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"pink"}}>Pink</button>
  </div>
  </div>
  </div>
   
  )
}

export default App
