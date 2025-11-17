import { useCallback,  useState} from "react";
import Child from "./Child"

export default function Parents(){
    const [count, SetCount] = useState(0);

    const countUp = useCallback(() => {
        SetCount(count + 1);
    },[])
    return(
        <>
        {count}
            <button onClick={() =>  SetCount(count + 1)}> change state</button>
            <Child propFunc={countUp} count={count}></Child>
        </>
    )
}