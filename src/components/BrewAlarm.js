import "./BrewAlarm.css";

import { useState } from "react";
import BrewAlert from "./BrewAlert";

import BrewTimer from "./BrewTimer";

function BrewAlarm({ time, step, stepNumber, isActive, onFinish }) {
    const [showAlert, setShowAlert] = useState(false);

    const onStepFinish = () => {
        setShowAlert(true);
    };

    const onAlertClose = () => {
        console.log("closing");
        setShowAlert(false);
        onFinish();
    };

    return (
        <div
            className={
                "brewAlarm__alarm " + (isActive ? "-active" : "-disabled")
            }
        >
            <h2 className="brewSchedule__stepTitle">Step {stepNumber}</h2>
            <h2 className="brewSchedule__step">{step}</h2>

            {isActive ? (
                <BrewTimer
                    onFinish={onStepFinish}
                    hoursMinSecs={{ hours: 0, minutes: time, seconds: 0 }}
                />
            ) : (
                <p>Done</p>
            )}
            {showAlert ? (
                <BrewAlert stepName={step} onClose={onAlertClose} />
            ) : (
                ""
            )}
        </div>
    );
}

export default BrewAlarm;
