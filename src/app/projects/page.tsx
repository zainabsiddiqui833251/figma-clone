import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import 'bootstrap-icons/font/bootstrap-icons.css';

const projects = () => {
    return (
        <main className='w-[1100px] m-auto font-sans'>
            <div className='mt-[50px] capitalize text-[64px] leading-none font-light'>
                <h1 className='text-[#bdbdbd] '>
                    our <br />
                    <span className='font-bold text-[#333333]'>projects</span>
                </h1>
            </div>
            <div className='w-[1170px] h-[1px] bg-[#f2f2f2] mt-7 '>

            </div>
            <section className='w-[1170px] bg-[#fafafa] flex justify-between  mt-7  h-[435px]  '>
                <Image src='/images/img-20.png' alt='' width={500} height={500} className='w-[673.5px] h-[100%]'></Image>
                <div className='w-[496.5px] pl-7'>
                    <h1 className='capitalize mt-7 text-[40px] font-light text-[#bdbdbd]'> sample project 1</h1>
                    <p className='w-[400px]  mt-20 h-[120px] text-[16px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <button className="mt-14 w-[221.81px] bg-white h-[71px] text-black text-[12px] tracking-[3px] uppercase flex justify-center items-center">
                        <Link href='/sample-1'>view project <i className="bi bi-arrow-right"></i></Link>
                    </button>

                </div>


            </section>
            <section className='w-[1170px] bg-[#fafafa] flex justify-between  mt-16  h-[435px] '>
                <Image src='/images/img-21.png' alt='' width={500} height={500} className='w-[673.5px] h-[100%]'></Image>
                <div className='w-[496.5px] pl-7'>
                    <h1 className='capitalize mt-7 text-[40px] font-light text-[#bdbdbd]'>sample project 2</h1>
                    <p className='w-[400px]  mt-20 h-[120px] text-[16px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <button className="mt-14 w-[221.81px] bg-white h-[71px] text-black text-[12px] tracking-[3px] uppercase flex justify-center items-center">
                        <Link href=''>view project <i className="bi bi-arrow-right"></i></Link>
                    </button>

                </div>


            </section>
            <section className='w-[1170px] bg-[#fafafa] flex justify-between  mt-16  h-[435px] '>
                <Image src='/images/img-22.png' alt='' width={500} height={500} className='w-[673.5px] h-[100%]'></Image>
                <div className='w-[496.5px] pl-7'>
                    <h1 className='capitalize mt-7 text-[40px] font-light text-[#bdbdbd]'>sample project 3</h1>
                    <p className='w-[400px]  mt-20 h-[120px] text-[16px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <button className="mt-14 w-[221.81px] bg-white h-[71px] text-black text-[12px] tracking-[3px] uppercase flex justify-center items-center">
                        <Link href=''>view project <i className="bi bi-arrow-right"></i></Link>
                    </button>

                </div>


            </section>
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

export default projects