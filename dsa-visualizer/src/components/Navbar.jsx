import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-emerald-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">DSA Visualizer</Link>
        <div className="space-x-4">
          <Link to="/sorting" className="text-white hover:text-gray-200">Sorting</Link>
          <Link to="/searching" className="text-white hover:text-gray-200">Searching</Link>
          <Link to="/trees" className="text-white hover:text-gray-200">Trees</Link>
          <Link to="/graphs" className="text-white hover:text-gray-200">Graphs</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
