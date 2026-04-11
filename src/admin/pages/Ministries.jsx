import { useState } from 'react';

export default function Ministries() {
  const [activeTab, setActiveTab] = useState('all');
  const [registerOpen, setRegisterOpen] = useState(false);
  const [menuOpenId, setMenuOpenId] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    name: '',
    leader: '',
    description: '',
    icon: 'groups',
  });

  const [rows, setRows] = useState([
    {
      id: 1,
      name: 'Youth Fellowship',
      leader: 'Bro. Samuel Doe',
      members: 124,
      status: 'Active',
      icon: 'groups',
      color: 'bg-blue-100 text-blue-700',
      description: 'Empowering the next generation of spiritual leaders through fellowship and service.',
    },
    {
      id: 2,
      name: 'Sunday School',
      leader: 'Sis. Mary Johnson',
      members: 85,
      status: 'Active',
      icon: 'school',
      color: 'bg-orange-100 text-orange-700',
      description: 'Foundational biblical teaching for children and young adults.',
    },
    {
      id: 3,
      name: 'Missions Outreach',
      leader: 'Pastor David King',
      members: 42,
      status: 'Strategic',
      icon: 'public',
      color: 'bg-emerald-100 text-emerald-700',
      description: 'Spreading the gospel and providing aid to local and international communities.',
    },
    {
      id: 4,
      name: 'Women of Grace',
      leader: 'Deaconess Sarah Peters',
      members: 156,
      status: 'Active',
      icon: 'female',
      color: 'bg-purple-100 text-purple-700',
      description: 'Supporting women in their spiritual journey and family life.',
    },
    {
      id: 5,
      name: 'Men of Valor',
      leader: 'Elder James Bond',
      members: 98,
      status: 'Active',
      icon: 'male',
      color: 'bg-indigo-100 text-indigo-700',
      description: 'Strengthening men in their roles as spiritual heads of households.',
    },
    {
      id: 6,
      name: 'Music & Worship',
      leader: 'Sis. Grace Adeniyi',
      members: 65,
      status: 'Active',
      icon: 'music_note',
      color: 'bg-rose-100 text-rose-700',
      description: 'Leading the congregation in divine praise and worship through music.',
    },
  ]);

  const handleSave = (e) => {
    e.preventDefault();
    if (!form.name || !form.leader) return;

    if (editingId) {
      setRows((prev) =>
        prev.map((row) =>
          row.id === editingId
            ? { ...row, ...form }
            : row
        )
      );
    } else {
      const colors = [
        'bg-blue-100 text-blue-700',
        'bg-orange-100 text-orange-700',
        'bg-emerald-100 text-emerald-700',
        'bg-purple-100 text-purple-700',
        'bg-indigo-100 text-indigo-700',
        'bg-rose-100 text-rose-700',
      ];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      setRows((prev) => [
        {
          id: Date.now(),
          ...form,
          members: 0,
          status: 'Active',
          color: randomColor,
        },
        ...prev,
      ]);
    }

    closeModal();
  };

  const closeModal = () => {
    setRegisterOpen(false);
    setEditingId(null);
    setForm({
      name: '',
      leader: '',
      description: '',
      icon: 'groups',
    });
  };

  const openEdit = (m) => {
    setEditingId(m.id);
    setForm({
      name: m.name,
      leader: m.leader,
      description: m.description,
      icon: m.icon,
    });
    setRegisterOpen(true);
    setMenuOpenId(null);
  };

  const handleDelete = (id) => {
    setRows((prev) => prev.filter((row) => row.id !== id));
    setMenuOpenId(null);
  };

  const ministries = rows;

  return (
    <main className="pb-12 px-4 sm:px-8 max-w-screen-2xl mx-auto">
      {/* Hero Section */}
      <header className="mb-10 flex flex-col md:flex-row justify-between items-end gap-6 pt-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold text-[#9e2016] uppercase tracking-[0.2em] bg-[#9e2016]/5 px-3 py-1 rounded-full">Administration</span>
            <span className="material-symbols-outlined text-sm text-[#5e5e5e]">chevron_right</span>
            <span className="text-xs font-bold text-[#5e5e5e] uppercase tracking-[0.2em]">Ministries</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-[#1c1b1b] mb-2 font-headline">Ministry Governance</h1>
          <p className="text-[#5e5e5e] body-md font-body max-w-xl">Oversee the various departments of our sanctuary, track engagement, and support ministry leaders in their spiritual mission.</p>
        </div>
        <button 
          onClick={() => {
            setEditingId(null);
            setRegisterOpen(true);
          }}
          className="flex items-center gap-2 bg-[#9e2016] text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:opacity-90 transition-opacity"
        >
          <span className="material-symbols-outlined">add_circle</span>
          Register Ministry
        </button>
      </header>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100">
          <p className="text-[#5e5e5e] text-sm font-medium mb-1">Total Ministries</p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-[#1c1b1b]">12</span>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">+1 this qtr</span>
          </div>
          <div className="mt-4 h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500" style={{ width: '80%' }}></div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100">
          <p className="text-[#5e5e5e] text-sm font-medium mb-1">Active Members</p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-[#1c1b1b]">570</span>
            <span className="text-[#5e5e5e] text-xs">Across all groups</span>
          </div>
          <div className="mt-4 h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500" style={{ width: '65%' }}></div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100">
          <p className="text-[#5e5e5e] text-sm font-medium mb-1">Engagement Rate</p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-[#1c1b1b]">72%</span>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">↑ 5%</span>
          </div>
          <div className="mt-4 h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
            <div className="h-full bg-orange-500" style={{ width: '72%' }}></div>
          </div>
        </div>
        <div className="bg-[#9e2016]/5 p-6 rounded-2xl border border-[#9e2016]/10">
          <p className="text-[#9e2016] text-sm font-bold opacity-60 mb-1 uppercase tracking-widest text-[10px]">Ministry Focus</p>
          <p className="text-2xl font-bold text-[#9e2016]">Outreach</p>
          <div className="mt-4 flex -space-x-2">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-neutral-200"></div>
            ))}
            <div className="w-8 h-8 rounded-full border-2 border-white bg-[#9e2016] text-white text-[10px] flex items-center justify-center font-bold">+5</div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white rounded-3xl shadow-sm border border-neutral-100 overflow-hidden">
        <div className="p-6 border-b border-neutral-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4 bg-neutral-50 px-4 py-2 rounded-xl">
            <button 
              onClick={() => setActiveTab('all')}
              className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'all' ? 'bg-white shadow-sm text-[#9e2016]' : 'text-[#5e5e5e]'}`}
            >
              All Ministries
            </button>
            <button 
              onClick={() => setActiveTab('active')}
              className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'active' ? 'bg-white shadow-sm text-[#9e2016]' : 'text-[#5e5e5e]'}`}
            >
              Active Only
            </button>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-neutral-50 rounded-xl px-4 py-2 flex items-center gap-2 border border-transparent focus-within:border-[#9e2016]/20 transition-all">
              <span className="material-symbols-outlined text-[#5e5e5e] text-lg">search</span>
              <input type="text" placeholder="Search ministries..." className="bg-transparent border-none p-0 text-sm focus:ring-0 w-48" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-100">
          {ministries.map((m) => (
            <div key={m.id} className="bg-white p-8 hover:bg-neutral-50 transition-colors group">
              <div className="flex justify-between items-start mb-6">
                <div className={`p-4 rounded-2xl ${m.color.split(' ')[0]} ${m.color.split(' ')[1]}`}>
                  <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>{m.icon}</span>
                </div>
                <div className="relative">
                  <button 
                    onClick={() => setMenuOpenId(menuOpenId === m.id ? null : m.id)}
                    className={`text-[#5e5e5e] hover:text-[#9e2016] transition-all ${menuOpenId === m.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                  >
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                  
                  {menuOpenId === m.id && (
                    <>
                      <div className="fixed inset-0 z-10" onClick={() => setMenuOpenId(null)}></div>
                      <div className="absolute right-0 top-full z-20 mt-2 w-40 overflow-hidden rounded-xl bg-white shadow-xl ring-1 ring-black/5 animate-in fade-in zoom-in duration-200">
                        <button 
                          onClick={() => openEdit(m)}
                          className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-bold text-[#5e5e5e] hover:bg-neutral-50 hover:text-[#1c1b1b]"
                        >
                          <span className="material-symbols-outlined text-lg">edit</span>
                          Edit Details
                        </button>
                        <button 
                          onClick={() => handleDelete(m.id)}
                          className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-bold text-red-600 hover:bg-red-50"
                        >
                          <span className="material-symbols-outlined text-lg">delete</span>
                          Delete
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1c1b1b] mb-1 font-headline">{m.name}</h3>
              <p className="text-[#5e5e5e] text-sm mb-6 line-clamp-2 font-body leading-relaxed">{m.description}</p>
              
              <div className="space-y-4 pt-4 border-t border-neutral-100">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#5e5e5e] font-medium">Leader</span>
                  <span className="text-[#1c1b1b] font-bold">{m.leader}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#5e5e5e] font-medium">Members</span>
                  <span className="text-[#1c1b1b] font-bold">{m.members}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${m.status === 'Active' ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600'}`}>
                    {m.status}
                  </span>
                  <button className="text-[#9e2016] text-xs font-bold flex items-center gap-1 hover:underline">
                    View Registry <span className="material-symbols-outlined text-xs">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Registration Modal */}
      {registerOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl transition-all">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-neutral-100 px-8 py-6">
              <h2 className="text-2xl font-extrabold tracking-tight text-[#1c1b1b]">
                {editingId ? 'Edit Ministry Details' : 'Register New Ministry'}
              </h2>
              <button className="rounded-full p-2 hover:bg-neutral-100" onClick={closeModal}>
                <span className="material-symbols-outlined text-[#5e5e5e]">close</span>
              </button>
            </div>
            {/* Modal Body / Form */}
            <div className="scrollbar-hide max-h-[60vh] overflow-y-auto px-8 py-8">
              <form className="space-y-6" id="ministry-form" onSubmit={handleSave}>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Ministry Name */}
                  <div className="space-y-2 md:col-span-2">
                    <label className="ml-1 text-sm font-bold uppercase tracking-wider text-[#5e5e5e]">Ministry Name</label>
                    <input
                      className="w-full rounded-xl border-none bg-neutral-50 px-4 py-3.5 transition-all focus:bg-white focus:ring-2 focus:ring-[#9e2016]/20"
                      placeholder="e.g. Outreach Ministry"
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  {/* Leader Name */}
                  <div className="space-y-2">
                    <label className="ml-1 text-sm font-bold uppercase tracking-wider text-[#5e5e5e]">Ministry Leader</label>
                    <input
                      className="w-full rounded-xl border-none bg-neutral-50 px-4 py-3.5 transition-all focus:bg-white focus:ring-2 focus:ring-[#9e2016]/20"
                      placeholder="e.g. Bro. David Smith"
                      required
                      type="text"
                      value={form.leader}
                      onChange={(e) => setForm({ ...form, leader: e.target.value })}
                    />
                  </div>
                  {/* Category / Icon Selection */}
                  <div className="space-y-2">
                    <label className="ml-1 text-sm font-bold uppercase tracking-wider text-[#5e5e5e]">Ministry Icon</label>
                    <div className="flex flex-wrap gap-2">
                      {['groups', 'school', 'public', 'female', 'male', 'music_note', 'volunteer_activism', 'church'].map((icon) => (
                        <button
                          key={icon}
                          type="button"
                          onClick={() => setForm({ ...form, icon })}
                          className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                            form.icon === icon ? 'bg-[#9e2016] text-white' : 'bg-neutral-50 text-[#5e5e5e] hover:bg-neutral-100'
                          }`}
                        >
                          <span className="material-symbols-outlined text-lg">{icon}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Description */}
                <div className="space-y-2">
                  <label className="ml-1 text-sm font-bold uppercase tracking-wider text-[#5e5e5e]">Purpose & Mission</label>
                  <textarea
                    className="w-full resize-none rounded-xl border-none bg-neutral-50 px-4 py-3.5 transition-all focus:bg-white focus:ring-2 focus:ring-[#9e2016]/20"
                    placeholder="Describe the goals and activities of this ministry..."
                    rows={4}
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                  />
                </div>
              </form>
            </div>
            {/* Modal Footer */}
            <div className="flex flex-col gap-3 bg-neutral-50 px-8 py-6 md:flex-row">
              <button
                className="flex-1 rounded-2xl bg-[#9e2016] py-4 text-lg font-extrabold text-white shadow-xl shadow-[#9e2016]/20 transition-all active:scale-95"
                form="ministry-form"
                type="submit"
              >
                {editingId ? 'Update Ministry' : 'Launch Ministry'}
              </button>
              <button className="px-8 py-4 font-bold text-[#5e5e5e] transition-colors hover:text-[#1c1b1b]" onClick={closeModal} type="button">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
