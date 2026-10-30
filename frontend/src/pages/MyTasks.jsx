
import { useState } from "react";
import { Plus, Search, CheckCircle2, Clock, Trash2 } from "lucide-react";

function MyTasks({ tasks = [], onToggle, onDelete, onAdd }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" ||
      (filter === "Completed" && task.completed) ||
      (filter === "Pending" && !task.completed);

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">My Tasks</h1>
          <p className="mt-2 text-slate-500">
            Organize and manage all your daily tasks.
          </p>
        </div>

        <button
          onClick={onAdd}
          className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700"
        >
          <Plus size={20} />
          Add Task
        </button>
      </div>

      <div className="flex flex-wrap gap-3 rounded-2xl bg-white p-4 shadow-sm">
        <div className="flex min-w-48 flex-1 items-center gap-2 rounded-xl border border-slate-200 px-4">
          <Search size={19} className="text-slate-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search tasks..."
            className="w-full py-3 outline-none"
          />
        </div>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="rounded-xl border border-slate-200 px-4 py-3"
        >
          <option>All</option>
          <option>Pending</option>
          <option>Completed</option>
        </select>
      </div>

      <div className="space-y-3">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <button onClick={() => onToggle(task.id)}>
                {task.completed ? (
                  <CheckCircle2 className="text-emerald-600" size={24} />
                ) : (
                  <Clock className="text-amber-500" size={24} />
                )}
              </button>

              <div>
                <h3 className={`font-semibold ${task.completed ? "text-slate-400 line-through" : "text-slate-800"}`}>
                  {task.title}
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  {task.completed ? "Completed" : "Pending"}
                </p>
              </div>
            </div>

            <button
              onClick={() => onDelete(task.id)}
              className="rounded-lg p-2 text-red-500 hover:bg-red-50"
              title="Delete task"
            >
              <Trash2 size={19} />
            </button>
          </div>
        ))}

        {filteredTasks.length === 0 && (
          <div className="rounded-2xl bg-white p-10 text-center text-slate-500">
            No tasks found.
          </div>
        )}
      </div>
    </div>
  );
}

export default MyTasks;
