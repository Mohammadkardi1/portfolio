import React from 'react'


const forntend_skills = [
    {
        title: "HTML",
        width: "90%",
        percentage: "90%"
    },
    {
        title: "CSS",
        width: "90%",
        percentage: "90%"
    },
    {
        title: "Bootstrap",
        width: "85%",
        percentage: "85%"
    },
    {
        title: "Tailwind",
        width: "85%",
        percentage: "85%"
    },
    {
        title: "Javascript",
        width: "75%",
        percentage: "75%"
    },
    {
        title: "React",
        width: "70%",
        percentage: "70%"
    },
]
const backend_skills = [
    {
        title: "SQL",
        width: "70%",
        percentage: "70%"
    },
    // {
    //     title: "Node.js",
    //     width: "0%",
    //     percentage: "0%"
    // },
    // {
    //     title: "Express.js",
    //     width: "0%",
    //     percentage: "0%"
    // },
    // {
    //     title: "MangoDB",
    //     width: "0%",
    //     percentage: "0%"
    // },
    // {
    //     title: "Socket.io",
    //     width: "0%",
    //     percentage: "0%"
    // },
]


export const Skills = () => {
    return (
        <div className='md:flex gap-5 w-full p-4'>
            <div className="md:w-1/2">
                {
                    forntend_skills.map((item, index) => (
                        <div className='mb-4'>
                            <div className='flex items-center justify-between mb-1'>
                                <h5>{item.title}</h5>
                                <span>{item.percentage}</span>
                            </div>
                            <div className='h-1 relative rounded bg-white'>
                                <span className={`inline-block h-1 absolute top-0 left-0 rounded
                                    bg-[color:var(--primary-color-two)]`}
                                    style={{width:`${item.width}`}}>
                                </span>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="md:w-1/2">
                {
                    backend_skills.map((item, index) => (
                        <div className='mb-4'>
                            <div className='flex items-center justify-between mb-1'>
                                <h5>{item.title}</h5>
                                <span>{item.percentage}</span>
                            </div>
                            <div className='h-1 relative rounded bg-white'>
                                <span className={`inline-block h-1 absolute top-0 left-0 rounded
                                    bg-[color:var(--primary-color-two)]`}
                                    style={{width:`${item.width}`}}>
                                </span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
