import { useNavigate } from "react-router-dom";
import DXlogo3 from "./img/logo/DX-logo-3.png";

export default function Navbar() {
  const navigate = useNavigate();
  const project1 = () => navigate("project");
  const project2 = () => alert("project");
  return (
    <nav className="fixed z-50 w-full">
      <div className="flex justify-between items-center px bg-[#131313] opacity-90 relative">
        <div>
          <img src={DXlogo3} alt="dxlogo" width="85" className="p-3 my-2" />
        </div>
        {/* desktop */}
        <div className="sm:flex gap-10 text-slate-50 px-3 text-xl items-center hidden">
          <button onClick={() => navigate("main")} className="hover:text-slate-300">
            Home
          </button>
          <button
            onClick={() => {
              project1();
              project2();
            }}
            className="hover:text-slate-300"
          >
            Project
          </button>
          <button onClick={() => navigate("about")} className="hover:text-slate-300">
            About
          </button>
        </div>

        {/* mobile */}
        <div className="gap-3 py-2 rounded-md text-slate-50 px-3 text-xl items-center sm:hidden absolute bg-slate-600 right-3 top-24 hidden" id="nav">
          <button onClick={() => navigate("main")} className="block pb-1">
            Home
          </button>
          <button onClick={() => navigate("project")} className="block pb-1">
            Project
          </button>
          <button onClick={() => navigate("about")} className="block">
            About
          </button>
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
    </nav>
  );
}
