import React, { useState } from 'react'
import giraffa from '../img/profili/giraffa.png'
import coniglio from '../img/profili/coniglio.png'
import leone from '../img/profili/leone.png'
import logo from '../img/logo.png'
import img_title from '../img/title.png'

const user = [{
    img: '',
    id: ''
}]



const Welcome = () => {
    const [users, setUsers] = useState(user)
  return (
    <>
    <div className='container text-center' style={{padding: '0.5rem 1rem'}}>
        <h1 className='mt-0 madimi-one-regular'>BENVENUTO</h1>
        <div className='d-flex align-items-center justify-content-center pb-5' style={{minWidth: 'max-content'}}>
            <img id='logo' src={logo} style={{height:'70px'}} className='m-2 p-2' alt='Logo'/>
            <img id='titolo' src={img_title} style={{height:'70px'}}  className='m-2 p-2' alt='Titolo'/>
        </div>
        <p className='lead'>SCEGLI IL TUO PERSONAGGIO</p>
        <div className='row pt-lg-5'>
            <div className='col-md-4'>
                <img id='img_profilo' src={giraffa} className='shadow rounded-circle' style={{backgroundColor:'#06D6A0'}} alt='Giraffa'/>
            </div>
            <div className='col-md-4'>
                <img id='img_profilo' src={coniglio} className='shadow rounded-circle' style={{backgroundColor:'#EF476F'}} alt='Coniglio'/>
            </div>
            <div className='col-md-4'>
                <img id='img_profilo' src={leone} className='shadow rounded-circle' style={{backgroundColor:'#FFC43D'}} alt='Leone'/>
            </div>
        </div>
    </div>
    
    </>
  )
}


export default Welcome