import React from 'react'


export default function Contact() {
    
    
    return (
        <div className="" id='contact'>
            <div className="container mx-auto px-4">
                <div className='text-[color:#fff]'>
                    <h1 className='mb-4 font-bold text-xl md:text-2xl tracking-wider' >
                        Contact me
                    </h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                        <p className='text-justify text-[color:var(--scroll-bar-color)]'>
                            I would be honored to hear from you. Please take a moment to fill out the form, and I will respond promptly.
                        </p>
                    </div>
                    <div className="pb-7">
                        <form 
                            action="https://formspree.io/f/mgebpjdr" 
                            method="POST"
                            className='flex flex-col gap-4'>
                            <div>
                                <input 
                                    type="text"
                                    name='name'
                                    id='name'
                                    placeholder='Full name'
                                    className='w-full py-2 px-3 rounded-md border-2
                                        border-white outline-none focus:outline-none'
                                    required />
                            </div>
                            <div>
                                <input 
                                    type="email"
                                    name='email'
                                    id='email'
                                    placeholder='Email'
                                    className='w-full py-2 px-3 rounded-md border-2
                                        border-white outline-none focus:outline-none'
                                    required/>
                            </div>
                            <div>
                                <textarea 
                                    name="message" 
                                    id="message" 
                                    rows="4"
                                    placeholder='Message'
                                    className='w-full py-2 px-3 rounded-md border-2
                                        border-white outline-none focus:outline-none'
                                    required>
                                </textarea>
                            </div>
                            <div className='text-end'>
                                <button 
                                className='purple-btn px-8'
                                type='submit'>
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
