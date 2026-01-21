import React from 'react';

const FeaturesSecond = () => {
    return (
        <div className='px-3 md:px-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:py-10 px-2'>
                <div className=' p-5 shadow-xl'>
                    <div className='text-center space-y-3 p-5'>
                        <h4 className="text-2xl font-bold text-black">Visually Stunning Designs</h4>
                        <p className="font-light text-black">Our websites are crafted with eye<span className='font-normal'>-</span>catching designs that leave a lasting impression on visitors.
                        </p>
                    </div>
                </div>
                <div className=' p-5 shadow-xl'>
                    <div className='text-center space-y-3 p-5'>
                        <h4 className="text-2xl font-bold text-black">Responsive and User<span className='font-normal'>-</span>Friendly</h4>
                        <p className="font-light text-black">We create websites that are responsive and intuitive, offering a seamless user experience across all devices.
                        </p>
                    </div>
                </div>
                <div className=' p-5 shadow-xl'>
                    <div className='text-center space-y-3 p-5'>
                        <h4 className="text-2xl font-bold text-black">SEO Optimization</h4>
                        <p className="font-light text-black">Our websites are optimized for search engines, helping you rank higher and attract more organic traffic.
                        </p>
                    </div>
                </div>
                <div className=' p-5 shadow-xl'>
                    <div className='text-center space-y-3 p-5'>
                        <h4 className="text-2xl font-bold text-black">Content Management System</h4>
                        <p className="font-light text-black">Take control of your website with an easy<span className='font-normal'>-</span>to<span className='font-normal'>-</span>use content management system <span className='font-normal'>(</span>CMS<span className='font-normal'>)</span>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesSecond;