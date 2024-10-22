import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

interface ContactFormProps {
    onClose: () => void; // Add onClose prop type
    onSubmit: () => void; // Add onSubmit prop type
}

const ContactForm: React.FC<ContactFormProps> = ({ onClose, onSubmit }) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent default form submission
        onSubmit(); // Call the onSubmit prop
    };

    return (
        <main className='w-[469px] h-[590px] relative'>
            <h2 className='font-bold text-[21px] text-center mt-5'>
                Задать вопрос
                <span className='absolute right-8 cursor-pointer' onClick={onClose}>
                    <i className="bi bi-x"></i>
                </span>
            </h2>
            <form onSubmit={handleSubmit} className='m-auto block w-fit mt-5'>
                <input type="text" placeholder='Name' className='w-[391px] h-[45px] bg-[#f3f3f3] mt-3 text-[14px] border-none focus:border-none outline-none px-4 py-2' /> <br />
                <input type="text" placeholder='Phone Number *' className='w-[391px] h-[45px] bg-[#f3f3f3] mt-3 text-[14px] border-none focus:border-none outline-none px-4 py-2' /> <br />
                <input type="text" placeholder='Email *' className='w-[391px] h-[45px] bg-[#f3f3f3] mt-3 text-[14px] border-none focus:border-none outline-none px-4 py-2' /> <br />
                <input type="text" placeholder='Interested In ' className='w-[391px] h-[45px] bg-[#f3f3f3] mt-3 text-[14px] border-none focus:border-none outline-none px-4 py-2' /> <br />
                <textarea placeholder='Message *' className='w-[391px] bg-[#f3f3f3] h-[127px] mt-3 text-[14px] border-none focus:border-none outline-none px-4 py-2'></textarea>
                <div className='w-[391px] flex mt-1'>
                    <div className='w-[24px] h-[24px] text-[16px] flex justify-center items-center bg-[#f3f3f3] rounded'>
                        <i className="bi bi-check-lg"></i>
                    </div>
                    <p className='text-[14px] ml-7'>Отправляя заявку Вы соглашаетесь с политикой <br /> конфиденциальности</p>
                </div>
            </form>
            <button type="submit" className='text-[12px] font-medium text-[#ffffff] bg-[#333333] flex justify-center items-center w-[391px] h-[42px] block m-auto mt-7' onClick={onSubmit}>Отправить</button>
        </main>
    );
};

export default ContactForm;
