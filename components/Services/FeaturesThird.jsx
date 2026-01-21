import React from 'react';

const FeaturesThird = () => {
    return (
            <div className='px-3 md:px-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:py-10 px-2'>
                <div className=' p-5 shadow-xl'>
                    <div className='text-center space-y-3 p-5'>
                        <h4 className="text-2xl font-bold text-black">Tailored Solutions</h4>
                        <p className="font-light text-black">Our custom software applications are designed to address your specific business needs and workflows.
                        </p>
                    </div>
                </div>
                <div className=' p-5 shadow-xl'>
                    <div className='text-center space-y-3 p-5'>
                        <h4 className="text-2xl font-bold text-black">Enhanced Productivity</h4>
                        <p className="font-light text-black">Streamline your processes and boost productivity with automated workflows and task management.
                        </p>
                    </div>
                </div>
                <div className=' p-5 shadow-xl'>
                    <div className='text-center space-y-3 p-5'>
                        <h4 className="text-2xl font-bold text-black">Scalability and Flexibility</h4>
                        <p className="font-light text-black">Our solutions are built to scale with your business and adapt to changing requirements.
                        </p>
                    </div>
                </div>
                <div className=' p-5 shadow-xl'>
                    <div className='text-center space-y-3 p-5'>
                        <h4 className="text-2xl font-bold text-black">Data Security</h4>
                        <p className="font-light text-black">We prioritize data security and implement measures to protect your sensitive information.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesThird;