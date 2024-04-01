import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import FeatureSection from '../components/FeatureSection'
import Workflow from '../components/Workflow'
import Developers from '../components/Developers'
import Footer from '../components/Footer'

const HomePage = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto pt-20 px-6">
                <HeroSection />
                <FeatureSection />
                <Workflow />
                <Developers />
                <Footer />
            </div>
        </>
    )
}

export default HomePage