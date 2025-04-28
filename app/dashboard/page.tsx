"use client";

import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-tidydesk-secondary text-tidydesk-light p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-8">TidyDesk</h1>
          <nav className="space-y-4">
            <Link href="/dashboard" className="block hover:text-tidydesk-accent">Dashboard</Link>
            <Link href="#" className="block hover:text-tidydesk-accent">Upload Brief</Link>
            <Link href="#" className="block hover:text-tidydesk-accent">Updates</Link>
            <Link href="#" className="block hover:text-tidydesk-accent">Chat</Link>
            <Link href="#" className="block hover:text-tidydesk-accent">Payments</Link>
          </nav>
        </div>
        <div className="text-xs text-tidydesk-light/70">Powered by TidyDesk</div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-tidydesk-primary p-10">
        <h2 className="text-3xl font-bold mb-10">Welcome, User!</h2>

        {/* Project Brief */}
        <div className="bg-tidydesk-secondary rounded-xl p-6 mb-6">
          <h3 className="text-xl font-semibold mb-2">Project Brief</h3>
          <p className="text-tidydesk-light/90">brief.pdf</p>
        </div>

        {/* Latest Update */}
        <div className="bg-tidydesk-secondary rounded-xl p-6 mb-6">
          <h3 className="text-xl font-semibold mb-2">Latest Update</h3>
          <p className="text-tidydesk-light/90">Initial designs ready for review.</p>
        </div>

        {/* Chat Section */}
        <div className="bg-tidydesk-secondary rounded-xl p-6 mb-6">
          <h3 className="text-xl font-semibold mb-2">Chat</h3>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 p-2 rounded border border-gray-300 text-black"
            />
            <button className="px-4 py-2 bg-tidydesk-accent text-white rounded">Send</button>
          </div>
        </div>

        {/* Payments */}
        <div className="bg-tidydesk-secondary rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-2">Payments</h3>
          <p className="text-tidydesk-light/90">£500.00 Paid
          </p>
        </div>
      </main>
    </div>
  );
}
