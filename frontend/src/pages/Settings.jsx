
import { useState } from "react";
import { User, Bell, Palette, Save } from "lucide-react";

function Settings() {
  const [name, setName] = useState(
    localStorage.getItem("userName") || "Hermela"
  );

  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [message, setMessage] = useState("");

  function handleSave(e) {
    e.preventDefault();
    localStorage.setItem("userName", name);
    setMessage("Settings saved successfully!");
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Settings</h1>
        <p className="mt-2 text-slate-500">
          Manage your account and application preferences.
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-5">
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center gap-3">
            <User className="text-emerald-600" size={23} />
            <h2 className="text-xl font-bold text-slate-800">
              Profile Settings
            </h2>
          </div>

          <label className="mb-2 block text-sm font-medium text-slate-600">
            Your Name
          </label>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full max-w-md rounded-xl border border-slate-200 px-4 py-3"
            placeholder="Enter your name"
          />
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center gap-3">
            <Bell className="text-emerald-600" size={23} />
            <h2 className="text-xl font-bold text-slate-800">
              Notifications
            </h2>
          </div>

          <label className="flex items-center justify-between gap-4">
            <span className="text-slate-600">
              Enable notifications
            </span>

            <input
              type="checkbox"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
              className="h-5 w-5 accent-emerald-600"
            />
          </label>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center gap-3">
            <Palette className="text-emerald-600" size={23} />
            <h2 className="text-xl font-bold text-slate-800">
              Appearance
            </h2>
          </div>

          <label className="flex items-center justify-between gap-4">
            <span className="text-slate-600">
              Dark mode preference
            </span>

            <input
              type="checkbox"
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
              className="h-5 w-5 accent-emerald-600"
            />
          </label>

          <p className="mt-2 text-xs text-slate-400">
            This currently saves the preference in this page only.
          </p>
        </section>

        <button
          type="submit"
          className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700"
        >
          <Save size={19} />
          Save Settings
        </button>

        {message && (
          <p className="font-medium text-emerald-600">{message}</p>
        )}
      </form>
    </div>
  );
}

export default Settings;
