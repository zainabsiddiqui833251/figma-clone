'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import ContactForm from '../../components/contact_form'; // Ensure this import path is correct
import Verified from '../../components/verified'; // Import the Verified component
import 'bootstrap-icons/font/bootstrap-icons.css';

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false); // State for overlay
    const [isVerified, setIsVerified] = useState(false); // State for verified form

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
        setIsVerified(false); // Reset verified form when closing
    };

    const handleFormSubmit = () => {
        setIsOpen(false); // Close contact form
        setIsVerified(true); // Open verified form
    };

    return (
        <main>
            <section className='flex justify-between'>
                <div className='mt-[50px] capitalize text-[64px] leading-none font-light ml-32'>
                    <h1 className='text-[#bdbdbd] w-[222px]'>
                        contact <br />
                        <span className='font-bold text-[#333333]'>information</span>
                    </h1>

                    <h2 className='text-[18px] font-bold mt-7'>company name</h2>
                    <p className='text-[16px] font-light w-[280px] mt-1'>1234 Sample Street Austin Texas 76401</p>

                    <h2 className='text-[18px] font-bold mt-[53px]'>512.333.2222</h2>

                    <p className='text-[16px] lowercase font-light mt-[53px]'>sampleemail@gmail.com</p>
                    <button
                        className="w-[211.81px] bg-[#333333] mt-7 h-[68px] text-[#f2f2f2] text-[12px] tracking-[3px] uppercase flex justify-center items-center"
                        onClick={handleOpen} // Open the overlay
                    >
                        contact us
                    </button>
                </div>
                <div className='w-[750px] h-[470px] '>
                    <Image src='/images/img-26.png' alt='' width={500} height={500} className='w-[100%] h-[100%]'></Image>
                </div>
            </section>

            {/* Overlay for the Contact Form */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded shadow-md">
                        <ContactForm onClose={handleClose} onSubmit={handleFormSubmit} /> {/* Pass the handleFormSubmit function */}
                    </div>
                </div>
            )}

            {/* Verified Form */}
            {isVerified && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded shadow-md">
                        <Verified onClose={handleClose} /> {/* Pass the handleClose function */}
                    </div>
                </div>
            )}
        </main>
    );
};

export default Contact;
