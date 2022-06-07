import { useState } from "react";

function useInput({ label, id, type = "text" }) {
    const [value, setValue] = useState("");
    const input = (
        <>
            <label for={id}>{label}</label>
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type={type}
            />
        </>
    );
    return [value, input];
}

export default useInput;
