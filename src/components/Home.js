import Aris from "./img/logo/Aris.png";

export default function Home() {
  return (
    <div className="px-80 py-20 flex justify-between items-center">
      <div>
        <h1 className="text-5xl font-bold text-slate-900">DETERMINIX</h1>
        <h1 className="text-xl font-bold text-slate-500">What Is Determinix?</h1>
        <span className="text-xl py-2">Determinix is ​a team that works in:</span>
        <ul className="list-disc text-xl pl-10">
          <li>Website Developer</li>
          <li>Software Developer (Coming Soon)</li>
          <li>Game Developer (Coming Soon)</li>
        </ul>
        <button className="bg-[#71C9CE] px-5 py-2 text-xl text-slate-100 my-5 shadow-md rounded-xl hover:bg-[#8af6fc]">Contact Now</button>
      </div>
      <div>
        <img src={Aris} width="500" className="rounded-xl shadow-lg shadow-[#71C9CE]" />
      </div>
    </div>
  );
}
