import React from 'react';

const TeamMembers = () => {
    return (
        <div className='px-3 md:px-20 py-10 md:py-20'>
            <div className='py-10 text-center'>
                <h6 className='text-[13px] text-[#464154] font-extrabold py-6'>- OUR TEAM MEMBERS -</h6>
                <h1 className="text-4xl font-extrabold text-black">Our Top Skilled Experts</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-5'>
                <div className='p-2'>
                    <img src="https://wptf.themepul.co/tronix/wp-content/uploads/2023/06/img.jpg" alt="" />
                </div>
                <div className='p-2'>
                    <img src="https://wptf.themepul.co/tronix/wp-content/uploads/2023/06/img.jpg" alt="" />
                </div>
                <div className='p-2'>
                    <img src="https://wptf.themepul.co/tronix/wp-content/uploads/2023/06/img.jpg" alt="" />
                </div>
                <div className='p-2'>
                    <img src="https://wptf.themepul.co/tronix/wp-content/uploads/2023/06/img.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default TeamMembers;