import React from 'react'
import ChooseProfile from '../components/ChooseProfile'

const Home = () => {
  return (
    <div className='container'>
      <h1
        className='madimi-one-regular p-2 m-2'
        style={{fontSize: 'xxx-large', color: 'rgb(246, 234, 203)'}}
      >
        SCEGLI IL TUO PERSONAGGIO
      </h1>
      <ChooseProfile />
    </div>
  )
}

export default Home