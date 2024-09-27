import React from 'react'
import { Link } from 'react-router-dom'
import BackButton from '../game/component/BackButton'

const ErrorPage = () => {
    return (
        <>
            <Link to={'/'}>
                PAGE NOT FOUND
            </Link>
        </>
    )
}

export default ErrorPage