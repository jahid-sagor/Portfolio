import React, { useEffect } from 'react'
import Aos from 'aos';


const Blog = () => {
      
    useEffect(()=>{
        Aos.init({duration: 3000});
      }, []);

    return (
        <section id="blog" className='py-[30px] lg:py-[100px] lg:px-5 px-0 bg-[aliceblue] overflow-x-hidden overflow-y-hidden' data-aos="fade-up">
            <div className='max-w-container mx-auto ' >
                <h2 className='font-pop font-bold text-[#262626] text-[24px] lg:text-[48px] lg:mx-0 mx-2' data-aos="flip-up">Project</h2>
                <div className='pt-[50px]'>
                    <ul>
                    <li className='py-4 font-pop font-medium text-[#262626] text-[18px]' data-aos="fade-right">E-commerce: <span className='text-[#0000ff83]'><a href="https://silly-tartufo-6f3cb2.netlify.app">https://silly-tartufo-6f3cb2.netlify.app</a></span> </li>

                    <li className='py-4 font-pop font-medium text-[#0000ff83] text-[18px]' data-aos="fade-left"> <a href="https://fascinating-crisp-98dcf8.netlify.app">https://fascinating-crisp-98dcf8.netlify.app</a></li>

                    <li className='py-4 font-pop font-medium text-[#0000ff83] text-[18px]' data-aos="fade-right"><a href="https://iridescent-sawine-442da0.netlify.app">https://iridescent-sawine-442da0.netlify.app</a></li>

                    <li className='py-4 font-pop font-medium text-[#0000ff83] text-[18px]' data-aos="fade-left"><a href="https://superlative-longma-784f2c.netlify.app"></a>https://superlative-longma-784f2c.netlify.app</li>

                    <li className='py-4 font-pop font-medium text-[#0000ff83] text-[18px]' data-aos="fade-right"><a href="https://scintillating-entremet-c79cef.netlify.app"></a>https://scintillating-entremet-c79cef.netlify.app</li>
                    </ul>
                </div>
            </div>

          
        </section>
    )
}

export default Blog