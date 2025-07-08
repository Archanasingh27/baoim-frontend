
import React from 'react'
import './App.css'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Member from './components/Member'
import Partner from './components/Partner'
import Prestige from './components/Prestige'


function App() {

  return (
    <>
    
     <Navbar /> 
     <Partner /> 
     <Member />
     <Prestige />    
     <Contact/> 
     <Footer />
    </>
  )
}

export default App
