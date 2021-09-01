import "./App.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Counter(props) {
    return (
        <Card className={props.counterName}>
            <Card.Body>
                <h1>Tally Counter</h1>
                <p>{props.count}</p>
                <Button onClick={() => props.buttonHandler()}>Increase</Button>
                <Button onClick={() => props.resetCounter()}>Reset</Button>
            </Card.Body>
        </Card>
    );
}

export default Counter;
