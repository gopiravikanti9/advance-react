import React, { useState, useEffect } from 'react'

function UseEffectBasic() {

    const [value, setValue] = useState(0);
    useEffect(() => {
        console.log('call useEffect');
        if (value > 1) { //hooks can be called inside the effect but it cannot called conditionally outside the effect
            document.title = `New Messages(${value})`;
        }
    }, [value]); // this is dependency,, if we not declare dependency it will not render inside the effect, it will only render once
    console.log('render component');

    return (
        <>
            <h1>{value}</h1>
            <h2>Learning UseEffect Basics </h2>
            <button className="btn" onClick={() => setValue(value + 1)}>
                click me
            </button>        </>
    )
}

export default UseEffectBasic