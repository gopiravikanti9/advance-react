import React, { useState } from 'react';

function UseStateErrorEx() {
    let title = "Hello JS";
    const handleClick = () => {
        console.log(title);
    }
    return (
        <div>
            <button type="button" className="btn" onClick={handleClick}>Fetch title</button>
        </div>
    )
};

export default UseStateErrorEx;