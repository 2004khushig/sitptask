import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/sorting"); // You can change this to another page like "/searching"
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-green-100 to-emerald-200 flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold text-emerald-700">
          🔍 DSA Visualizer Tool
        </h1>
        <p className="text-xl text-emerald-900 font-medium">
          Learn Data Structures & Algorithms visually
        </p>
        <button
          onClick={handleClick}
          className="px-6 py-2 bg-emerald-600 text-white rounded-xl shadow hover:bg-emerald-700 transition"
        >
          Start Visualizing
        </button>
      </div>
    </div>
  );
}

export default Home;
