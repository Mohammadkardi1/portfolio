import React from 'react'

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

export default function Overview() {
    return (
        <div className='p-4 rounded flex gap-6'>
            <div>
                <h1 className='text-lg md:text-xl text-[color:var(-heading-color)]  tracking-wider'>
                    About me
                </h1>
                <p className='text-[color:var(--scroll-bar-color)] mb-6 tracking-wider'>
                    A fresh graduate from Tishreen University, earned a Bachelor's degree 
                    in Informatics Engineering with a graduation average of 80.86%. 
                    Very excited about the opportunity to work full-time as a Web Developer. 
                    I am confident that I can make valuable contributions to the team. 
                    I will be committed to producing high-quality work and collaborating 
                    effectively with colleagues. Last month, I started studying for a Master’s
                    degree in Web Science at Syrian Virtual University (SVU).
                </p>
                <div className='flex justify-between gap-1 sm:gap-4 '>
                    <p className='flex items-center text-[color:var(--scroll-bar-color)] text-md lg:text-lg'>
                        Contact me with
                    </p>
                    <ul className='p-0 m-0 flex gap-1 sm:gap-3'>
                        {
                            social_links.map((item, index) => (
                                <li key={index} >
                                    <a 
                                        className='hover:opacity-70 text-xl lg:text-2xl text-[color:var(--primary-color-two)]'
                                        href={item.link} 
                                        target='_blank'>
                                        <i className={item.icon}></i>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
