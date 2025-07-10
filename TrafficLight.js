import React from 'react';

export default function TrafficLight() {
  return (
    <div className="absolute top-10 left-10 z-0">
      <div className="w-12 h-32 bg-black rounded-xl p-2 flex flex-col items-center justify-around shadow-lg">
        <div className="w-6 h-6 bg-red-500 rounded-full animate-pulse"></div>
        <div className="w-6 h-6 bg-yellow-400 rounded-full animate-bounce delay-1000"></div>
        <div className="w-6 h-6 bg-green-500 rounded-full animate-ping delay-2000"></div>
      </div>
    </div>
  );
}
