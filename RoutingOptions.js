// /src/components/RoutingUI.js
import React from 'react';

export default function RoutingUI() {
  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Routing Options</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1">Start Location</label>
          <input className="w-full p-2 rounded bg-gray-800 border border-gray-600 text-white" placeholder="Enter starting point" />
        </div>
        <div>
          <label className="block mb-1">Destination</label>
          <input className="w-full p-2 rounded bg-gray-800 border border-gray-600 text-white" placeholder="Enter destination" />
        </div>
        <div>
          <label className="block mb-1">Preference</label>
          <select className="w-full p-2 rounded bg-gray-800 border border-gray-600 text-white">
            <option>Fastest</option>
            <option>Fuel Efficient</option>
            <option>Safest</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white">
          Get Route
        </button>
      </form>
    </div>
  );
}
