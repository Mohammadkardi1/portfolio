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
            <div className="container">
                <div className='pb-4'>
                    <h3 className='m-0 fw-bold text-white'>My Recent Projects</h3>
                </div>
                <div className='row g-3'>
                    {
                        portfolioData.slice(0,nextItems)?.map((item, index) => (
                            <div className='col-12 col-md-6  col-lg-4' key={index}>
                                <div className='protfolio__card position-relative'>
                                    <div className='portfolio__overlay'>
                                        <button 
                                            className='purple-btn'
                                            onClick={() => handleBooleanToggle(index)}
                                        >
                                            See details
                                        </button>
                                    </div>
                                    <img 
                                        src={item.imgUrl} 
                                        alt="" 
                                        className='rounded-3'
                                        />
                                </div>
                                <div className={`portfolio__details d-flex justify-content-center align-items-center ${isDetailsOpen[index] ? "visible" : 'invisible'}`}>
                                    <div className='details__window px-3'>
                                        <div 
                                            className='details__close'
                                            onClick={() => handleBooleanToggle(index)}>
                                            <i class="ri-close-line"></i>
                                        </div>
                                        <img src={item.imgUrl} alt="" />
                                        <h5 className='my-3 fw-bold'>
                                            {item.title}
                                        </h5>
                                        <div className='details__description'>
                                            <ul>  
                                            {item.description.map((item,index) => (
                                                <li key={index}>
                                                    {item}
                                                </li>
                                            ))}
                                            </ul>
                                        </div>
                                        <div className='technologies mb-4'>
                                            <h5 className=' d-flex align-items-center fw-bold mb-2'>Technologies:</h5>
                                            <ul className='d-flex gap-1 m-0 p-0 '>
                                                {
                                                    item.technologies?.map((item, index ) => (
                                                        <li className='' key={index}>
                                                            {item}
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                        <div>
                                            <a href={item.siteUrl} target='_blank' rel="noreferrer">
                                                <button className='purple-btn mb-3'>
                                                    Live site
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div 
                    className={`text-center py-5 ${nextItems === portfolioData.length ? "invisible" : "visible" }`}
                    onClick={loadMoreHandler}>
                    <button className='purple-btn '>
                        Load more
                    </button>
                </div>
            </div>
            
        </div>
    )
}
