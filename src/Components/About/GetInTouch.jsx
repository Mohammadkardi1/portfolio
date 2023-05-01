import React from 'react'


const getInTouch_items = [
    {
        title: "Address",
        text: "Syria, Latakia"
    },
    {
        title: "Phone",
        text: "+963 985 607 882"
    },
    {
        title: "Email",
        text: <>mohammadkardi1@<wbr/>gmail.com</>
    },
    {
        title: "Location",
        text: "7 April St, Latakia"
    },
]

export default function GetInTouch() {
    return (
        <div className='w-full p-2 '>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                {
                    getInTouch_items.map((item,index) => (
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
