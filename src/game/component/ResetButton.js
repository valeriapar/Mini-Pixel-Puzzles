import React from 'react'
import restart_icon from '../img/svg/icone/restart.svg'

const ResetButton = ({ reset }) => {
    return (
        <button
            id='restart'
            className='btn restart shadow d-flex align-items-center justify-content-center p-2 m-2'
            onClick={reset}>
            <img id='restart' src={restart_icon} alt='Restart' />
        </button>
    );
}

export default ResetButton