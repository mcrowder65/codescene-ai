import { useState, useEffect } from "react"

function App() {
    const [count, setCount] = useState(0)
    const [countPlusOne, setCountPlusOne] = useState(0)

    useEffect(() => {
        setCountPlusOne(count + 1)
    }, [count])
    useEffect(() => {
        if (count === 5) {
            console.log('count is ', count)
        }
    }, [count])
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <p>{String(count)}</p>
            <p>{String(countPlusOne)}</p>
            <button onClick={() => setCount(count - 1)}>-1</button>
        </div>
    )
}

export default App
