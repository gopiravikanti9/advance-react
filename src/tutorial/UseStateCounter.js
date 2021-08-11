import React, { useState } from 'react'

function UseStateCounter() {
    const [value, setValue] = useState(0);
    return (
        <>
            <section style={{ margin: "4rem 0" }}>
                <h2>This is a regular counter</h2>
                <h1>{value}</h1>
                <button class="btn" onClick={() => setValue(value + 1)}>Increase</button>
                <button class="btn" onClick={() => setValue(value - 1)}>Decrease</button>
                <button class="btn" onClick={() => setValue(0)}>Reset</button>
            </section>

        </>
    )
}

export default UseStateCounter