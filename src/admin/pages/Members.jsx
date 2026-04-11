import { useMemo, useState } from 'react';

const seedMembers = [
  { initials: 'EA', name: 'Emmanuel Adebayo', phone: '+234 801 234 5678', email: 'e.adebayo@email.com', joinDate: 'Oct 12, 2022', status: 'Active' },
  { initials: 'SJ', name: 'Sarah Jenkins', phone: '+234 802 345 6789', email: 'sarah.j@email.com', joinDate: 'Jan 05, 2023', status: 'Active' },
  { initials: 'DW', name: 'David Wright', phone: '+234 803 456 7890', email: 'd.wright@email.com', joinDate: 'Mar 22, 2023', status: 'Inactive' },
];

export default function Members() {
  const [query, setQuery] = useState('');
  const [showAdd, setShowAdd] = useState(false);
  const [notice, setNotice] = useState('');
  const [editingEmail, setEditingEmail] = useState(null);
  const [members, setMembers] = useState(seedMembers);
  const [attendance, setAttendance] = useState({ EA: false, SJ: true, DW: false });
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    dob: '',
    gender: '',
    address: '',
    emergencyName: '',
    emergencyPhone: '',
    category: 'Full Member',
  });

  const visibleMembers = useMemo(
    () => members.filter((m) => `${m.name} ${m.email} ${m.phone}`.toLowerCase().includes(query.toLowerCase())),
    [members, query],
  );

  const handleSaveMember = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      setNotice('Please add at least name and email.');
      return;
    }
    const initials = form.name.split(' ').slice(0, 2).map((p) => p[0]?.toUpperCase() || '').join('');

    if (editingEmail) {
      setMembers((prev) =>
        prev.map((m) =>
          m.email === editingEmail
            ? { ...m, ...form, initials }
            : m
        )
      );
      setNotice('Member details updated successfully.');
    } else {
      setMembers((prev) => [
        { 
          initials, 
          ...form, 
          joinDate: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }), 
          status: 'Active' 
        },
        ...prev,
      ]);
      setNotice('Member added successfully.');
    }
    
    closeModal();
  };

  const closeModal = () => {
    setForm({
      name: '',
      phone: '',
      email: '',
      dob: '',
      gender: '',
      address: '',
      emergencyName: '',
      emergencyPhone: '',
      category: 'Full Member',
    });
    setEditingEmail(null);
    setShowAdd(false);
  };

  const openEditMember = (m) => {
    setEditingEmail(m.email);
    setForm({
      name: m.name,
      phone: m.phone === '-' ? '' : m.phone,
      email: m.email,
      dob: m.dob || '',
      gender: m.gender || '',
      address: m.address || '',
      emergencyName: m.emergencyName || '',
      emergencyPhone: m.emergencyPhone || '',
      category: m.category || 'Full Member',
    });
    setShowAdd(true);
  };

  const toggleAttendance = (id) => setAttendance((prev) => ({ ...prev, [id]: !prev[id] }));

  const exportMembers = () => {
    const csv = ['name,phone,email,joinDate,status', ...members.map((m) => `${m.name},${m.phone},${m.email},${m.joinDate},${m.status}`)].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'members.csv';
    a.click();
    setNotice('Members CSV exported.');
  };

  const submitAttendance = () => {
    const checked = Object.values(attendance).filter(Boolean).length;
    setNotice(`Attendance submitted (${checked} checked-in).`);
  };

  return (
    <main className="mx-auto max-w-screen-2xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
      {notice && (
        <div className="mb-4 rounded-xl bg-[#ffdad5] px-4 py-3 text-sm font-semibold text-[#8e130c]">
          {notice}
        </div>
      )}
      <header className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="min-w-0">
          <nav className="mb-2 flex items-center gap-1 text-sm text-[#59413d]">
            <span>Dashboard</span>
            <span className="material-symbols-outlined text-sm text-[#8d706c]">chevron_right</span>
            <span>Administration</span>
          </nav>
          <h1 className="text-4xl font-extrabold tracking-tight text-[#1c1b1b] md:text-5xl">Members &amp; Attendance</h1>
          <p className="mt-2 max-w-xl text-[#59413d]">
            Manage your congregation records, track growth, and record service attendance in one central sanctuary.
          </p>
        </div>

        <div className="flex w-full flex-shrink-0 flex-col gap-3 sm:flex-row sm:items-center lg:w-auto">
          <div className="relative sm:min-w-[16rem]">
            <span className="material-symbols-outlined pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[20px] text-[#8d706c]">search</span>
            <input
              className="w-full rounded-xl bg-[#f6f3f2] py-3 pl-12 pr-4 text-sm transition-all placeholder:text-[#8d706c] focus:bg-white focus:ring-2 focus:ring-[#9e2016]/25"
              placeholder="Search members..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#9e2016] to-[#c0392b] px-6 py-3 text-sm font-bold text-white shadow-[0_12px_40px_rgba(28,27,27,0.06)] transition-all hover:opacity-95"
            onClick={() => setShowAdd(true)}
          >
            <span className="material-symbols-outlined text-[22px]">person_add</span>
            Add Member
          </button>
        </div>
      </header>

      <section className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="flex h-40 flex-col justify-between rounded-2xl bg-white p-6">
          <span className="text-sm font-semibold text-[#59413d]">Total Congregation</span>
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-extrabold text-[#9e2016]">1,248</span>
            <span className="text-xs font-bold text-green-600">+12%</span>
          </div>
          <div className="h-1 w-full overflow-hidden rounded-full bg-[#f6f3f2]">
            <div className="h-full w-3/4 bg-[#9e2016]" />
          </div>
        </div>

        <div className="flex h-40 flex-col justify-between rounded-2xl bg-white p-6">
          <span className="text-sm font-semibold text-[#59413d]">Active Now</span>
          <span className="text-5xl font-extrabold text-[#9e2016]">892</span>
          <div className="flex -space-x-3 overflow-hidden">
            <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-[#bfa58e]" />
            <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-[#8d6e63]" />
            <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-[#6d4c41]" />
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e5e2e1] text-[10px] font-bold ring-2 ring-white">+889</div>
          </div>
        </div>

        <div className="relative flex h-40 flex-col justify-between overflow-hidden rounded-2xl bg-[#9e2016] p-6 text-white md:col-span-2">
          <div>
            <span className="text-sm font-semibold text-[#ffe5e1]">Last Sunday Attendance</span>
            <h2 className="mt-1 text-5xl font-extrabold">94% Capacity</h2>
          </div>
          <p className="max-w-xs text-sm text-[#ffe5e1]">Excellent turnout for the Pentecost Service. 12 new souls joined the ministry.</p>
          <span className="absolute -bottom-4 -right-4 text-8xl opacity-10">✝</span>
        </div>
      </section>

      <section className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
        <div className="flex flex-col gap-6 lg:col-span-2">
          <div className="overflow-hidden rounded-3xl bg-white">
            <div className="flex items-center justify-between bg-[#fcf9f8] p-6">
              <h3 className="text-3xl font-bold">Membership Directory</h3>
              <div className="flex items-center gap-2">
                <button className="rounded-lg bg-[#f6f3f2] p-2 text-[#59413d]" onClick={() => setNotice('Filter panel coming next.')}>☰</button>
                <button className="rounded-lg bg-[#f6f3f2] p-2 text-[#59413d]" onClick={exportMembers}>⇩</button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-[#f6f3f2]/50 text-xs font-bold uppercase tracking-widest text-[#59413d]">
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Contact</th>
                    <th className="px-6 py-4">Join Date</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleMembers.map((member) => (
                  <tr key={member.email} className="transition-colors hover:bg-[#f6f3f2]/40">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-full font-bold ${member.initials === 'SJ' ? 'bg-[#d7ccc8] text-[#5e5e5e]' : member.initials === 'DW' ? 'bg-[#e4e2e2] text-[#5e5e5e]' : 'bg-[#ffdad5] text-[#9e2016]'}`}>{member.initials}</div>
                        <span className="font-semibold">{member.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <p className="font-medium">{member.phone}</p>
                      <p className="text-xs text-[#59413d]">{member.email}</p>
                    </td>
                    <td className="px-6 py-4 text-sm">{member.joinDate}</td>
                    <td className="px-6 py-4">
                      <span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${member.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-[#e5e2e1] text-[#59413d]'}`}>{member.status}</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button 
                          className="rounded-lg p-2 text-[#59413d] hover:bg-[#f6f3f2]" 
                          onClick={() => openEditMember(member)}
                          title="Edit Member"
                        >
                          ✎
                        </button>
                        <button
                          className="rounded-lg p-2 text-[#ba1a1a] hover:bg-[#ffdad6]"
                          title="Delete Member"
                          onClick={() => {
                            setMembers((prev) => prev.filter((m) => m.email !== member.email));
                            setNotice(`${member.name} removed from directory.`);
                          }}
                        >
                          🗑
                        </button>
                      </div>
                    </td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-between bg-[#f6f3f2]/20 p-6 text-sm">
              <span className="text-[#59413d]">Showing {visibleMembers.length} of {members.length} members</span>
              <div className="flex items-center gap-2">
                <button className="rounded-lg bg-white p-2 shadow-[0_12px_40px_rgba(28,27,27,0.06)]" onClick={() => setNotice('Previous page')}>‹</button>
                <span className="px-3 font-bold">1</span>
                <button className="rounded-lg bg-white p-2 shadow-[0_12px_40px_rgba(28,27,27,0.06)]" onClick={() => setNotice('Next page')}>›</button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <section className="rounded-3xl bg-white p-6 shadow-[0_12px_40px_rgba(28,27,27,0.06)]">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-2xl bg-[#ffdad5] p-3 text-[#9e2016]">🗓</div>
              <h3 className="text-3xl font-bold tracking-tight">Mark Attendance</h3>
            </div>
            <form className="space-y-4">
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#59413d]">Service Date</label>
                <input className="w-full rounded-xl bg-[#f6f3f2] px-4 py-3" type="date" />
              </div>
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#59413d]">Service Type</label>
                <select className="w-full rounded-xl bg-[#f6f3f2] px-4 py-3">
                  <option>Sunday Morning Service</option>
                  <option>Wednesday Bible Study</option>
                  <option>Friday Night Vigil</option>
                  <option>Monthly Youth Prayer</option>
                </select>
              </div>
              <div className="mt-6 bg-[#fcf9f8] pt-4">
                <h4 className="mb-4 text-sm font-bold">Live Check-in List</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-xl bg-[#f6f3f2]/50 p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[10px] font-bold">EA</div>
                      <span className="text-sm font-semibold">Emmanuel Adebayo</span>
                    </div>
                    <input type="checkbox" checked={attendance.EA} onChange={() => toggleAttendance('EA')} />
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-[#f6f3f2]/50 p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[10px] font-bold">SJ</div>
                      <span className="text-sm font-semibold">Sarah Jenkins</span>
                    </div>
                    <input type="checkbox" checked={attendance.SJ} onChange={() => toggleAttendance('SJ')} />
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-[#f6f3f2]/50 p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[10px] font-bold">DW</div>
                      <span className="text-sm font-semibold">David Wright</span>
                    </div>
                    <input type="checkbox" checked={attendance.DW} onChange={() => toggleAttendance('DW')} />
                  </div>
                </div>
              </div>
              <button
                className="mt-6 w-full rounded-2xl bg-gradient-to-r from-[#9e2016] to-[#c0392b] py-4 text-sm font-extrabold uppercase tracking-widest text-white shadow-[0_12px_40px_rgba(28,27,27,0.06)]"
                type="button"
                onClick={submitAttendance}
              >
                Submit Attendance Report
              </button>
            </form>
          </section>

          <div className="rounded-3xl bg-[#e5e2e1] p-6">
            <h4 className="mb-2 flex items-center gap-2 font-bold">
              <span className="text-[#9e2016]">✦</span> Pro Tip
            </h4>
            <p className="text-sm leading-relaxed text-[#59413d]">
              You can export monthly attendance reports to PDF via the <span className="font-bold">Reports</span> module in the main settings.
            </p>
          </div>
        </div>
      </section>

      {showAdd && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/40 p-4 backdrop-blur-sm">
          <div className="my-2 flex max-h-[78vh] w-full max-w-4xl flex-col rounded-3xl bg-white shadow-2xl">
            <div className="flex items-center justify-between px-5 py-4">
              <h3 className="text-xl font-extrabold tracking-tight text-[#1c1b1b]">
                {editingEmail ? 'Edit Member Details' : 'Add New Member'}
              </h3>
              <button 
                className="rounded-full p-2 transition-colors hover:bg-[#f6f3f2]" 
                type="button" 
                onClick={closeModal} 
                aria-label="Close"
              >
                <span className="material-symbols-outlined text-[#8d706c]">close</span>
              </button>
            </div>

            <form className="overflow-y-auto p-5" onSubmit={handleSaveMember}>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#59413d]">Full Name</label>
                  <input
                    className="w-full rounded-xl bg-[#f6f3f2] px-4 py-2.5 transition-all placeholder:text-[#8d706c]/60 focus:bg-white focus:ring-2 focus:ring-[#9e2016]"
                    placeholder="e.g. Emmanuel Adebayo"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#59413d]">Phone Number</label>
                  <input
                    className="w-full rounded-xl bg-[#f6f3f2] px-4 py-2.5 transition-all focus:bg-white focus:ring-2 focus:ring-[#9e2016]"
                    placeholder="+234..."
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#59413d]">Email Address</label>
                  <input
                    className="w-full rounded-xl bg-[#f6f3f2] px-4 py-2.5 transition-all focus:bg-white focus:ring-2 focus:ring-[#9e2016]"
                    placeholder="name@email.com"
                    type="email"
                    required
                    disabled={!!editingEmail}
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#59413d]">Date of Birth</label>
                  <input
                    className="w-full rounded-xl bg-[#f6f3f2] px-4 py-2.5 transition-all focus:bg-white focus:ring-2 focus:ring-[#9e2016]"
                    type="date"
                    value={form.dob}
                    onChange={(e) => setForm((f) => ({ ...f, dob: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#59413d]">Gender</label>
                  <select
                    className="w-full rounded-xl bg-[#f6f3f2] px-4 py-2.5 transition-all focus:bg-white focus:ring-2 focus:ring-[#9e2016]"
                    value={form.gender}
                    onChange={(e) => setForm((f) => ({ ...f, gender: e.target.value }))}
                  >
                    <option value="">Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#59413d]">Physical Address</label>
                  <textarea
                    className="min-h-[64px] w-full resize-none rounded-xl bg-[#f6f3f2] px-4 py-2.5 transition-all focus:bg-white focus:ring-2 focus:ring-[#9e2016]"
                    placeholder="Street, City, State..."
                    value={form.address}
                    onChange={(e) => setForm((f) => ({ ...f, address: e.target.value }))}
                  />
                </div>

                <div className="mt-2 md:col-span-2">
                  <h4 className="mb-3 font-serif text-base font-bold text-[#9e2016]">
                    <span className="mr-1 text-[#ba1a1a]">*</span>
                    Emergency Contact
                  </h4>
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-[#59413d]">Contact Name</label>
                      <input
                        className="w-full rounded-xl bg-[#f6f3f2] px-4 py-2.5 transition-all focus:bg-white focus:ring-2 focus:ring-[#9e2016]"
                        type="text"
                        value={form.emergencyName}
                        onChange={(e) => setForm((f) => ({ ...f, emergencyName: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-[#59413d]">Contact Phone</label>
                      <input
                        className="w-full rounded-xl bg-[#f6f3f2] px-4 py-2.5 transition-all focus:bg-white focus:ring-2 focus:ring-[#9e2016]"
                        type="tel"
                        value={form.emergencyPhone}
                        onChange={(e) => setForm((f) => ({ ...f, emergencyPhone: e.target.value }))}
                      />
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#59413d]">Membership Category</label>
                  <select
                    className="w-full rounded-xl bg-[#f6f3f2] px-4 py-2.5 font-semibold text-[#9e2016] transition-all focus:bg-white focus:ring-2 focus:ring-[#9e2016]"
                    value={form.category}
                    onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
                  >
                    <option>Full Member</option>
                    <option>Associate</option>
                    <option>Visitor</option>
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <button
                  className="w-full rounded-2xl bg-gradient-to-r from-[#9e2016] to-[#c0392b] py-3 text-sm font-extrabold uppercase tracking-widest text-white shadow-[0_12px_40px_rgba(28,27,27,0.06)] transition-all hover:brightness-95"
                  type="submit"
                >
                  {editingEmail ? 'Update Member' : 'Save Member'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
