import React from 'react'
import hint_icon from '../img/svg/icone/indizio.svg'

const stile = {
    position: 'absolute',
    top: '-10px',
    left: '-5px',
    fontSize: 'larger',
    borderRadius: '100%',
    backgroundColor: '#ef476e',
    color: 'rgb(246, 234, 203)',
    height: '1.3rem',
    width: '1.3rem',
}

const Helps = ({ revealHelp, helpsUsed }) => {
    return (
        <button
            id='help'
            className='btn restart shadow d-flex align-items-center justify-content-center p-2 m-2'
            style={{ position: 'relative' }}
            disabled={helpsUsed >= 3}
            onClick={revealHelp}>
            <img id='help' src={hint_icon} alt='Restart' />
            <div style={stile} className='d-flex justify-content-center align-items-center'>
                {3 - helpsUsed}
            </div>
        </button>
    )
}

export default Helps