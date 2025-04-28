"use client";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-tidydesk-primary text-tidydesk-light p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">TidyDesk Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Project Manager Section */}
        <div className="bg-tidydesk-secondary p-4 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Projects</h2>
          <p>Manage all your freelance client projects easily.</p>
          <button className="mt-4 bg-tidydesk-accent text-white px-4 py-2 rounded">Add New Project</button>
        </div>

        {/* Tasks & Notes Section */}
        <div className="bg-tidydesk-secondary p-4 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Tasks & Notes</h2>
          <p>Track tasks and write quick notes per project.</p>
          <button className="mt-4 bg-tidydesk-accent text-white px-4 py-2 rounded">Go to Tasks</button>
        </div>

        {/* Mood Tracker */}
        <div className="bg-tidydesk-secondary p-4 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Mood Tracker</h2>
          <p>Record your feelings and stay balanced while working.</p>
          <button className="mt-4 bg-tidydesk-accent text-white px-4 py-2 rounded">Track Mood</button>
        </div>

        {/* Muslim Mode */}
        <div className="bg-tidydesk-secondary p-4 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Muslim Mode</h2>
          <p>Turn on prayer reminders & calm work environment.</p>
          <button className="mt-4 bg-tidydesk-accent text-white px-4 py-2 rounded">Toggle Muslim Mode</button>
        </div>

        {/* Payment Tracker */}
        <div className="bg-tidydesk-secondary p-4 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Payments</h2>
          <p>Track your payments per client project.</p>
          <button className="mt-4 bg-tidydesk-accent text-white px-4 py-2 rounded">View Payments</button>
        </div>

        {/* Gratitude Journal */}
        <div className="bg-tidydesk-secondary p-4 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Gratitude Journal</h2>
          <p>Write what you're grateful for and feel more positive daily.</p>
          <button className="mt-4 bg-tidydesk-accent text-white px-4 py-2 rounded">Open Journal</button>
        </div>

      </div>
    </main>
  );
}
