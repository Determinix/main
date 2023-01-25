import { Link } from "react-router-dom";
import DXlogo3 from "./img/logo/DX-logo-3.png";

export default function Navbar() {
  return (
    <nav className="fixed z-50 w-full">
      <div className="flex justify-between items-center px bg-slate-800 relative">
        <div>
          <img src={DXlogo3} alt="dxlogo" width="85" className="py-3 my-2" />
        </div>
        {/* desktop */}
        <div className="sm:flex gap-10 text-slate-50 px-3 text-xl items-center hidden">
          <Link
            className="hover:text-slate-300"
            to="/"
            onClick={function hide() {
              const home = document.querySelector("#home");
              home.style.display = "none";
            }}
          >
            Home
          </Link>
          <Link
            className="hover:text-slate-300"
            to="/Project"
            onClick={function hide() {
              const home = document.querySelector("#home");
              home.style.display = "none";
            }}
          >
            Project
          </Link>
          <Link
            className="hover:text-slate-300"
            to="/Agent"
            onClick={function hide() {
              const home = document.querySelector("#home");
              home.style.display = "none";
            }}
          >
            Agent
          </Link>
        </div>

        {/* mobile */}
        <div className="gap-3 py-2 rounded-md text-slate-50 px-3 text-xl items-center sm:hidden absolute bg-slate-600 right-3 top-24 hidden" id="nav">
          <Link
            to="/"
            onClick={function hide() {
              const home = document.querySelector("#home");
              home.style.display = "none";
            }}
            className="block pb-1"
          >
            Home
          </Link>
          <Link
            to="/Project"
            onClick={function hide() {
              const home = document.querySelector("#home");
              home.style.display = "none";
            }}
            className="block pb-1"
          >
            Project
          </Link>
          <Link
            to="/Agent"
            onClick={function hide() {
              const home = document.querySelector("#home");
              home.style.display = "none";
            }}
            className="block"
          >
            Agent
          </Link>
        </div>
        <div
          className="grid gap-[6px] sm:hidden"
          onClick={function navMobile() {
            const nav = document.querySelector("#nav");
            nav.classList.toggle("hidden");
          }}
        >
          <div className="bg-slate-100 w-[40px] h-[10px]"></div>
          <div className="ml-[15px] bg-slate-50 w-[25px] h-[10px]"></div>
        </div>
      </div>
      {/* <div className="h-[6px] bg-yellow-400"></div> */}
    </nav>
  );
}
