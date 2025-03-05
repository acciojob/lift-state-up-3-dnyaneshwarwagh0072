import React from 'react'

const ChildComponent1 = ({ onSelect }) => {
    return (
        <div>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md m-2 hover:bg-blue-700"
                onClick={() => onSelect("Option 1")}
            >
                Select Option 1
            </button>
        </div>
    )
}

export default ChildComponent1
