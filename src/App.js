import "./App.css";

import { useState } from "react";

import { v4 as uuidv4 } from "uuid";
import BrewSchedule from "./components/BrewSchedule";
import BrewForm from "./components/BrewForm";

function App() {
    // New Entry type (factory)
    const newStep = () => {
        const id = uuidv4();
        return {
            id: id,
            step: "",
            time: "",
            done: false,
        };
    };

    // State
    const [steps, setSteps] = useState([newStep()]);
    const [isBrewing, setIsBrewing] = useState(false);

    // Add Step
    const addStep = () => {
        const newEntry = { ...newStep() };
        setSteps([...steps, newEntry]);
    };

    // Update existing step
    const updateStep = (newEntry) => {
        const indexOfUpdatedEntry = steps.findIndex(
            (step) => step.id === newEntry.id
        );
        console.log("index", indexOfUpdatedEntry);
        let stepsToUpdate = [...steps];
        stepsToUpdate.splice(indexOfUpdatedEntry, 1, newEntry);
        setSteps([...stepsToUpdate]);
    };

    // Update existing step
    const nextStep = (finishedEntry) => {
        const indexOfUpdatedEntry = steps.findIndex(
            (step) => step.id === finishedEntry.id
        );
        console.log("index", indexOfUpdatedEntry);
        let stepsToUpdate = [...steps];
        stepsToUpdate.splice(indexOfUpdatedEntry, 1, {
            ...finishedEntry,
            done: true,
        });
        setSteps([...stepsToUpdate]);
    };

    const moveStep = (movedEntry, newIndex, oldIndex) => {
        let stepsToUpdate = [...steps];
        stepsToUpdate.splice(oldIndex, 1);
        stepsToUpdate.splice(newIndex, 0, movedEntry);
        setSteps([...stepsToUpdate]);
    };

    // Remove step
    const removeStep = (removedEntry) => {
        let updatedSteps = steps.filter(
            (entry) => entry.id !== removedEntry.id
        );
        setSteps([...updatedSteps]);
    };

    // Start brew timer
    const startTimer = () => {
        setIsBrewing(true);
    };

    const endBoil = () => {
        setIsBrewing(false);
        alert("Turn off the burner, you're done!");
    };

    return (
        <div className="App">
            <h1>Brew Time</h1>

            {isBrewing ? (
                <BrewSchedule
                    entries={steps}
                    onNextStep={nextStep}
                    onEndBoil={endBoil}
                />
            ) : (
                <>
                    <p>
                        Let's get a game plan. Write out your boil steps,
                        starting with what needs to happen immediately upon boil
                        and continue until Flameout.
                    </p>
                    <BrewForm
                        entries={steps}
                        updateEntry={updateStep}
                        addEntry={addStep}
                        removeEntry={removeStep}
                        onSubmit={startTimer}
                        moveEntry={moveStep}
                    />
                </>
            )}
        </div>
    );
}

export default App;
