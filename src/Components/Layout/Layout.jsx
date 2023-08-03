import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Hero from '../Hero/Hero'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'
import About from '../About/About'
import Experience from '../Experience/Experience'

function Layout() {
    return (
        <div className='space-y-14'>
            <Header/>
            <Hero/>
            <About/>
            <Experience/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Layout