import { useState } from 'react'

const Counter = ({initialValue, step}) => {
    const [count, setCount] = useState(initialValue)

    const increment = () =>{
        setCount(count + step)
    }

    const decrement = () => {
        setCount(count - 1)
    }


  return <div>
    Counter: {count} 
    <button onClick = {increment}> + </button>
    <button onClick= {decrement}>  - </button>
    
    </div>
  
}

export default Counter