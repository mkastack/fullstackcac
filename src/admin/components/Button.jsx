export default function Button({ children, variant = 'primary', ...props }) {
  const variants = {
    primary: 'bg-gradient-to-r from-[#9e2016] to-[#c0392b] text-white shadow-[0_12px_40px_rgba(28,27,27,0.06)] hover:opacity-95',
    secondary: 'bg-[#eae7e7] text-[#9e2016] hover:bg-[#e5e2e1]',
    danger: 'bg-[#ba1a1a] text-white hover:bg-red-800',
  };
  return <button className={`rounded-full px-5 py-2.5 font-bold transition ${variants[variant]}`} {...props}>{children}</button>;
}
