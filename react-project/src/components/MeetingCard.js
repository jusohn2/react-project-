import React from 'react';
import DeleteMeeting from './DeleteMeeting';

function MeetingCard({meet, updateMeet}) {
    // const handlleClick = () => {
    //     updateMeet(meet)
    // }
    return (
        <li>
            <label htmlFor="name">NAME</label>
            <h4 name="name" id="name">{meet.name}</h4>
            <label htmlFor="phone">PHONE</label>
            <h4 name="phone" id="phone">{meet.phone}</h4>
            <label htmlFor="email">EMAIL</label>
            <h4 name="email" id="email">{meet.email}</h4>
            <label htmlFor="date">DATE</label>
            <h4 name="date" id="date">{meet.date}</h4>
            <label htmlFor="description">DESCRIPTION</label>
            <h4 name="description" id="description">{meet.description}</h4>
            {/* <button onClick={handlleClick}>confirm</button> */}
            <DeleteMeeting meeting={meet} />
        </li>
    );
}

export default MeetingCard;
