import { useMemo, useState } from 'react';

export default function DataTable({ rows, columns }) {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => rows.filter((r) => JSON.stringify(r).toLowerCase().includes(query.toLowerCase())), [rows, query]);
  return (
    <div className="rounded-2xl bg-white p-4 shadow-[0_12px_40px_rgba(28,27,27,0.06)]">
      <input
        className="mb-4 w-full rounded-xl bg-[#f6f3f2] px-4 py-3 transition-all focus:bg-white focus:ring-1 focus:ring-[#9e2016]/30"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead><tr>{columns.map((c) => <th key={c.key} className="px-3 py-2 text-xs uppercase text-[#5e5e5e]">{c.label}</th>)}</tr></thead>
          <tbody>{filtered.map((row, i) => <tr key={i} className="bg-white even:bg-[#fcf9f8]">{columns.map((c) => <td key={c.key} className="px-3 py-3">{row[c.key]}</td>)}</tr>)}</tbody>
        </table>
      </div>
    </div>
  );
}
