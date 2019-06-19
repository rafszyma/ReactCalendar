import React, {useState} from 'react';

export default function App () {
    const [count, setCount] = useState(0);
    return (
        <div>
            <br /><br />
            Here is a button that will track how many times you click it:
            <br /><br />
            <button onClick={() => setCount(count+2)}>
                {count}
            </button>
        </div>
    );
}