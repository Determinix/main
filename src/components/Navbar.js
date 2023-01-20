import { Link } from "react-router-dom";
import DXlogo2 from "./img/logo/DX-logo-2.png";

export default function Navbar() {
  return (
    <nav className="fixed z-50 w-full">
      <div className="flex justify-between items-center lg:px-16 xl:px-48 bg-[#71C9CE] relative">
        <div>
          <img src={DXlogo2} alt="dxlogo" width="85" />
        </div>
        {/* desktop */}
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
          className="grid gap-[6px] mx-3 sm:hidden"
          onClick={function navMobile() {
            const nav = document.querySelector("#nav");
            nav.classList.toggle("hidden");
          }}
        >
          <div className="bg-slate-200 w-[40px] h-[10px]"></div>
          <div className="ml-[15px] bg-slate-100 w-[25px] h-[10px]"></div>
        </div>
      </div>
      <div className="h-[6px] bg-yellow-400"></div>
    </nav>
  );
}
