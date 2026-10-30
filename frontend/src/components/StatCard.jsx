
function StatCard({ title, value, icon: Icon, color, bg }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h3 className="mt-3 text-3xl font-bold text-slate-800">
            {value}
          </h3>
        </div>

        <div className={`rounded-xl p-4 ${bg} ${color}`}>
          {Icon && <Icon size={25} />}
        </div>

      </div>
    </div>
  );
}

export default StatCard;
