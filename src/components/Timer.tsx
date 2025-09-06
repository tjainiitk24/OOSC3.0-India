"use client";

import { useEffect, useState } from "react";


export default function Timer() {
  const END_TIME = new Date("2025-09-07T13:20:00").getTime();

  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const updateTimer = () => {
      const remaining = Math.floor((END_TIME - Date.now()) / 1000);
      setTimeLeft(remaining > 0 ? remaining : 0);
    };

    updateTimer(); // run immediately
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, [END_TIME]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-900 text-white rounded-2xl shadow-lg mb-4">
      <h1 className="text-2xl mb-4">Time Remaining</h1>
      <div className="text-5xl font-bold tracking-widest">
        {hours.toString().padStart(2, "0")}:
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </div>
    </div>
  );
}
