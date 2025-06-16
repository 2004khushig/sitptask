import React, { useState } from "react";

const LinearSearchVisualizer = () => {
  const [array, setArray] = useState([10, 20, 30, 40, 50]);
  const [input, setInput] = useState("10,20,30,40,50");
  const [target, setTarget] = useState(30);
  const [speed, setSpeed] = useState(300);
  const [isSearching, setIsSearching] = useState(false);

  const handleArrayInput = (e) => {
    const value = e.target.value;
    setInput(value);
    const arr = value
      .split(",")
      .map((num) => parseInt(num.trim(), 10))
      .filter((num) => !isNaN(num));
    setArray(arr);
  };

  const linearSearch = async () => {
    setIsSearching(true);
    const bars = document.getElementsByClassName("bar");

    for (let i = 0; i < array.length; i++) {
      bars[i].style.backgroundColor = "#facc15"; // yellow
      await new Promise((resolve) => setTimeout(resolve, speed));

      if (array[i] === parseInt(target)) {
        bars[i].style.backgroundColor = "#10b981"; // green
        setIsSearching(false);
        return;
      } else {
        bars[i].style.backgroundColor = "#ef4444"; // red
      }
    }

    setIsSearching(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 to-green-200 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-emerald-700 mb-6">🔍 Linear Search Visualizer</h1>

      <input
        type="text"
        placeholder="Enter array e.g. 10,20,30"
        value={input}
        onChange={handleArrayInput}
        className="px-4 py-2 rounded-lg border border-emerald-400 w-full max-w-md mb-3"
        disabled={isSearching}
      />

      <input
        type="number"
        placeholder="Target value"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
        className="px-4 py-2 rounded-lg border border-blue-400 w-full max-w-xs mb-6"
        disabled={isSearching}
      />

      <div className="flex items-end space-x-1 h-60 bg-white rounded p-2 shadow-inner mb-6 w-full max-w-3xl">
        {array.map((val, idx) => (
          <div
            key={idx}
            className="bar bg-blue-400 rounded-t transition-all duration-300 ease-in-out"
            style={{
              height: `${val * 3}px`,
              width: `${600 / array.length}px`,
            }}
          >
            <span className="text-xs block text-center text-white font-semibold">
              {val}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center space-x-4">
        <button
          className="px-6 py-2 bg-emerald-600 text-white rounded-xl shadow hover:bg-emerald-700 transition"
          onClick={linearSearch}
          disabled={isSearching}
        >
          Start Search
        </button>

        <label className="flex items-center space-x-2 text-emerald-900">
          <span>Speed</span>
          <input
            type="range"
            min="50"
            max="1000"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            disabled={isSearching}
            className="accent-emerald-600"
          />
        </label>
      </div>

      <div className="mt-6 text-sm text-gray-700">
        <p><span className="text-yellow-500 font-bold">🟨 Yellow:</span> Checking value</p>
        <p><span className="text-red-500 font-bold">🟥 Red:</span> Not a match</p>
        <p><span className="text-green-500 font-bold">🟩 Green:</span> Target found!</p>
      </div>
    </div>
  );
};

export default LinearSearchVisualizer;