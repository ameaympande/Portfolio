import React from 'react';
import Navbar from '../component/Navbar';

function Home() {
    return (
        <div>
            <Navbar />
            <div className='mt-16 md:mt-24  flex items-center justify-center'>
                <div className='w-full md:w-1/2 px-4 md:px-5 '>
                    <div className='border-b py-3 border-slate-800'>
                        <h2 className='text-2xl md:text-3xl font-medium'>Hi! I'm Ameay Pande</h2>
                    </div>
                    <div className='py-4 text-slate-300 md:w-3/2 p-1'>
                        I'm a 24-year-old software engineer specializing in JavaScript (TypeScript), React , React Native, and Web Performance.
                    </div>
                    <div className='mt-5 text-[#00B8E6]'>
                        <a className=' text-md font-medium underline'>Read more  →</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
