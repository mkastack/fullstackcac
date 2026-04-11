export default function PageWrapper({ title, description, children }) {
  return <main className="mx-auto w-full max-w-screen-2xl px-4 py-8 sm:px-8"><h1 className="text-4xl font-extrabold text-[#1c1b1b]">{title}</h1><p className="mt-2 text-[#5e5e5e]">{description}</p><div className="mt-8">{children}</div></main>;
}
