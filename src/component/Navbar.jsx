import React from 'react';
import twitter from "../assets/twitter.png";
import github from "../assets/github.png";
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    return (
        <div className='bg-[#0f0f0e] px-4 py-5 md:px-5 fixed w-full top-0 z-50 opacity-95 border-b border-slate-500'>
            <div className='flex justify-between items-center'>
                <p onClick={() => navigate("/")} className='text-white font-semibold hover:cursor-pointer opacity-100'>Ameay Pande</p>

                <div className='flex gap-3'>
                    <a href='https://www.twitter.com/ameyoryx' target='_blank' rel="noopener noreferrer">
                        <img src={twitter} className='w-6 h-6 md:w-7 md:h-7' alt="Twitter Logo" />
                    </a>
                    <a href='https://www.github.com/ameaympande' target='_blank' rel="noopener noreferrer">
                        <img src={github} className='w-6 h-6 md:w-7 md:h-7' alt="Github Logo" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
