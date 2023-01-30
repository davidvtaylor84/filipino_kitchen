import React from 'react'
import './Footer.css'
import secondbuffet from '../../assets/secondbuffet.jpeg'

const Footer = () => {
  return (
    <>
    <div className='buffet'>
    {/* <img src={secondbuffet} alt='Filipino buffet' className='picture'/> */}
    </div>
    <div className='footer'>
        <h3>Tito's Food of Fomalhaut</h3>
        <h4>11 Far Sky Place, Edinburgh, EH6 7QY, 0131 555 0407</h4>
        <a>hello@fomalhaut.co.uk</a>
    </div>
    </>
  )
}

export default Footer