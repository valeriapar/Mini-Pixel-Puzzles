import React from 'react'
import ResetButton from '../ResetButton'
import home_icon from '../../img/svg/icone/home.svg'
import { Link, useParams } from 'react-router-dom'
import heart_icon from '../../img/svg/icone/heart_fill.svg'

const LevelNotPassed = ({ modalState, chiudiModal}) => {
  const data = useParams();

  return (
    <section className={`madimi-one-regular modal-section ${modalState ? 'show-modal' : ''}`}>
      <div className='modal-content align-items-center'>
        <h1 className='m-2'>VITE TERMINATE</h1>
        <img src={heart_icon} alt='heart' style={{height: '70px', width: '70px'}}/>
        <div className='d-flex align-items-center justify-content-around'>
          <ResetButton reset={chiudiModal} />
          <Link to={`/levels/${data.idPlayer}`}>
            <BackHome onClick={chiudiModal} />
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



export default LevelNotPassed