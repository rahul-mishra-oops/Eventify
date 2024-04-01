import React from 'react'
import Navbar from '../components/Navbar'
import FeatureSection from '../components/FeatureSection'
import Footer from '../components/Footer'

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto pt-20 px-6">
                <FeatureSection />
                <Footer />
            </div>

        </>
    )
}

export default AboutUs