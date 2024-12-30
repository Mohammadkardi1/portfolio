import React from 'react'


const getInTouch_items = [
    {
        title: "Address",
        text: "Langenfeld (Rheinland), Germany"
    },
    {
        title: "Phone",
        text: "+49 17621027532"
    },
    {
        title: "Email",
        text: <>mohammadkardi1@<wbr/>gmail.com</>
    },
    // {
    //     title: "Location",
    //     text: "7 April Street, Latakia"
    // },
]

export default function GetInTouch() {
    return (
        <div className='w-full p-2 '>
            <div className='grid grid-cols-1 gap-6'>
                {
                    getInTouch_items.map((item,index) => (
                        <div key={index} className='p-2 rounded bg-[color:var(--primary-color-two)] 
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
