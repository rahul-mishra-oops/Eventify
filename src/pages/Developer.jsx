import React from 'react'
import Navbar from '../components/Navbar'
import Developers from '../components/Developers'
import Footer from '../components/Footer'

const Developer = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto pt-20 px-6">
                <Developers />
                <Footer />
            </div>


        </>
    )
}

export default Developer