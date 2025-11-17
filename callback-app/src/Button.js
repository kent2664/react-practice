import {useState, useCallback, useEffect} from 'react';
import { useContext, memo } from "react";

    const Button = memo(
        function Button({ onClick}) {
          console.log('Button rendered');
          return <button onClick={onClick} >Click me</button>;
        }
    )

export default function ParentButton() {
  const [count, setCount] = useState(0);
  const inc =  useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  },[count]);


// it can manege state also and memoize the component status, but it doen't re-render when the props change
  return (
    <div>
            <p>Count : {count}</p>
            <Button onClick={inc} />
    </div>
  );
}