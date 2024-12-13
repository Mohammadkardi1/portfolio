import React from 'react'


const languages_items = [
    {
        title: "English",
        text: "B2 Level — Fluent"
    },
    {
        title: "German",
        text: "A2 Level"
    },
    {
        title: "Arabic",
        text: "Native Speaker"
    },
]


function Languages() {
    return (
        <div className='w-full p-2'>
            <div className='grid grid-cols-1 gap-6'>
                {
                    languages_items.map((item,index) => (
                        <div className='p-2 rounded bg-[color:var(--primary-color-two)] 
                            border-b-2 border-[color:var(--scroll-bar-color)]'>
                            <h1 className='mb-2 text-lg font-bold'>{item.title}</h1>
                            <p className=''>{item.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Languages