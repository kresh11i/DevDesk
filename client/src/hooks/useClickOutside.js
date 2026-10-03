import React, { useEffect } from "react";

const useClickOutside = (ref, callback) => {
    useEffect(() => {
        const handleClick = (Event) => {
            const isInside = ref.current.contains(Event.target);

            if (!isInside) {
                callback();
            }
        };

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);
};

export default useClickOutside;