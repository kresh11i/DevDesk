import React, { useEffect, useRef } from "react";

const FocusInput = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <input
                ref={inputRef}
                type="text"
                placeholder="Enter something..."
                className="border rounded-lg px-4 py-2"
            />
        </div>
    );
};

export default FocusInput;