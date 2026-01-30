import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Location from './components/Location'
import Footer from './components/Footer'
import About from './components/About'
function App() {
  return (
    <>
    <Header/>
    <Home/>
    <About/>
    <Services/>
    <Pricing/>
    <Location/>
    <Footer/>
    </>
  )
}

export default App
