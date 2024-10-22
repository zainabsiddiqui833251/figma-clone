import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Image from 'next/image'
import Link from 'next/link';

const Hero = () => {
    return (
        <main>
            <div className='flex justify-between items-center w-[93%] m-auto '>
                <div className="child1 ml-[80px] w-[240px] mt-[172px]">
                    <h1 className='uppercase text-[64px] text-[#BDBDBD] font-light tracking-normal mb-0 pb-0 leading-none m-1'>
                        project <br />
                        <span className='capitalize font-bold text-[64px] text-[#333333] mt-0 pt-0'>lorum</span>
                    </h1>
                    <div className='flex mt-[76px] m-1'>
                        <div className='w-[53px] h-[53px] border-solid border-[0.5px] border-[#f7f7f7] flex justify-center items-center'>
                            <i className="bi bi-arrow-left"></i>
                        </div>
                        <div className='w-[53px] h-[53px] bg-[#f2f2f2] flex justify-center items-center ml-7 relative'>
                            <i className="bi bi-arrow-right"></i>
                            {/* Line starting from the arrow */}
                            <span className="absolute top-1/2 bg-[#f2f2f2] left-full h-[0.5px] w-[calc(100vw_-_93%_-_715px_-_80px)] translate-y-[-50%]"></span>
                        </div>

                    </div>
                    <div className='w-[141.88px] h-[52px] text-[24px] flex justify-between items-center text-[#bdbdbd] m-1 mt-[75px]'>
                        <div className="flex flex-col leading-none">
                            <span className='mb-0 pb-0 leading-none'>0</span>
                            <span className='mt-0 pt-0'>1</span>
                        </div>
                        <p>/</p>
                        <p>02</p>
                    </div>
                </div>
                <div className="child2 relative">
                    <Image
                        src='/images/img-1.png'
                        alt=''
                        width={500}
                        height={500}
                        className='w-[715px] h-[829px] mr-20'
                    />
                    {/* Button in the bottom-left corner */}
                    <button className="absolute bottom-0 left-0 w-[221.81px] bg-white h-[71px] text-black text-[12px] tracking-[3px] uppercase flex justify-center items-center">
                        <Link href=''>view project <i className="bi bi-arrow-right"></i></Link>
                    </button>
                </div>
            </div>
        </main>
    )
}

export default Hero