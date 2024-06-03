import React, { useEffect } from 'react'
import Aos from 'aos';


const Skill = () => {

    useEffect(()=>{
        Aos.init({duration: 2000});
    },[]);

  return (
    <section className='bg-[#e2e2d844] py-[40px] lg:py-[130px] lg:px-5 px-0 overflow-x-hidden' data-aos='fade-right'>
        <div className='max-w-container mx-auto '>
           <h2 data-aos='flip-up' className='font-pop font-bold text-[#262626] text-[24px] lg:text-[48px] mx-2 lg:mx-0 lg:pb-2 pb-0'>My Skills</h2>
           <div className='lg:flex justify-between items-center py-[30px] lg:py-[60px] mx-2 lg:mx-0'>
               <div className='w-[100%] lg:w-[40%] ' data-aos='fade-up'> 
               <ul className='lg:pt-0 pt-4'>
                <li className="lg:py-2 font-pop font-medium text-[16px] lg:text-[18px] text-gray-700 group-hover:text-[#fff] leading-[22px] lg:leading-7">1. HTML5</li>
                <li className="lg:py-2 font-pop font-medium text-[16px] lg:text-[18px] text-gray-700 group-hover:text-[#fff] leading-[22px] lg:leading-7">2. CSS3</li>
                <li className="lg:py-2 font-pop font-medium text-[16px] lg:text-[18px] text-gray-700 group-hover:text-[#fff] leading-[22px] lg:leading-7">3. Bootstrap5</li>
                <li className="lg:py-2 font-pop font-medium text-[16px] lg:text-[18px] text-gray-700 group-hover:text-[#fff] leading-[22px] lg:leading-7">4. Tailwind CSS</li>
                <li className="lg:py-2 font-pop font-medium text-[16px] lg:text-[18px] text-gray-700 group-hover:text-[#fff] leading-[22px] lg:leading-7">5. React JS</li>
                <li className="lg:py-2 font-pop font-medium text-[16px] lg:text-[18px] text-gray-700 group-hover:text-[#fff] leading-[22px] lg:leading-7">6. Next JS</li>
               </ul>
               </div>
                <h2 className='lg:invisible font-pop font-bold text-[#262626] text-[24px] pt-10 lg:pt-0 pb-6'>What Will You get</h2>
               <div className='w-[100%] lg:w-[40%]' data-aos='fade-down'>
                 <ul className=''>
                <li className="lg:py-2 font-pop font-medium text-[16px] lg:text-[18px] text-gray-700 group-hover:text-[#fff] leading-[22px] lg:leading-7">1. Figma to HTML / React JS Using Next JS</li>
                <li className="lg:py-2 font-pop font-medium text-[16px] lg:text-[18px] text-gray-700 group-hover:text-[#fff] leading-[22px] lg:leading-7">2. PSD to HTML / React JS Using Next JS</li>
                <li className="lg:py-2 font-pop font-medium text-[16px] lg:text-[18px] text-gray-700 group-hover:text-[#fff] leading-[22px] lg:leading-7">3. SEO Friendly Website</li>
                <li className="lg:py-2 font-pop font-medium text-[16px] lg:text-[18px] text-gray-700 group-hover:text-[#fff] leading-[22px] lg:leading-7">4. Responsive Website Design</li>
                <li className="lg:py-2 font-pop font-medium text-[16px] lg:text-[18px] text-gray-700 group-hover:text-[#fff] leading-[22px] lg:leading-7">5. CSS Animation</li>
                <li className="lg:py-2 font-pop font-medium text-[16px] lg:text-[18px] text-gray-700 group-hover:text-[#fff] leading-[22px] lg:leading-7">6. Custom Development( HTML5 ,CSS3, Bootstrap / Tailwind CSS)</li>
                 </ul>
               </div>
           </div>
        </div>
    </section>
  )
}

export default Skill