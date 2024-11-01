import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';


const gallery = () => {
    return (
        <main className='w-[1100px] m-auto '>
            <div className='mt-[50px] capitalize text-[64px] leading-none font-light'>
                <h1 className='text-[#bdbdbd] '>
                    photo <br />
                    <span className='font-bold text-[#333333]'>gallery</span>
                </h1>
            </div>
            <div className='w-[1100px] h-[1px] bg-[#f2f2f2] mt-7 '>

            </div>
            <div className='mt-7'>
                <div className='flex justify-between items-center'>
                    <div className="card  w-[200px] h-[240px] bg-[url(/images/img-27.png)]"></div>
                    <div className="card bg-[url(/images/img-11.png)] w-[200px] h-[240px] bg-[100% 100%] "></div>
                    <div className="card bg-[url(/images/img-12.png)] w-[200px] h-[240px] bg-[100% 100%] "></div>
                    <div className="card bg-[url(/images/img-13.png)] w-[200px] h-[240px] bg-[100% 100%] "></div>
                    <div className="card bg-[url(/images/img-14.png)] w-[200px] h-[240px] bg-[100% 100%] "></div>
                </div>
                <div className='flex mt-7 justify-between items-center'>
                    <div className="card bg-[url(/images/img-15.png)] w-[200px] h-[240px] bg-[100% 100%] "></div>
                    <div className="card bg-[url(/images/img-16.png)] w-[200px] h-[240px] bg-[100% 100%] "></div>
                    <div className="card bg-[url(/images/img-17.png)] w-[200px] h-[240px] bg-[100% 100%] "></div>
                    <div className="card bg-[url(/images/img-18.png)] w-[200px] h-[240px] bg-[100% 100%] "></div>
                    <div className="card bg-[url(/images/img-19.png)] w-[200px] h-[240px] bg-[100% 100%] "></div>
                </div>
            </div>
            <div className='flex mt-[72px]'>
                <div className='w-[139.9px] h-[52px] text-[24px] flex justify-between items-center text-[#bdbdbd] m-1 '>
                    <div className="flex flex-col text-black leading-none">
                        <span className='mb-0 pb-0 leading-none'>0</span>
                        <span className='mt-0 pt-0'>1</span>
                    </div>
                    <p>/</p>
                    <p>05</p>
                </div>
                <div className='flex ml-10'>
                    <div className='w-[53px] h-[53px] border-solid border-[0.5px] border-[#f7f7f7] flex justify-center items-center'>
                        <i className="bi bi-arrow-left"></i>
                    </div>
                    <div className='w-[53px] h-[53px] bg-[#f2f2f2] flex justify-center items-center ml-7 relative'>
                        <i className="bi bi-arrow-right"></i>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default gallery