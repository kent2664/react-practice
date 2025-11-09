import Counter from './Counter';
import { useState } from 'react';
function Dashboard() {
    //define states for two counters and their timestamps
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    const [timestamp1, setTimestamp1] = useState('');
    const [timestamp2, setTimestamp2] = useState('');

    //function to handle incrementing counters and updating timestamps
    const incrementCounter1 = () => {
        setCounter1(counter1 + 1);
        setTimestamp1(new Date(Date.now()).toLocaleString());
    }
    const incrementCounter2 = () => {
        setCounter2(counter2 + 1);
        setTimestamp2(new Date(Date.now()).toLocaleString());
    }

    //reset counter function
    const resetCounters = () => {
        setCounter1(0);
        setCounter2(0);
        setTimestamp1('');
        setTimestamp2('');;
    }

    //calculate total count
    const totalCount = counter1 + counter2;
    return (
        <>
            <div><p>Total Count: {totalCount}</p></div>
            <Counter value={counter1} timestamp={timestamp1} onIncrement={incrementCounter1} />
            <Counter value={counter2} timestamp={timestamp2} onIncrement={incrementCounter2} />
            <button style={{
                // frame
                backgroundColor: 'transparent',
                color: '#007bff',
                border: '2px solid #007bff',
                borderRadius: '5px',

                // layout
                padding: '10px 20px',
                cursor: 'pointer',
                fontSize: '16px',
                transition: 'all 0.3s ease', // animation
            }} onClick={resetCounters}>Reset Counters</button >
        </>
    );
}

export default Dashboard;