import React, { useRef, useState } from "react";
import useClickOutside from "../hooks/useClickOutside";

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const dropdownRef = useRef(null);

    useClickOutside(dropdownRef, () => {
        setIsOpen(false);
    });

    return (
        <div ref={dropdownRef} className="relative w-48">

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full rounded-lg border px-4 py-2"
            >
                Options
            </button>

            {isOpen && (
                <div className="absolute mt-2 w-full rounded-lg border bg-white shadow">
                    <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
                        Profile
                    </button>

                    <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
                        Settings
                    </button>

                    <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
                        Logout
                    </button>
                </div>
            )}

        </div>
    );
};

export default Dropdown;