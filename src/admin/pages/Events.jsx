import { useState } from 'react';

export default function Events() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="pb-12 px-4 sm:px-8 max-w-screen-2xl mx-auto">
      {/* Hero Section */}
      <header className="mb-10 flex flex-col md:flex-row justify-between items-end gap-6 pt-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-[#1c1b1b] mb-2 font-headline">Events Management</h1>
          <p className="text-[#5e5e5e] body-md font-body">Manage your congregational gatherings, track attendance, and schedule future spiritual sessions in one central sanctuary.</p>
        </div>
        <div className="flex gap-3">
          <div className="flex -space-x-3">
            <div className="w-10 h-10 rounded-full border-2 border-white bg-[#e5e1e1] flex items-center justify-center text-xs font-bold">+12</div>
          </div>
        </div>
      </header>

      {/* Stat Cards Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* Total Events */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 flex flex-col justify-between group hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 rounded-xl bg-[#ffdad5] text-[#9e2016]">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>list_alt</span>
            </div>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">+2 this mo.</span>
          </div>
          <div>
            <h3 className="text-[#5e5e5e] text-sm mb-1 font-medium font-body">Total Events</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-[#1c1b1b] tracking-tighter font-headline">24</span>
            </div>
            <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-neutral-100">
              <div className="h-full bg-blue-500" style={{ width: '60%' }} />
            </div>
          </div>
        </div>

        {/* Upcoming This Month */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 flex flex-col justify-between group hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 rounded-xl bg-blue-100 text-blue-800">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_month</span>
            </div>
            <span className="text-xs font-bold text-[#5e5e5e] bg-neutral-100 px-2 py-1 rounded-full">Active</span>
          </div>
          <div>
            <h3 className="text-[#5e5e5e] text-sm mb-1 font-medium font-body">Upcoming This Month</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-[#1c1b1b] tracking-tighter font-headline">08</span>
              <span className="text-sm text-[#5e5e5e]">next 30 days</span>
            </div>
            <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-neutral-100">
              <div className="h-full bg-indigo-500" style={{ width: '45%' }} />
            </div>
          </div>
        </div>

        {/* Attendance Rate */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 flex flex-col justify-between group hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 rounded-xl bg-orange-100 text-orange-800">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
            </div>
          </div>
          <div>
            <h3 className="text-[#5e5e5e] text-sm mb-1 font-medium font-body">Attendance Rate</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-[#1c1b1b] tracking-tighter font-headline">82%</span>
              <span className="text-sm text-[#5e5e5e]">avg. weekly</span>
            </div>
            <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-neutral-100">
              <div className="h-full bg-orange-500" style={{ width: '82%' }} />
            </div>
          </div>
        </div>

        {/* Pending Registrations */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 flex flex-col justify-between group hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 rounded-xl bg-purple-100 text-purple-800">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>person_add</span>
            </div>
            <span className="animate-pulse flex h-2 w-2 rounded-full bg-[#9e2016]"></span>
          </div>
          <div>
            <h3 className="text-[#5e5e5e] text-sm mb-1 font-medium font-body">Pending Registrations</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-[#9e2016] tracking-tighter font-headline">45</span>
              <span className="text-sm text-[#5e5e5e]">new entries</span>
            </div>
            <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-neutral-100">
              <div className="h-full bg-rose-500" style={{ width: '75%' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area: Two Columns */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Recent Events Feed */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden">
          <div className="p-8 border-b border-neutral-100 flex justify-between items-center bg-white">
            <h2 className="text-xl font-bold tracking-tight font-headline">Recent Events Feed</h2>
            <button className="text-[#9e2016] text-sm font-bold flex items-center gap-1 hover:underline">
              View All Activity <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
          <div className="flex flex-col">
            {/* Event Activity Item 1 */}
            <div className="p-6 flex items-start gap-6 hover:bg-neutral-50 transition-colors border-b border-neutral-100/50">
              <div className="w-12 h-12 rounded-full bg-[#ffdad5] flex items-center justify-center flex-shrink-0 text-[#9e2016]">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>celebration</span>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-1">
                  <p className="text-[#1c1b1b] font-medium font-body"><span className="font-bold">Annual Worship & Praise Night</span> scheduled for Oct 24.</p>
                  <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full uppercase tracking-widest">Upcoming</span>
                </div>
                <p className="text-[#5e5e5e] text-sm mb-3">Main Sanctuary • 06:00 PM. Join us for an unforgettable evening of divine presence.</p>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-[#5e5e5e] bg-neutral-100 px-2 py-0.5 rounded">Created 2 hours ago</span>
                  <button className="text-xs font-bold text-[#9e2016] flex items-center gap-1">Manage Registry</button>
                </div>
              </div>
            </div>

            {/* Event Activity Item 2 */}
            <div className="p-6 flex items-start gap-6 hover:bg-neutral-50 transition-colors border-b border-neutral-100/50">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-700">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-1">
                  <p className="text-[#1c1b1b] font-medium font-body"><span className="font-bold">Youth Empowerment Summit</span> details updated.</p>
                  <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full uppercase tracking-widest">Confirmed</span>
                </div>
                <p className="text-[#5e5e5e] text-sm mb-3">Conference Hall B • Nov 02. Developing the next generation of spiritual leaders.</p>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-[#5e5e5e] bg-neutral-100 px-2 py-0.5 rounded">Updated 1 hour ago</span>
                  <button className="text-xs font-bold text-[#9e2016] flex items-center gap-1">Edit Details</button>
                </div>
              </div>
            </div>

            {/* Event Activity Item 3 */}
            <div className="p-6 flex items-start gap-6 hover:bg-neutral-50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 text-orange-700">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>done_all</span>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-1">
                  <p className="text-[#1c1b1b] font-medium font-body"><span className="font-bold">Community Outreach Picnic</span> successfully completed.</p>
                  <span className="text-[10px] font-bold text-[#5e5e5e] bg-neutral-100 px-2 py-1 rounded-full uppercase tracking-widest">Past</span>
                </div>
                <p className="text-[#5e5e5e] text-sm mb-3">Community Park • Oct 05. A wonderful afternoon of fellowship and food.</p>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-[#5e5e5e] bg-neutral-100 px-2 py-0.5 rounded">4 hours ago</span>
                  <button className="text-xs font-bold text-[#9e2016] flex items-center gap-1">View Analytics</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {/* Quick Actions Card */}
          <div className="bg-[#9e2016] text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-4 leading-tight font-headline">Quick Actions</h3>
              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-white/10 hover:bg-white/20 transition-colors py-3 px-4 rounded-xl flex items-center justify-between text-sm font-bold"
                >
                  Create New Event
                  <span className="material-symbols-outlined">add_circle</span>
                </button>
                <button className="w-full bg-white/10 hover:bg-white/20 transition-colors py-3 px-4 rounded-xl flex items-center justify-between text-sm font-bold">
                  Upload Event Media
                  <span className="material-symbols-outlined">cloud_upload</span>
                </button>
                <button className="w-full bg-white text-[#9e2016] py-3 px-4 rounded-xl flex items-center justify-between text-sm font-extrabold shadow-sm">
                  Export Attendance
                  <span className="material-symbols-outlined">download_2</span>
                </button>
              </div>
            </div>
            <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl opacity-10 rotate-12" style={{ fontVariationSettings: "'FILL' 1" }}>event</span>
          </div>

          {/* Ministry Resources */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100">
            <h3 className="text-[#1c1b1b] font-bold mb-3 font-headline">Ministry Resources</h3>
            <p className="text-[#5e5e5e] text-sm mb-6 font-body">Learn how to manage recurrences and attendee registration for specialized church events.</p>
            <button className="w-full border-2 border-[#9e2016] text-[#9e2016] font-bold py-2.5 rounded-xl hover:bg-[#9e2016]/5 transition-colors">
              View Tutorial
            </button>
          </div>
        </div>
      </section>

      {/* Add Event Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl relative overflow-hidden">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-[#1c1b1b] font-headline">Add Event</h2>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-[#59413d] hover:text-[#1c1b1b] transition-colors"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-4">
                  <div className="bg-neutral-50 rounded-2xl px-5 py-4 flex flex-col border border-transparent focus-within:border-[#9e2016]/20 transition-all">
                    <label className="text-[10px] font-bold text-[#59413d] uppercase tracking-widest mb-1 font-body">Event Title</label>
                    <input className="bg-transparent border-none p-0 focus:ring-0 text-[#1c1b1b] font-medium placeholder:text-[#59413d]/40" placeholder="Worship Night, Picnic, etc." required type="text" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-neutral-50 rounded-2xl px-5 py-4 flex flex-col border border-transparent focus-within:border-[#9e2016]/20 transition-all">
                      <label className="text-[10px] font-bold text-[#59413d] uppercase tracking-widest mb-1 font-body">Date</label>
                      <input className="bg-transparent border-none p-0 focus:ring-0 text-[#1c1b1b] font-medium" required type="date" />
                    </div>
                    <div className="bg-neutral-50 rounded-2xl px-5 py-4 flex flex-col border border-transparent focus-within:border-[#9e2016]/20 transition-all">
                      <label className="text-[10px] font-bold text-[#59413d] uppercase tracking-widest mb-1 font-body">Time</label>
                      <input className="bg-transparent border-none p-0 focus:ring-0 text-[#1c1b1b] font-medium" required type="time" />
                    </div>
                  </div>
                  <div className="bg-neutral-50 rounded-2xl px-5 py-4 flex flex-col border border-transparent focus-within:border-[#9e2016]/20 transition-all">
                    <label className="text-[10px] font-bold text-[#59413d] uppercase tracking-widest mb-1 font-body">Location</label>
                    <input className="bg-transparent border-none p-0 focus:ring-0 text-[#1c1b1b] font-medium placeholder:text-[#59413d]/40" placeholder="e.g. Main Sanctuary" required type="text" />
                  </div>
                  <div className="bg-neutral-50 rounded-2xl px-5 py-4 flex flex-col border border-transparent focus-within:border-[#9e2016]/20 transition-all">
                    <label className="text-[10px] font-bold text-[#59413d] uppercase tracking-widest mb-1 font-body">Description</label>
                    <textarea className="bg-transparent border-none p-0 focus:ring-0 text-[#1c1b1b] font-medium placeholder:text-[#59413d]/40 resize-none" placeholder="Tell us more about the event..." rows="3"></textarea>
                  </div>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-[#9e2016] text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:opacity-90 transition-opacity mt-4 font-headline"
                >
                  Save Event
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button 
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#9e2016] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all z-40"
      >
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>
    </main>
  );
}
