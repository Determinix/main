import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-between px-32">
      <div>
        <h1 className="text-slate-100 text-xl font-bold">DETERMINIX</h1>
      </div>
      <div>
        <Link to="/" className="px-3">
          home
        </Link>
        <Link to="/Project" className="px-3">
          project
        </Link>
        <Link to="/Agent" className="px-3">
          agent
        </Link>
      </div>
    </div>
  );
}
