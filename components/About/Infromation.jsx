import React from 'react';
import { FaUser,  FaFileCode, FaServer, FaFileInvoice } from 'react-icons/fa';

const Infromation = () => {
    return (
        <div className='px-3 md:px-20'>
            <div className='divider'></div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-center py-10'>
                <div className='lg:flex lg:justify-center lg:items-center lg:text-center'>
                    <div className='flex gap-5 items-center'>
                    <img className='text-6xl max-h-12' src='images/experience.png' alt='years of experience' ></img>
                        <div className='text-left'>
                            <h1 className="text-4xl font-bold text-black">3 <span className='font-normal'>+</span></h1>
                            <p className=" text-[15px] font-light text-[#464154]">Years of Experience</p>
                        </div>
                    </div>
                </div>
                <div className='lg:flex lg:justify-center lg:items-center lg:text-center'>
                    <div className='flex gap-5 items-center'>
                        <img className='text-6xl max-h-12' src='images/satiesfied.png' alt='satiesfied customers' ></img>
                        <div className='text-left'>
                            <h1 className="text-4xl font-bold text-black">67 <span className='font-normal'>+</span></h1>
                            <p className=" text-[15px] font-light text-[#464154]">Satisfied Clients</p>
                        </div>
                    </div>
                </div>
                <div className='lg:flex lg:justify-center lg:items-center lg:text-center'>
                    <div className='flex gap-5 items-center'>
                    <img className='text-6xl max-h-12' src='images/globe.png' alt='global reach' ></img>
                        <div className='text-left'>
                            <h1 className="text-4xl font-bold text-black">7 <span className='font-normal'>+</span></h1>
                            <p className=" text-[15px] font-light text-[#464154]">Countries Served</p>
                        </div>
                    </div>
                </div>
                <div className='lg:flex lg:justify-center lg:items-center lg:text-center'>
                    <div className='flex gap-5 items-center'>
                    <img className='text-6xl max-h-16' src='images/project.png' alt='projects completed' ></img>
                        <div className='text-left'>
                            <h1 className="text-4xl font-bold text-black">90 <span className='font-normal'>+</span></h1>
                            <p className=" text-[15px] font-light text-[#464154]">Projects</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='divider'></div>
        </div>
    );
};

export default Infromation;