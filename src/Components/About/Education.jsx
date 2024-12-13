import React from 'react'


const education_list = [
    // {
    //     degree: "Mater's degree in Web Science",
    //     institute: 'Syrian Virtual University (SVU)' ,
    //     date: "[2023-Present]",
    // },
    {
        degree: "Bachelor's degree in Informatics Engineering",
        institute: 'Tishreen University' ,
        date: "[2017-2022]",
    }
]

export const Education = () => {
    return (
        <div className='p-4 rounded flex flex-col gap-6'>
            {
                education_list.map((item,index) => (
                    <div key={index} className=' space-y-2'>
                        <h1 className='text-md sm:text-lg md:text-2xl font-semibold'>
                            {item.degree}
                        </h1>
                        <p className='xs:text-xs sm:text-sm md:text-xl text-[color:var(--scroll-bar-color)]'>
                            {item.institute} - {item.date}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}
