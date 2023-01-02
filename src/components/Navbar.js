import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-32 py-5 bg-[#00ADB5]">
      <div>
        <h1 className="text-slate-900 text-3xl font-bold"> DETERMINIX</h1>
      </div>
      <div className="flex gap-10 text-slate-900 text-xl">
        <Link to="/">home</Link>
        <Link to="/Project">project</Link>
        <Link to="/Agent">agent</Link>
      </div>
    </nav>
  );
}
