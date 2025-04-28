"use client";

import { useState } from "react";

export default function Dashboard() {
  const [note, setNote] = useState("");

  return (
    <div className="flex min-h-screen bg-gray-50">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col p-6">
        <h1 className="text-2xl font-bold mb-10">TidyDesk</h1>
        <nav className="flex flex-col space-y-4">
          <a href="#" className="hover:text-blue-600">Dashboard</a>
          <a href="#" className="hover:text-blue-600">Upload Brief</a>
          <a href="#" className="hover:text-blue-600">Payments</a>
          <a href="#" className="hover:text-blue-600">Mood Tracker</a>
          <a href="#" className="hover:text-blue-600">Gratitude Journal</a>
          <a href="#" className="hover:text-blue-600">Deadlines</a>
        </nav>
        <div className="mt-auto text-xs text-gray-400 pt-10">Powered by TidyDesk</div>
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        
        {/* Topbar */}
        <header className="flex items-center justify-between p-6 bg-white shadow">
          <h2 className="text-xl font-semibold">Client Portal</h2>
          <div className="flex items-center gap-4">
            <input 
              type="text" 
              placeholder="Search..." 
              className="border p-2 rounded-md"
            />
            <div className="flex items-center gap-2">
              <span className="text-sm">Muslim Mode</span>
              <input type="checkbox" className="h-4 w-4" />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-10 relative">
          <h1 className="text-3xl font-bold mb-8">Welcome, User</h1>

          {/* Notes Widget */}
          <div className="absolute bottom-10 right-10 bg-white p-4 rounded shadow-md w-64">
            <h2 className="text-lg font-semibold mb-2">Notes</h2>
            <textarea 
              className="w-full border rounded p-2 text-black" 
              placeholder="Write a note..." 
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={4}
            />
          </div>
        </main>

      </div>
    </div>
  );
}
