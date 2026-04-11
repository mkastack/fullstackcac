import { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import churchLogo from '../images/church-logo.png';

const links = [
  ['Home', '/admin/dashboard'],
  ['About', '/admin/members'],
  ['Sermons', '/admin/sermons'],
  ['Events', '/admin/events'],
  ['Ministries', '/admin/ministries'],
  ['Prayer', '/admin/prayer'],
  ['Blog', '/admin/blog'],
  ['Give', '/admin/donations'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add any logout logic here if needed
    setProfileOpen(false);
    navigate('/admin');
  };

  return (
    <header className="sticky top-0 z-50 bg-[#fcf9f8]/80 backdrop-blur-md shadow-[0_12px_40px_rgba(28,27,27,0.06)]">
      <div className="mx-auto flex h-16 w-full max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-white shadow-sm border border-neutral-100">
            <img src={churchLogo} alt="CAC Logo" className="h-full w-full object-contain p-1" />
          </div>
          <div className="leading-tight">
            <p className="font-bold text-[#1c1b1b] text-sm md:text-base">Christ Apostolic</p>
            <p className="text-[10px] font-bold tracking-[0.2em] text-[#5e5e5e] uppercase">CHURCH ADMIN</p>
          </div>
        </div>

        <nav className="hidden flex-wrap items-center gap-1 lg:flex">
          {links.map(([name, to]) => (
            <NavLink
              key={name}
              to={to}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "text-[#9e2016] font-bold after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-10 after:-translate-x-1/2 after:rounded-full after:bg-[#9e2016]"
                    : 'text-neutral-700 hover:text-[#9e2016]'
                }`
              }
            >
              {name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Notifications */}
          <button className="relative rounded-full p-2 text-neutral-600 hover:bg-neutral-100 transition-colors">
            <span className="text-xl">🔔</span>
            <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9e2016]"></span>
            </span>
          </button>

          <button
            onClick={() => setDark(!dark)}
            className="rounded-full p-2 text-black hover:bg-neutral-100 transition-colors"
            aria-label="Toggle mode"
          >
            {dark ? '☀' : '◖'}
          </button>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border-2 border-[#9e2016]/20 bg-white shadow-sm hover:border-[#9e2016]/40 transition-all focus:outline-none"
            >
              <img src={churchLogo} alt="Profile" className="h-full w-full object-cover p-1" />
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-2xl bg-white p-2 shadow-xl ring-1 ring-black/5 focus:outline-none z-[60]">
                <div className="px-3 py-2 border-b border-neutral-100 mb-1">
                  <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Administrator</p>
                  <p className="text-sm font-bold text-[#1c1b1b] truncate">admin@cacbubiashie.org</p>
                </div>
                <button
                  onClick={() => {
                    setProfileOpen(false);
                    // Navigate to settings if you have one
                  }}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-[#f6f3f2] transition-colors"
                >
                  <span className="text-lg">⚙</span> Settings
                </button>
                <button
                  onClick={handleLogout}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-bold text-[#9e2016] hover:bg-red-50 transition-colors"
                >
                  <span className="text-lg">➔</span> Logout
                </button>
              </div>
            )}
          </div>

          <button className="rounded-md p-2 lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">☰</button>
        </div>
      </div>
      {open && (
        <nav className="space-y-1 bg-[#f6f3f2] px-4 py-3 lg:hidden">
          {links.map(([name, to]) => (
            <NavLink
              key={name}
              to={to}
              className="block rounded-lg px-3 py-2 text-sm text-neutral-700"
              onClick={() => setOpen(false)}
            >
              {name}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
