export default function Modal({ open, title, children, onClose }) {
  if (!open) return null;
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4"><div className="w-full max-w-lg rounded-2xl bg-white p-6"><div className="mb-4 flex items-center justify-between"><h3 className="text-xl font-bold">{title}</h3><button onClick={onClose}>?</button></div>{children}</div></div>;
}
