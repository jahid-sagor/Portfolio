import Aos from 'aos';
import React, { useEffect } from 'react'
import CountUp from 'react-countup';




const About = () => {
   useEffect(()=>{
     Aos.init({duration: 2000});
   }, []);
   return (
    <section id="about" className='overflow-x-hidden' data-aos='fade-up'>
      <div className='py-[60px] lg:py-[180px] px-0 lg:px-5 bg-[#e2e2d844] '>
         <div className='max-w-container mx-auto'>
            <div className='lg:flex lg:justify-between items-center lg:mx-0 mx-2'>
               <div className='lg:w-[60%]'>
                  <h2 className='font-pop font-bold text-[24px] lg:text-[58px] text-[#262626] leading-8 lg:leading-[70px]'>I Make a professional and creative design</h2>
                  <h3 className='pt-10 font-pop font-regular lg:font-medium texxt-[16px] lg:text-[18px] text-[#262626] leading-6 lg:leading-[28px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad totam vel voluptates harum tempore inventore debitis sed repudiandae ducimus! Numquam, aliquid.</h3>

                  <h4 className='pt-10 font-pop font-regular lg:font-medium textx-[16px] lg:text-[18px] text-[#262626] leading-6 lg:leading-[28px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat maiores dolore suscipit modi provident iusto explicabo nulla reprehenderit? Reiciendis voluptatem molestiae ipsum ducimus debitis est, id dolores. Quos ad, similique recusandae delectus voluptatum totam excepturi ipsam asperiores voluptatem odit sunt numquam doloremque alias nostrum. Ea, natus! Nemo ab obcaecati corporis?</h4>
               </div>
               <div className='lg:w-[32%] w-[100%] lg:pt-0 pt-8'>
                  <div className='flex justify-between lg:gap-2 gap-4'>
                     <div data-aos='fade-left' className='py-2 lg:py-6 px-6 lg:px-8 outline-dashed outline-2 outline-[red] rounded-md'>
                        <p className='font-pop font-medium text-[28px] lg:text-[28px] text-[red] leading-6 lg:leading-[28px]'>
                        <CountUp
                              start={0}
                              end={25}
                              duration={8}
                              separator=" "
                              enableScrollSpy ={true}
                              redraw={true}
                           ></CountUp>
                        </p>
                        <h2 className='pt-2 font-pop font-medium text-[16px] lg:text-[18px] text-[red] leading-6 lg:leading-[28px]'>Complete Project</h2>
                     </div>
                     <div data-aos='fade-right' className='py-2 lg:py-6 px-6 lg:px-8 outline-dashed outline-2 outline-[red] rounded-md '>
                        <p className='font-pop font-medium text-[28px] text-[red] leading-6 lg:leading-[28px]'>
                           <CountUp
                              start={0}
                              end={100}
                              duration={8}
                              separator=" "
                              enableScrollSpy ={true}
                              redraw={true}

                           ></CountUp> %
                        </p>
                        <h2 className='pt-2 font-pop font-medium text-[16px] lg:text-[18px] text-[red] lg:leading-[28px] leading-6'>Positive Review's</h2>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </section>
   )
}

export default About