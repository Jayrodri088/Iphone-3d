import React from 'react'
import Iphone from "../assets/images/iphone-14.jpg"
import Hand from "../assets/images/iphone-hand.png"

function Jumbotron() {

    const handleLearn = (event) => {
        event.preventDefault();
        const element = document.querySelector(".sound-section");
        window.scrollTo({
            top: element?.getBoundingClientRect().top + window.scrollY,
            left: 0,
            behavior: "smooth"
        })
    }

  return (
    <div className='jumbotron-section wrapper'>
        <h2 className='title'>New</h2>
        <img src={Iphone} alt="iphone 14 pro" className='logo' />
        <p className='text'>Big and bigger</p>
        <span className='description'>
            From $41.62/mo. for 24 mo. or $999 before trade-in
        </span>
        <ul className='links'>
            <li>
                <button className='button'>Buy</button>
            </li>
            <li>
                <a href="" onClick={handleLearn} className='link'>Learn More</a>
            </li>
        </ul>
        <img src={Hand} className='iphone-img' alt="iphone" />
    </div>
  )
}

export default Jumbotron