import React from 'react'

const article_items = [ 
    {
        text: "“Feature Engineering Techniques For Time Series Data”, 2022 April 24.",
        link: "https://aiinarabic.com/feature-engineering-techniques-for-time-series-data/"
    },
    {
        text: "“Local Outlier Factor”, 2021 November 20.",
        link: "https://aiinarabic.com/local-outlier-factor/"
    },
    {
        text: "“Word Embedding”, 2021 September 4.",
        link: "https://aiinarabic.com/word-embedding/"
    },
    {
        text: "“DenseNet”, 2021 April 19.",
        link: "https://aiinarabic.com/densenetarchiticture/"
    },
    {
        text: "“How to Build a Neural Network in Pytorch”, 2020 October 4.",
        link: "https://aiinarabic.com/building-neural-network-using-pytorch/"
    },
    {
        text: "“Object Tracking”, 2020 August 12.",
        link: "https://aiinarabic.com/object-tracking/"
    },
]



function ScientificContributions() {
    return (
        <div className='w-full p-3'>
            <div className='grid grid-cols-1 gap-8'>
                <div>
                    <p className='text-md sm:text-lg md:text-xl underline w-fit '>
                        A Research Paper in a Peer-Reviewed Scientific Conference
                    </p>
                    <div  className='xs:text-xs sm:text-sm md:text-md md:pl-4 '>
                        <ul className='list-disc pl-5 text-[color:var(--scroll-bar-color)]'>
                            <li>
                                <p>
                                    M. Kardi, T. AlSkaif, B. Tekinerdogan and J. P. S. Catalão, 
                                    "Anomaly Detection in Electricity Consumption Data using Deep Learning," 
                                    2021 IEEE International Conference on Environment and Electrical Engineering 
                                    and 2021 IEEE Industrial and Commercial Power Systems Europe (EEEIC / I&CPS Europe), 
                                    2021 Sep 7.
                                    &nbsp;
                                            <a 
                                                href="https://ieeexplore.ieee.org/document/9584650"
                                                className='underline border-b-2 border-blue-500  text-blue-500'
                                                target='_blank'>
                                                [Link]
                                    </a>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p className='text-md sm:text-lg md:text-xl underline  w-fit '>
                        Articles in a Scientific Blog called AI in Arabic
                    </p>
                    <div className='xs:text-xs sm:text-sm md:text-md md:pl-4 text-[color:var(--scroll-bar-color)]'>
                        <ul className='list-disc pl-5'>
                            {
                                article_items.map((item, index) => (
                                    <li>
                                        <p className='text-[color:var(--scroll-bar-color)]'>
                                            {item.text} &nbsp;
                                            <a 
                                                href={item.link} 
                                                className='underline border-b-2 border-blue-500  text-blue-500'
                                                target='_blank'>
                                                [Link]
                                            </a>
                                        </p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScientificContributions



// 



// 
// 
// 
// 
// 
// 