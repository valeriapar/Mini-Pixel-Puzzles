import React from 'react'
import { profili } from '../data/dataProfilesIcons'
import { Link } from 'react-router-dom'
import { verificaGiocatore } from '../data/dataPlayer'

const ChooseProfile = () => {

    return (
        <div className='container d-flex flex-wrap align-items-center justify-content-between'>
            {
                profili.map((el) => {
                    return (
                        <Link key={el.id} to={`/levels/${el.id + 1}`}>
                            <button
                                className='btn m-4'
                                onClick={() => verificaGiocatore(el.id)}
                            >
                                <img
                                    id='img_profilo'
                                    src={el.img}
                                    className='shadow rounded-circle'
                                    style={{ backgroundColor: '#06D6A0' }}
                                    alt={el.nome}
                                />
                            </button>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default ChooseProfile