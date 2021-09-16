import React, { useState, useEffect } from 'react';
import MeetingList from './MeetingList';
import NewMeetingForm from './NewMeetingForm';

function MainPage({meetingInfo, setMeetingInfo}) {
    const [meetings, setMeetings] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(() => {
        fetch('http://localhost:3000/meetings') //3000 59981
        .then(res => res.json())
        .then(data => setMeetingInfo(data))
    }, [setMeetingInfo])
    const addMeeting = (meeting) => {
        setMeetings([...meetings, meeting])
    }
    // const updateMeeting = (meeting) => {
    //     const newMeeting = {...meeting, confirmed: false}
    //     const index = meetings.findIndex(savedMeeting => savedMeeting.id === meeting.id)

    //     setMeetings([...meetings.slice(0, index), newMeeting, ...meetings.slice(index + 1)])
    // }

    const filterMeetings = meetings.filter(meeting => meeting.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <div>
            <NewMeetingForm addMeeting={addMeeting} />
            <MeetingList meetingInfo={meetingInfo} />
        </div>
    );
}

export default MainPage;
