import "./BrewAlert.css";
import alarmSound from "./../alarm.wav";
import { useEffect } from "react";

function BrewAlert({ stepName, onClose }) {
    console.log("I'm loading");
    useEffect(() => {
        console.log("play sound");
        const alarm = new Audio(alarmSound);
        alarm.play();

        return () => {
            alarm.pause();
        };
    }, []);
    return (
        <div className="brewAlert">
            <img className="brewAlert__fire" src="fire.png" alt="Fire" />
            <h2 className="brewAlert__eyebrow">It's Brew Time!</h2>
            <p className="brewAlert__step">{stepName}</p>
            <button className="button -green" onClick={onClose}>
                All set!
            </button>
        </div>
    );
}

export default BrewAlert;
