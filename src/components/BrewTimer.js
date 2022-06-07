import { useState, useEffect } from "react";

function BrewTimer({ hoursMinSecs, onFinish }) {
    const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
    const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);

    const tick = () => {
        if (hrs === 0 && mins === 0 && secs === 0) onFinish();
        else if (mins === 0 && secs === 0) {
            setTime([hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([hrs, mins - 1, 59]);
        } else {
            setTime([hrs, mins, secs - 1]);
        }
    };

    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    return (
        <div className="brewSchedule__timerWrapper">
            <p className="brewSchedule__timer">
                {`${hrs.toString().padStart(2, "0")}`}
                <span className="brewSchedule__colon">:</span>
                {`${mins.toString().padStart(2, "0")}`}
                <span className="brewSchedule__colon">:</span>
                {`${secs.toString().padStart(2, "0")}`}
            </p>
        </div>
    );
}

export default BrewTimer;
