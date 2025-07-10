import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-blue-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-6">Traffic Optimizer</h2>
      <nav className="flex flex-col gap-4">
        <Link to="/" className="hover:text-yellow-300">Dashboard</Link>
        <Link to="/map" className="hover:text-yellow-300">Map View</Link>
        <Link to="/settings" className="hover:text-yellow-300">Settings</Link>
      </nav>
    </div>
  );
}
