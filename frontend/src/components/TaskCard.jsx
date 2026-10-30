
import { Check, Pencil, Trash2, Clock } from "lucide-react";

function TaskCard({ task, onToggle, onEdit, onDelete }) {
  return (
    <div className="group flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-100 bg-white p-4 transition hover:border-emerald-200 hover:shadow-sm">
      <div className="flex min-w-0 items-center gap-4">
        <button
          onClick={() => onToggle(task.id)}
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition ${
            task.completed
              ? "border-emerald-500 bg-emerald-500 text-white"
              : "border-slate-300 text-transparent hover:border-emerald-500"
          }`}
          title="Change task status"
        >
          <Check size={15} />
        </button>

        <div className="min-w-0">
          <h3
            className={`truncate font-semibold ${
              task.completed
                ? "text-slate-400 line-through"
                : "text-slate-800"
            }`}
          >
            {task.title}
          </h3>

          <p className="mt-1 flex items-center gap-1 text-xs text-slate-400">
            <Clock size={13} />
            {task.completed ? "Completed" : "In progress"}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            task.completed
              ? "bg-emerald-50 text-emerald-700"
              : "bg-amber-50 text-amber-700"
          }`}
        >
          {task.completed ? "Completed" : "Pending"}
        </span>

        <button
          onClick={() => onEdit(task.id)}
          className="rounded-lg p-2 text-slate-400 hover:bg-blue-50 hover:text-blue-600"
          title="Edit task"
        >
          <Pencil size={17} />
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-600"
          title="Delete task"
        >
          <Trash2 size={17} />
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
