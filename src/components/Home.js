import Aris from "./img/logo/Aris.png";
import Tilt from "react-tilt";

export default function Home() {
  return (
    <div className="relative sm:px-80 px-5 pt-48">
      <div className=" pb-32 sm:flex justify-between items-center place-items-center">
        <div className="mb-24 sm:mb-0">
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
          <div className="relative bg-[#71C9CE] w-[335px] h-[190px] sm:w-[455px] sm:h-[257px] rounded-lg shadow-xl">
            <img src={Aris} alt="aris maskot sementara" className="absolute -right-3 top-[14px] rounded-lg z-20 w-[330px] sm:w-[450px]" />
            <div className="absolute bg-yellow-400 w-[335px] h-[190px] sm:w-[455px] sm:h-[257px] rounded-lg shadow-xl z-10 -right-7 top-[27px]"></div>
          </div>
        </div>
      </div>
      <div className="relative mx-auto w-[900px] text-center bg-[#71C9CE] mt-32 rounded-t-2xl pb-[630px] z-20 hidden sm:flex">
        <div className="absolute -top-10 left-[220px] text-3xl font-bold bg-slate-100 w-[50%] rounded-xl py-5 border-4 border-[#2bc2ca] shadow-lg z-10">Preview Project</div>
        <Tilt className="absolute top-[120px] -left-10 w-[600px] h-[320px] bg-slate-300 rounded-xl shadow-xl ">
          Main Preview Here
          <div className="absolute w-[400px] py-5 left-10 -bottom-10 bg-yellow-400 text-slate-50 text-4xl rounded-xl">WEBSITE PROJECT</div>
        </Tilt>
        <Tilt className="absolute top-[90px] -right-10 w-[320px] h-[180px] bg-slate-300 rounded-xl shadow-xl">
          Cool Preview Here
          <div className="absolute w-[90px] py-2 right-10 -bottom-2 bg-yellow-400 text-slate-50 text-xl rounded-xl">Cool</div>
        </Tilt>
        <Tilt className="absolute top-[310px] right-20 w-[170px] h-[270px] bg-slate-300 rounded-xl shadow-xl">
          Mobile Preview Here
          <div className="absolute w-[140px] py-2 -right-16 bottom-7 bg-yellow-400 text-slate-50 text-xl rounded-xl">Responsive</div>
        </Tilt>
      </div>
    </div>
  );
}
