import React from 'react'
import Navbar from '../components/Navbar'
import SingleEvent from '../components/SingleEvent'

const SingleEventPage = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto pt-20 px-6">
                <SingleEvent />
            </div>
        </>
    )
}

export default SingleEventPage