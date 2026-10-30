
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import MyTasks from "./pages/MyTasks";
import Projects from "./pages/Projects";
import Settings from "./pages/Settings";

function App() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [
      { id: 1, title: "Design Dashboard", completed: false },
      { id: 2, title: "Create Login Page", completed: true },
      { id: 3, title: "Build PHP API", completed: false },
    ];
  });

  const [projects, setProjects] = useState(() => {
    return JSON.parse(localStorage.getItem("projects")) || [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  function addTask() {
    const title = prompt("Enter task name:");
    if (!title?.trim()) return;

    setTasks((old) => [
      ...old,
      { id: Date.now(), title: title.trim(), completed: false },
    ]);
  }

  function editTask(id) {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;

    const title = prompt("Edit task:", task.title);
    if (!title?.trim()) return;

    setTasks((old) =>
      old.map((t) =>
        t.id === id ? { ...t, title: title.trim() } : t
      )
    );
  }

  function toggleTask(id) {
    setTasks((old) =>
      old.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  }

  function deleteTask(id) {
    if (!confirm("Delete this task?")) return;
    setTasks((old) => old.filter((t) => t.id !== id));
  }

  function addProject(name) {
    setProjects((old) => [
      ...old,
      { id: Date.now(), name },
    ]);
  }

  function deleteProject(id) {
    setProjects((old) => old.filter((p) => p.id !== id));
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <main className="min-w-0 flex-1 p-5 md:p-8">
        <div className="mx-auto max-w-7xl">
          <Routes>
            <Route
              path="/"
              element={
                <Dashboard
                  tasks={tasks}
                  projects={projects}
                  onToggle={toggleTask}
                  onEdit={editTask}
                  onDelete={deleteTask}
                />
              }
            />

            <Route
              path="/tasks"
              element={
                <MyTasks
                  tasks={tasks}
                  onToggle={toggleTask}
                  onDelete={deleteTask}
                  onAdd={addTask}
                />
              }
            />

            <Route
              path="/projects"
              element={
                <Projects
                  projects={projects}
                  onAddProject={addProject}
                  onDeleteProject={deleteProject}
                />
              }
            />

            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
