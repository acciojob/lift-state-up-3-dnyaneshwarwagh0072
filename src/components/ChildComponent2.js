import React from 'react'

const ChildComponent2 = ({ onSelect }) => {
    return (
        <div>
            <button
                className="bg-green-500 text-white px-4 py-2 rounded-md m-2 hover:bg-green-700"
                onClick={() => onSelect("Option 2")}
            >
                Select Option 2
            </button>
        </div>
    )
}

export default ChildComponent2
