import React from 'react'
import './experience.css'


const experience_items = [
    {
        period: "2022 - current", 
        employmentStatus: "Remote / Full-Time ",
        jobPosition : "Full-Stack Developer at Markitiz",
        // description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt debitis assumenda qui rerum, rem ipsam?"
    },
    // {
    //     period: "2020 - 2021", 
    //     employmentStatus: "Remote / Full Time",
    //     jobPosition : "Frontend Developer",
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt debitis assumenda qui rerum, rem ipsam?"
    // },
    // {
    //     period: "2020 - 2021", 
    //     employmentStatus: "Remote / Full Time",
    //     jobPosition : "Frontend Developer",
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt debitis assumenda qui rerum, rem ipsam?"
    // },
]



export default function Experience() {
    return (
        <div className='text-white text-sm md:text-lg'>
            <div className="container mx-auto px-4">
                <div className='mb-4'>
                    <h1 className=' font-bold text-white text-2xl tracking-wider'>
                        Experience
                    </h1>
                </div>
                <div className='single__experience-container p-3 
                    md:p-4 bg-[color:var(--card-color)] rounded'>
                    {
                        experience_items.map((item, index) => (
                            <div className='single__experience flex gap-3 md:gap-4' key={index}>
                                <div>
                                    <span className='text-[color:var(--primary-color-two)] 
                                            text-lg md:text-xl'>
                                        <i className="ri-briefcase-line"></i>
                                    </span>
                                </div>
                                <div>
                                    <h1 className='text-md md:text-xl font-bold'>
                                        {item.jobPosition}
                                    </h1>
                                    <p className='text-xs md:text-sm text-[color:var(--scroll-bar-color)]'>
                                        {item.period}
                                    </p>
                                    <p className='text-xs md:text-sm text-[color:var(--scroll-bar-color)]'>
                                        {item.employmentStatus}
                                    </p>
                                    <p className='mt-1'>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
        </div>
    )
}
