import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const About = () => {
    return (
        <section className='h-[465px] w-[1100px] m-auto mt-[10%]  '>
            <div className='bg-[#fbfbfb] h-[435px] flex justify-center'>

                <div className='flex justify-center'>
                    <div>
                        <Image src='/images/img-4.png' alt='' width={300} height={300} className='w-[270px] h-[265px] mt-7'></Image>
                        <Image src='/images/img-3.png' alt='' width={300} height={300} className='w-[270px] h-[140px] mt-7'></Image>

                    </div>
                    <div>
                    <Image src='/images/img-2.png' alt='' width={300} height={300} className='w-[270px] h-[345px] ml-7 mt-14 mr-7'></Image>
                    </div>
                </div>
                <div className=''>
                    <h1 className='text-[64px] capitalize text-[#bdbdbd] font-sans font-light'>about </h1>
                    <p className='h-[200px] w-[400px] text-black text-[16px] font-normal font-sans'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <button className="  w-[221.81px]  bg-white h-[71px] text-black text-[12px] tracking-[3px] uppercase px-4 py-2 ">
                        <Link href=''>read more <i className="bi bi-arrow-right"></i></Link>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default About