import { useState, useMemo } from "react";

function Factorial() {
    const [num, setNum] = useState(1);
    const computeFactorial = (n) => {
        return n <= 1? 1 : n * computeFactorial(n - 1);
    };

    const factorial = useMemo(() => computeFactorial(num), [num]);
    return (<>
    <p>Factorial of {num} is {factorial}</p>
        <input type="number" value={num || ""} onChange={(e) => e.target.value ? setNum(parseInt(e.target.value)) : null} />
        </>
    );
}

export default Factorial;