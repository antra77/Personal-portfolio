import React from 'react'
import './Intro.css'
import { Link } from 'react-router-dom'


const Intro = () => {
    return (

        <div className='intro'>
            <div className='intro-text'>
                <h1>Hi, I am Antra</h1>

            </div>

            <p className='intro-content'> I am a self-taught web developer. I am a b.tech graduate with front-end and back-end developing skills. I am passionate about creating great user experiences and have strong understanding of usability and accessibility standards.
            </p>

            <div>
            <Link to='/Projects' className='btn2'>View my work</Link>
             </div>

            

        </div>
    )
}

export default Intro