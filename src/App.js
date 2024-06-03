import React from 'react'
import Navbar from './component/Navbar'
import Banner from './component/Banner'
import About from './component/About'
import Service from './component/Service'
import Education from './component/Education'
import Skill from './component/Skill'
import Blog from './component/Blog'
import Contact from './component/Contact'


const App = () => {
  return (
   <>
     <Navbar/>
     <Banner/>
     <About/>
     <Education/>
     <Service/>
     <Skill/>
     <Blog/>
     <Contact/>
   </>
  )
}

export default App