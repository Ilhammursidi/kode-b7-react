import { useState } from 'react'

function Button() {
const [counter, setCounter] = useState(0)

const inCounter = () => {
    setCounter(counter + 1)
    if(counter >= 10) {
        setCounter(10);
    }
}

const deCounter = () => {
    setCounter(counter - 1)
    if(counter <= 0) {
        setCounter(0);
    }
}

    return (
        <section className='flex flex-col justify-center items-center'>
            <h1 className="text-2xl m-20 font-bold">Count: {counter}</h1>
            
            <section className='flex flex-col gap-4 mt-4'>    
            <button onClick={inCounter} className="bg-blue-500 text-white px-4 py-2 rounded">
                Increment
            </button>
            <button onClick={deCounter} className="bg-red-500 text-white px-4 py-2 rounded">
                Decrement
            </button>
            </section>
        </section>
    )
}

export default Button