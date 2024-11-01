import React from 'react'
import Link from 'next/link'

const Projects = () => {
    return (
        <section className='w-[1100px] m-auto mt-[10%]  relative'>
            <h1 className='text-[64px] capitalize text-[#bdbdbd]  font-light m-2'>our projects</h1>
            <div className='flex justify-between items-center'>
                <div className='w-[536px] h-[240px] bg-[url(/images/img-5.png)] bg-[#333333]/80 bg-blend-darken '>
                    <div className='w-[233px] h-[160px] mt-10 ml-20 leading-none'>
                        <h1 className='text-[60px] font-semibold text-[#ffffff] capitalize'>sample <br /> project</h1>
                        <p className='text-[#ffffff] font-extralight text-[12px] tracking-[3px] uppercase mt-4'>view more <i className="bi bi-arrow-right"></i></p>
                    </div>
                </div>
                <div className='w-[536px] h-[240px] bg-[url(/images/img-6.png)] '></div>
            </div>
            <div className='flex justify-between items-center mt-7'>
                <div className='w-[250px] h-[240px] bg-[url(/images/img-7.png)] '></div>
                <div className='w-[450px] h-[240px] bg-[url(/images/img-8.png)] '></div>
                <div className='w-[350px] h-[240px] bg-[url(/images/img-9.png)] '></div>
            </div>
            <div className='absolute right-0'>
                <button className="  w-[221.81px]  bg-[#333333] h-[71px] text-[#ffffff] text-[12px] tracking-[3px] uppercase  mt-7">
                    <Link href='/projects'>all projects <i className="bi bi-arrow-right"></i></Link>
                </button>
            </div>
        </section>
    )
}

export default Projects