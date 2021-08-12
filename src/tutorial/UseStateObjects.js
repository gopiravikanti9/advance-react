import React, { useState } from 'react';

function useStateObjects() {
    const [person, setPerson] = useState({
        name: "Star lord",
        age: 50,
        message: "i am a god",
    });
    const [name, setName] = useState("Tony Stark");
    const [age, setAge] = useState(45);
    const [message, setMessage] = useState("I am iron man");
    const changeMessage = () => {
        setPerson({ ...person, message: "Not anymore" });
        setName("Wanda");
    }
    return (
        <div>
            <h3>{name}</h3>
            <h3>{age}</h3>
            <h3>{message}</h3>

            <button className="btn" onClick={changeMessage}>Change my Message</button>
        </div>
    );
}

export default useStateObjects;
