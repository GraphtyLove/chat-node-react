import React, { useState } from "react";
import { subscribeToTimer } from '../Api/Api'

const TimeStamp = () => {
    // States
    const [timeStamp, setTimeStamp] = useState('No time stamp yet');

    // Functions
    subscribeToTimer((err, timeStamp) => setTimeStamp(timeStamp));


    // Return
    return (
        <div className='timeStamp'>
            <p>
                The timer's value is: {timeStamp}
            </p>
        </div>
    )
}

export default TimeStamp;