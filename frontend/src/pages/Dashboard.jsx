
import {
  CheckCircle2,
  Clock,
  FolderKanban,
  ListTodo,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

import Header from "../components/Header";
import StatCard from "../components/StatCard";
import TaskCard from "../components/TaskCard";

function Dashboard({ tasks, projects, onToggle, onEdit, onDelete }) {
  const completed = tasks.filter((task) => task.completed).length;
  const pending = tasks.length - completed;

  const progress =
    tasks.length === 0
      ? 0
      : Math.round((completed / tasks.length) * 100);

  return (
    <div className="space-y-8">
      <Header />

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-emerald-600">
            Overview
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Dashboard
          </h1>
          <p className="mt-2 text-slate-500">
            Manage your daily tasks and achieve your goals.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
          <TrendingUp size={18} />
          Stay productive
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Tasks"
          value={tasks.length}
          icon={ListTodo}
          color="text-blue-600"
          bg="bg-blue-50"
        />

        <StatCard
          title="Completed"
          value={completed}
          icon={CheckCircle2}
          color="text-emerald-600"
          bg="bg-emerald-50"
        />

        <StatCard
          title="Pending"
          value={pending}
          icon={Clock}
          color="text-amber-600"
          bg="bg-amber-50"
        />

        <StatCard
          title="Projects"
          value={projects.length}
          icon={FolderKanban}
          color="text-purple-600"
          bg="bg-purple-50"
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm xl:col-span-1">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-800">
                Your Progress
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Track your task completion.
              </p>
            </div>

            <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
              <TrendingUp size={22} />
            </div>
          </div>

          <div className="my-8 flex justify-center">
            <div
              className="flex h-40 w-40 items-center justify-center rounded-full"
              style={{
                background: `conic-gradient(#10b981 ${progress}%, #e2e8f0 ${progress}% 100%)`,
              }}
            >
              <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-white">
                <span className="text-3xl font-bold text-slate-800">
                  {progress}%
                </span>
                <span className="text-xs text-slate-400">
                  Completed
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-between border-t border-slate-100 pt-4 text-sm">
            <span className="text-slate-500">
              {completed} of {tasks.length} tasks completed
            </span>
            <span className="font-semibold text-emerald-600">
              {progress}%
            </span>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm xl:col-span-2">
          <div className="mb-6 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-slate-800">
                Recent Tasks
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Your latest activities.
              </p>
            </div>

            <a
              href="/tasks"
              className="flex items-center gap-1 text-sm font-semibold text-emerald-600 hover:text-emerald-700"
            >
              View all <ArrowRight size={16} />
            </a>
          </div>

          <div className="space-y-3">
            {tasks.length > 0 ? (
              tasks.slice(0, 5).map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onToggle={onToggle}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              ))
            ) : (
              <p className="py-10 text-center text-sm text-slate-400">
                No tasks yet. Add your first task!
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
