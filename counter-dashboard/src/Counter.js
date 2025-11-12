export default function Counter({ onIncrement, value, timestamp }) {
    const handleClick = () => {
        onIncrement();
    };
    return (
        <>
            <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
                <p>Counter Value: {value}</p>
                <button onClick={handleClick} style={{
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
            }}>Increment</button>
            <p>{timestamp}</p>
            </div>
        </>
    );
}
