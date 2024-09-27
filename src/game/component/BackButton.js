import React from 'react'
import back_icon from '../img/svg/icone/back.svg'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
    let navigate = useNavigate()
    return (
        <button
            className=" btn close"
            style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 1000 }}
            onClick={() => navigate(-1)}>
            <img src={back_icon} alt='back'></img>
        </button>
    )
}

export default BackButton