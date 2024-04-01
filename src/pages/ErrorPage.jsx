import React from 'react'
import Navbar from '../components/Navbar'
import Fault from '../components/Fault'



const ErrorPage = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto pt-20 px-6">
                <Fault />
            </div>

        </>
    )
}

export default ErrorPage