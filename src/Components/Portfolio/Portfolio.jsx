import React, { useState } from 'react'
import './portfolio.css'
import portfolioData from '../../assets/data/Portfolio'



export default function Portfolio() {

    const [nextItems, setNextItems] = useState(6)
    const initialBooleanArray = Array(portfolioData.length).fill(false)
    const [isDetailsOpen, setIsDetailsOpen] = useState(initialBooleanArray)

    const handleBooleanToggle = (index) => {
        setIsDetailsOpen((prevState) => {
            const newArray = [...prevState];
            newArray[index] = !newArray[index];
            return newArray;
        });
    };

    const loadMoreHandler = () => {
        setNextItems(nextItems+3)
    }

    return (
        <div className='portfolio' id='portfolio'>
            <div className="container mx-auto px-4">
                <div>
                    <h3 className='text-white mb-4 font-bold text-xl md:text-2xl tracking-wider'>
                        My Projects
                    </h3>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3'>
                    {portfolioData.slice(0,nextItems)?.map((item, index) => (
                        <div className='' key={index}>
                            <div className='protfolio__card relative cursor-pointer text-white rounded-md'
                                onClick={() => handleBooleanToggle(index)}>
                                <div className='portfolio__overlay rounded-md text-lg'>
                                    See details
                                </div>
                                <img src={item.imgUrl} alt="" className='rounded-md'/>
                            </div>
                            <div className={`portfolio__details flex justify-center items-center ${isDetailsOpen[index] ? "visible" : 'invisible'}`}>
                                <div className='details__window py-2 px-3 lg:px-5 space-y-6'>
                                    <div className='text-right text-2xl '>
                                        <i className="ri-close-line cursor-pointer text-white bg-red-600 rounded-md" 
                                            onClick={() => handleBooleanToggle(index)}>
                                        </i>
                                    </div>
                                    <img className='w-full rounded-[10px] shadow-lg border border-sm'src={item.imgUrl}/>
                                    <div>
                                        <h5 className='my-1 font-bold'>{item.title}</h5>
                                        <div className='max-h-28 overflow-y-auto mb-3 text-sm'>
                                            <ul className='list-disc pl-5'>  
                                            {item.description.map((item,index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='technologies mb-4'>
                                        <h5 className='flex items-center font-bold mb-1'>Technologies:</h5>
                                        <ul className='flex flex-wrap gap-1 m-0 p-0'>
                                            {item.technologies?.map((item, index ) => (
                                                <li key={index} className='bg-[color:#d7d7d7] rounded-[7px] px-[7px] py-[5px] 
                                                                cursor-pointer hover:bg-[color:var(--model-bg)] hover:text-white'>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <a href={item.siteUrl} target='_blank' rel="noreferrer">
                                            <button className='purple-btn mb-3'>Live site</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={`text-center py-5 ${nextItems === portfolioData.length +1 ? "invisible" : "visible" }`}
                    onClick={loadMoreHandler}>
                    <button className='purple-btn '>Load more</button>
                </div>
            </div>
        </div>
    )
}
