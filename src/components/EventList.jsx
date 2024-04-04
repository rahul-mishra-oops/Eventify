import React, { useState, useEffect } from 'react';

const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/events');
                if (response.ok) {
                    const data = await response.json();
                    setEvents(data);
                } else {
                    console.error('Failed to fetch events');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="eventcontainer">
            {events.map((event) => (
                <div className="card1" key={event.id}>
                    <div className="front">
                        <img src={event.image} alt="Event" />
                        <ul>
                            <li>Event Name: {event.eventname}</li>
                            <li>Event Date: {event.eventdate}</li>
                            <li>Event Venue: {event.eventcity}</li>
                            <li>Organizer Name:{event.orgernisername} </li>
                            <li>Organzier Phone:{event.organiserphone} </li>

                        </ul>
                        <button>Select</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EventList;
