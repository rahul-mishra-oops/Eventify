import React from 'react'
import Navbar from '../components/Navbar'
import CreateEvent from '../components/CreateEvent'

const EventCreation = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto pt-20 px-6">
                <CreateEvent />
            </div>
        </>

    )
}

export default EventCreation