import React, { useEffect, useState } from 'react'
import Aos from 'aos';
import { FaHome, FaPhone  } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import ScrollToTop from "react-scroll-to-top";




const Contact = () => {
  let [name, setName] = useState()
  let [email, setEmail] = useState()
  let [number, setNumber] = useState()
  let [text, setText] = useState()

  let handleName = (e) =>{
    setName(e.target.value);
  }
  let handleEmail = (e) =>{
    setEmail(e.target.value);
  }
  let handleNumber = (e) =>{
    setNumber(e.target.value);
  }
  let handleText = (e) =>{
    setText(e.target.value);
  }

   let handleClick = () =>{
    console.log("click");
   }
    useEffect(()=>{
        Aos.init({duration: 2000});
      }, []);

  return (
    <section id="contact" className="bg-[#e2e2d844] py-[30px] lg:py-[100px] lg:px-5 px-0 overflow-x-hidden" data-aos='fade-up'>
      <div className="max-w-container mx-auto">
            <div className="text-center pb-4">
              <h2 className='font-pop font-bold text-[#262626] text-[24px] lg:text-[48px]' data-aos='fade-down'>Send Me A Message</h2>
            </div>

          <div className=" border-2 border-[#5b9898] rounded-sm mx-2 lg:mx-0" >
            <form action="">
              <div className="lg:flex justify-between p-8">
                  <div className="w-[280px] lg:w-[450px] pb-2 lg:pb-0">
                    <label className='font-pop font-medium text-[#262626] text-[16px] lg:text-[18px]' htmlFor="text">Name</label>
                    <br />
                    <input onChange={handleName} className='w-full py-2 lg:py-4 px-2 ring-1 ring-[#5b9898] outline-1 outline-slate-950 placeholder:text-[#262626] font-pop font-normal text-[14px]' type="text" placeholder="Your name" />
                  </div>
                <div className="w-[280px] lg:w-[450px] pb-2 lg:pb-0">
                    <label className='font-pop font-medium text-[#262626] text-[16px] lg:text-[18px]'  htmlFor="email">Email</label>
                    <br />
                    <input onChange={handleEmail} className='w-full py-2 lg:py-4 px-2 ring-1 ring-[#5b9898] outline-1 outline-slate-950 placeholder:text-[#262626] font-pop font-normal text-[14px]' type="email" placeholder="Your email" />
                  </div>
                <div className="w-[280px] lg:w-[450px] pb-2 lg:pb-0">
                    <label className='font-pop font-medium text-[#262626] text-[16px] lg:text-[18px]' htmlFor="number">Phone Number</label>
                    <br />
                    <input onChange={handleNumber} className='w-full py-2 lg:py-4 px-2 ring-1 ring-[#5b9898] outline-1 outline-slate-950 placeholder:text-[#262626] font-pop font-normal text-[14px]' type="text" placeholder="Your number" />
                  </div>
              </div>
                  <div className="w-[330px] lg:w-[1470px] px-6 pb-8 mx-2 lg:mx-0">
                    <label className='font-pop font-medium text-[#262626] text-[16px] lg:text-[18px]' htmlFor="text">Message</label> <br />
                    <textarea onChange={handleText}  className='w-full px-2 ring-1 ring-[#5b9898] outline-1 outline-slate-950 placeholder:text-[#262626] font-pop font-normal text-[14px]' name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                  </div>
                  <div className="w-[330px] lg:w-[1470px] lg:px-6 pb-8 lg:mx-0 mx-8">
                    <a onClick={handleClick}  className='py-2 lg:py-4 px-[30px] lg:px-[636px] bg-[#1391A6] font-pop font-bold text-[#ffff] text-[16px] lg:text-[20px]' href="#">Send Message</a>
                  </div>
            </form>
          </div>
          </div>

          <div className='max-w-container mx-auto' data-aos='fade-down'>
            <div className="lg:mx-0 mx-2 mt-6 lg:mt-10 py-6 lg:py-10  border-2 border-[#5b9898] rounded-sm">
                <div className='lg:flex justify-between'>

              <div className='pb-4 lg:pb-0'>
              <div className="border-2 border-[#5b9898] rounded-sm py-4 px-4 lg:px-16 mx-6 pb-4">
                <div className="">
                    <div className=''>
                   <FaHome  className='text-[40px] lg:text-[60px] text-[#5b9898]'/>
                    </div>
                   <br />
                  <a href='https://www.google.com/maps/place/Kaderabad+Housing+Society+%E0%A6%95%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B0%E0%A6%BE%E0%A6%AC%E0%A6%BE%E0%A6%A6+%E0%A6%B9%E0%A6%BE%E0%A6%89%E0%A6%9C%E0%A6%BF%E0%A6%82+%E0%A6%B8%E0%A7%8B%E0%A6%B8%E0%A6%BE%E0%A6%87%E0%A6%9F%E0%A6%BF/@23.7536428,90.3573953,17z/data=!3m1!4b1!4m6!3m5!1s0x3755bf5c7d2ad32d:0x4ad0ef1f2366fe9e!8m2!3d23.7536428!4d90.3599702!16s%2Fg%2F11g87hvkwr?entry=ttu' target='blank' className='font-pop font-medium text-[14px] lg:text-[16px] text-[#262626]'>Mohammadpur,Dhaka ,Bangladesh</a>
                </div>
              </div>
              </div>
                
              
              <div className='lg:pb-0 pb-4'>
              <div className="border-2 border-[#5b9898] rounded-sm py-4 px-4 lg:px-[120px] mx-6 ">
                <div className="">
                   <MdMarkEmailUnread className='text-[40px] lg:text-[60px] text-[#5b9898]'/>
                  <br />
                  <a className='font-pop font-medium text-[14px] lg:text-[16px] text-[#262626]' target='blank' href="https://mail.google.com/">
                    jahidsagor1990@gmail.com
                  </a>
                </div>
              </div>
              </div>
              

              <div className="border-2 border-[#5b9898] rounded-sm py-4 px-4 lg:px-[120px] mx-6 ">
                <div className="">
                <FaPhone  className='text-[40px] lg:text-[60px] text-[#5b9898]'/>
                  <br />
                  <a className='font-pop font-medium text-[14px] lg:text-[16px] text-[#262626]' href="#">
                    +8801865248880
                  </a>
                </div>
              </div>
            </div>
            </div>
            </div>
            <ScrollToTop smooth />
    </section>
  )
}

export default Contact