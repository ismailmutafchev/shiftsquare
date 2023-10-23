import React, { useState, useEffect } from "react";

interface ToastProps {
    message?: string;
    show?: boolean;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
    const [showToast, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
        const timeout = setTimeout(() => {
            setShow(false);
        }, 3000);
        return () => clearTimeout(timeout);
    }, [message]);

    return (
        <div
            className={`${
                showToast ? "opacity-100" : "opacity-20"
            } fixed bottom-0 right-0 mb-4 mr-4 bg-gray-800 text-white py-2 px-4 rounded border border-gray-900`}
        >
            {message}
        </div>
    );
};

