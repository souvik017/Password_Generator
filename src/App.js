
import { useState } from 'react';
import './App.css';

function App() {
  const [color , setcolor]=useState("black")
    
  return (
    <>
    <div  id='div' style={{backgroundColor:color}}>
    <button id='Red' onClick={()=>setcolor("Red")}>Red</button><br/><br/>
    <button id="Green"onClick={()=>setcolor("Green")}>Green</button><br/><br/>
    <button id="white"onClick={()=>setcolor("White")}>white</button><br/><br/>
    <button id="yellow"onClick={()=>setcolor("Yellow")}>yellow</button><br/><br/>
    <button onClick={()=>setcolor("Black")}>default</button>
    </div>
    </>
  )
}

export default App;