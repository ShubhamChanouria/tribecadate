import React from 'react'

const Rate = () => {
    const data = [
        {
            title: '2018',
            description: 'year established  '
        },
        {
            title: '204',
            description: 'elite members matched'
        },
        {
            title: '92%',
            description: 'success rate'
        },
    ]
    return (
        <div className='bg-black p-8  items-center gap-8'>
            <div className='grid grid-cols-1 gap-8 md:flex justify-between items-center w-[70%] mx-auto'>
                <div>
                    <p className='text-sm  font-light text-white uppercase'>The numbers speak</p>
                    <p className='text-sm uppercase font-light text-white'>for themselves</p>
                </div>
                {data.map((item, index) => (
                    <div key={index}>
                        <h3 className='text-heading  font-bold text-white'>{item.title}</h3>
                        <p className='text-sm uppercase font-light text-white'>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Rate