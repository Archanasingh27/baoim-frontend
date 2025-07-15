
import React from 'react'
import './App.css'
// import Footer from './components/Footer'
// import Contact from './components/Contact'
//import Navbar from './components/Home/Member'
import Member from './components/Home/Member'
// import Partner from './components/Home/Member'
// import Prestige from './components/Prestige'
// import Banner from './components/Home/Banner'
// import HeroSection from './components/Home/HeroSection';
// import Signup from './components/signup/Signup';
//import OurFeatures from './components/Pride/Features';
// import InsightSection from './components/Home/InsightsSection';
 //import OurProgram from './components/Home/OurProgram';
import OurEvent from './components/Pride/OurEvent';
import PurchaseCourse from './components/CourseLayout/Purchase';
import Tuitor from './components/CourseLayout/Tuitor';
import  Courses from './components/CourseLayout/courses';
import Banner from './components/CourseLayout/Banner';
import Navbar1 from './components/CourseLayout/Navbar';
import Hero from "./components/Pride/HeroSection";
import HeroCourse from './components/CourseLayout/HeroSection_C'
import Certificate from './components/CourseLayout/Certificate';
import DiscountBanner from './components/CourseLayout/DiscountBanner'
function App() {

  
  return (
    <>
    
     {/* <Navbar /> 
     <HeroSection/>
     <Member />
     <Prestige /> 
     <Banner /> 
     <Member />  
     <Contact/> 
     <Footer />
     <OurProgram/> 
     <OurFeatures/>
     <InsightSection/>   */}

     <Navbar1/>
     <HeroCourse/>
     <PurchaseCourse/> 
     <Tuitor/>
     <Certificate/>
     <DiscountBanner />
     <Courses/>
       
     <Banner/>
     <OurEvent/> 
     <Hero/>

    </>
  )
}

export default App
