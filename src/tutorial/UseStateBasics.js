import React, { useState } from 'react'
//use state is a named import and we must include curly braces
function UseStateBasic() {
    const [day, setday] = useState("Today is a rainy day");
    const handleClick = () => {
        if (day === "Today is a rainy day") {
            setday("Today is a sunny day")
        } else {
            setday("Today is a rainy day");
        }

    }
    return (
        <div>
            <h1>{day}</h1>
            <button type="button" className="btn" onClick={handleClick}>Click Me!</button>


        </div>
    )
}

export default UseStateBasic;
//rules for using hooks
//component name must be in upper case
//must be in the function/component body