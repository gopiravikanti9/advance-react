import React from 'react'
import { data } from "../data";
import person from './person';

function People() {
    return (
        <div>
            <h1>People page</h1>
            {People.map((person) => {
                return (
                    <div key={person.id} className="item">
                        <h4>{person.name}</h4>
                    </div>
                );

            })}
        </div>
    )
}
export default People