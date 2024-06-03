import Aos from 'aos';
import React, { useEffect } from 'react';



const Education = () => {

    useEffect(()=>{
        Aos.init({duration: 2000});
      }, []);
      
  return (
    <section id="education" className='bg-[aliceblue] py-[40px] lg:py-[100px] px-0 lg:px-5 overflow-x-hidden' data-aos='fade-down'>
            <div className='max-w-container mx-auto'>
                <h2 className='font-pop font-bold text-[#262626] text-[24px] lg:text-[48px] lg:mx-0 mx-2' data-aos=''>Education</h2>
                <div className='pt-6 lg:pt-[60px] flex justify-between flex-wrap lg:mx-0 mx-2'>
                    <div className='w-[100%] lg:w-[48%] relative group ' data-aos='fade-left'>
                        <a href="#" className="block p-2 lg:p-6 py-[20px] lg:py-[50px]  group-hover:shadow-[15.0px_16.0px_4.0px_rgba(0,0,0,0.38)] rounded-sm shadow hover:bg-[#212F3D] duration-700">
                            <h5 className="mb-2 font-pop text-[20px] lg:text-2xl font-bold tracking-tight text-gray-900 group-hover:text-[#fff]">European University of Bangladesh </h5>
                            <h2 className="font-pop font-normal text-[16px] lg:text-[18px] text-gray-700 group-hover:text-[#fff] leading-[22px] lg:leading-7 ">Bachelor of Tourism & Hospitality Management / <span className='bg-[gray] group-hover:bg-[#3c62a8]'>2023 - current</span></h2>
                            <h4 className="pt-4 font-pop font-normal text-[16px] lg:text-[18px] text-gray-700 group-hover:text-[#fff] leading-[22px] lg:leading-7"> As a BTHM student, I navigate the intricate fusion of business and hospitality, crafting experiences that blend seamless service with strategic management finesse.</h4> 
                        </a>
                    </div>
                     <div className='w-[100%] lg:w-[48%] relative group lg:mt-0 mt-4' data-aos='fade-right'>
                     <a href="#" className="block p-2 lg:p-6 py-[20px] lg:py-[50px]  group-hover:shadow-[15.0px_16.0px_4.0px_rgba(0,0,0,0.38)] rounded-sm shadow hover:bg-[#212F3D] duration-700">
                            <h5 className="mb-2 font-pop text-[20px] lg:text-2xl font-bold tracking-tight text-gray-900 group-hover:text-[#fff]">Kakoli High School and College </h5>
                            <h2 className="font-pop font-normal text-[16px] lg:text-[18px] text-gray-700 group-hover:text-[#fff] leading-[22px] lg:leading-7 "> Science / <span className='bg-[gray] group-hover:bg-[#3c62a8]'>2017 - 2019</span></h2>
                            <h4 className="pt-4 font-pop font-normal text-[16px] lg:text-[18px] text-gray-700 group-hover:text-[#fff] leading-[22px] lg:leading-7">As a science student, I engage in various experiments spanning chemistry, botany, and physics projects. Additionally, I actively participate in Olympiads.</h4> 
                        </a>
                    </div>
                     <div className='w-[100%] lg:w-[48%] relative group lg:mt-6 mt-4' data-aos='flip-up'>
                        <a href="#" className="block p-2 lg:p-6 py-[20px] lg:py-[50px]  group-hover:shadow-[15.0px_16.0px_4.0px_rgba(0,0,0,0.38)] rounded-sm shadow hover:bg-[#212F3D] duration-700">
                            <h5 className="mb-2 font-pop text-[20px] lg:text-2xl font-bold tracking-tight text-gray-900 group-hover:text-[#fff]">Charnarina High School</h5>
                            <h2 className="font-pop font-normal text-[16px] lg:text-[18px] text-gray-700 group-hover:text-[#fff] leading-[22px] lg:leading-7 "> Science / <span className='bg-[gray] group-hover:bg-[#3c62a8]'>2011 - 2016</span></h2>
                           
                            <h4 className="pt-4 font-pop font-normal text-[16px] lg:text-[18px] text-gray-700 group-hover:text-[#fff] leading-[22px] lg:leading-7">As a science student, I engage in various experiments spanning chemistry, botany, and physics projects. Additionally, I actively participate in Olympiads, honing my skills and expanding my scientific horizons.</h4>
                        </a>
                    </div>
                     <div className='w-[100%] lg:w-[48%] relative group lg:mt-6 mt-4' data-aos='flip-down'>
                        <a href="#" className="block p-2 lg:p-6 py-[20px] lg:py-[50px]  group-hover:shadow-[15.0px_16.0px_4.0px_rgba(0,0,0,0.38)] rounded-sm shadow hover:bg-[#212F3D] duration-700">
                            <h5 className="mb-2 font-pop text-[20px] lg:text-2xl font-bold tracking-tight text-gray-900 group-hover:text-[#fff]">Creative It Isntitute</h5>
                            <h2 className="font-pop font-normal text-[16px] lg:text-[18px] text-gray-700 group-hover:text-[#fff] leading-[22px] lg:leading-7 "> Front-End Development with React / <span className='bg-[gray] group-hover:bg-[#3c62a8]'> July 2023 - May 2024</span></h2>
                            <h4 className="pt-4 font-pop font-normal text-[16px] lg:text-[18px] text-gray-700 group-hover:text-[#fff] leading-[22px] lg:leading-7" > I am a professional Front-End Developer with 1 years of experience. I have Skilled over the following technology: HTML3, CSS3, Bootstrap5, Tailwind CSS, React.js, Next.js, SEO friendly website, Responsive website design and more.</h4>
                        </a>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Education