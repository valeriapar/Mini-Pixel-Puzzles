import React from 'react'
import logo from '../img/logo.png'
import img_title from '../img/title.png'
import { Link } from 'react-router-dom'

const Title = () => {
    return (
        <Link to={'/'}>
        <div className='d-flex align-items-center justify-content-center m-4 p-4 rounded-pill shadow' style={{ backgroundColor: '#F6EACB' }}>
            <img src={logo} style={{ width: "60px", height: "60px" }} className=' logo' alt='Logo' />
            <img src={img_title} style={{ height: "40px" }} className='m-4' alt='Logo' />
        </div>
        </Link>
    )
}

export default Title