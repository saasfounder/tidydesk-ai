"use client";

import { useState } from "react";

export default function Dashboard() {
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState("");

  function sendMessage() {
    if (newMessage.trim()) {
      setMessages([...messages, newMessage]);
      setNewMessage("");
    }
  }

  return (
    <main className="min-h-screen flex bg-gray-50">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow h-screen p-6 flex flex-col">
        <h1 className="text-2xl font-bold mb-8">TidyDesk</h1>
        <nav className="flex-1">
          <ul className="space-y-6">
            <li className="font-semibold text-gray-800">Dashboard</li>
            <li className="text-gray-600">Upload Brief</li>
            <li className="text-gray-600">Updates</li>
            <li className="text-gray-600">Chat</li>
            <li className="text-gray-600">Payments</li>
          </ul>
        </nav>
        <div className="text-xs text-gray-400 mt-auto">Powered by TidyDesk</div>
      </aside>

      {/* Main Content */}
      <section className="flex-1 p-8">
        <h2 className="text-3xl font-bold mb-8">Welcome to your Client Portal!</h2>

        {/* Project Brief */}
        <div className="bg-white shadow p-6 rounded mb-6">
          <h3 className="text-xl font-semibold mb-2">Project Brief</h3>
          <p className="text-blue-600 cursor-pointer">brief.pdf</p>
        </div>

        {/* Latest Update */}
        <div className="bg-white shadow p-6 rounded mb-6">
          <h3 className="text-xl font-semibold mb-2">Latest Update</h3>
          <p>Initial designs ready for review.</p>
        </div>

        {/* Chat */}
        <div className="bg-white shadow p-6 rounded mb-6">
          <h3 className="text-xl font-semibold mb-2">Chat</h3>
          <div className="mb-4">
            {messages.map((msg, idx) => (
              <p key={idx} className="bg-gray-100 p-2 rounded mb-2">{msg}</p>
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              className="flex-1 p-2 rounded-l border border-gray-300 text-black"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-r"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>

        {/* Payments */}
        <div className="bg-white shadow p-6 rounded">
          <h3 className="text-xl font-semibold mb-2">Payments</h3>
          <p>£500.00 Paid</p>
        </div>

      </section>
    </main>
  );
}
