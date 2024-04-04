import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faLocationDot, faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';

const SingleEvent = () => {
    return (
        <div className="singlevent">
            <div className="event">
                <img src="https://shotkit.com/wp-content/uploads/2020/09/event-photography-8.jpg" />
                <div className="eventdetails">
                    <h1>EVENT NAME : holi </h1>
                    <br />
                    <div className="eventsidebar">
                        <div className="eventsummary">
                            <span><FontAwesomeIcon icon={faCalendarDays} />&nbsp;&nbsp;April 2024</span>
                            <span><FontAwesomeIcon icon={faLocationDot} />&nbsp;&nbsp;Delhi India </span>
                            <span><FontAwesomeIcon icon={faIndianRupeeSign} />&nbsp;&nbsp;1000 onwards </span>
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
                        <span>Organzier Name : </span>
                        <span>Organzier Phone : </span>
                    </div>
                    <button className="buybtn">Buy Ticket</button>
                </div>
                <br />
            </div>
            <div className="eventdescription">
                <span>Event Description:</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non corporis mollitia eum distinctio, velit fugit necessitatibus voluptas nulla sint delectus? Autem eaque, dicta iste consequatur veritatis magni doloribus itaque voluptatem quasi distinctio! Vitae tenetur id ea error, mollitia at sint totam voluptatem consequuntur nostrum minima accusantium, eos tempore explicabo et. Omnis veniam a sit quae tempora rem iste dicta, laboriosam cumque reiciendis amet porro labore ex voluptas, repudiandae illo perspiciatis. Cumque expedita provident dolorem assumenda repudiandae delectus culpa. Odit provident repellendus dolorem neque corporis, eius dolor accusantium, laboriosam asperiores ullam officiis placeat numquam. Culpa, unde id dolor soluta, porro inventore ad, at optio adipisci distinctio deleniti. Odio voluptatum natus inventore!</p>
            </div>
        </div>
    )
}

export default SingleEvent;