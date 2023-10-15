import { useState, useEffect, useRef } from "react";


export function Counter({ initialValue }) {

    const [count, setCount] = useState(initialValue);

    const direction = useRef("");


    useEffect(() => {
        if (count > initialValue) {
            direction.current = "UP"
        } else if (count < initialValue) {
            direction.current = "DOWN"
        }
    }, [count, initialValue]);


    useEffect(() => {
        console.log(direction.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [direction.current]);



    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }

    return(
        <div>
            <h1>Counter= {count}</h1>
            <button onClick={handleIncrement}> Increment</button>
            <button onClick={handleDecrement}> Decrement</button>
        </div>
    )

}
