
import { useState } from "react";
import {
  FolderKanban,
  Plus,
  Trash2,
  FolderOpen,
} from "lucide-react";

function Projects({ projects, onAddProject, onDeleteProject }) {
  const [projectName, setProjectName] = useState("");
  const [showForm, setShowForm] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!projectName.trim()) return;

    onAddProject(projectName.trim());
    setProjectName("");
    setShowForm(false);
  }

  return (
    <div className="space-y-7">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-emerald-600">
            Workspace / Projects
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-800">
            My Projects
          </h1>
          <p className="mt-2 text-slate-500">
            Organize your work into separate projects.
          </p>
        </div>

        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
        >
          <Plus size={18} />
          New Project
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
        >
          <input
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="Enter project name..."
            className="min-w-0 flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm"
            autoFocus
          />

          <button
            type="submit"
            className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            Create Project
          </button>
        </form>
      )}

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
                  <FolderKanban size={25} />
                </div>

                <button
                  onClick={() => onDeleteProject(project.id)}
                  className="rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-600"
                  title="Delete project"
                >
                  <Trash2 size={18} />
                </button>
              </div>

              <h2 className="mt-5 text-lg font-bold text-slate-800">
                {project.name}
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Project workspace
              </p>

              <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4 text-sm text-slate-500">
                <FolderOpen size={16} />
                Project created
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center">
            <FolderKanban
              size={40}
              className="mx-auto text-slate-300"
            />
            <h2 className="mt-4 font-semibold text-slate-700">
              No projects yet
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Create your first project to get started.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
