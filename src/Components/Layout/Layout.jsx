import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Hero from '../UI/Hero'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'


function Layout() {
    return (
        <>
            <Header/>
            <Hero/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default Layout