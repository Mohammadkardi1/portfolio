import React, { useState } from 'react'
import { Education } from './Education'
import Overview from './Overview'
import { Skills } from './Skills'
import GetInTouch from './GetInTouch'
import ScientificContributions from './ScientificContributions'
import Languages from './Languages'

const list_items = [
    {
        title: "About me",
        filter: "overview"
    },
    {
        title: "Education",
        filter: "education"
    },
    {
        title: "Scientific Contributions",
        filter:"scientificContributions"
    },
    {
        title: "Skills",
        filter:"skills"
    },
    {
        title: "Languages",
        filter:"languages"
    },
    {
        title: "Get in touch",
        filter:"getInTouch"
    },

]


export default function About() {

    const [aboutFilter, setAboutFilter] = useState("overview")

    return (
        <div>
            <div className="container mx-auto px-4 text-white text-sm md:text-lg">
                <div>
                    <h1 className='mb-4 font-bold text-xl md:text-2xl tracking-wider'>
                        About Me
                    </h1>
                </div>
                <div className='grid grid-cols-3 gap-4'>
                    <div className='col-span-3 lg:col-span-1  rounded h-fit
                        bg-[color:var(--card-color)]'>
                        <ul className='rounded-md'>
                            {
                                list_items.map((item, index) => (
                                    <li  key={index}
                                        className={`text-center py-4 transition ease-out cursor-pointer
                                        ${ index !== list_items.length-1 && "border-b border-[color:var(--primary-color-two)]"}
                                        hover:bg-[color:var(--primary-color-two)] ${aboutFilter === item.filter && "bg-[color:var(--primary-color-two)]"}`}
                                        onClick={() => setAboutFilter(item.filter)}>
                                        {item.title}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='col-span-3 lg:col-span-2  rounded flex 
                        bg-[color:var(--card-color)]'>
                        {aboutFilter === "overview" && <Overview/>}
                        {aboutFilter === "education" && <Education/>}
                        {aboutFilter === "scientificContributions" && <ScientificContributions/>}
                        {aboutFilter === "skills" && <Skills/>}
                        {aboutFilter === "languages" && <Languages/>}
                        {aboutFilter === "getInTouch" && <GetInTouch/>}
                    </div>
                </div>
            </div>
        </div>
    )
}
