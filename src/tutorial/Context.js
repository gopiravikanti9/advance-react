import React, { useState, useContext } from 'react'
import { data } from './data';
//will fix our issue that we found in prop driiling ie pass component to every step
//two solution for this
//1 context api - for smaller applications
//2 redux - for bigger application

const PersonContext = React.createContext();
//this will give two components
//1st give provider and then consumer

function ContextAPI() {
    const [people, setPeople] = useState(data);

    const removePerson = (id) => {
        setPeople((people) => {
            return people.filter((person) => person.id !== id)
        })
    }
    return (
        <>
            <PersonContext.Provider value={{ removePerson }}>
                <h3>Context API</h3>
                <List people={people} />
            </PersonContext.Provider>
        </>
    )
}
const List = ({ people }) => {
    return <>
        {
            people.map((person) => {
                return <SinglePerson key={person.id} {...person} />;
            })
        }
    </>
}

const SinglePerson = ({ id, name }) => {
    const { removePerson } = useContext(PersonContext)
    return <div className="item">
        <h4>{name}</h4>
        <button onClick={() => removePerson(id)}>remove</button>
    </div>
}

export default ContextAPI