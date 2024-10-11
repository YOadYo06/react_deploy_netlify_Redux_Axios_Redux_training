import { Link } from 'react-router-dom'
import React from 'react'

const NotFoundPage = ({path}) => {
    return (
        <>
            <div>404 Not Found</div>
            <Link to={path}>Home from Link</Link>
        </>
    )
}

export default NotFoundPage