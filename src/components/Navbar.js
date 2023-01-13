import { Link } from "react-router-dom";
import DXlogo2 from "./img/logo/DX-logo-2.png";

export default function Navbar() {
  return (
    <nav className="fixed z-50 w-[380px] sm:w-full">
      <div className="flex justify-between items-center px-0 sm:px-48 bg-[#71C9CE]">
        <div>
          <img src={DXlogo2} alt="dxlogo" width="85" />
        </div>
        <div className="flex gap-10 text-slate-50 px-3 text-xl">
          <Link
            to="/"
            onClick={function hide() {
              const home = document.querySelector("#home");
              home.style.display = "none";
            }}
          >
            Home
          </Link>
          <Link
            to="/Project"
            onClick={function hide() {
              const home = document.querySelector("#home");
              home.style.display = "none";
            }}
          >
            Project
          </Link>
          <Link
            to="/Agent"
            onClick={function hide() {
              const home = document.querySelector("#home");
              home.style.display = "none";
            }}
          >
            Agent
          </Link>
        </div>
      </div>
      <div className="h-[6px] bg-yellow-400"></div>
    </nav>
  );
}
