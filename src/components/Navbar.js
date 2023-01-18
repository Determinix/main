import { Link } from "react-router-dom";
import DXlogo2 from "./img/logo/DX-logo-2.png";

export default function Navbar() {
  return (
    <nav className="fixed z-50 w-full">
      <div className="flex justify-between items-center sm:px-48 bg-[#71C9CE]">
        <div>
          <img src={DXlogo2} alt="dxlogo" width="85" />
        </div>
        <div className="sm:flex gap-10 text-slate-50 px-3 text-xl items-center hidden">
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
        <div className="grid gap-[6px] mx-3 sm:hidden">
          <div className="bg-slate-200 w-[40px] h-[10px]"></div>
          <div className="ml-[15px] bg-slate-100 w-[25px] h-[10px]"></div>
        </div>
      </div>
      <div className="h-[6px] bg-yellow-400"></div>
    </nav>
  );
}
