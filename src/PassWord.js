import React, { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
const PassWord = () => {
   const[length , setLength]=useState(5);
   const[number, setNumber]=useState(false);
   const[password , setPassword]=useState("");

   const GenPass = useCallback(()=>{
    let pass="";
    let str ="qwertyuiop;lkjhgfdsazxcvbnm,/?@#$%^&*!+";
    if(number) str += '1234567890';

    for(let i=1;i<=length;i++){
        pass+=str[(Math.floor((Math.random()*str.length +1)))];
    }
    setPassword(pass)
   } ,[length , number , setPassword])

  const copyPass=useRef(null)
 
  const Copy =useCallback(()=>{
   window.navigator.clipboard.writeText(password);
   alert("PassWord Copied !!")
  } , [password])

// for automatic generation..................... using  useEffect
   useEffect(()=>{GenPass()} , [length , number , setPassword , GenPass])

  return (
    <div id="main">
        <h1>Password Generator</h1>
      <div>
        <input type='text' value={password} readOnly id='pass'/>
      </div>
      <div>
      <input type='range' value={length} min={5} max={20} onChange={(e)=>setLength(e.target.value)} id='length' ref={copyPass}/><br/>
      <label id='po'>Length:{length}</label><br/><br/>
      <input type='checkbox'onChange={()=>setNumber((prev)=>!prev)} id='check'/>
      <label id='po'>Number</label>
      </div>
      <button onClick={Copy}>Copy Password</button>
    </div>
  )
}
export default PassWord;
