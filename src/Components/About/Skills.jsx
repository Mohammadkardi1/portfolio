import React from 'react'


const forntend_skills = [
    {
        title: "HTML",
    },
    {
        title: "CSS",
    },
    {
        title: "Javascript",
    },
    {
        title: "Bootstrap",
    },
    {
        title: "Tailwind",
    },
    {
        title: "Typescript",
    },
    {
        title: "Material UI",
    },
    {
        title: "React",
    },
    {
        title: "SQL",
    },
    {
        title: "Firebase",
    },
    // {
    //     title: "Node.js",
    // },
    // {
    //     title: "Express.js",
    // },
    // {
    //     title: "MangoDB",
    // },
    // {
    //     title: "Socket.io",
    // },
]


export const Skills = () => {
    return (
        <div className='p-4'>
            <div className="flex flex-wrap gap-3">
                {
                    forntend_skills.map((item, index) => (
                        <div className='p-2 h-fit rounded bg-[color:var(--primary-color-two)] 
                            border-b-2 border-[color:var(--scroll-bar-color)]'>
                            <h1 className='text-lg font-bold'>{item.title}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

// md:flex gap-5 w-full 
    {/* <div className="md:w-1/2">
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
    </div> */}