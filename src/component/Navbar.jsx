import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {
    let [show, setShow] = useState(false)
    let handleShow = () =>{
        setShow(!show);
    }
    return (
        <section className='bg-[#212F3D] fixed w-full lg:w-full  py-4  z-50'>
            <div className='flex max-w-container mx-auto justify-between lg:px-5 px-2'>
                <div className="w-1/4 ">
                    <a className='font-pop font-extrabold text-white text-[28px]' href=""><i>JHS.</i></a>
                </div>
                <div className="">
                   
                        <ul className={`lg:flex lg:gap-8 lg:py-0 py-4 lg:pl-0 pl-2 absolute top-0 left-0 z-50 lg:static ${show == true ? 'bg-[#0e0f0f] top-[63px] left-[00px] w-[50%] h-[700px] lg:h-0 duration-700 z-50' : ' top-[63px] left-[-200px] w-[50%] h-[700px] lg:h-0 duration-1000 z-50'}`}>
                            <li className='lg:py-0 py-2 relative group'><a className="lg:mx-0 lg:hover:mx-0 mx-0 hover:mx-2 block font-pop font-medium text-[18px] py-2 px-3 text-white duration-500" href="#banner">Home</a>
                                <div className='nam absoluhte left-0 bottom-0 h-[2px] w-[0%] bg-blue-300 group-hover:w-[50%] lg:group-hover:w-[100%] ease-in duration-500'>
                                </div>
                            </li>
                            <li className='lg:py-0 py-2 relative group'><a className="lg:mx-0 lg:hover:mx-0 mx-0 hover:mx-2 block font-pop font-medium text-[18px] py-2 px-3 text-white   duration-500" href="#about">About</a>
                                <div className='absoluhte left-0 bottom-0 h-[2px] w-[0%] bg-blue-300 group-hover:w-[50%] lg:group-hover:w-[100%] ease-in duration-500'>
                                </div>
                            </li>
                            <li className='lg:py-0 py-2  relative group'><a className="lg:mx-0 lg:hover:mx-0 mx-0 hover:mx-2 block font-pop font-medium text-[18px] py-2 px-3 text-white   duration-500" href="#service">Services</a>
                                <div className='absoluhte left-0 bottom-0 h-[2px] w-[0%] bg-blue-300 group-hover:w-[50%] lg:group-hover:w-[100%] ease-in duration-500'>
                                </div>
                            </li>
                            <li className='lg:py-0 py-2 relative group'><a className="lg:mx-0 lg:hover:mx-0 mx-0 hover:mx-2 block font-pop font-medium text-[18px] py-2 px-3 text-white duration-500" href="#blog">Project</a>
                                <div className='absoluhte left-0 bottom-0 h-[2px] w-[0%] bg-blue-300 group-hover:w-[40%] lg:group-hover:w-[100%] ease-in duration-500'>
                                </div>
                            </li>
                            <li className='lg:py-0 py-2 relative group'><a className="lg:mx-0 lg:hover:mx-0 mx-0 hover:mx-2 block font-pop font-medium text-[18px] py-2 px-3 text-white  duration-500" href="#contact">Contact</a>
                                <div className='absoluhte left-0 bottom-0 h-[2px] w-[0%] bg-blue-300 group-hover:w-[55%] lg:group-hover:w-[100%] ease-in duration-500'>
                                </div>
                            </li>

                        </ul>
                </div>
                <div className='lg:hidden cursor-pointer ' onClick={handleShow}>
            {show == true ? <RxCross2 className='text-[20px] text-white'/> : <FaBars className='text-[20px] text-white'/>}
            </div>
            </div>
           
        </section>

    )
}

export default Navbar