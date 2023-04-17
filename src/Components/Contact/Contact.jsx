import React from 'react'
import './contact.css'



export default function Contact() {
    return (
        <div className="contact mb-4" id='contact'>
            <div className="container">
                <div>
                    <h1>Contact me</h1>
                </div>
                <div className='row contact__body'>
                    <div className="col-12 col-md-6">
                        
                        <p className='text-justify contact__text'>
                        I am excited about the opportunity to work as a full-time front-end developer and confident that I can make a valuable contribution to your team. I would be honored to hear from you. Please take a moment to fill out the form, and I will respond promptly.
                        </p>
                    </div>
                    <div className="col-12 col-md-6 contact__form pb-3">
                        <form 
                            action="https://formspree.io/f/mgebpjdr" 
                            method="POST"
                            className='d-flex flex-column gap-3'>
                            <div>
                                <input 
                                    type="text"
                                    name='name'
                                    id='name'
                                    placeholder='Full name'
                                    className='w-100'
                                    required />
                            </div>
                            <div>
                                <input 
                                    type="email"
                                    name='email'
                                    id='email'
                                    placeholder='Email'
                                    className='w-100'
                                    required/>
                            </div>
                            {/* <div>
                                <input 
                                    type="text"
                                    name='subject'
                                    id='subject'
                                    placeholder='Subject'
                                    className='w-100'
                                    required/>
                            </div> */}
                            <div>
                                <textarea 
                                    name="message" 
                                    id="message" 
                                    rows="4"
                                    placeholder='Message'
                                    className='w-100'
                                    required>
                                </textarea>
                            </div>
                            <div className='text-end'>
                                <button 
                                className='purple-btn px-4'
                                type='submit'>
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                    {/* <div className='col-12 col-md-6 contact__logo d-flex'>
                        <div className='logo__symbol d-flex align-items-center px-3 me-2'>
                            <p className='m-0 fw-bold'>
                                M
                            </p>
                        </div>
                        <div className=''>
                            <p className='m-0'>Mohammad</p>
                            <p className='m-0 text-white-50'>Personal</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
