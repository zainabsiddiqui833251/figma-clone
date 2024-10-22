import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Contact = () => {
    return (
        <section className='w-[1100px] m-auto mt-[10%] font-sans'>
            <h1 className='text-[64px] capitalize text-[#bdbdbd] font-sans font-light m-2'>contact us</h1>
            <div className='flex justify-between'>
                <div>
                    <form action="post">
                        <input type="text" name="" id="" placeholder='Name' className='w-[370px] h-[46px] bg-[#f3f3f3] mt-2 text-[14px] border-none focus:border-none outline-none px-4 py-2 ' /> <br />
                        <input type="text" name='' id='' placeholder='Phone Number *' className='w-[370px] h-[46px] bg-[#f3f3f3] mt-2 text-[14px] border-none focus:border-none outline-none px-4 py-2 ' /> <br />
                        <input type="text" name="" id="" placeholder='Email *' className='w-[370px] h-[46px] bg-[#f3f3f3] mt-2 text-[14px] border-none focus:border-none outline-none px-4 py-2 ' /> <br />
                        <input type="text" name="" id="" placeholder='Interested In ' className='w-[370px] h-[46px] bg-[#f3f3f3] mt-2 text-[14px] border-none focus:border-none outline-none px-4 py-2 ' /> <br />
                        <textarea name="" id="" placeholder='Message *' className='w-[370px]  bg-[#f3f3f3] h-[127px] mt-2 text-[14px] border-none focus:border-none outline-none px-4 py-2'></textarea>
                    </form>
                </div>
                <div>
                    <Image src='/images/img-10.png' alt='' width={300} height={300} className='w-[698px] h-[349px]'></Image>
                </div>
            </div>
            <button className="  w-[221.81px]  bg-[#333333] h-[71px] text-[#f3f3f3] text-[12px] tracking-[3px] uppercase flex justify-center items-center mt-16">
                <Link href='/contactpage'>send email <i className="bi bi-arrow-right"></i></Link>
            </button>
        </section>
    )
}

export default Contact