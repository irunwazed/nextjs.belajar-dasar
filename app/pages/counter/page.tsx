'use client'
import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <>
            Counter = {count}
            <br />
            <button onClick={()=> {setCount(count+1)}}>Tambah</button>
        </>
    )
}

export default Counter