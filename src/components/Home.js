import Hina from "./img/logo/Hina.png";

export default function Home() {
  return (
    <div className=" ">
      <div className="relative px-5 bg-gray-700 py-56 grid place-items-center">
        <img src={Hina} className="opacity-10 absolute bottom-0 xl:right-32 2xl:right-48" alt="hina" />
        <h1 className="text-[58px] font-bold text-[#ff2c2c]">DETERMINIX</h1>
        <h1 className="text-white text-3xl pt-3">A team to study and work in the field of programmers. </h1>
        <a className="bg-slate-100 px-5 py-3 text-2xl hover:bg-slate-400 mt-10 relative" href="https://reactjs.org/" target={"_blank"} rel="noreferrer">
          Contact Us
        </a>
      </div>
      <div className="px grid grid-cols-3 gap-16 text-xl my-28">
        <span className="text-justify">
          <h1 className="inline-block font-bold">Web Developer &nbsp;</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a eros venenatis diam tristique aliquam ultrices id purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris congue rutrum lectus, non dapibus
          ligula sagittis id. Vivamus ut faucibus nunc, sit amet porttitor nibh. Pellentesque quis eros dictum, tincidunt.
        </span>
        <span className="text-justify">
          <h1 className="inline-block font-bold">Mobile Developer &nbsp;</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a eros venenatis diam tristique aliquam ultrices id purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris congue rutrum lectus, non dapibus
          ligula sagittis id. Vivamus ut faucibus nunc, sit amet porttitor nibh. Pellentesque quis eros dictum, tincidunt.
        </span>
        <span className="text-justify">
          <h1 className="inline-block font-bold">Game Developer &nbsp;</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a eros venenatis diam tristique aliquam ultrices id purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris congue rutrum lectus, non dapibus
          ligula sagittis id. Vivamus ut faucibus nunc, sit amet porttitor nibh. Pellentesque quis eros dictum, tincidunt.
        </span>
      </div>
    </div>
  );
}
