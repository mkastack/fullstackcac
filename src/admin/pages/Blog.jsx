import { useState } from 'react';

export default function Blog() {
  const [postOpen, setPostOpen] = useState(false);
  const [form, setForm] = useState({
    title: '',
    author: '',
    excerpt: '',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRekhJOV60boGR62RSEEl5u1opK6DPxroifkEtnyPefe395jZqzk4KqPCgMv-_uvrAL2iBckL4y2qAPPNuiZl6qcC0PJTqibmtg1KkMq8bgntYJ7u-z2pD5BmoqwnRD0gTdn-Fv8Eh_Zhen4uI9kW9rhle4_B5LTXi1Zd22ZSMDnBTAWktUxlvYuXCWLpdsqNSFuT-lwqDO0pQUEpOzN0DDFLeQ2d-KXLUFPnPyyAATfwwF72eZ2LgqwQrkt9xZhFB40toVHhexmDG',
  });

  const [rows, setRows] = useState([
    {
      title: 'The Power of Collective Prayer in Troubled Times',
      excerpt: 'Reflecting on our recent communal vigil and its impact on the youth ministry.',
      author: 'Pastor John Oladele',
      initials: 'JO',
      date: 'Oct 24, 2023',
      status: 'Published',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCRekhJOV60boGR62RSEEl5u1opK6DPxroifkEtnyPefe395jZqzk4KqPCgMv-_uvrAL2iBckL4y2qAPPNuiZl6qcC0PJTqibmtg1KkMq8bgntYJ7u-z2pD5BmoqwnRD0gTdn-Fv8Eh_Zhen4uI9kW9rhle4_B5LTXi1Zd22ZSMDnBTAWktUxlvYuXCWLpdsqNSFuT-lwqDO0pQUEpOzN0DDFLeQ2d-KXLUFPnPyyAATfwwF72eZ2LgqwQrkt9xZhFB40toVHhexmDG',
    },
    {
      title: 'Annual Harvest Festival: Dates and Volunteer Signup',
      excerpt: 'Join us for the most anticipated celebration of the season.',
      author: 'Mary Adebayo',
      initials: 'MA',
      date: 'Nov 02, 2023',
      status: 'Draft',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDCHvv7RMh_88A9tJ2HV-wK3FBmP6xYLJLMzOl3QJNyEskAuOywjEzo9JvC2MCDTZJtfNUh1SedFv6cKIpqvOuoWTx15hEwJsdtepQViRAoC7iKh04KVYVqRMJLlFaQVYJ8h2_GPZ_Ywa2xn7pGHenYSUQbSFisKtAJL2S9cdwB7F4-hNbsC0k5k6JEgI_SvED2rcCi8L4-KqWA1L--3KtVOPCD6ws-UT_uvSpcxWDQkTA4X6doFsYIooFldibwSTBbQb6VdToscP87',
    },
    {
      title: 'Renovation Update: The Sanctuary Project',
      excerpt: 'Progress reports on our physical sanctuary upgrades and dedication ceremony.',
      author: 'Pastor John Oladele',
      initials: 'JO',
      date: 'Oct 15, 2023',
      status: 'Published',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB0OH_WJLK3NTHqYwmHTdTT0Yrz-cPrEQ0ByxD1bOEMDl8D7EjGIALkV3oUx9N5lR4gpaHe7L-TkvTrEcqNxBcz1Ym79MDTAsONdNl9FW1i5YmKeZeeuoidf5CMGqKbBsfVvdgfKMaw7OrH5SxdIVNQ1GizLfGrQC8KKdX1ap9GytNFjs3nWkqTzuSNNFEnDTYEpM-bKRApQuuYCPVBLYL7HpLFhDnrFTfgH_-CRbHLxzUlEruZK3Jjp5O0kCJlDScc4ceX_nj1Ay9n',
    },
  ]);

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (!form.title || !form.author) return;

    const initials = form.author
      .split(' ')
      .slice(0, 2)
      .map((n) => n[0]?.toUpperCase() || '')
      .join('');

    setRows((prev) => [
      {
        ...form,
        initials,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
        status: 'Draft',
      },
      ...prev,
    ]);

    setForm({
      title: '',
      author: '',
      excerpt: '',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRekhJOV60boGR62RSEEl5u1opK6DPxroifkEtnyPefe395jZqzk4KqPCgMv-_uvrAL2iBckL4y2qAPPNuiZl6qcC0PJTqibmtg1KkMq8bgntYJ7u-z2pD5BmoqwnRD0gTdn-Fv8Eh_Zhen4uI9kW9rhle4_B5LTXi1Zd22ZSMDnBTAWktUxlvYuXCWLpdsqNSFuT-lwqDO0pQUEpOzN0DDFLeQ2d-KXLUFPnPyyAATfwwF72eZ2LgqwQrkt9xZhFB40toVHhexmDG',
    });
    setPostOpen(false);
  };

  const posts = rows;
  return (
    <>
      <main className="mx-auto max-w-7xl px-4 pb-20 pt-8 md:px-12">
        <header className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="space-y-2">
            <nav className="mb-4 flex items-center text-sm font-medium text-[#5e5e5e]">
              <span>Admin Console</span>
              <span className="material-symbols-outlined mx-2 text-sm">chevron_right</span>
              <span className="text-[#9e2016]">Content Management</span>
            </nav>
            <h1 className="text-5xl font-extrabold tracking-tight text-[#1c1b1b]">Blog & Announcements</h1>
            <p className="max-w-xl text-lg text-[#5e5e5e]">
              Manage the spiritual voice of the church. Draft newsletters, share ministry updates, and announce holy events.
            </p>
          </div>
          <button 
            onClick={() => setPostOpen(true)}
            className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-[#9e2016] to-[#c0392b] px-8 py-4 font-bold text-white shadow-[0_12px_40px_rgba(28,27,27,0.06)] transition-all duration-300 hover:opacity-95"
          >
            <span className="material-symbols-outlined transition-transform group-hover:rotate-90">add</span>
            Create New Post
          </button>
        </header>

        <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="rounded-xl bg-white p-6 shadow-[0_12px_40px_rgba(28,27,27,0.06)]">
            <p className="mb-1 text-sm font-medium text-[#5e5e5e]">Total Posts</p>
            <p className="text-3xl font-bold text-[#1c1b1b]">124</p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-[0_12px_40px_rgba(28,27,27,0.06)]">
            <p className="mb-1 text-sm font-medium text-[#5e5e5e]">Published</p>
            <p className="text-3xl font-bold text-[#9e2016]">89</p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-[0_12px_40px_rgba(28,27,27,0.06)]">
            <p className="mb-1 text-sm font-medium text-[#5e5e5e]">Drafts</p>
            <p className="text-3xl font-bold text-[#5e5e5e]">35</p>
          </div>
          <div className="flex items-center justify-between rounded-xl bg-[#ffdad5] p-6 shadow-[0_12px_40px_rgba(28,27,27,0.06)]">
            <div>
              <p className="mb-1 text-sm font-medium text-[#8e130c]">This Month</p>
              <p className="text-3xl font-bold text-[#9e2016]">+12</p>
            </div>
            <span className="material-symbols-outlined text-4xl text-[#9e2016]/40">trending_up</span>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl bg-[#f6f3f2] shadow-[0_12px_40px_rgba(28,27,27,0.06)]">
          <div className="flex flex-col justify-between gap-4 bg-[#f6f3f2] p-6 md:flex-row md:items-center">
            <div className="relative max-w-md flex-1">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#5e5e5e]">search</span>
              <input
                className="w-full rounded-2xl border-none bg-white py-3 pl-12 pr-4 text-sm transition-all focus:ring-2 focus:ring-[#9e2016]/20"
                placeholder="Search announcements..."
                type="text"
              />
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-[#5e5e5e] transition-colors hover:bg-[#eae7e7]">
                <span className="material-symbols-outlined text-lg">filter_list</span>
                Filter
              </button>
              <button className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-[#5e5e5e] transition-colors hover:bg-[#eae7e7]">
                <span className="material-symbols-outlined text-lg">sort</span>
                Latest
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="text-xs font-bold uppercase tracking-widest text-[#5e5e5e]">
                  <th className="px-8 py-5">Post Details</th>
                  <th className="px-8 py-5">Author</th>
                  <th className="px-8 py-5">Date</th>
                  <th className="px-8 py-5">Status</th>
                  <th className="px-8 py-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e1bfb9]/10">
                {posts.map((post) => (
                  <tr className="group transition-all hover:bg-white" key={post.title}>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl bg-[#e5e2e1]">
                          <img className="h-full w-full object-cover" src={post.image} alt={post.title} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold leading-snug text-[#1c1b1b] transition-colors group-hover:text-[#9e2016]">{post.title}</h3>
                          <p className="line-clamp-1 text-sm text-[#5e5e5e]">{post.excerpt}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                            post.status === 'Draft' ? 'bg-[#e1dfdf] text-[#5e5e5e]' : 'bg-[#ffdad5] text-[#9e2016]'
                          }`}
                        >
                          {post.initials}
                        </div>
                        <span className="text-sm font-medium text-[#1c1b1b]">{post.author}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-sm font-medium text-[#5e5e5e]">{post.date}</td>
                    <td className="px-8 py-6">
                      {post.status === 'Published' ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                          Published
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e5e2e1] px-3 py-1 text-xs font-bold text-[#5e5e5e]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#8d706c]" />
                          Draft
                        </span>
                      )}
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center justify-end gap-2">
                        <button 
                          className="rounded-xl p-2 text-[#5e5e5e] transition-all hover:bg-[#ffdad5] hover:text-[#9e2016]" 
                          title={post.status === 'Draft' ? 'Publish' : 'Unpublish'}
                          onClick={() => {
                            setRows(prev => prev.map(p => p.title === post.title ? { ...p, status: p.status === 'Draft' ? 'Published' : 'Draft' } : p));
                          }}
                        >
                          <span className="material-symbols-outlined">{post.status === 'Draft' ? 'publish' : 'visibility_off'}</span>
                        </button>
                        <button className="rounded-xl p-2 text-[#5e5e5e] transition-all hover:bg-[#e5e2e1] hover:text-[#1c1b1b]" title="Edit">
                          <span className="material-symbols-outlined">edit</span>
                        </button>
                        <button 
                          className="rounded-xl p-2 text-[#5e5e5e] transition-all hover:bg-[#ffdad6] hover:text-[#ba1a1a]" 
                          title="Delete"
                          onClick={() => setRows(prev => prev.filter(p => p.title !== post.title))}
                        >
                          <span className="material-symbols-outlined">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between bg-[#f0eded] p-6">
            <span className="text-sm font-medium text-[#5e5e5e]">Showing 1-10 of 124 posts</span>
            <div className="flex items-center gap-2">
              <button className="rounded-lg p-2 transition-colors hover:bg-[#eae7e7] disabled:opacity-30" disabled>
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="h-8 w-8 rounded-lg bg-[#9e2016] text-sm font-bold text-white">1</button>
              <button className="h-8 w-8 rounded-lg text-sm font-medium transition-colors hover:bg-[#eae7e7]">2</button>
              <button className="h-8 w-8 rounded-lg text-sm font-medium transition-colors hover:bg-[#eae7e7]">3</button>
              <span className="mx-1 text-[#5e5e5e]">...</span>
              <button className="h-8 w-8 rounded-lg text-sm font-medium transition-colors hover:bg-[#eae7e7]">12</button>
              <button className="rounded-lg p-2 transition-colors hover:bg-[#eae7e7]">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      <button 
        onClick={() => setPostOpen(true)}
        className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#9e2016] text-white shadow-2xl transition-transform active:scale-95 md:hidden"
      >
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>

      {/* Create New Post Modal */}
      {postOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl transition-all">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-neutral-100 px-8 py-6">
              <h2 className="text-2xl font-extrabold tracking-tight text-[#1c1b1b]">Create New Post</h2>
              <button className="rounded-full p-2 hover:bg-neutral-100" onClick={() => setPostOpen(false)}>
                <span className="material-symbols-outlined text-[#8d706c]">close</span>
              </button>
            </div>
            {/* Modal Body / Form */}
            <div className="scrollbar-hide max-h-[60vh] overflow-y-auto px-8 py-8">
              <form className="space-y-6" id="post-form" onSubmit={handleCreatePost}>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Post Title */}
                  <div className="space-y-2 md:col-span-2">
                    <label className="ml-1 text-sm font-bold uppercase tracking-wider text-[#5e5e5e]">Post Title</label>
                    <input
                      className="w-full rounded-xl border-none bg-[#f6f3f2] px-4 py-3.5 transition-all focus:bg-white focus:ring-2 focus:ring-[#9e2016]/20"
                      placeholder="e.g. Reflections on the Youth Vigil"
                      required
                      type="text"
                      value={form.title}
                      onChange={(e) => setForm({ ...form, title: e.target.value })}
                    />
                  </div>
                  {/* Author Name */}
                  <div className="space-y-2">
                    <label className="ml-1 text-sm font-bold uppercase tracking-wider text-[#5e5e5e]">Author</label>
                    <input
                      className="w-full rounded-xl border-none bg-[#f6f3f2] px-4 py-3.5 transition-all focus:bg-white focus:ring-2 focus:ring-[#9e2016]/20"
                      placeholder="e.g. Pastor John Oladele"
                      required
                      type="text"
                      value={form.author}
                      onChange={(e) => setForm({ ...form, author: e.target.value })}
                    />
                  </div>
                  {/* Image URL */}
                  <div className="space-y-2">
                    <label className="ml-1 text-sm font-bold uppercase tracking-wider text-[#5e5e5e]">Header Image URL</label>
                    <input
                      className="w-full rounded-xl border-none bg-[#f6f3f2] px-4 py-3.5 transition-all focus:bg-white focus:ring-2 focus:ring-[#9e2016]/20"
                      placeholder="Enter image URL..."
                      type="text"
                      value={form.image}
                      onChange={(e) => setForm({ ...form, image: e.target.value })}
                    />
                  </div>
                </div>
                {/* Excerpt */}
                <div className="space-y-2">
                  <label className="ml-1 text-sm font-bold uppercase tracking-wider text-[#5e5e5e]">Short Excerpt</label>
                  <textarea
                    className="w-full resize-none rounded-xl border-none bg-[#f6f3f2] px-4 py-3.5 transition-all focus:bg-white focus:ring-2 focus:ring-[#9e2016]/20"
                    placeholder="Provide a brief summary for the dashboard..."
                    rows={3}
                    value={form.excerpt}
                    required
                    onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                  />
                </div>
              </form>
            </div>
            {/* Modal Footer */}
            <div className="flex flex-col gap-3 bg-[#f6f3f2]/50 px-8 py-6 md:flex-row">
              <button
                className="flex-1 rounded-2xl bg-[#c0392b] py-4 text-lg font-extrabold text-white shadow-xl shadow-red-900/20 transition-all active:scale-95"
                form="post-form"
                type="submit"
              >
                Save as Draft
              </button>
              <button className="px-8 py-4 font-bold text-[#5e5e5e] transition-colors hover:text-[#1c1b1b]" onClick={() => setPostOpen(false)} type="button">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
