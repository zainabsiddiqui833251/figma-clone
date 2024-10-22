// components/verified.tsx
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

interface VerifiedProps {
    onClose: () => void; // Add onClose prop type
}

const Verified: React.FC<VerifiedProps> = ({ onClose }) => {
    return (
        <section className='relative w-[516px] h-[421px]'>
            <span className='absolute right-7 top-5 cursor-pointer' onClick={onClose}>
                <i className="bi bi-x text-[13px]"></i>
            </span>
            <div className='w-[126px] h-[126px] m-auto mt-12 rounded-[50%] border-solid border-[1px] flex justify-center items-center border-[#d1d1d1]'>
                <i className="bi bi-check-circle-fill text-[82px] text-[#0dc332]"></i>
            </div>
            <h2 className='text-[24px] font-bold text-center mt-7'>Спасибо</h2>
            <p className='w-[426px] h-[52px] text-[14px] font-black block text-center m-auto mt-7'>Ваше сообщение отправлено мы свяжемся с вами в ближайшее время</p>
            <button className='w-[391px] h-[42px] flex justify-center items-center bg-[#333333] text-[#ffffff] m-auto mt-7' onClick={onClose}>ВЕРНУТСЯ НАЗАД</button>
        </section>
    );
};

export default Verified;
