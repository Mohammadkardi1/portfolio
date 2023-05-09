import React from 'react'


const education_list = [
    {
        degree : 'MSc',
        department: 'Web Science' ,
        institute: 'Syrian Virtual University' ,
        year: '2023-Present'
    },
    {
        degree : 'BSc',
        department: 'Informatics Engineering' ,
        institute: 'Tishreen University' ,
        year: '2017-2022'
    }
]

export const Education = () => {
    return (
        <table className='w-full h-fit'>
            <thead className='bg-[color:var(--primary-color-two)] text-[.7rem] sm:text-[.9rem] md:text-xl '> 
                <tr>
                    <th className='text-start p-1 md:p-3'>Degree</th>
                    <th className='text-start p-1 md:p-3'>Department</th>
                    <th className='text-start p-1 md:p-3'>Institute</th>
                    <th className='text-start p-1 md:p-3'>Year</th>
                </tr>
            </thead>
            <tbody className='text-[color:var(--scroll-bar-color)]'>
                {
                    education_list.map((item,index) => (
                        <tr key={index} className='text-[.4rem] sm:text-[.6rem] md:text-lg '>
                            <td className='ps-1 py-2 md:py-4 md:ps-3'>{item.degree}</td>
                            <td className='ps-1 py-2 md:py-4 md:ps-3'>{item.department}</td>
                            <td className='ps-1 py-2 md:py-4 md:ps-3'>{item.institute}</td>
                            <td className='ps-1 py-2 md:py-4 md:ps-3'>{item.year}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
