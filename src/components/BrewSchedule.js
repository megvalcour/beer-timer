import BrewAlarm from "./BrewAlarm";
import "./BrewSchedule.css";

function BrewSchedule({ entries, onNextStep, onEndBoil, minutesInBoil = 60 }) {
    const moveToNextStep = (entry) => {
        console.log("moving to next step");
        onNextStep(entry);
    };
    const alarms = entries
        .sort((a, b) => b.time - a.time)
        .map((entry, index) => (
            <BrewAlarm
                key={index}
                stepNumber={index + 1}
                time={minutesInBoil - entry.time}
                step={entry.step}
                isActive={!entry.done}
                onFinish={() => moveToNextStep(entry)}
            />
        ));
    return (
        <div className="brewSchedule">
            <p>Now we're cooking with fire!</p>
            {alarms}
            <BrewAlarm
                key="boil"
                stepNumber={entries.length + 1}
                time={minutesInBoil}
                step="Flame Out"
                isActive={true}
                onFinish={() => onEndBoil()}
            />
        </div>
    );
}

export default BrewSchedule;
