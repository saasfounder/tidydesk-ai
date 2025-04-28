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
"use client";

import { useState } from "react";

export default function Dashboard() {
  const [projects, setProjects] = useState<{ name: string; client: string }[]>([]);
  const [newProject, setNewProject] = useState({ name: "", client: "" });

  function addProject() {
    if (newProject.name.trim() && newProject.client.trim()) {
      setProjects([...projects, newProject]);
      setNewProject({ name: "", client: "" }); // Reset after adding
    }
  }

  return (
    <main className="min-h-screen bg-tidydesk-primary text-tidydesk-light p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">TidyDesk Dashboard 📋</h1>

      {/* New Project Form */}
      <div className="bg-tidydesk-secondary p-6 rounded-xl shadow-md mb-8 max-w-md mx-auto">
        <h2 className="text-xl font-semibold mb-4">Add New Project</h2>
        <input
          type="text"
          placeholder="Project Name"
          className="w-full p-2 mb-3 rounded border border-gray-300 text-black"
          value={newProject.name}
          onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Client Name"
          className="w-full p-2 mb-3 rounded border border-gray-300 text-black"
          value={newProject.client}
          onChange={(e) => setNewProject({ ...newProject, client: e.target.value })}
        />
        <button
          className="w-full bg-tidydesk-accent hover:bg-tidydesk-light text-white font-bold py-2 px-4 rounded"
          onClick={addProject}
        >
          Add Project
        </button>
      </div>

      {/* Project List */}
      <div className="max-w-2xl mx-auto">
        {projects.length === 0 ? (
          <p className="text-center text-gray-300">No projects yet. Add one above!</p>
        ) : (
          <ul className="space-y-4">
            {projects.map((project, index) => (
              <li key={index} className="p-4 bg-tidydesk-secondary rounded-xl shadow flex justify-between">
                <div>
                  <p className="font-semibold">{project.name}</p>
                  <p className="text-sm text-tidydesk-light">Client: {project.client}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}

