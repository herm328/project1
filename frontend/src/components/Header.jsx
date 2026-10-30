
import { Bell, Search, CalendarDays } from "lucide-react";

function Header() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
      <div>
        <p className="text-sm font-medium text-slate-500">
          TaskFlow Workspace
        </p>
        <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
          <CalendarDays size={17} className="text-emerald-600" />
          {today}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          className="rounded-xl border border-slate-200 bg-white p-3 text-slate-500 hover:bg-slate-50"
          title="Search"
        >
          <Search size={20} />
        </button>

        <button
          className="relative rounded-xl border border-slate-200 bg-white p-3 text-slate-500 hover:bg-slate-50"
          title="Notifications"
        >
          <Bell size={20} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-emerald-500" />
        </button>

        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-600 font-bold text-white">
          H
        </div>
      </div>
    </header>
  );
}

export default Header;
