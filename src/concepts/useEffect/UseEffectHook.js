import React, { useEffect, useState } from 'react'

export default function Counter() {
  const [counter,setCounter] = useState(0)
  const [calculation,setCalculation] = useState(0)
  useEffect(()=>{
    setCalculation(counter*2)
  },[counter])
  return (
    <div>
      <h2>I have rendered {counter} times!</h2>
      <p>Counter: {counter}</p>
      <button onClick={()=>{setCounter(counter+1)}}>+</button>
      <p>Calculation: {calculation}</p>
    </div>
  )
}