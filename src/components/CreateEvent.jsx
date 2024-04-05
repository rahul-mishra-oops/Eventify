import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';



const CreateEvent = () => {
    const { eventId } = useParams();
    const isEditing = eventId ? true : false;
    const initialUserState = {
        eventname: "", eventdate: "", eventcity: "", state: "", country: "", orgernisername: "", organiserphone: "", description: "", image: "",
    };
    const [user, setUser] = useState(initialUserState);
    let name, value;
    useEffect(() => {
        if (isEditing) {
            fetchEventData();
        }
    }, [isEditing]);

    const fetchEventData = async () => {
        try {
            const response = await fetch(`http://localhost:3000/events/${eventId}`);
            if (response.ok) {
                const eventData = await response.json();
                console.log(eventData);
                setUser(eventData);
            } else {
                console.error('Failed to fetch event data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = isEditing ? `http://localhost:3000/events/${eventId}` : 'http://localhost:3000/events';
        const method = isEditing ? 'PUT' : 'POST';

        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            if (response.ok) {
                console.log(isEditing ? 'Event updated successfully' : 'Event created successfully');
                setUser(initialUserState);
                // Optionally, you can redirect the user to the event list page
            } else {
                console.error(isEditing ? 'Failed to update event' : 'Failed to create event');
            }
        } catch (error) {
            console.error('Error:', error);
        }

    }
    return (
        <div className='formcontainer'>
            <span>Create Event</span>
            <form onSubmit={handleSubmit}>
                <div className='formbody'>
                    <input type='text' id="eventname" name="eventname" placeholder='Event name' value={user.eventname} onChange={handleInputs} />
                    <input type='date' id="eventdate" name="eventdate" placeholder='Event date' value={user.eventdate} onChange={handleInputs} />
                    <input type='text' id="eventcity" name="eventcity" placeholder='Event city' value={user.eventcity} onChange={handleInputs} />
                    {/* <input type='text' id="eventstate" placeholder='Event state' /> */}
                    <select name='state' value={user.state} onChange={handleInputs}>
                        <option>- Select State -</option>
                        <option value="AP">Andhra Pradesh</option>
                        <option value="AR">Arunachal Pradesh</option>
                        <option value="AS">Assam</option>
                        <option value="BR">Bihar</option>
                        <option value="CT">Chhattisgarh</option>
                        <option value="GA">Gujarat</option>
                        <option value="HR">Haryana</option>
                        <option value="HP">Himachal Pradesh</option>
                        <option value="JK">Jammu and Kashmir</option>
                        <option value="GA">Goa</option>
                        <option value="JH">Jharkhand</option>
                        <option value="KA">Karnataka</option>
                        <option value="KL">Kerala</option>
                        <option value="MP">Madhya Pradesh</option>
                        <option value="MH">Maharashtra</option>
                        <option value="MN">Manipur</option>
                        <option value="ML">Meghalaya</option>
                        <option value="MZ">Mizoram</option>
                        <option value="NL">Nagaland</option>
                        <option value="OR">Odisha</option>
                        <option value="PB">Punjab</option>
                        <option value="RJ">Rajasthan</option>
                        <option value="SK">Sikkim</option>
                        <option value="TN">Tamil Nadu</option>
                        <option value="TG">Telangana</option>
                        <option value="TR">Tripura</option>
                        <option value="UT">Uttarakhand</option>
                        <option value="UP">Uttar Pradesh</option>
                        <option value="WB">West Bengal</option>
                        <option value="AN">Andaman and Nicobar Islands</option>
                        <option value="CH">Chandigarh</option>
                        <option value="DN">Dadra and Nagar Haveli</option>
                        <option value="DD">Daman and Diu</option>
                        <option value="DL">Delhi</option>
                        <option value="LD">Lakshadweep</option>
                        <option value="PY">Puducherry</option>
                    </select>
                    <input type='text' id="eventcountry" placeholder='Event country' name='country' value={user.country} onChange={handleInputs} />
                    <input type='text' id="organizername" placeholder='Organizer name' name='orgernisername' value={user.orgernisername} onChange={handleInputs} />
                    <input type='tel' id="organizerphone" placeholder='Organizer phone' name='organiserphone' value={user.organiserphone} onChange={handleInputs} />
                    <input type='text' id="description" placeholder='Description' name='description' value={user.description} onChange={handleInputs} />
                    <input type="text" id="img" name="image" placeholder="Image URL" value={user.image} onChange={handleInputs} />
                    {/* <label for="img"><i className="fa-solid fa-upload"></i>Upload image</label> */}
                </div>
                <div className='formsubmit'>
                    <button className='btn1' type='submit'>Submit</button>
                    <Link to="/allevents"><button>Go to events page</button></Link>
                </div>
            </form>
        </div>
    )
}

export default CreateEvent