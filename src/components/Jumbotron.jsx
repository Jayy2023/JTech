import React from 'react'
import Iphone from '../assets/images/iphone-14.jpg';
import HoldingIphone from '../assets/images/iphone-hand.png';
import MeImage from '../assets/images/jcouch1.jpg';

export default function Jumbotron() {
  return (
    <div className='jumbotron-section wrapper'>
        <h2 className='title'>New</h2>
        <img className='logo' src={Iphone} alt="iphone 14 pro" />
        <p className='text'>Welcome to J-Tech</p>
        <span className='description'>
            From $41.62/mo. for 24 mo. or $999 before trade-in
        </span>
        <ul className='links'>
            <li>
                <button className='button'>Buy</button>
            </li>
            <li>
                <a className='link' href="">Learn more</a>
            </li>
        </ul>
        <img className='iphone-img' src={HoldingIphone} alt="iphone" />
    </div>
  )
}

