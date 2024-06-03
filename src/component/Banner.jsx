import Aos from 'aos';
import React, { useEffect } from 'react';
import { FaDownload } from "react-icons/fa6";
import jahid from "../assets/Md. Jahid Hasan.jpg"
import { ReactTyped } from "react-typed";
import CV from '../cv/Jahid-Hasan-CV.pdf'
import ScrollToTop from "react-scroll-to-top";


const Banner = () => {

    useEffect(()=>{
        Aos.init({duration: 2000});

      }, []);

    return (
        <div id="banner"  className='bg-[#212F3D] lg:py-[60px] z-10'>
            <div className='lg:max-w-container lg:mx-auto lg:py-[115px] py-0 px-0 lg:px-5'>
                <div className='flex !justify-between flex-wrap'>
                    <div className='w-[100%] lg:w-[60%] lg:py-0 pt-[160px]'>
                        <div className='lg:mx-0 mx-2'>
                            <h2 className='font-pop font-normal lg:font-medium text-[#ffff] lg:text-[30px] text-[20px]' data-aos='fade-left'>Hello, I am</h2>
                            <h3 className='font-pop font-bold text-[#ffff] lg:text-[50px] text-[30px]' data-aos='fade-right'>Md. Jahid Hasan</h3>
                            <h4 className='font-pop font-medium text-[#ffff] text-[20px] lg:text-[30px]' data-aos='flip-down'>I am a   <span> 
                                <ReactTyped
                                    strings={[
                                        "Front-End Developer",
                                        "Web Designer",
                                    ]}
                                    typeSpeed={100}
                                    backSpeed={20}
                                    loop
                                />
                            </span>
                            </h4>
                            <h5 data-aos='fade-up' className='lg:w-[84%] font-pop font-normal text-[#ffff] text-[16px] lg:text-[18px] mt-4 mb-[80px] lg:mb-[150px] leading-7'>I am a professional Front-End Developer with 1 years of experience. I have Skilled over the following technology: HTML3, CSS3, Bootstrap5, Tailwind CSS, React.js, Next.js, SEO friendly website, Responsive website design and more.</h5>
                            <div data-aos='fade-down' className='lg:w-[21.5%] w-[55%] relative  group flex items-center'>
                                <div className="flex justify-between flex-wrap gap-2">
                                    <a  className='z-50 font-pop font-medium text-[14px] lg:text-[16px] text-white py-2 px-6 border-[1px] border-[#fff] rounded-sm shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.88)] group-hover:border-[#1b3573] duration-700' href={CV}> Download CV <FaDownload className=' inline-block' />
                                    </a>
                                    <div className='absolute left-0 bottom-0 w-[0%] h-[100%] bg-[#1b3673cf] group-hover:w-[86%] lg:group-hover:w-[93%] rounded-sm  ease-in duration-700'></div>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className='invisible lg:visible w-[40%] relative group animate-bounce-once lg:mx-0 mx-2 ' data-aos=''>
                        <img className='z-10 group-absolute lg:h-[500px] h-[150px] w-[300px] lg:w-[500px] rounded-full scale-100 hover:scale-105 overflow-hidden translate-x-0 translate-y-0  duration-1000 group-hover:translate-x-8 group-hover:translate-y-2 brightness-100 hover:brightness-75' src={jahid} alt="jahid" /> 
            
                    </div>
                </div>
            </div>
            <ScrollToTop smooth />
        </div>
  
    )
}

export default Banner