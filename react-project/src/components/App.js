import React, { useState } from 'react';
import MainPage from './MainPage';

function App() {
    const [meetingInfo, setMeetingInfo] = useState([]);
    return (
        <div>
            App Component
            <MainPage meetingInfo={meetingInfo} setMeetingInfo={setMeetingInfo} />
        </div>
    );
}

export default App;
