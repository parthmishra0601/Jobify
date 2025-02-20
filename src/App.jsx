import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Hackathon from "./pages/Hackathon";
import HackathonDetails from "./pages/HackathonDetails";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Routes>
        <Route path="/signin" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/hackathon" element={<Hackathon />} />
          <Route path="/hackathon/:id" element={<HackathonDetails />} />
          <Route path="/" element={<h1 className="text-3xl p-4">Welcome to Jobify</h1>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;