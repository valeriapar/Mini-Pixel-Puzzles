import React from 'react'
import ResetButton from './ResetButton'
import Vite from './Vite'
import Helps from './Helps'
import Timer from './Timer'

const BottomBarGame = ({ reset, errori, revealHelp, helpsUsed, resetSignal, stopSignal }) => {

    return (
        <div className='d-flex align-items-center justify-content-around mb-2'>
            <Helps revealHelp={revealHelp} helpsUsed={helpsUsed} />
            <ResetButton reset={reset} />
            <Vite errori={errori} />
            <Timer resetSignal={resetSignal} stopSignal={stopSignal} />
        </div>
    )
}

export default BottomBarGame