import { useState } from "react";
export default function Counter() {
    //Define State 
    const [counter, setCounter] = useState(0);  //initialize to 0;
  return (
    <>
      <p>{counter}</p>
      <button onClick={()=>setCounter(counter + 1)}> This is a counter!!!</button>
    </>
    )
}