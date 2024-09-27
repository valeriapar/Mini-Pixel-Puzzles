import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import question from '../game/img/svg/icone/question.svg'
import { levels } from '../game/levels';
import { aggiornaProgressi, caricaProgressi } from '../data/dataPlayer';
import { usePlayer } from '../GiocatoreContext';

const ChooseLevel = () => {

    const info = useParams();
    const idPlayer = Number(info.idPlayer);
    const dati = caricaProgressi();
    const level = dati[`progressi${idPlayer}`];
    const { state, dispatch } = usePlayer();

    const aggiornaLivello = (liv) => {
        console.log(level[liv]);
        dispatch({
            type: 'SET_PLAYER',
            payload: { idPlayer: Number(localStorage.getItem('ID')), idLevel: liv + 1, score: level[liv].score }
        })
    }

    useEffect(() => {
        console.log(state);
        aggiornaProgressi(idPlayer, state.idLevel, state.score, false)
    }, [])

    const isPassed = (el) => {
        return level[el].isPassed
    }

    return (
        <div className='container d-flex flex-wrap align-items-center justify-content-between'>
            {
                levels.map((lev) => {
                    return (
                        <Link key={lev.id} to={`/level/${idPlayer}/${lev.id}`}>
                            <button
                                className=' m-4 madimi-one-regular card-body btn shadow align-items-center'
                                style={{ backgroundColor: '#F6EACB' }}
                                onClick={() => aggiornaLivello(lev.id)}>
                                <img id='restart'
                                    src={(isPassed(lev.id)) ? lev.img : question}
                                    className=' img-fluid'
                                    style={{ height: '65px', width: '65px' }}
                                    alt='question' />
                                <div className='mt-2'>Level {lev.id + 1}</div>
                            </button>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default ChooseLevel