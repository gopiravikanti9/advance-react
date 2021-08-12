import axios from 'axios'
import React from 'react'
import Forms from './Forms'

function LearnJSON() {
    const handleClick = (b) => {
        const promise = axios.post('http://localhost:4000/user',
            { name: 'rgc' },
            {
                headers: { ['contect-type']: 'application/json' }
            }
        )
        promise.then(response => {
            console.log(response);
        })
        promise.catch(e => console.log(e))
        console.log(b);
    }
    const getUser = () => {

    }
    return (
        <>
            <h2>Random Text</h2>
            <button type="button" className='btn' onClick={handleClick}>Post User</button>
            <button type="button" className='btn' onClick={getUser}>Get User</button>
        </>
    )
}

export default LearnJSON

