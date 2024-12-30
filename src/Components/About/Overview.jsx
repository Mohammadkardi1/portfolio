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
    // {
    //     icon: "ri-facebook-box-fill",
    //     link : "https://www.facebook.com/profile.php?id=100006621041867"
    // }, 
    // {
    //     icon: "ri-telegram-fill",
    //     link : "https://t.me/Mohammad71223"
    // }, 
    // {
    //     icon: "ri-twitter-fill",
    //     link : "https://twitter.com/MohammadKardi1?fbclid=IwAR2PtfwgAUo5mKrZuEMxTdA5_Qkq-ZskouBNsY40urU9FtuHmZzQsNFCI04"
    // }, 

    
]

export default function Overview() {
    return (
        <div className='p-4 rounded flex gap-6'>
            <div>
                <h1 className='text-lg md:text-xl text-[color:var(-heading-color)]  tracking-wider'>
                    About me
                </h1>
                <p className='text-[color:var(--scroll-bar-color)] mb-6 tracking-wider'>
                    I am a graduate of Tishreen University with a Bachelor's degree in Informatics Engineering, 
                    achieving a graduation average of 80.86%. During my Bachelor's studies, I worked on several university projects, 
                    published articles on a scientific blog called "AI in Arabic", and carried out a paper that was published 
                    at IEEE EEEIC 2021, Bari, Italy. 
                    <br/><br/>
                    Throughout this journey, I gained valuable experience in the area of computer science. Now, I am highly motivated 
                    to make further contributions and apply my skills to any workplace I join.


                    {/* Additionally, I worked at Al-Mustaqbal Institute as an IT trainer. */}
                    {/* A graduate from Tishreen University, earned a Bachelor's degree 
                    in Informatics Engineering with a graduation average of 80.86%. 
                    During my Bachelor's studies, I worked on several university projects, 
                    published articles at a scientific blog 
                    and carried out a paper ended up publishing at IEEE EEEIC 2021, Bari, Italy. 
                    Throughout this journey, I gained valuable experiences in the area of computer science. 
                    Now, I am highly motivated to add more and more contributions and apply my skills 
                    to any workplace I join.  */}

                    {/* Very excited about the opportunity to work full-time as a Web Developer. 
                    I am confident that I can make valuable contributions to the team. 
                    I will be committed to producing high-quality work and collaborating 
                    effectively with colleagues. */}
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
