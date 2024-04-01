import React from 'react'


const CreateEvent = () => {
    return (
        <div className='formcontainer'>
            <span>Create Event</span>
            <div className='formbody'>
                <input type='text' id="eventname" name="eventname" placeholder='Event name' />
                <input type='date' id="eventdate" name="eventdate" placeholder='Event date' />
                <input type='text' id="eventcity" name="eventcity" placeholder='Event city' />
                {/* <input type='text' id="eventstate" placeholder='Event state' /> */}
                <select>
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
                <input type='text' id="eventcountry" placeholder='Event country' />
                <input type='text' id="organizername" placeholder='Organizer name' />
                <input type='tel' id="organizerphone" placeholder='Organizer phone' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                <input type='text' id="description" placeholder='Description' />
                <input type="file" id="img" name="img" accept="image/*" />
                <label for="img"><i className="fa-solid fa-upload"></i>Upload image</label>
            </div>
            <div className='formsubmit'>
                <button>Submit</button>
            </div>
        </div>
    )
}

export default CreateEvent