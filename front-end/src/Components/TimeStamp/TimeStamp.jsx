import React, { useState } from "react";
import { subscribeToTimer, subscribeToMessage } from '../Api/Api'

const TimeStamp = () => {
    // States
    const [timeStamp, setTimeStamp] = useState('No time stamp yet')
    /// const [lastMessage, setLastMessage] = useState(false)

    // Functions
    subscribeToTimer((err, timeStamp) => setTimeStamp(timeStamp))

    return (
        <div className='timeStamp'>
            <p>
                The timer's value is: {timeStamp}
            </p>
        </div>
    )
}

export default TimeStamp;