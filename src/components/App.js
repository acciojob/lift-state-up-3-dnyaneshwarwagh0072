
import './../styles/App.css';
import React, { useState } from "react";
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const App = () => {
  const [selectedOption, setSelectedOption] = useState();

  return (
    <div>
      <div className="parent p-4 border rounded-lg shadow-md max-w-md mx-auto ">
        <h1 className="text-xl font-bold mb-4">Lifting State Up Demo</h1>
        <p className="mb-4">Selected Option: <span className="font-semibold">{selectedOption}</span></p>
        <ChildComponent1 onSelect={setSelectedOption} />
        <ChildComponent2 onSelect={setSelectedOption} />
      </div>
    </div>
  )
}

export default App
