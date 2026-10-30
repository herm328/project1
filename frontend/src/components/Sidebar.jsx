
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  CheckSquare,
  FolderKanban,
  Settings,
  LogOut,
  Zap,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "My Tasks", path: "/tasks", icon: CheckSquare },
  { name: "Projects", path: "/projects", icon: FolderKanban },
  { name: "Settings", path: "/settings", icon: Settings },
];

function Sidebar() {
  return (
    <aside className="flex min-h-screen w-64 shrink-0 flex-col bg-slate-950 px-5 py-7 text-white">
      <div className="mb-10 flex items-center gap-3 px-2">
        <div className="rounded-xl bg-emerald-500 p-2">
          <Zap size={25} className="text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-wide">TaskFlow</h1>
          <p className="text-xs text-slate-400">Manage your work</p>
        </div>
      </div>

      <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
        Menu
      </p>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-950/30"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <Icon size={20} />
              {item.name}
            </NavLink>
          );
        })}
      </nav>

      <div className="mt-auto rounded-2xl border border-slate-800 bg-slate-900 p-4">
        <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400">
          <Zap size={20} />
        </div>
        <h3 className="font-semibold">Stay productive!</h3>
        <p className="mt-2 text-xs leading-5 text-slate-400">
          Organize your daily work and achieve your goals.
        </p>
      </div>

      <div className="mt-5 border-t border-slate-800 pt-5">
        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-400 hover:bg-slate-800 hover:text-white">
          <LogOut size={19} />
          Sign out
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
