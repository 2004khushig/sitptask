import React, { useState } from "react";

const BubbleSortVisualizer = () => {
  const [array, setArray] = useState([50, 30, 20, 60, 10, 40]);
  const [speed, setSpeed] = useState(300);
  const [isSorting, setIsSorting] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    const arr = value
      .split(",")
      .map((num) => parseInt(num.trim(), 10))
      .filter((num) => !isNaN(num));
    setArray(arr);
  };

  const bubbleSort = async () => {
    setIsSorting(true);
    const bars = document.getElementsByClassName("bar");
    let arr = [...array];

    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        bars[j].style.backgroundColor = "#facc15"; // yellow
        bars[j + 1].style.backgroundColor = "#facc15";

        await new Promise((resolve) => setTimeout(resolve, speed));

        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
          await new Promise((resolve) => setTimeout(resolve, speed));

          bars[j].style.backgroundColor = "#3b82f6"; // blue
          bars[j + 1].style.backgroundColor = "#3b82f6";

          await new Promise((resolve) => setTimeout(resolve, speed));
        }

        bars[j].style.backgroundColor = "#10b981"; // green
        bars[j + 1].style.backgroundColor = "#10b981";
      }
    }

    for (let k = 0; k < bars.length; k++) {
      bars[k].style.backgroundColor = "#16a34a"; // dark green
    }
    setIsSorting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-emerald-200 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-emerald-700 mb-6">
        🧮 Bubble Sort Visualizer
      </h1>

      <input
        type="text"
        placeholder="Enter numbers separated by commas"
        className="px-4 py-2 rounded-lg border border-emerald-400 w-full max-w-md mb-4"
        onChange={handleInputChange}
        disabled={isSorting}
      />

      <div className="flex items-end space-x-1 h-60 bg-white rounded p-2 shadow-inner mb-6 w-full max-w-3xl">
        {array.map((val, idx) => (
          <div
            key={idx}
            className="bar bg-emerald-500 rounded-t transition-all duration-300 ease-in-out"
            style={{
              height: `${val * 3}px`,
              width: `${600 / array.length}px`,
            }}
          ></div>
        ))}
      </div>

      <div className="flex items-center space-x-4">
        <button
          className="px-6 py-2 bg-emerald-600 text-white rounded-xl shadow hover:bg-emerald-700 transition"
          onClick={bubbleSort}
          disabled={isSorting}
        >
          Start Bubble Sort
        </button>

        <label className="flex items-center space-x-2 text-emerald-900">
          <span>Speed</span>
          <input
            type="range"
            min="50"
            max="1000"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            disabled={isSorting}
            className="accent-emerald-600"
          />
        </label>
      </div>

      <div className="mt-6 text-sm text-gray-700">
        <p><span className="text-yellow-500 font-bold">🟨 Yellow:</span> Comparing</p>
        <p><span className="text-blue-500 font-bold">🔵 Blue:</span> Swapping</p>
        <p><span className="text-green-500 font-bold">🟩 Green:</span> Sorted in progress</p>
        <p><span className="text-green-700 font-bold">✅ Dark Green:</span> Final sorted</p>
      </div>
    </div>
  );
};

export default BubbleSortVisualizer;