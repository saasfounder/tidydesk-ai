"use client";

import { useState } from "react";

export default function Dashboard() {
  const [muslimMode, setMuslimMode] = useState(false);

  return (
    <main className="min-h-screen bg-tidydesk-primary text-tidydesk-light p-6">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Welcome to TidyDesk!</h1>
        <button
          onClick={() => setMuslimMode(!muslimMode)}
          className="bg-tidydesk-secondary px-4 py-2 rounded text-sm hover:bg-tidydesk-accent"
        >
          {muslimMode ? "Muslim Mode: On" : "Muslim Mode: Off"}
        </button>
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Projects */}
        <div className="bg-tidydesk-secondary p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Recent Projects</h2>
          <ul className="text-sm text-tidydesk-light">
            <li>Brand Design for Ahmad</li>
            <li>Marketing Plan for Fatima</li>
            <li>Web App for Omar</li>
          </ul>
        </div>

        {/* Gratitude Journal Shortcut */}
        <div className="bg-tidydesk-secondary p-6 rounded-xl shadow-md flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-2">Gratitude Journal</h2>
            <p className="text-sm">Record your daily gratitude entries.</p>
          </div>
          <button className="mt-4 bg-tidydesk-accent text-white px-4 py-2 rounded">
            Open Journal
          </button>
        </div>

        {/* Mood Tracker */}
        <div className="bg-tidydesk-secondary p-6 rounded-xl shadow-md flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-2">Mood Tracker</h2>
            <p className="text-sm">Track how you feel each day while working.</p>
          </div>
          <button className="mt-4 bg-tidydesk-accent text-white px-4 py-2 rounded">
            Track Mood
          </button>
        </div>

        {/* Payment Tracker */}
        <div className="bg-tidydesk-secondary p-6 rounded-xl shadow-md flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-2">Payments</h2>
            <p className="text-sm">Track payments from clients easily.</p>
          </div>
          <button className="mt-4 bg-tidydesk-accent text-white px-4 py-2 rounded">
            View Payments
          </button>
        </div>

        {/* Dua for Work */}
        <div className="bg-tidydesk-secondary p-6 rounded-xl shadow-md col-span-1 md:col-span-2 text-center">
          <h2 className="text-xl font-semibold mb-2">Dua Before Working</h2>
          <p className="text-lg italic">
            اللّهُمّ لا سهْلَ إِلّا ما جَعَلْتَهُ سَهْلًا
          </p>
        </div>
      </div>
    </main>
  );
}
