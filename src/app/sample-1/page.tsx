import React from 'react'
import Image from 'next/image'

const sample = () => {
    return (
        <main className='w-[1100px] m-auto font-sans'>
            <div className='mt-[50px] capitalize text-[64px] leading-none font-light'>
                <h1 className='text-[#bdbdbd] '>
                    sample <br />
                    <span className='font-bold text-[#333333]'>project 1</span>
                </h1>
            </div>
            <div className='w-[1110px] h-[1px] bg-[#f2f2f2] mt-7 '>

            </div>
            <section className='w-[1110px] m-auto h-[415px] mt-7'>
                <Image src='/images/img-23.png' alt='' width={500} height={500} className='w-[100%] h-[100%]'></Image>
            </section>
            <section className='mt-7 flex justify-between'>
                <div className='w-[419px] h-[428px]'>
                    <Image src='/images/img-24.png' alt='' width={500} height={500} className='w-[100%] h-[100%]'></Image>
                </div>
                <div className='w-[700px] h-[428px] text-[16px] font-normal ml-7'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with.</p>
                </div>
            </section>
            <section className='w-[1110px] m-auto mt-7 h-[415px]'>
            <Image src='/images/img-25.png' alt='' width={500} height={500} className='w-[100%] h-[100%]'></Image>
            </section>
        </main>
    )
}

export default sample