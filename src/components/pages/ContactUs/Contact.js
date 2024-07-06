import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='container'>
      <div className='contact-us-container'>
        <h1>Contact Us</h1>
        <p>We'd love to hear from You!!</p>
        <form className='contact-form'>
            <div className='form-group'>
                <label htmlFor='name'>Name:</label>
                <input type='text' id='name' name='name' required/>
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Email:</label>
                <input type='email' id='email' name='email' required/>
            </div>
            <div className='form-group'>
                <label htmlFor='message'>Message:</label>
                <input type='message' id='messsage' name='message' required/>
            </div>
            <button type='submit' className='submit-btn'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
