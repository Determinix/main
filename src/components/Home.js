import Hina from "./img/logo/Hina.png";

export default function Home() {
  return (
    <div className="relative lg:px-36 2xl:px-80 px-5 bg-gray-700 py-56 mb-96 grid place-items-center">
      <img src={Hina} className="opacity-10 absolute bottom-0 right-48" alt="hina" />
      <h1 className="text-[58px] font-bold text-[#ff2c2c]">DETERMINIX</h1>
      <h1 className="text-white text-3xl pt-3">A team to study and work in the field of programmers. </h1>
      <a className="bg-slate-100 px-5 py-3 text-2xl hover:bg-slate-400 mt-10 relative" href="https://reactjs.org/" target={"_blank"}>
        Contact Us
      </a>
    </div>
  );
}
