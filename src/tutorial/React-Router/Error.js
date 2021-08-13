
import React from 'react'
import { Link } from "react-router-dom";

function Error() {
    return (
        <div>
            <h2>Error 404 Page Not Found</h2>
            <Link to="/" className="btn">go back To Home Page</Link>
        </div>
    )
}

export default Error
