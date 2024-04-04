import React from 'react'
import Navbar from '../components/Navbar'
import EventList from '../components/EventList'

const EventListPage = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto pt-20 px-6">
                <EventList />
            </div>

        </>
    )
}

export default EventListPage