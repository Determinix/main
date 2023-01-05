import Aris from "./img/logo/Aris.png";

export default function Home() {
  return (
    <div className="relative px-80">
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
      <div className="relative mx-auto w-[900px] text-center bg-[#71C9CE] mt-32 rounded-t-2xl pb-[1000px] z-20">
        <div className="absolute -top-10 left-[220px] text-3xl font-bold bg-slate-100 w-[50%] rounded-xl py-5 border-4 border-[#2bc2ca] shadow-lg z-10">Preview Project</div>
        <div className="absolute top-[120px] -left-10 w-[600px] h-[320px] bg-slate-300 rounded-xl shadow-xl ">
          Main Preview Here
          <div className="absolute w-[400px] py-5 left-10 -bottom-10 bg-yellow-400 text-slate-50 text-4xl rounded-xl">WEBSITE PROJECT</div>
        </div>
        <div className="absolute top-[90px] -right-10 w-[320px] h-[180px] bg-slate-300 rounded-xl shadow-xl">
          Cool Preview Here
          <div className="absolute w-[90px] py-2 right-10 -bottom-2 bg-yellow-400 text-slate-50 text-xl rounded-xl">Cool</div>
        </div>
        <div className="absolute top-[310px] right-20 w-[170px] h-[270px] bg-slate-300 rounded-xl shadow-xl">
          Mobile Preview Here
          <div className="absolute w-[140px] py-2 -right-16 bottom-7 bg-yellow-400 text-slate-50 text-xl rounded-xl">Responsive</div>
        </div>
      </div>
    </div>
  );
}
