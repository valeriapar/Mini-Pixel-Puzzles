import React, { useEffect, useState } from 'react'
import { usePlayer } from '../../GiocatoreContext';

const Timer = ({ resetSignal, stopSignal }) => {
    const { state, dispatch } = usePlayer();
    const [time, setTime] = useState(0);
    const [finalTime, setFinalTime] = useState(state.score);

    const formatoTimer = time => {
        const min = Math.floor(time / 60);
        const sec = time % 60;
        return `${min}:${sec.toString().padStart(2, '0')}`
    }

    useEffect(() => {
        let timer;
        if (!stopSignal) {
            timer = setInterval(() => {
                setTime(oldTime => oldTime + 1);
            }, 1000)
        } else {
            setFinalTime(time);
        }
        return () => clearInterval(timer)

    }, [stopSignal, time])

    useEffect(() => {
        if (finalTime > 0) {
            console.log(finalTime);
            dispatch({
                type: 'SET_PLAYER',
                payload: { ...state, score: finalTime }
            });
            setTime(0);
        } else {
            setTime(0)
        }
    }, [finalTime, dispatch, resetSignal])

    return (
        <div className='timer d-flex align-items-center justify-content-center'>
            {formatoTimer(time)}
        </div>
    )
}

export default Timer