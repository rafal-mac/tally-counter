import { useState } from 'react';
import Counter from "./Counter";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import "./App.css";

function App() {
    const [counters, cCounter] = useState([]);
    const [counterIndex, cCounterIndex] = useState(0);

    const incrementCounter = (id, arg) => {
        const updated = counters.map((value) => {
            if (value.id === id) {
                if (arg) {
                    return { id, count: value.count + 1 };
                } else {
                    return { id, count: 0 }
                }
            }
            return value;
        });
        cCounter(updated);
    }

    const generateCounters = () => {
        return counters.map((v) => (
            <Counter
                count={v.count}
                key={v.id}
                buttonHandler={() => incrementCounter(v.id, true)}
                resetCounter={() => incrementCounter(v.id, false)}
            />
        ));
    }

    const addCounter = () => {
        cCounter((prev) => [...prev, { id: counterIndex, count: 0 }]);
        cCounterIndex((prev) => prev + 1);
    };
    const removeCounter = () => {
        cCounter((prev) => prev.slice(0, prev.length - 1));
        cCounterIndex((prev) => prev - 1)
    };

    const resetHandler = () => {
        const reset = counters.map((c) => {
            return { id: c.id, count: 0 }
        });
        cCounter(reset);
    };

    return (
        <div className="app">
            <br />
            <div className="resetButton">
                <Button onClick={() => addCounter()}>Add Counter</Button>
                <Button onClick={() => removeCounter()}>Remove Counter</Button>
                <Button onClick={() => resetHandler()}>Reset all counters</Button>
            </div>
            {generateCounters()}
        </div>
    );
}

export default App;
