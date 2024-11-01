import React from 'react'

const Mission = () => {
    return (
        <section className='w-[1100px] m-auto mt-[10%] '>
            <h1 className='text-[64px] font-light capitalize text-[#bdbdbd] m-2'>main focus/mission statement</h1>
            <div className='flex justify-between'>
                <div className='w-[413px] h-[144px] flex items-center justify-center mt-7'>
                    <h2 className='w-[104px] text-[200px] font-bold text-[#f2f2f2]'>1</h2>
                    <p className='w-[279px] font-normal text-[22px] ml-7 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p>
                </div>
                <div className='w-[570px] h-[144px] flex items-center justify-center mt-7'>
                    <h2 className='w-[120px] text-[200px] font-bold text-[#f2f2f2]'>2</h2>
                    <p className='w-[420px] font-normal text-[22px] ml-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.</p>
                </div>
            </div>
        </section>
    )
}

export default Mission