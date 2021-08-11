import React from 'react'
import { data } from "./data";
function UseStateArray() {

    const [people, setPeople] = React.useState(data);
    const removeItem = (id) => {
        let newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    }
    return (
        <>
            <h1>Inside usestatearray</h1>
            {people.map((person) => {

                const { id, name } = person;
                <div key={id} className="item">
                    <h4>{name}</h4>
                    <button onClick={() => removeItem(id)}>remove him</button>

                </div>
            })

            }

        </>
    )
}

export default UseStateArray;