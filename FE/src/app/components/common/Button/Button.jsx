
"use client"
import { useState } from "react";

const Button = ({ onClick, variant, customClassName ,children, disabled, loading, id }) => {
    // Define different color variants

    const [loadingActionId, setLoadingActionId] = useState(null);


    const variants = {
        default: 'bg-black dark:bg-blue-700 text-white',
        primary: 'bg-blue-500 text-white',
        secondary: 'bg-gray-500 text-white',
        success: 'bg-green-500 text-white',
        danger: 'bg-red-500 text-white',
    };

    const colorClass = variants[variant] || variants.default;

    return (
        <button
            className={`px-4 py-2 rounded text-nowrap ${colorClass} ${loading && loadingActionId === id ? 'opacity-50 cursor-not-allowed' : ''} ${customClassName}`}
            onClick={()=>{
                onClick()
                setLoadingActionId(id)
            }}
            disabled={loading || disabled}
        >
            {loading && loadingActionId === id ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                </svg>
            ) : (
                children
            )}
        </button>
    );
};

export default Button;
