import React from 'react'

const CompareBasic = () => {
    return (
        <div className='flex mt-12 mx-auto justify-center gap-2 items-center w-[80%] mx-auto'>
            <div className="videocontainer flex flex-col justify-center items-center w-full ">
                <div className="drop-shadow-xl flex items-center flex-col relative w-100 ">
                    <div className="flex items-center flex-row rounded-t-md  w-full bg-gray-900 min-h-[20px] py-1.5 px-3">
                        <div className="w-[12px] mr-2 h-[12px] rounded-full bg-red-500"></div>
                        <div className="w-[12px] mr-2 h-[12px] rounded-full bg-yellow-500"></div>
                        <div className="w-[12px] h-[12px] rounded-full bg-green-500"></div>
                        <div className="flex-1 place-delf-stretch"></div>
                    </div>
                    <div className=" relative h-full w-full rounded-b-sm">
                        <img
                            loading="lazy"
                            className=""
                            src="/images/powerbi/beforeOdoo.png"
                            alt="odoo"
                            width="550"
                        />
                        {/* <img className="absolute top-0 left-0 w-20 sm:w-24 md:w-32 lg:w-16"
                                src="/static/images/power_bi_connector/bestseller.png" alt="additional"
                                width="auto" height="auto" />  */}
                        {/* <video w="full" h="full" autoplay="true" muted="muted" loop="loop" playsinline="" alt="power bi">
                                <source src="/static/images/power_bi_connector/powerbinew.mp4" type="video/mp4">
                              </video> */}
                    </div>
                </div>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="60px" height="60px" viewBox="0 0 16 16">

                    <g>

                        <path d="M10.08,7l1,1,3.44-3.45L11,1,10,2l1.8,1.8H2v1.4h9.82ZM5.86,9l-1-1L1.42,11.5,4.91,15l1-1L4.1,12.2H14V10.8H4.1Z" />

                    </g>

                </svg>
            </div>
            <div className="videocontainer flex flex-col justify-center items-center w-full ">
                <div className="drop-shadow-xl flex items-center flex-col relative w-100 ">
                    <div className="flex items-center flex-row rounded-t-md w-full bg-gray-900 min-h-[20px] py-1.5 px-3">
                        <div className="w-[12px] mr-2 h-[12px] rounded-full bg-red-600"></div>
                        <div className="w-[12px] mr-2 h-[12px] rounded-full bg-yellow-500"></div>
                        <div className="w-[12px] h-[12px] rounded-full bg-green-500"></div>
                        <div className="flex-1 place-delf-stretch"></div>
                    </div>
                    <div className=" relative h-full w-full rounded-b-sm">
                        <img
                            loading="lazy"
                            className=""
                            src="/images/powerbi/afterOdoo.png"
                            alt="best seller"
                            width="600"
                        />
                        {/* <img className="absolute top-0 left-0 w-20 sm:w-24 md:w-32 lg:w-16"
                                src="/static/images/power_bi_connector/bestseller.png" alt="additional"
                                width="auto" height="auto" />  */}
                        {/* <video w="full" h="full" autoplay="true" muted="muted" loop="loop" playsinline="" alt="power bi">
                                <source src="/static/images/power_bi_connector/powerbinew.mp4" type="video/mp4">
                              </video> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompareBasic