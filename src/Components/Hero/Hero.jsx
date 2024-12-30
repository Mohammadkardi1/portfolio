import React, {useRef, useEffect} from 'react'
import heroImg from '../../assets/images/hero.jpg'
import './Hero.css'
import CountUp from 'react-countup'
import { init } from 'ityped'


export default function Hero() {

    const textRef = useRef()

    useEffect(() => {
        init(textRef.current, {
            backDelay: 1500,
            showCursor: true,
            strings: [
                'Mohammad Kardi',
                'a Full-Stack Developer'
            ]
        })
    }, [])

    return ( 
        <div className=' text-[color:#fff]' id='about'>
            <div className="container mx-auto px-4">
                <div className='about__content flex justify-between  md:gap-4 lg:gap-5'>
                    <div className='mb-3 md:mb-0 text-sm md:text-lg'>
                        <h3 
                            className='text-md tracking-widest mb-3
                                text-[color:var(--scroll-bar-color)]'
                            >
                                Welcome to my portfolio!
                        </h3>
                        <h2 className='mb-2 text-lg md:text-2xl font-extrabold tracking-widest'
                            >
                            I am&nbsp;
                            <span ref={textRef} className='text-[color:var(--primary-color-two)]'>
                                
                            </span>
                        </h2>
                        <div className='mb-4'>
                            <p className='lex tracking-widest gap-3 md:gap-2 lg:gap-3
                                text-[color:var(--scroll-bar-color)] leading-[30px]'>
                                <span className='me-3'><i className="ri-apps-line"></i></span>
                                Living in Germany, passionate about building accessible web apps.
                            </p>
                        </div>
                        <div className='flex gap-4 py-4'>
                            <div>
                                <a href='mailto:mohammadkardi1@gmail.com'>
                                    <button className="flex gap-2 purple-btn">
                                        <i className="ri-mail-line"></i>
                                            Send Message
                                    </button>
                                </a>
                            </div>
                            <div className='flex items-center border-b border-white bg-white
                                    text-black rounded-[10px] px-[15px] py-[7px] hover:opacity-70'>
                                <a 
                                    href="https://drive.google.com/drive/folders/1bocfj4pcE4lQuZC9tLoTA4e-X5Ha2Dq3?usp=sharing" 
                                    target='_blank '>
                                    My resume
                                </a>
                            </div>
                        </div>
                    </div>
                    <div 
                        className='flex items-center justify-center'
                        >
                        <img src={heroImg} alt="" className='rounded-[24px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}
