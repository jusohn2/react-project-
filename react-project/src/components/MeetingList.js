import React from 'react';
import MeetingCard from './MeetingCard';

function MeetingList({meetingInfo}) {
    const renderMeetings = meetingInfo.map((meet, i) => <MeetingCard key={i} meet={meet}/>)
    return (
        <ul>
            {renderMeetings}
        </ul>
    );
}

export default MeetingList;
