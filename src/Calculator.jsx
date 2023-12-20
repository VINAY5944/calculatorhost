import React, { useState } from 'react'
import "./calculator.css"

function Calculator() {
  const [value,setValue]=useState("")
  return (
    <div className='main'>
      <input  className='disp'type='text' value={value}></input>
      <div> 
        <input type="button"className='btn' value="1" onClick={(e)=>setValue(value +e.target.value)}></input>
        <input type="button"className='btn' value="2" onClick={(e)=>setValue(value +e.target.value)}></input>
        <input type="button"className='btn' value="3" onClick={(e)=>setValue(value +e.target.value)}></input>
        <input type="button"className='btn' value="4" onClick={(e)=>setValue(value +e.target.value)}></input>
    </div>
    <div> 
  
    <input type="button"className='btn' value="5" onClick={(e)=>setValue(value +e.target.value)}></input>
        <input type="button"className='btn' value="6" onClick={(e)=>setValue(value +e.target.value)}></input>
        <input type="button"className='btn' value="7" onClick={(e)=>setValue(value +e.target.value)}></input>
        <input type="button"className='btn' value="8" onClick={(e)=>setValue(value +e.target.value)}></input>
    </div>
    <div> 
   
 
    <input type="button"className='btn' value="9" onClick={(e)=>setValue(value +e.target.value)}></input>
        <input type="button"className='btn' value="0" onClick={(e)=>setValue(value +e.target.value)}></input>
        <input type="button"className='btn' value="+" onClick={(e)=>setValue(value +e.target.value)}></input>
        <input type="button"className='btn' value="-" onClick={(e)=>setValue(value +e.target.value)}></input>
    </div>
    <div> 
    <input type="button"className='btn' value="*" onClick={(e)=>setValue(value +e.target.value)}></input>
        <input type="button"className='btn' value="/" onClick={(e)=>setValue(value +e.target.value)}></input>
        <input type="button"className='btn' value="." onClick={(e)=>setValue(value +e.target.value)}></input>
        <input type="button"className='btn' value="del" onClick={(e)=>setValue(value.slice(0,-1))}></input>
   
    </div>  
       <div> 
       <input type="button"className='btn' value="clear" onClick={(e)=>setValue("")}></input>
       <input type="button"className='btn' value="=" onClick={(e)=>setValue(eval(value))}></input>
    
      
    </div>
   
    </div>
  )
}

export default Calculator