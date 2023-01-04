import { Link } from "react-router-dom";
import DXlogo2 from "./img/logo/DX-logo-2.png";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-48 py-5 bg-[#DBE2EF]">
      <div>
        <img src={DXlogo2} width="85" />
      </div>
      <div className="flex gap-10 text-slate-900 text-xl">
        <Link to="/">Home</Link>
        <Link to="/Project">Project</Link>
        <Link to="/Agent">Agent</Link>
      </div>
    </nav>
  );
}
