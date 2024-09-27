import React from 'react'
import ResetButton from '../ResetButton'
import home_icon from '../../img/svg/icone/home.svg'
import { Link, useParams } from 'react-router-dom'

const LevelSuccess = ({ modalContent, modalState, chiudiModal}) => {

  const data = useParams();

  return (
    <section className={`madimi-one-regular modal-section ${modalState ? 'show-modal' : ''}`}>
      <div className='modal-content align-items-center'>
        <h1 className='m-3'>LIVELLO SUPERATO</h1>
        <img className='shadow' src={modalContent[0].img} alt='heart' style={{height: '120px', width: '120px'}}/>
        <h2>{modalContent[0].name}</h2>
        <div className='d-flex align-items-center justify-content-around'>
          <ResetButton reset={chiudiModal} />
          <Link to={`/levels/${data.idPlayer}`}>
            <BackHome/>
          </Link>
        </div>
      </div>
    </section>
  )
}



const BackHome = () => {
  return (
    <button id='back-home' className='btn restart shadow d-flex align-items-center justify-content-center p-2 m-2'>
      <img id='back-home' src={home_icon} alt='home' />
    </button>
  )
}

export default LevelSuccess