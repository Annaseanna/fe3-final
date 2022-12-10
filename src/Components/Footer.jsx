import React from 'react'
import facebook from '../images/ico-facebook.png'
import instagram from '../images/ico-instagram.png'
import tiktok from '../images/ico-tiktok.png'
import whasapp from '../images/ico-whatsapp.png'
import { useGlobalStates } from './utils/global.context'

const Footer= () => {

  const{state}=useGlobalStates()
  return (
    <footer className={state.theme}>
        <div className='flex'>
        <p>Powered by</p>
        <img src="https://images.prismic.io/dh-frontend/3daea5ec-e5b0-451a-a27e-2b039506c9ca_DigitalHouse_Logo_Black.png?auto=compress,format" alt='DH-logo' />
        </div>
        <div className='logos'>
          <img src={facebook} alt="logoFace" />
          <img src={instagram} alt="logoInsta" />
          <img src={tiktok} alt="logoTik" />
          <img src={whasapp} alt="logoWsp" />
        </div>
    </footer>
  )
}

