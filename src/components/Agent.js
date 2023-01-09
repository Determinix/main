import Agung from "./img/profile/Agung.jpg";

export default function Agent() {
  return (
    <div className="lg:mx-40 pb-32 pt-24">
      <h1 className="pt-20 pb-14 font-bold text-slate-900 text-4xl text-center">DX AGENTS</h1>

      <div id="sosmed" className="flex justify-center items-center mb-8 mx-[420px] border-2 border-yellow-200 rounded-2xl text-slate-500">
        <h1 className="pr-3 text-xl">tap the card to open social media</h1>
        <button
          className="font-bold text-2xl"
          onClick={function hide() {
            const sosmed = document.querySelector("#sosmed");
            sosmed.style.display = "none";
          }}
        >
          x
        </button>
      </div>

      <div className="flex justify-between items-center">
        <a href="https://www.instagram.com/difhaels/?hl=id" target={"_blank"} className="w-[285px] h-[180px] shadow-2xl bg-slate-300">
          <div className="flex items-center justify-between p-3">
            <img src={Agung} alt="Agung" className="w-[100px] h-[100px]" />
            <div>
              <h1 className="text-xl text-center">Agung Saputra</h1>
              <div className="w-[150px] h-[2px] bg-slate-900 mx-auto mt-[3px]"></div>
              <h1 className="text-xl text-center">President</h1>
            </div>
          </div>
          <div>Title here</div>
        </a>

        <div href="#" target={"_blank"} className="w-[285px] h-[180px] shadow-2xl bg-slate-300">
          <div className="flex items-center justify-between p-3">
            <img alt="???" className="w-[100px] h-[100px]" />
            <div>
              <h1 className="text-xl text-center">A**C**</h1>
              <div className="w-[150px] h-[2px] bg-slate-900 mx-auto mt-[3px]"></div>
              <h1 className="text-xl text-center">******</h1>
            </div>
          </div>
          <div>Title here</div>
        </div>

        <div href="#" target={"_blank"} className="w-[285px] h-[180px] shadow-2xl bg-slate-300">
          <div className="flex items-center justify-between p-3">
            <img alt="???" className="w-[100px] h-[100px]" />
            <div>
              <h1 className="text-xl text-center">S**A**</h1>
              <div className="w-[150px] h-[2px] bg-slate-900 mx-auto mt-[3px]"></div>
              <h1 className="text-xl text-center">******</h1>
            </div>
          </div>
          <div>Title here</div>
        </div>

        <div href="#" target={"_blank"} className="w-[285px] h-[180px] shadow-2xl bg-slate-300">
          <div className="flex items-center justify-between p-3">
            <img alt="???" className="w-[100px] h-[100px]" />
            <div>
              <h1 className="text-xl text-center">D**R**</h1>
              <div className="w-[150px] h-[2px] bg-slate-900 mx-auto mt-[3px]"></div>
              <h1 className="text-xl text-center">******</h1>
            </div>
          </div>
          <div>Title here</div>
        </div>
      </div>

      <div href="#" target={"_blank"} className="flex justify-between items-center pt-5">
        <div className="w-[285px] h-[180px] shadow-2xl bg-slate-300">
          <div className="flex items-center justify-between p-3">
            <img alt="???" className="w-[100px] h-[100px]" />
            <div>
              <h1 className="text-xl text-center">K**S**</h1>
              <div className="w-[150px] h-[2px] bg-slate-900 mx-auto mt-[3px]"></div>
              <h1 className="text-xl text-center">******</h1>
            </div>
          </div>
          <div>Title here</div>
        </div>

        <div href="#" target={"_blank"} className="w-[285px] h-[180px] shadow-2xl bg-slate-300">
          <div className="flex items-center justify-between p-3">
            <img alt="???" className="w-[100px] h-[100px]" />
            <div>
              <h1 className="text-xl text-center">W**H**</h1>
              <div className="w-[150px] h-[2px] bg-slate-900 mx-auto mt-[3px]"></div>
              <h1 className="text-xl text-center">******</h1>
            </div>
          </div>
          <div>Title here</div>
        </div>

        <div href="#" target={"_blank"} className="w-[285px] h-[180px] shadow-2xl bg-slate-300">
          <div className="flex items-center justify-between p-3">
            <img alt="???" className="w-[100px] h-[100px]" />
            <div>
              <h1 className="text-xl text-center">B**M**</h1>
              <div className="w-[150px] h-[2px] bg-slate-900 mx-auto mt-[3px]"></div>
              <h1 className="text-xl text-center">******</h1>
            </div>
          </div>
          <div>Title here</div>
        </div>

        <div href="#" target={"_blank"} className="w-[285px] h-[180px] shadow-2xl bg-slate-300">
          <div className="flex items-center justify-between p-3">
            <img alt="???" className="w-[100px] h-[100px]" />
            <div>
              <h1 className="text-xl text-center">A**S**</h1>
              <div className="w-[150px] h-[2px] bg-slate-900 mx-auto mt-[3px]"></div>
              <h1 className="text-xl text-center">******</h1>
            </div>
          </div>
          <div>Title here</div>
        </div>
      </div>
    </div>
  );
}
