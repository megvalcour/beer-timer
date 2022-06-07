import "./BrewField.css";

// import { useState } from "react";

function BrewField({
    index,
    entry,
    addEntry,
    updateEntry,
    removeEntry,
    moveEntry,
    numberOfSteps,
    disabled = false,
}) {
    // const onOrderChange = (newOrder) => {
    //     console.log("moving", entry.step, "to", newOrder, "from", index);
    //     moveEntry(entry, newOrder, index);
    // };

    const onStepChange = (event) => {
        updateEntry({ ...entry, step: event.target.value });
    };

    const onTimeChange = (event) => {
        let timeAsInt =
            event.target.value === "" ? "" : parseInt(event.target.value);
        updateEntry({ ...entry, time: timeAsInt });
    };

    const className = disabled
        ? "brewField__fieldset -disabled"
        : "brewField__fieldset";

    return (
        <div className={className} onClick={disabled ? addEntry : () => {}}>
            <legend className="brewField__stepNumber">{index + 1}.</legend>
            <div className="brewField__formGroups">
                <div className="brewField__formGroup -fields -steps">
                    <label
                        className="brewField__label sr-only"
                        htmlFor={`entry_step_${index}`}
                    >
                        Step 1 description
                    </label>
                    <input
                        className="brewField__input"
                        placeholder="Add your next step"
                        disabled={disabled}
                        id={`entry_step_${index}`}
                        type="text"
                        value={entry.step}
                        onChange={(event) => onStepChange(event)}
                    />
                </div>
                <div className="brewField__formGroup -fields -time">
                    <label
                        className="brewField__label"
                        htmlFor={`entry_time_${index}`}
                    >
                        Minutes before end of boil
                    </label>
                    <input
                        disabled={disabled}
                        className="brewField__input"
                        id={`entry_time_${index}`}
                        type="number"
                        value={entry.time}
                        onChange={(event) => onTimeChange(event)}
                    />
                </div>
            </div>
            <div className="brewField__formButtons">
                {/* {index !== 0 && (
                    <button
                        type="button"
                        onClick={() => onOrderChange(index - 1)}
                    >
                        Up
                    </button>
                )}
                {index !== numberOfSteps - 1 && (
                    <button
                        type="button"
                        onClick={() => onOrderChange(index + 1)}
                    >
                        Down
                    </button>
                )} */}
                <button
                    className="brewField__circleButton -delete"
                    type="button"
                    onClick={() => removeEntry(entry)}
                    disabled={disabled}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="2.462"
                        viewBox="0 0 16 2.462"
                    >
                        <path
                            id="Path_2"
                            data-name="Path 2"
                            d="M30.769,226.462H17.231a1.231,1.231,0,0,1,0-2.462H30.769a1.231,1.231,0,0,1,0,2.462Z"
                            transform="translate(-16 -224)"
                            fill="currentColor"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
export default BrewField;
