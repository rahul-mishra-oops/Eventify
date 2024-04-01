import React from 'react'
import Navbar from '../components/Navbar'
import Workflow from '../components/Workflow'
import Footer from '../components/Footer'

const KnowHow = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto pt-20 px-6">
                <Workflow />
                <Footer />
            </div>

        </>
    )
}

export default KnowHow