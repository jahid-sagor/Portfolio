import React, { useEffect } from 'react'
import Aos from 'aos';


const Service = () => {
    useEffect(()=>{
        Aos.init({duration: 2000});
    },[]);
    
    return (
        <section id="service" className='bg-[aliceblue] py-[50px] lg:py-[130px] px-0 lg:px-5 !overflow-x-hidden' data-aos='fade-down'>
            <div className='max-w-container mx-auto'>
                <h2 data-aos='flip-up' className='font-pop font-bold text-[#262626] text-[24px] lg:text-[48px] lg:mx-0 mx-2'>What I dO?</h2>
                <div className='pt-[30px] lg:pt-[60px] flex justify-between flex-wrap lg:mx-0 mx-2' data-aos='flip-up'>
                    <div className='w-[100%] lg:w-[48%] relative group'>
                        <a href="#" className="block p-4 lg:p-6 opy-[20px] lg:py-[50px]  rounded-sm shadow group-hover:shadow-[15.0px_16.0px_4.0px_rgba(0,0,0,0.38)] hover:bg-[#212F3D] duration-700">
                            <h5 className="mb-2 text-[18px] lg:text-2xl font-pop font-bold tracking-tight text-gray-900 group-hover:text-[#fff]">React JS</h5>
                            <h2 className="font-pop font-normal text-[16px] lg:text-[18px] text-gray-700 group-hover:text-[#fff] leading-[22px] lg:leading-7"> 1. Figma to React JS  </h2>
                            <h3 className="font-pop font-normal text-[16px] lg:text-[18px] text-gray-700 group-hover:text-[#fff] leading-[22px] lg:leading-7">  2. PSD to React JS </h3>
                            <h4 className="font-pop font-normal text-[16px] lg:text-[18px] text-gray-700 group-hover:text-[#fff] leading-[22px] lg:leading-7">  3. Responsive Website</h4>
                            
                        </a>
                    </div>
                     <div className='w-[100%] lg:w-[48%]  relative group lg:mt-0 mt-6' data-aos='flip-down '>
                        <a href="#" className="block p-4 lg:p-6 opy-[20px] lg:py-[50px]  group-hover:shadow-[15.0px_16.0px_4.0px_rgba(0,0,0,0.38)] rounded-sm shadow hover:bg-[#212F3D] duration-700">
                            <h5 className="mb-2 text-[18px] lg:text-2xl font-pop font-bold tracking-tight text-gray-900 group-hover:text-[#fff]">Next JS</h5>
                            <h2 className="font-pop font-normal text-[16px] lg:text-[18px] text-gray-700 group-hover:text-[#fff] leading-[22px] lg:leading-7"> 1. Figma to React JS Using Next JS  </h2>
                            <h3 className="font-pop font-normal text-[16px] lg:text-[18px] text-gray-700 group-hover:text-[#fff] leading-[22px] lg:leading-7">  2. PSD to React JS Using Next JS </h3>
                            <h4 className="font-pop font-normal text-[16px] lg:text-[18px] text-gray-700 group-hover:text-[#fff] leading-[22px] lg:leading-7">  3. Responsive Website Using Next JS</h4>
                        </a>
                    </div>
                     <div className='w-[100%] lg:w-[48%] mt-6 lg:mt-10 relative group' data-aos='fade-left'>
                        <a href="#" className="block p-4 lg:p-6 opy-[20px] lg:py-[50px]  group-hover:shadow-[15.0px_16.0px_4.0px_rgba(0,0,0,0.38)] rounded-sm shadow hover:bg-[#212F3D] duration-700">
                            <h5 className="mb-2 text-[18px] lg:text-2xl font-pop font-bold tracking-tight text-gray-900 group-hover:text-[#fff]">Bootstrap</h5>
                            <h2 className="font-pop font-normal text-[16px] lg:text-[18px] text-gray-700 group-hover:text-[#fff] leading-[22px] lg:leading-7"> 1. Figma to HTML / React JS Using Bootstrap </h2>
                            <h3 className="font-pop font-normal text-[16px] lg:text-[18px] text-gray-700 group-hover:text-[#fff] leading-[22px] lg:leading-7">  2. PSD to HTML / React JS Using Bootstrap </h3>
                            <h4 className="font-pop font-normal text-[16px] lg:text-[18px] text-gray-700 group-hover:text-[#fff] leading-[22px] lg:leading-7">  3. Responsive Website Using Bootstrap</h4>
                        </a>
                    </div>
                     <div className='w-[100%] lg:w-[48%] mt-6 lg:mt-10 relative group' data-aos='fade-right'>
                        <a href="#" className="block p-4 lg:p-6 opy-[20px] lg:py-[50px]  group-hover:shadow-[15.0px_16.0px_4.0px_rgba(0,0,0,0.38)] rounded-sm shadow hover:bg-[#212F3D] duration-700">
                            <h5 className="mb-2 text-[18px] lg:text-2xl font-pop font-bold tracking-tight text-gray-900 group-hover:text-[#fff]">Tailwind CSS</h5>
                            <h2 className="font-pop font-normal text-[16px] lg:text-[18px] text-gray-700 group-hover:text-[#fff] leading-[22px] lg:leading-7"> 1. Figma to HTML / React JS Using Tailwind CSS  </h2>
                            <h3 className="font-pop font-normal text-[16px] lg:text-[18px] text-gray-700 group-hover:text-[#fff] leading-[22px] lg:leading-7">  2. PSD to HTML / React JS Using Tailwind CSS</h3>
                            <h4 className="font-pop font-normal text-[16px] lg:text-[18px] text-gray-700 group-hover:text-[#fff] leading-[22px] lg:leading-7">  3. Responsive Website Using Tailwind CSS</h4>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service