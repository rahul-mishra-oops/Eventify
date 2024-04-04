import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faLocationDot, faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';

const SingleEvent = () => {
    const { eventId } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await fetch(`http://localhost:3000/events/${eventId}`);
                if (response.ok) {
                    const eventData = await response.json();
                    setEvent(eventData);
                } else {
                    console.error('Failed to fetch event');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchEvent();
    }, [eventId]);

    return (
        <div className="singlevent">
            {event && (
                <div className="event">
                    <img src={event.image} alt="Event" />
                    <div className="eventdetails">
                        <h1>EVENT NAME : {event.eventname}</h1>
                        <br />
                        <div className="eventsidebar">
                            <div className="eventsummary">
                                <span><FontAwesomeIcon icon={faCalendarDays} />&nbsp;&nbsp;{event.eventdate}</span>
                                <span><FontAwesomeIcon icon={faLocationDot} />&nbsp;&nbsp;{event.eventcity}, {event.state}, {event.country}</span>
                                {/* Assuming event.price exists */}
                                <span><FontAwesomeIcon icon={faIndianRupeeSign} />&nbsp;&nbsp;{event.price} onwards </span>
                            </div>
                            <div className="btn">
                                <button className="editbtn">Edit Event</button>
                                <button className="deletebtn">Delete Event</button>
                            </div>
                        </div>
                        <br />
                    </div>
                    <hr />
                    <br />
                    <div className='eventsleftside'>
                        <div className="eventsbuy">
                            <span>Organzier Name : {event.orgernisername}</span>
                            <span>Organzier Phone : {event.organiserphone}</span>
                        </div>
                        <button className="buybtn">Buy Ticket</button>
                    </div>
                    <br />
                </div>
            )}
            {event && (
                <div className="eventdescription">
                    <span>Event Description:</span>
                    <p>{event.description}</p>
                </div>
            )}
        </div>
    );
};

export default SingleEvent;
