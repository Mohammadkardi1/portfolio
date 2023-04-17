import React from 'react'
import heroImg from '../../assets/images/Capture.PNG'
import './Hero.css'
import CountUp from 'react-countup'



const social_links = [
    {
        icon: "ri-github-fill",
        link : "https://github.com/Mohammadkardi1"
    }, 
    {
        icon: "ri-linkedin-box-fill",
        link : "https://www.linkedin.com/in/mohammad-kardi/"
    }, 
    {
        icon: "ri-facebook-box-fill",
        link : "https://www.facebook.com/profile.php?id=100006621041867"
    }, 
    {
        icon: "ri-telegram-fill",
        link : "https://t.me/Mohammad71223"
    }, 
]



export default function Hero() {
    return (
        <div className='about py-4' id='about'>
            <div className="container">
                <div className='about__content d-flex justify-content-between  gap-md-4 gap-lg-5'>
                    <div className='mb-3 mb-md-0'>
                        <h3 data-aos='fade-down' 
                            data-aos-duration='1500'>
                                Hi!
                        </h3>
                        <h3 data-aos='fade-right' 
                            data-aos-duration='1500'>
                            I am Mohammad Kardi <br/>
                            Frontend Developer
                        </h3>
                        <div className='contact__buttons d-flex gap-4 py-4'>
                            <div className='hire-me'>
                                <a href='#contact'>
                                    <button className="d-flex gap-2 purple-btn">
                                        <i class="ri-mail-line"></i>
                                            Contact me
                                    </button>
                                </a>
                            </div>
                            <div className='portfolio d-flex align-items-center'>
                                <a href="https://drive.google.com/drive/folders/1bocfj4pcE4lQuZC9tLoTA4e-X5Ha2Dq3?usp=sharing" target='_blank '>
                                    My resume
                                </a>
                            </div>
                        </div>
                        <div className='about__about-me'
                            data-aos='fade-right'
                            data-aos-duration='1500'>
                            <p className='d-flex gap-3 gap-md-2 gap-lg-3'>
                                <span><i class="ri-apps-line"></i></span>
                                Based in Syria, I am a front-end developer passionate about building accessible web apps that users love.
                            </p>
                        </div>
                        <div className='about__social-links d-flex gap-2 gap-md-1 gap-lg-3'>
                            <p className='social-links__text'>Follow me:</p>
                            <ul className='about__social-links'>
                                {
                                    social_links.map((item, index) => (
                                        <li key={index}>
                                            <a href={item.link} target='_blank'>
                                                <i className={item.icon}></i>
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className='about__img d-flex align-items-center justify-content-center'
                        data-aos='fade-down'
                        data-aos-duration='1500'>
                        <img src={heroImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
