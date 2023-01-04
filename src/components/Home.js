import Aris from "./img/logo/Aris.png";

export default function Home() {
  return (
    <div className="px-80">
      <div className=" py-32 flex justify-between items-center">
        <div>
          <h1 className="text-5xl font-bold text-slate-900">DETERMINIX</h1>
          <h1 className="text-xl font-bold text-slate-500">What Is Determinix?</h1>
          <span className="text-xl py-2">Determinix is ​a team that works in:</span>
          <ul className="list-disc text-xl pl-10">
            <li>Website Developer</li>
            <li>Software Developer (Coming Soon)</li>
            <li>Game Developer (Coming Soon)</li>
          </ul>
          <button className="relative z-20 mt-5 px-[74px] py-[23px] text-xl border-2 border-slate-900 rounded-[4px]">
            <div className="absolute  -z-20 top-2 -right-4 px-5 py-3 bg-[#71C9CE] rounded-[4px] text-slate-50 hover:bg-[#41888c]">Contact Now</div>
          </button>
        </div>
        <div>
          <div className="relative bg-[#71C9CE] w-[455px] h-[257px] rounded-lg shadow-xl">
            <img src={Aris} width="450" className="absolute -right-3 top-[14px] rounded-lg" />
          </div>
        </div>
      </div>
      <div className="mx-auto w-[600px] text-center bg-[#71C9CE] text-slate-50 mt-32">
        <h1 className="text-3xl font-bold pt-10">Achievement</h1>
        <h1 className="text-[100px] py-10">0</h1>
      </div>
    </div>
  );
}
