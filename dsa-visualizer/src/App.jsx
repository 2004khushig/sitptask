import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Sorting from "./pages/Sorting";
import Searching from "./pages/Searching";
import Trees from "./pages/Trees";
import Graphs from "./pages/Graphs";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/sorting" element={<Sorting />} />
        <Route path="/searching" element={<Searching />} />
        <Route path="/trees" element={<Trees />} />
        <Route path="/graphs" element={<Graphs />} />
      </Routes>
    </Router>
  );
}

export default App;
