export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-blue-400">
      <div className="m-auto bg-slate-50 rounded-md w-3/5 h-3/4">
        <div className="text-center">{children}</div>
      </div>
    </div>
  );
}
