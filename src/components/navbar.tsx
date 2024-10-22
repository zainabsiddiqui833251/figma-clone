import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center h-[102px] '>
            <div className='ml-[135px] '>
                <Image src='/images/logo.png' alt='' width={70} height={43.7} ></Image>
            </div>
            <ul className='flex justify-center items-center mr-[195.69px] font-sans font-medium text-[14px] tracking-widest'>
                <Link href='/' >
                    <li className="relative mr-[45px] p-1 tracking-widest before:content-[''] before:block before:w-[120%] before:h-0.5 before:bg-black before:absolute before:left-[-10%] before:top-0 after:content-[''] after:block after:w-[120%] after:h-0.5 after:bg-black after:absolute after:left-[-10%] after:bottom-0">
                        MAIN
                    </li>
                </Link>
                <Link href='/gallery'>
                    <li className='mr-[65px]'>GALLERY</li>
                </Link>
                <Link href='/projects'>
                    <li className='mr-[65px]'>PROJECTS</li>
                </Link>
                <Link href='/certifications'>
                    <li className='mr-[65px]'>CERTIFICATIONS</li>
                </Link>
                <Link href='/contactpage'>
                    <li>CONTACTS</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar

// border-solid border-2 border-black