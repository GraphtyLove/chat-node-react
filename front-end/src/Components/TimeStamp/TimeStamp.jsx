import React, { useState } from "react";
import { subscribeToTimer } from '../Api/Api'

const TimeStamp = () => {
    // States
    const [timeStamp, setTimeStamp] = useState('No time stamp yet')
    /// const [lastMessage, setLastMessage] = useState(false)

    // Functions
    subscribeToTimer((err, timeStamp) => setTimeStamp(timeStamp))

    // For messages try something like this: ?
    // sendNewMessage( (err, message) => setLastMessage(message))

    return (
        <div className='timeStamp'>
            <p>
                The timer's value is: {timeStamp}
            </p>
        </div>
    )
}

export default TimeStamp;