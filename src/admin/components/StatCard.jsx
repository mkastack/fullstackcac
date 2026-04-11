export default function StatCard({ label, value, icon = '??' }) {
  return <div className="rounded-2xl bg-white p-6 shadow-sm"><div className="mb-4 text-2xl">{icon}</div><p className="text-sm text-[#5e5e5e]">{label}</p><p className="text-3xl font-extrabold">{value}</p></div>;
}
