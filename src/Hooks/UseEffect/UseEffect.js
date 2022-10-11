import React, { useEffect, useState } from 'react'
import "./UseEffect.css"
const UseState = () => {

    const [count, setCount] = useState(0)
    const sumHandler = () => setCount(count + 1);
    useEffect(() => console.log(count), [count])
    return (
        <div className='centerAlignment'>
            <h1>{count}</h1>
            <div className="fontSize">
                <button onClick={sumHandler} className='btn btn-success btn-lg m-2' > <span className="fontSize">+</span>  </button>
            </div>
            <p>{count} times Runned useEffect function</p>
        </div>
    )
}

export default UseState
