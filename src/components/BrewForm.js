import BrewField from "./BrewField";

function BrewForm({
    entries,
    updateEntry,
    addEntry,
    removeEntry,
    moveEntry,
    onSubmit,
}) {
    const fields = entries.map((entry, index) => (
        <BrewField
            key={entry.id}
            index={index}
            entry={entry}
            addEntry={addEntry}
            updateEntry={updateEntry}
            removeEntry={removeEntry}
            moveEntry={moveEntry}
            numberOfSteps={entries.length}
        />
    ));
    return (
        <form className="brewField__form">
            {fields}
            <BrewField
                key="dummyGroup"
                index={entries.length}
                entry={{}}
                addEntry={addEntry}
                updateEntry={updateEntry}
                removeEntry={removeEntry}
                moveEntry={moveEntry}
                numberOfSteps={0}
                disabled
            />
            <button type="button" onClick={onSubmit}>
                Start
            </button>
        </form>
    );
}

export default BrewForm;
