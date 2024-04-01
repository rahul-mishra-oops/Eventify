import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const ContactUs = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto pt-20 px-6">
                <Contact />
                <Footer />
            </div>


        </>
    )
}

export default ContactUs