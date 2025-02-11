import React,{useState} from "react";

function InterestCalculator() {  
    const [principal, setPrincipal] = useState('');
    const [rate, setRate] = useState('');
    const [time, setTime] = useState('');
    const [type, setType] = useState('simple');
    const [result, setResult] = useState(null);

    const calculateInterest = () => {
        const p = parseFloat(principal);
        const r = parseFloat(rate) / 100;
        const t = parseFloat(time);

        if (isNaN(p) || isNaN(r) || isNaN(t)) {
            setResult('Please enter valid numbers');
            return;
        }

        let interest;
        if (type === 'simple') {
            interest = p * r * t;
        } else if (type === 'compound') {
            interest = p * Math.pow((1 + r), t) - p;
        }

        setResult(interest.toFixed(2));
    }

    return (
        <div style={styles.container}>
            <h2>Interest Calculator</h2>
            <div>
                <label style={styles.label}>Principal P:</label>
                <input type="number"
                    value={principal}
                    onChange={(e) => setPrincipal(e.target.value)}
                    style={styles.input}
                    placeholder="Enter Principal Amount"
                />
            </div>
            <div>
                <label style={styles.label}>Rate of Interest R(%):</label>
                <input type="number" value={rate} onChange={(e) => setRate(e.target.value)}
                    style={styles.input}
                    placeholder="Enter the rate of Interest" />
            </div>
            <div>
                <label style={styles.label}>Time (years):</label>
                <input type="number" value={time} onChange={(e) => setTime(e.target.value)}
                    style={styles.input}
                    placeholder="Enter the Tenure(Year)" />
            </div>
            <div>
                <label style={styles.label}>Type:</label>
                <select value={type} onChange={(e) => setType(e.target.value)} style={styles.input}>
                    <option value="simple">Simple</option>
                    <option value="compound">Compound</option>
                </select>
            </div>
            <button onClick={calculateInterest} style={styles.button}>Calculate</button>
            {result !== null && <div style={styles.result}>Result: {result}</div>}
        </div>
    );
}

const styles = {
    input: {
        margin: '10px 0',
        padding: '8px',
        width: '100%',
        boxSizing: 'border-box'
    },
    container: {
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
    },
    label: {
        display: 'block',
        marginBottom: '5px'
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
    },
    result: {
        marginTop: '20px',
        fontWeight: 'bold'
    }
};

export default InterestCalculator;