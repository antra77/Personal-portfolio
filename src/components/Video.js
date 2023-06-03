import React from 'react'
import { Link } from 'react-router-dom'
import './Video.css'
import bg from '../assets/bg.mp4'

const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={bg} type='video/mp4' />
        </video>
        <div className='content'>
            <h1>Hi, I'm Antra Saraf</h1>
            <p>Web developer</p>
       
        <div>
            <Link to='/About' className='btn'>More about me</Link>
             </div>
        </div>
        

    </div>
  )
}

export default Video