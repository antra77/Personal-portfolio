import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <>
      < div className='form-title'>
        <h1>Get in touch</h1>
      </div>
      <div className='social-buttons'>
        <ul>
          <li><img className='button' src={require('../git.png')} alt='git' /></li>
          <li><img className='button' src={require('../linkd.png')} alt='linkd' /></li>
          <li><img className='button' src={require('../gmail.png')} alt='gmail' /></li>
        </ul>
      </div>
      <div className='form-content'>
        <div className='form-input'>

        <input type='text' name='text' className='input1' placeholder='Name!'/>
        <input type='text' name='text' className='input2' placeholder='Email!'/>
        <textarea name='text' id='input3' cols='30' rows='10' placeholder='Enter your message here!'></textarea>
        <button className='form-btn' type='submit'>Submit</button>



        </div>
      </div>






    </>
  )
}

export default Form