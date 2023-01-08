import Agung from "./img/profile/Agung.jpg";

export default function Agent() {
  return (
    <div>
      <h1 className="pt-20 font-bold text-slate-900 text-4xl text-center">DX AGENTS</h1>
      <div className="mx-auto w-[285px] h-[200px] shadow-2xl bg-slate-300">
        <div className="flex items-center justify-between p-3">
          <img src={Agung} alt="Agung" className="w-[100px] h-[100px]" />
          <div>
            <h1 className="text-xl text-center">Agung Saputra</h1>
            <div className="w-[150px] h-[2px] bg-slate-900 mx-auto mt-[3px]"></div>
            <h1 className="text-xl text-center">President</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
